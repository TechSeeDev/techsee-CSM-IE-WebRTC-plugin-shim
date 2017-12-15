var WebRTCProxy			= require("./WebRTCProxy.js");
var RTCIceCandidate		= require("./RTCIceCandidate.js");
var Promise			= require("promise-polyfill");
var EventTarget			= require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute	= require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;

var ThrowInvalidStateError = function() 
{
	var e = new Error("RTCPeerConnection is already closed");
	e.name = "InvalidStateError";
	throw e;
};

/*
[Constructor(optional RTCConfiguration configuration),Exposed=Window]
interface RTCPeerConnection : EventTarget {
    Promise<RTCSessionDescriptionInit> createOffer(optional RTCOfferOptions options);
    Promise<RTCSessionDescriptionInit> createAnswer(optional RTCAnswerOptions options);
    Promise<void>                      setLocalDescription(RTCSessionDescriptionInit description);

    readonly attribute RTCSessionDescription? localDescription;
    readonly attribute RTCSessionDescription? currentLocalDescription;
    readonly attribute RTCSessionDescription? pendingLocalDescription;

    Promise<void>                      setRemoteDescription(RTCSessionDescriptionInit description);

    readonly attribute RTCSessionDescription? remoteDescription;
    readonly attribute RTCSessionDescription? currentRemoteDescription;
    readonly attribute RTCSessionDescription? pendingRemoteDescription;

    Promise<void>                      addIceCandidate((RTCIceCandidateInit or RTCIceCandidate) candidate);

    readonly attribute RTCSignalingState      signalingState;
    readonly attribute RTCIceGatheringState   iceGatheringState;
    readonly attribute RTCIceConnectionState  iceConnectionState;
    readonly attribute RTCPeerConnectionState connectionState;
    readonly attribute boolean?               canTrickleIceCandidates;
    static sequence<RTCIceServer>      getDefaultIceServers();
    RTCConfiguration                   getConfiguration();
    void                               setConfiguration(RTCConfiguration configuration);
    void                               close();

	attribute EventHandler           onnegotiationneeded;
	attribute EventHandler           onicecandidate;
	attribute EventHandler           onicecandidateerror;
	attribute EventHandler           onsignalingstatechange;
	attribute EventHandler           oniceconnectionstatechange;
	attribute EventHandler           onicegatheringstatechange;
	attribute EventHandler           onconnectionstatechange;
};
*/
var RTCPeerConnection = function(configuration)
{
	var self = this;
	//Init event targetr
	EventTarget.call(this);
	
	//Create private arfs
	var priv = this.priv = {};
	
	priv.senders = {};
	priv.remoteStreams =  {};
	priv.configuration = configuration;
	priv.lastOffer  = null;
	priv.lastAnswer = null;
	priv.isClosed   = false;
	
	//Emtpy attributes
	priv.currentLocalDescription	= null;
	priv.pendingLocalDescription	= null;

	priv.currentRemoteDescription = null;
	priv.pendingRemoteDescription = null;
	
	var signalingState	= "stable";
	var iceGatheringState	= "new";
	var iceConnectionState	= "new";
	var connectionState	= "new";
	
	//TODO: Implement this
	var canTrickleIceCandidates = null;
	
	//Define read only properties for each attribute
	//The localDescription attribute must return pendingLocalDescription if it is not null and otherwise it must return currentLocalDescription .
	Object.defineProperty(this, 'localDescription'		, { enumerable: true, configurable: false, get: function() { return priv.pendingLocalDescription || priv.currentLocalDescription;	}});
	Object.defineProperty(this, 'currentLocalDescription'	, { enumerable: true, configurable: false, get: function() { return priv.currentLocalDescription;	}});
	Object.defineProperty(this, 'pendingLocalDescription'	, { enumerable: true, configurable: false, get: function() { return priv.pendingLocalDescription;	}});

	Object.defineProperty(this, 'remoteDescription'		, { enumerable: true, configurable: false, get: function() { return priv.currentRemoteDescription || priv.pendingRemoteDescription; }});
	Object.defineProperty(this, 'currentRemoteDescription'	, { enumerable: true, configurable: false, get: function() { return priv.currentRemoteDescription;	}});
	Object.defineProperty(this, 'pendingRemoteDescription'	, { enumerable: true, configurable: false, get: function() { return priv.pendingRemoteDescription;	}});

	
	Object.defineProperty(this, 'signalingState'		, { enumerable: true, configurable: false, get: function() { return signalingState;		}});
	Object.defineProperty(this, 'iceGatheringState'		, { enumerable: true, configurable: false, get: function() { return iceGatheringState;		}});
	Object.defineProperty(this, 'iceConnectionState'	, { enumerable: true, configurable: false, get: function() { return iceConnectionState;		}});
	Object.defineProperty(this, 'connectionState'		, { enumerable: true, configurable: false, get: function() { return connectionState;		}});
	
	Object.defineProperty(this, 'canTrickleIceCandidates'	, { enumerable: true, configurable: false, get: function() { return canTrickleIceCandidates;	}});
	
	function createEvent(name) {
		var e = document.createEvent("Event");
		e.initEvent(name, false, false);
		return e;
	}
	function fire(name) {
		self.dispatchEvent(createEvent(name));
	}
	
	// Create new native pc
	priv.pc = WebRTCProxy.createPeerConnection(configuration);
	
	//Event handlers
	priv.pc.onnegotiationneeded = function() {
		fire("negotiationneeded");
	};
	priv.pc.onicecandidate = function(candidate,sdpMid,sdpMLineIndex,foundation,component,priority,ip,protocol,port,type,tcpType,relatedAddress,relatedPort,usernameFragment,url) {
		var e = createEvent("icecandidate");
		if (candidate)
			e.candidate = new RTCIceCandidate(candidate,sdpMid,sdpMLineIndex,foundation,component,priority,ip,protocol,port,type,tcpType,relatedAddress,relatedPort,usernameFragment);
		else
			e.candidate = null;
		e.url = url;
		self.dispatchEvent(e);
	};
	priv.pc.onicecandidateerror = function() {
		fire("icecandidateerror");
	};
	priv.pc.onsignalingstatechange = function(state) {
		signalingState = state;
		fire("signalingstatechange");
		if ("closed"===state)
		{
			priv.isClosed = true;
			delete(priv.pc);
		}
	};	
	priv.pc.oniceconnectionstatechange = function(state) {
		iceConnectionState = state;
		fire("iceconnectionstatechange");
	};	
	priv.pc.onicegatheringstatechange = function(state) {
		iceGatheringState = state;
		fire("icegatheringstatechange");
	};	
	priv.pc.onconnectionstatechange = function(state) {
		connectionState = state;
		fire("connectionState");
	};	
	priv.pc.onaddstream = function () {
		//Parse arguments
		var label   = arguments[0];
		var tracks = Array.prototype.slice.call(arguments,1);
		var mediaStreamTracks = [];	
		
		//For each track
		for (var i = 0; i<tracks.length; ++i)
			//Create a wrapper
			mediaStreamTracks.push(new MediaStreamTrack(tracks[i]));
		
		//Create new stream
		var stream = new MediaStream(label,mediaStreamTracks);
		
		//For each track in stream
		for (var i = 0; i<mediaStreamTracks.length; ++i )
		{
			var e = createEvent("track");
			e.track = mediaStreamTracks[i];
			e.receiver =  {track: mediaStreamTracks[i]};
			e.transceiver = {receiver: e.receiver};
			e.streams = [stream];
			self.dispatchEvent(e);
		}
	};
	
	priv.pc.onremovestream = function (label) {
		//Delete from remote stream list
		delete(priv.remotes[label]);
	};
};
	
//Inherit from Event Target
RTCPeerConnection.prototype = Object.create(EventTarget.prototype, {
	constructor: { 
		value		: RTCPeerConnection, 
		configurable	: true,
		writable	: true 
	}
});
 
// Define Event Handlers
defineEventAttribute(RTCPeerConnection.prototype, "negotiationneeded");
defineEventAttribute(RTCPeerConnection.prototype, "icecandidate");
defineEventAttribute(RTCPeerConnection.prototype, "icecandidateerror");
defineEventAttribute(RTCPeerConnection.prototype, "signalingstatechange");
defineEventAttribute(RTCPeerConnection.prototype, "iceconnectionstatechange");
defineEventAttribute(RTCPeerConnection.prototype, "icegatheringstatechange");
defineEventAttribute(RTCPeerConnection.prototype, "connectionstatechange");
defineEventAttribute(RTCPeerConnection.prototype, "addtrack");

RTCPeerConnection.prototype.getConfiguration = function()
{
	return this.priv.configuration;
};

RTCPeerConnection.prototype.getDefaultIceServers = function()
{
	return [];
};

RTCPeerConnection.prototype.createOffer = function(options) 
{
	var priv = this.priv;
	
	return new Promise(function(resolve, reject) {
		if (!priv.pc || priv.isClosed)
			return ThrowInvalidStateError();
		priv.pc.createOffer(
			function(type,sdp){
				priv.lastOffer = sdp;
				resolve({
					type: type,
					sdp : sdp
				});
			},
			reject,
			options
		);
	});
};

RTCPeerConnection.prototype.createAnswer = function(options) 
{
	var priv = this.priv;
	
	return new Promise(function(resolve, reject) {
		if (!priv.pc || priv.isClosed)
			return ThrowInvalidStateError();
		priv.pc.createAnswer(
			function(type,sdp){
				priv.lastAnswer = sdp;
				resolve({
					type: type,
					sdp : sdp
				});
			},
			reject,
			options
		);
	});
};

RTCPeerConnection.prototype.setLocalDescription = function(description)
{
	var priv = this.priv;
	
	//If description.sdp is the empty string and description.type is "answer" or "pranswer", set description.sdp to lastAnswer.
	if (!description.sdp &&  ("answer"=== description.type || "pranser"===description.type))
		description.sdp = priv.lastAnswer;
	
	//If description.sdp is the empty string and description.type is "offer", set description.sdp to lastOffer.
	if (!description.sdp && "offer"=== description.type)
		description.sdp = priv.lastOffer;
	
	return new Promise(function(resolve, reject) {
		if (!priv.pc || priv.isClosed)
			return ThrowInvalidStateError();
		priv.pc.setLocalDescription(function() {
			//If description is applied successfully:
			switch(description.type)
			{
				case "offer":
					//If description is of type "offer", set connection.pendingLocalDescription to description and signaling state to "have-local-offer".
					priv.pendingLocalDescription	= description;
					break;
				case "answer":
					//If description is of type "answer", then this completes an offer answer negotiation. 
					//Set connection's currentLocalDescription to description and currentRemoteDescription to the value of pendingRemoteDescription . 
					//Set both pendingRemoteDescription and pendingLocalDescription to null. Finally set connection's signaling state to "stable"
					priv.currentLocalDescription	= description;
					priv.currentRemoteDescription	= priv.pendingRemoteDescription;
					priv.pendingLocalDescription	= null;
					priv.pendingRemoteDescription	= null;
					break;
				case "rollback":
					//If description is of type "rollback", then this is a rollback. Set connection.pendingLocalDescription to null and signaling state to "stable".
					priv.pendingLocalDescription	= null;
					break;
				case "pranswer":
					//If description is of type "pranswer", then set connection.pendingLocalDescription to description and signaling state to "have-local-pranswer".
					priv.pendingLocalDescription	= description;
					break;
			}
			//Resolve promiose
			resolve();
		},reject,description);
	});
};

RTCPeerConnection.prototype.setRemoteDescription = function(description)
{
	var priv = this.priv;
	
	return new Promise(function(resolve, reject) {
		if (!priv.pc || priv.isClosed)
			return ThrowInvalidStateError();
		priv.pc.setRemoteDescription(function() {
			//If description is applied successfully:
			switch(description.type)
			{
				case "offer":
					//If description is of type "offer", set connection.pendingRemoteDescription attribute to description and signaling state to "have-remote-offer".
					priv.pendingRemoteDescription	= description;
					break;
				case "answer":
					//If description is of type "answer", then this completes an offer answer negotiation. 
					//Set connection's currentRemoteDescription to description and currentLocalDescription to the value of pendingLocalDescription . 
					//Set both pendingRemoteDescription and pendingLocalDescription to null. Finally set connection's signaling state to "stable"
					priv.currentRemoteDescription	= description;
					priv.currentLocalDescription	= priv.pendingLocalDescription;
					priv.pendingLocalDescription	= null;
					priv.pendingRemoteDescription	= null;
					break;
				case "rollback":
					//If description is of type "rollback", then this is a rollback. Set connection.pendingRemoteDescription to null and signaling state to "stable".
					priv.pendingRemoteDescription	= null;
					break;
				case "pranswer":
					//If description is of type "pranswer", then set connection.pendingRemoteDescription to description and signaling state to "have-remote-pranswer".
					priv.pendingRemoteDescription	= description;
					break;
			}
			//Resolve promiose
			resolve();
		},reject,description);
	});
};

RTCPeerConnection.prototype.addIceCandidate = function(candidate) 
{
	var priv = this.priv;
	
	return new Promise(function(resolve, reject) {
		if (!priv.pc || priv.isClosed)
			return ThrowInvalidStateError();
		priv.pc.addIceCandidate(function(current,pending) {
			//Update current remote description sdp
			if (priv.currentRemoteDescriptiont)
			{
				if (current.length)
					priv.currentRemoteDescriptiont.sdp = current;
				else
					priv.currentRemoteDescriptiont.sdp = null;
			}
			//Update pending remote description sdp
			if (priv.pendingRemoteDescription)
			{
				if (pending.length)
					priv.pendingRemoteDescription.sdp = pending;
				else
					priv.pendingRemoteDescription.sdp = null;
			}
			//Resolve promise
			resolve();
		},reject,candidate);
	});
};

RTCPeerConnection.prototype.close = function()
{

	var priv = this.priv;
	if (!priv.pc || priv.isClosed)
		return ThrowInvalidStateError();
	//Close it
	priv.pc.close();
};
/*
partial interface RTCPeerConnection {
    sequence<RTCRtpSender>      getSenders();
    sequence<RTCRtpReceiver>    getReceivers();
    sequence<RTCRtpTransceiver> getTransceivers();
    RTCRtpSender                addTrack(MediaStreamTrack track, MediaStream... streams);
    void                        removeTrack(RTCRtpSender sender);
    RTCRtpTransceiver           addTransceiver((MediaStreamTrack or DOMString) trackOrKind, optional RTCRtpTransceiverInit init);
    attribute EventHandler ontrack;
};
*/
RTCPeerConnection.prototype.addTrack = function()
{
	var priv = this.priv;
	
	if (!priv.pc || priv.isClosed)
		return ThrowInvalidStateError();
	
	//Parse arguments
	var track   = arguments[0];
	var streams = Array.prototype.slice.call(arguments,1);
	
	//Ensure that we are attaching to at most 1, as it is not supported in libwebrtc
	if (streams.length>1)
		throw new Error("Adding track to more than one stream is not currently supported");
	
	//Get stream label, as it is the only param needed by libwebrtc
	var label = streams.length>1 ? streams[0].label : "";
	
	//Add native track to native object it only needs the stream label not the stream
	var sender = priv.pc.addTrack(track.priv.track, label);
	
	//Check result
	if (!sender)
		return null;
	
	//Create sender
	var rtpSender = new RTCRtpSender(sender);
	
	//Get native sender id
	var senderId = rtpSender.priv.id;
	
	//Add to senders
	priv.senders[senderId] = rtpSender;
	
	return rtpSender;
};

RTCPeerConnection.prototype.addStream = function(stream)
{
	var tracks = stream.getTracks();
	for (var i=0; i<tracks.length; ++i)
		this.addTrack(tracks[i],stream);
};

RTCPeerConnection.prototype.removeTrack = function(rtpSender)
{
	var priv = this.priv;
	
	if (!priv.pc || priv.isClosed)
		return ThrowInvalidStateError();
	
	//Check if sender is invalid
	if (!rtpSender || !rtpSender.priv.sender || !rtpSender.priv.track)
		return ThrowInvalidStateError();
	
	//Get native sender id
	var senderId = rtpSender.priv.id;
	
	//Check if senders is from this pc
	if (!priv.senders.hasOwnProperty(senderId))
		return ThrowInvalidStateError();
		
	//Pass the nateive object
	priv.pc.removeTrack(rtpSender.priv.sender);
	
	//Set sender track to null
	rtpSender.priv.track = null;
	
	//Remove from senders
	delete(priv.senders[senderId]);
};

defineEventAttribute(RTCPeerConnection.prototype, "track");

module.exports = RTCPeerConnection;