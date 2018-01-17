(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.webrtcIeShim = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// TODO: Check if we are in correct IE version

// Add objects to global
var MediaDevices = require("./lib/MediaDevices.js");
var VideoRenderer = require("./lib/VideoRenderer.js");
navigator.mediaDevices = new MediaDevices();

window.RTCPeerConnection = require("./lib/RTCPeerConnection.js");
window.RTCSessionDescription = require("./lib/RTCSessionDescription.js");
window.RTCIceCandidate = require("./lib/RTCIceCandidate.js");
window.MediaStream = require("./lib/MediaStream.js");
window.MediaStreamTrack = require("./lib/MediaStreamTrack.js");
window.Promise = require("promise-polyfill");

function checkNewNode(node) {
	//If it is a video element
	if (node.nodeName === 'video')
		// Observe changes in the video element
		return VideoRenderer.handle(node);
	//Look in childs
	for (var j = 0; j < node.childNodes.length; j++) {
		checkNewNode(node.childNodes.item(j));
	}
}

function checkRemovedNode(node) {
	//If it is a video element
	if (node.nodeName === 'video') return VideoRenderer.unhandle(node);
	//Look in childs
	for (var j = 0; j < node.childNodes.length; j++) {
		checkRemovedNode(node.childNodes.item(j));
	}
}

// DOM mutation observer to check when a new video element has been added to the DOM
var domObserver = new MutationObserver(function (mutations) {
	for (var i = 0, numMutations = mutations.length; i < numMutations; i++) {
		var mutation = mutations[i];

		// Check if there has been addition or deletion of nodes
		if (mutation.type !== 'childList') continue;

		// Check added nodes.
		for (var j = 0, numNodes = mutation.addedNodes.length; j < numNodes; j++) {
			//Check node recursively
			checkNewNode(mutation.addedNodes[j]);
		} // Check removed nodes.
		for (j = 0, numNodes = mutation.removedNodes.length; j < numNodes; j++) {
			//Check node recursively
			checkRemovedNode(mutation.removedNodes[j]);
		}
	}
});

//Get all video elements already present
var videos = document.getElementsByTagName("video");

//Handle them
for (var i = 0; i < videos.length; ++i) {
	VideoRenderer.handle(videos[i]);
}

},{"./lib/MediaDevices.js":3,"./lib/MediaStream.js":4,"./lib/MediaStreamTrack.js":5,"./lib/RTCIceCandidate.js":6,"./lib/RTCPeerConnection.js":7,"./lib/RTCSessionDescription.js":9,"./lib/VideoRenderer.js":10,"promise-polyfill":13}],2:[function(require,module,exports){
"use strict";

var EventTarget = require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute = require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;

/*
 interface RTCDataChannel : EventTarget {
    readonly attribute USVString           label;
    readonly attribute boolean             ordered;
    readonly attribute unsigned short?     maxPacketLifeTime;
    readonly attribute unsigned short?     maxRetransmits;
    readonly attribute USVString           protocol;
    readonly attribute boolean             negotiated;
    readonly attribute unsigned short?     id;
    readonly attribute RTCPriorityType     priority;
    readonly attribute RTCDataChannelState readyState;
    readonly attribute unsigned long       bufferedAmount;
             attribute unsigned long       bufferedAmountLowThreshold;
             attribute EventHandler        onopen;
             attribute EventHandler        onbufferedamountlow;
             attribute EventHandler        onerror;
             attribute EventHandler        onclose;
    void close();
             attribute EventHandler        onmessage;
             attribute DOMString           binaryType;
    void send(USVString data);
    void send(Blob data);
    void send(ArrayBuffer data);
    void send(ArrayBufferView data);
};
 */
var DataChannel = function DataChannel(dataChannel) {
  //Init event targetr
  EventTarget.call(this);

  //Private vars
  var priv = this.priv = {
    dataChannel: dataChannel
  };

  //Object.defineProperty(this, 'label'	, { enumerable: true, configurable: false, get: function(){ return priv.track.kind;	}});

  return this;
};

//Inherit from Event Target
DataChannel.prototype = Object.create(EventTarget.prototype, {
  constructor: {
    value: DataChannel,
    configurable: true,
    writable: true
  }
});

// Define Event Handlers
defineEventAttribute(DataChannel.prototype, "open");
defineEventAttribute(DataChannel.prototype, "bufferedamountlow");
defineEventAttribute(DataChannel.prototype, "error");
defineEventAttribute(DataChannel.prototype, "close");
defineEventAttribute(DataChannel.prototype, "message");

DataChannel.prototype.send = function (data) {};

DataChannel.prototype.close = function () {};

module.exports = DataChannel;

},{"event-target-shim/dist/event-target-shim.umd.js":12}],3:[function(require,module,exports){
"use strict";

var WebRTCProxy = require("./WebRTCProxy.js");
var MediaStream = require("./MediaStream.js");
var Promise = require("promise-polyfill");
var EventTarget = require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute = require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;

/*
	interface MediaDevices : EventTarget {
		attribute EventHandler ondevicechange;
		Promise<sequence<MediaDeviceInfo>> enumerateDevices();
	}

	partial interface MediaDevices {
		MediaTrackSupportedConstraints getSupportedConstraints();
		Promise<MediaStream>           getUserMedia(optional MediaStreamConstraints constraints);
	}
*/
var MediaDevices = function MediaDevices() {
	//Init event targetr
	EventTarget.call(this);
};

//Inherit from Event Target
MediaDevices.prototype = Object.create(EventTarget.prototype, {
	constructor: {
		value: MediaDevices,
		configurable: true,
		writable: true
	}
});

// Define Event Handlers
defineEventAttribute(MediaDevices.prototype, "devicechange");

MediaDevices.prototype.enumerateDevices = function () {
	throw "Not supported yet";

	return new Promise(function (resolve, reject) {
		resolve([]);
	});
};

MediaDevices.prototype.getSupportedConstraints = function () {
	throw "Not supported yet";
};

MediaDevices.prototype.getUserMedia = function (constraints) {
	return new Promise(function (resolve, reject) {
		var stream = new MediaStream();
		//If we are being requested audio
		if (constraints.audio) {
			var options = {};
			//Get new track
			var track = WebRTCProxy.createLocalAudioTrack(options);
			//Add it to the stream
			stream.addTrack(new MediaStreamTrack(track));
		}
		//If we are being requested video
		if (constraints.video) {
			var options = {};
			//Get new track
			var track = WebRTCProxy.createLocalVideoTrack(options);
			//Add it to the stream
			stream.addTrack(new MediaStreamTrack(track));
		}
		//Done
		resolve(stream);
	});
};

module.exports = MediaDevices;

},{"./MediaStream.js":4,"./WebRTCProxy.js":11,"event-target-shim/dist/event-target-shim.umd.js":12,"promise-polyfill":13}],4:[function(require,module,exports){
"use strict";

var EventTarget = require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute = require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;
/*
[Exposed=Window,
 Constructor,
 Constructor(MediaStream stream),
 Constructor(sequence<MediaStreamTrack> tracks)]
interface MediaStream : EventTarget {
    readonly attribute DOMString    id;
    sequence<MediaStreamTrack> getAudioTracks();
    sequence<MediaStreamTrack> getVideoTracks();
    sequence<MediaStreamTrack> getTracks();
    MediaStreamTrack?          getTrackById(DOMString trackId);
    void                       addTrack(MediaStreamTrack track);
    void                       removeTrack(MediaStreamTrack track);
    MediaStream                clone();
    readonly attribute boolean      active;
             attribute EventHandler onaddtrack;
             attribute EventHandler onremovetrack;
}; 
 */
var count = 0;

var MediaStream = function MediaStream(label, tracks) {
	//Init event targetr
	EventTarget.call(this);

	//Private vars
	this.priv = {
		tracks: {}
	};

	//Add input tracks to our map
	if (tracks) for (var i = 0; i < tracks.length; ++i) {
		this.priv.tracks[tracks[i].id] = tracks[i];
	}var id = label || "stream-" + count++;

	Object.defineProperty(this, 'id', { enumerable: true, configurable: false, writable: false, value: id });
	Object.defineProperty(this, 'active', { enumerable: true, configurable: false, writable: false, value: true });

	return this;
};

//Inherit from Event Target
MediaStream.prototype = Object.create(EventTarget.prototype, {
	constructor: {
		value: MediaStream,
		configurable: true,
		writable: true
	}
});

// Define Event Handlers
defineEventAttribute(MediaStream.prototype, "addtrack");
defineEventAttribute(MediaStream.prototype, "removetrack");

MediaStream.prototype.getAudioTracks = function () {
	var arr = [];
	for (var id in this.priv.tracks) {
		if (this.priv.tracks[id].kind === "audio") arr.push(this.priv.tracks[id]);
	}return arr;
};

MediaStream.prototype.getVideoTracks = function () {
	var arr = [];
	for (var id in this.priv.tracks) {
		if (this.priv.tracks[id].kind === "video") arr.push(this.priv.tracks[id]);
	}return arr;
};

MediaStream.prototype.getTracks = function () {
	var arr = [];
	for (var id in this.priv.tracks) {
		arr.push(this.priv.tracks[id]);
	}return arr;
};

MediaStream.prototype.getTrackById = function (id) {
	return this.priv.tracks[id];
};

MediaStream.prototype.addTrack = function (track) {
	//Check if already present
	if (this.priv.tracks.hasOwnProperty(track.id)) return;
	//Add to track
	this.priv.tracks[track.id] = track;
	//Create event
	var event = document.createEvent("Event");
	event.initEvent("addtrack", false, false);
	event.track = track;
	//Fire it
	this.dispatchEvent(event);
};

MediaStream.prototype.removeTrack = function (track) {
	//Check if it is notalready present
	if (!this.priv.tracks.hasOwnProperty(track.id)) return;
	//Add to track
	delete this.priv.tracks[track.id];
	//Create event
	var event = document.createEvent("Event");
	event.initEvent("removetrack", false, false);
	event.track = track;
	//Fire it
	this.dispatchEvent(event);
};

MediaStream.prototype.clone = function () {
	return new MediaStream(this.getTracks());
};

module.exports = MediaStream;

},{"event-target-shim/dist/event-target-shim.umd.js":12}],5:[function(require,module,exports){
"use strict";

var EventTarget = require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute = require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;
/*
[Exposed=Window]
interface MediaStreamTrack : EventTarget {
    readonly attribute DOMString             kind;
    readonly attribute DOMString             id;
    readonly attribute DOMString             label;
             attribute boolean               enabled;
    readonly attribute boolean               muted;
             attribute EventHandler          onmute;
             attribute EventHandler          onunmute;
    readonly attribute MediaStreamTrackState readyState;
             attribute EventHandler          onended;
    MediaStreamTrack       clone();
    void                   stop();
    MediaTrackCapabilities getCapabilities();
    MediaTrackConstraints  getConstraints();
    MediaTrackSettings     getSettings();
    Promise<void>          applyConstraints(optional MediaTrackConstraints constraints);
             attribute EventHandler          onoverconstrained;
};
*/
var MediaStreamTrack = function MediaStreamTrack(track) {
	//Init event targetr
	EventTarget.call(this);

	//Private vars
	var priv = this.priv = {
		track: track,
		muted: false
	};

	Object.defineProperty(this, 'kind', { enumerable: true, configurable: false, get: function get() {
			return priv.track.kind;
		} });
	Object.defineProperty(this, 'id', { enumerable: true, configurable: false, get: function get() {
			return priv.track.id;
		} });
	Object.defineProperty(this, 'label', { enumerable: true, configurable: false, get: function get() {
			return priv.track.id;
		} });
	Object.defineProperty(this, 'enabled', { enumerable: true, configurable: false, get: function get() {
			return priv.track.enabled;
		}, set: function set(enabled) {
			priv.track.enabled = !!enabled;
		} });
	Object.defineProperty(this, 'muted', { enumerable: true, configurable: false, get: function get() {
			return priv.muted;
		} });
	Object.defineProperty(this, 'readyState', { enumerable: true, configurable: false, get: function get() {
			return priv.track.state;
		} });

	return this;
};

//Inherit from Event Target
MediaStreamTrack.prototype = Object.create(EventTarget.prototype, {
	constructor: {
		value: MediaStreamTrack,
		configurable: true,
		writable: true
	}
});

// Define Event Handlers
//TODO: fire them somehow
defineEventAttribute(MediaStreamTrack.prototype, "mute");
defineEventAttribute(MediaStreamTrack.prototype, "unmute");
defineEventAttribute(MediaStreamTrack.prototype, "ended");

MediaStreamTrack.prototype.clone = function () {
	return null;
};

MediaStreamTrack.prototype.stop = function () {
	this.priv.track.stop();
};

MediaStreamTrack.prototype.getCapabilities = function () {};

MediaStreamTrack.prototype.getConstraints = function () {};

MediaStreamTrack.prototype.getSettings = function () {};

MediaStreamTrack.prototype.applyConstraints = function () {};

module.exports = MediaStreamTrack;

},{"event-target-shim/dist/event-target-shim.umd.js":12}],6:[function(require,module,exports){
"use strict";

var WebRTCProxy = require("./WebRTCProxy.js");
/*
interface RTCIceCandidate {
    readonly attribute DOMString               candidate;
    readonly attribute DOMString?              sdpMid;
    readonly attribute unsigned short?         sdpMLineIndex;
    readonly attribute DOMString?              foundation;
    readonly attribute RTCIceComponent?        component;
    readonly attribute unsigned long?          priority;
    readonly attribute DOMString?              ip;
    readonly attribute RTCIceProtocol?         protocol;
    readonly attribute unsigned short?         port;
    readonly attribute RTCIceCandidateType?    type;
    readonly attribute RTCIceTcpCandidateType? tcpType;
    readonly attribute DOMString?              relatedAddress;
    readonly attribute unsigned short?         relatedPort;
    readonly attribute DOMString?              usernameFragment;
    RTCIceCandidateInit toJSON();
};
 */
var RTCIceCandidate = function RTCIceCandidate(iceCandidateInit) {
	//Get values from dictionary
	var candidate = iceCandidateInit.candidate;
	var sdpMid = iceCandidateInit.sdpMid;
	var sdpMLineIndex = iceCandidateInit.sdpMLineIndex;
	var usernameFragment = iceCandidateInit.usernameFragment;
	//Not set yet
	var foundation;
	var component;
	var priority;
	var ip;
	var protocol;
	var port;
	var type;
	var tcpType;
	var relatedAddress;
	var relatedPort;

	//Extended attributes to avoid parsing it twice
	if (iceCandidateInit.ext) {
		foundation = iceCandidateInit.ext.foundation;
		component = iceCandidateInit.ext.component;
		priority = iceCandidateInit.ext.priority;
		ip = iceCandidateInit.ext.ip;
		protocol = iceCandidateInit.ext.protocol;
		port = iceCandidateInit.ext.port;
		type = iceCandidateInit.ext.type;
		tcpType = iceCandidateInit.ext.tcpType;
		relatedAddress = iceCandidateInit.ext.relatedAddress;
		relatedPort = iceCandidateInit.ext.relatedPort;
	} else {
		try {
			//Parse candidate
			var parsed = WebRTCProxy.parseIceCandidate(candidate);
		} catch (e) {
			throw new OperationError(e);
		}
		//Set parsed properties
		foundation = parsed[0];
		component = parsed[1];
		priority = parsed[2];
		ip = parsed[3];
		protocol = parsed[4];
		port = parsed[5];
		type = parsed[6];
		tcpType = parsed[7];
		relatedAddress = parsed[8];
		relatedPort = parsed[9];
		if (!usernameFragment) usernameFragment = parsed[10];
	}

	//Direct attributes from init
	Object.defineProperty(this, "candidate", { enumerable: true, configurable: false, get: function get() {
			return candidate;
		} });
	Object.defineProperty(this, "sdpMid", { enumerable: true, configurable: false, get: function get() {
			return sdpMid;
		} });
	Object.defineProperty(this, "sdpMLineIndex", { enumerable: true, configurable: false, get: function get() {
			return sdpMLineIndex;
		} });
	Object.defineProperty(this, "foundation", { enumerable: true, configurable: false, get: function get() {
			return foundation;
		} });
	Object.defineProperty(this, "component", { enumerable: true, configurable: false, get: function get() {
			return component;
		} });
	Object.defineProperty(this, "priority", { enumerable: true, configurable: false, get: function get() {
			return priority;
		} });
	Object.defineProperty(this, "ip", { enumerable: true, configurable: false, get: function get() {
			return ip;
		} });
	Object.defineProperty(this, "protocol", { enumerable: true, configurable: false, get: function get() {
			return protocol;
		} });
	Object.defineProperty(this, "port", { enumerable: true, configurable: false, get: function get() {
			return port;
		} });
	Object.defineProperty(this, "type", { enumerable: true, configurable: false, get: function get() {
			return type;
		} });
	Object.defineProperty(this, "tcpType", { enumerable: true, configurable: false, get: function get() {
			return tcpType;
		} });
	Object.defineProperty(this, "relatedAddress", { enumerable: true, configurable: false, get: function get() {
			return relatedAddress;
		} });
	Object.defineProperty(this, "relatedPort", { enumerable: true, configurable: false, get: function get() {
			return relatedPort;
		} });
	Object.defineProperty(this, "usernameFragment", { enumerable: true, configurable: false, get: function get() {
			return usernameFragment;
		} });

	return this;
};

RTCIceCandidate.prototype.toJSON = function () {
	return {
		candidate: this.candidate,
		sdpMid: this.sdpMid,
		sdpMLineIndex: this.sdpMLineIndex,
		usernameFragment: this.usernameFragment
	};
};

module.exports = RTCIceCandidate;

},{"./WebRTCProxy.js":11}],7:[function(require,module,exports){
"use strict";

var WebRTCProxy = require("./WebRTCProxy.js");
var RTCSessionDescription = require("./RTCSessionDescription.js");
var RTCIceCandidate = require("./RTCIceCandidate.js");
var RTCRtpSender = require("./RTCRtpSender.js");
var DataChannel = require("./DataChannel.js");
var Promise = require("promise-polyfill");
var EventTarget = require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute = require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;

function newInvalidStateError() {
	try {
		var xhr = new XMLHttpRequest();
		xhr.responseType = "blob";
	} catch (e) {
		return e;
	}
}

function ThrowInvalidStateError() {
	throw newInvalidStateError();
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
var RTCPeerConnection = function RTCPeerConnection() {
	var self = this;
	//Init event targetr
	EventTarget.call(this);

	//Create private arfs
	var priv = this.priv = {};

	priv.senders = {};
	priv.remoteStreams = {};
	priv.configuration = arguments[0] || {};
	priv.lastOffer = null;
	priv.lastAnswer = null;
	priv.isClosed = false;

	//Emtpy attributes
	priv.currentLocalDescription = null;
	priv.pendingLocalDescription = null;

	priv.currentRemoteDescription = null;
	priv.pendingRemoteDescription = null;

	var signalingState = "stable";
	var iceGatheringState = "new";
	var iceConnectionState = "new";
	var connectionState = "new";

	//TODO: Implement this
	var canTrickleIceCandidates = null;

	//Define read only properties for each attribute
	//The localDescription attribute must return pendingLocalDescription if it is not null and otherwise it must return currentLocalDescription .
	Object.defineProperty(this, 'localDescription', { enumerable: true, configurable: false, get: function get() {
			return priv.pendingLocalDescription || priv.currentLocalDescription;
		} });
	Object.defineProperty(this, 'currentLocalDescription', { enumerable: true, configurable: false, get: function get() {
			return priv.currentLocalDescription;
		} });
	Object.defineProperty(this, 'pendingLocalDescription', { enumerable: true, configurable: false, get: function get() {
			return priv.pendingLocalDescription;
		} });

	Object.defineProperty(this, 'remoteDescription', { enumerable: true, configurable: false, get: function get() {
			return priv.currentRemoteDescription || priv.pendingRemoteDescription;
		} });
	Object.defineProperty(this, 'currentRemoteDescription', { enumerable: true, configurable: false, get: function get() {
			return priv.currentRemoteDescription;
		} });
	Object.defineProperty(this, 'pendingRemoteDescription', { enumerable: true, configurable: false, get: function get() {
			return priv.pendingRemoteDescription;
		} });

	Object.defineProperty(this, 'signalingState', { enumerable: true, configurable: false, get: function get() {
			return signalingState;
		} });
	Object.defineProperty(this, 'iceGatheringState', { enumerable: true, configurable: false, get: function get() {
			return iceGatheringState;
		} });
	Object.defineProperty(this, 'iceConnectionState', { enumerable: true, configurable: false, get: function get() {
			return iceConnectionState;
		} });
	Object.defineProperty(this, 'connectionState', { enumerable: true, configurable: false, get: function get() {
			return connectionState;
		} });

	Object.defineProperty(this, 'canTrickleIceCandidates', { enumerable: true, configurable: false, get: function get() {
			return canTrickleIceCandidates;
		} });

	function createEvent(name) {
		var e = document.createEvent("Event");
		e.initEvent(name, false, false);
		return e;
	}
	function fire(name) {
		self.dispatchEvent(createEvent(name));
	}

	// Create new native pc
	priv.pc = WebRTCProxy.createPeerConnection(priv.configuration);

	//Event handlers
	priv.pc.onnegotiationneeded = function () {
		fire("negotiationneeded");
	};
	priv.pc.onicecandidate = function (candidate, sdpMid, sdpMLineIndex, foundation, component, priority, ip, protocol, port, type, tcpType, relatedAddress, relatedPort, usernameFragment, url) {
		var e = createEvent("icecandidate");
		if (candidate) e.candidate = new RTCIceCandidate({
			candidate: candidate,
			sdp: sdpMid,
			sdpMLineIndex: sdpMLineIndex,
			ext: {
				foundation: foundation,
				component: component,
				priority: priority,
				ip: ip,
				protocol: protocol,
				port: port,
				type: type,
				tcpType: tcpType,
				relatedAddress: relatedAddress,
				relatedPort: relatedPort
			},
			usernameFragment: usernameFragment
		});else e.candidate = null;
		e.url = url;
		self.dispatchEvent(e);
	};
	priv.pc.onicecandidateerror = function () {
		fire("icecandidateerror");
	};
	priv.pc.onsignalingstatechange = function (state) {
		signalingState = state;
		fire("signalingstatechange");
		if ("closed" === state) {
			priv.isClosed = true;
			delete priv.pc;
		}
	};
	priv.pc.oniceconnectionstatechange = function (state) {
		iceConnectionState = state;
		fire("iceconnectionstatechange");
	};
	priv.pc.onicegatheringstatechange = function (state) {
		iceGatheringState = state;
		fire("icegatheringstatechange");
	};
	priv.pc.onconnectionstatechange = function (state) {
		connectionState = state;
		fire("connectionState");
	};
	priv.pc.onaddstream = function (label) {
		//Create new stream
		var stream = new MediaStream(label);

		//Get remote stream tracks
		priv.pc.getRemoteStreamTracks(label, function () {
			//Parse arguments
			var tracks = Array.prototype.slice.call(arguments, 0);

			//For each track
			for (var i = 0; i < tracks.length; ++i) {
				//Create a wrapper
				stream.addTrack(new MediaStreamTrack(tracks[i]));
			} //Get all tracks
			var mediaStreamTracks = stream.getTracks();

			//For each track in stream
			for (var i = 0; i < mediaStreamTracks.length; ++i) {
				var e = createEvent("track");
				e.track = mediaStreamTracks[i];
				e.receiver = { track: mediaStreamTracks[i] };
				e.transceiver = { receiver: e.receiver };
				e.streams = [stream];
				self.dispatchEvent(e);
			}
		});
	};

	priv.pc.onremovestream = function (label) {
		//Delete from remote stream list
		delete priv.remotes[label];
	};
};

//Inherit from Event Target
RTCPeerConnection.prototype = Object.create(EventTarget.prototype, {
	constructor: {
		value: RTCPeerConnection,
		configurable: true,
		writable: true
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

RTCPeerConnection.prototype.getConfiguration = function () {
	return this.priv.configuration;
};

RTCPeerConnection.prototype.getDefaultIceServers = function () {
	return [];
};

RTCPeerConnection.prototype.createOffer = function (options) {
	var priv = this.priv;

	return new Promise(function (resolve, reject) {
		if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();
		priv.pc.createOffer(function (type, sdp) {
			priv.lastOffer = sdp;
			resolve(new RTCSessionDescription({
				type: type,
				sdp: sdp
			}));
		}, reject, options);
	});
};

RTCPeerConnection.prototype.createAnswer = function (options) {
	var priv = this.priv;

	return new Promise(function (resolve, reject) {
		if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();
		priv.pc.createAnswer(function (type, sdp) {
			priv.lastAnswer = sdp;
			resolve(new RTCSessionDescription({
				type: type,
				sdp: sdp
			}));
		}, reject, options);
	});
};

RTCPeerConnection.prototype.setLocalDescription = function (description) {
	var priv = this.priv;

	//If description.sdp is the empty string and description.type is "answer" or "pranswer", set description.sdp to lastAnswer.
	if (!description.sdp && ("answer" === description.type || "pranser" === description.type)) description.sdp = priv.lastAnswer;

	//If description.sdp is the empty string and description.type is "offer", set description.sdp to lastOffer.
	if (!description.sdp && "offer" === description.type) description.sdp = priv.lastOffer;

	return new Promise(function (resolve, reject) {
		if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();
		priv.pc.setLocalDescription(function () {
			//If description is applied successfully:
			switch (description.type) {
				case "offer":
					//If description is of type "offer", set connection.pendingLocalDescription to description and signaling state to "have-local-offer".
					priv.pendingLocalDescription = description;
					break;
				case "answer":
					//If description is of type "answer", then this completes an offer answer negotiation. 
					//Set connection's currentLocalDescription to description and currentRemoteDescription to the value of pendingRemoteDescription . 
					//Set both pendingRemoteDescription and pendingLocalDescription to null. Finally set connection's signaling state to "stable"
					priv.currentLocalDescription = description;
					priv.currentRemoteDescription = priv.pendingRemoteDescription;
					priv.pendingLocalDescription = null;
					priv.pendingRemoteDescription = null;
					break;
				case "rollback":
					//If description is of type "rollback", then this is a rollback. Set connection.pendingLocalDescription to null and signaling state to "stable".
					priv.pendingLocalDescription = null;
					break;
				case "pranswer":
					//If description is of type "pranswer", then set connection.pendingLocalDescription to description and signaling state to "have-local-pranswer".
					priv.pendingLocalDescription = description;
					break;
			}
			//Resolve promiose
			resolve();
		}, reject, description);
	});
};

RTCPeerConnection.prototype.setRemoteDescription = function (description) {
	var priv = this.priv;

	return new Promise(function (resolve, reject) {
		if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();
		priv.pc.setRemoteDescription(function () {
			//If description is applied successfully:
			switch (description.type) {
				case "offer":
					//If description is of type "offer", set connection.pendingRemoteDescription attribute to description and signaling state to "have-remote-offer".
					priv.pendingRemoteDescription = description;
					break;
				case "answer":
					//If description is of type "answer", then this completes an offer answer negotiation. 
					//Set connection's currentRemoteDescription to description and currentLocalDescription to the value of pendingLocalDescription . 
					//Set both pendingRemoteDescription and pendingLocalDescription to null. Finally set connection's signaling state to "stable"
					priv.currentRemoteDescription = description;
					priv.currentLocalDescription = priv.pendingLocalDescription;
					priv.pendingLocalDescription = null;
					priv.pendingRemoteDescription = null;
					break;
				case "rollback":
					//If description is of type "rollback", then this is a rollback. Set connection.pendingRemoteDescription to null and signaling state to "stable".
					priv.pendingRemoteDescription = null;
					break;
				case "pranswer":
					//If description is of type "pranswer", then set connection.pendingRemoteDescription to description and signaling state to "have-remote-pranswer".
					priv.pendingRemoteDescription = description;
					break;
			}
			//Resolve promiose
			resolve();
		}, reject, description);
	});
};

RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
	var priv = this.priv;

	return new Promise(function (resolve, reject) {
		if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();
		if (!candidate) throw new TypeError();

		//We dont't support signaling end of candidates
		if (!candidate.candidate)
			//But we do not fail
			return resolve();

		//Reject with type error if no sdpMid and sdpMLineIndex
		if (!candidate.sdpMid && !candidate.sdpMLineIndex) throw new TypeError();

		//Add ICE candidate nativelly
		priv.pc.addIceCandidate(function (current, pending) {
			//Update current remote description sdp
			if (priv.currentRemoteDescriptiont) {
				if (current.length) priv.currentRemoteDescriptiont.sdp = current;else priv.currentRemoteDescriptiont.sdp = null;
			}
			//Update pending remote description sdp
			if (priv.pendingRemoteDescription) {
				if (pending.length) priv.pendingRemoteDescription.sdp = pending;else priv.pendingRemoteDescription.sdp = null;
			}
			//Resolve promise
			resolve();
		}, function (e) {
			//Reject with invalid state error
			reject(newInvalidStateError(e));
		}, candidate);
	});
};

RTCPeerConnection.prototype.close = function () {

	var priv = this.priv;
	if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();
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
RTCPeerConnection.prototype.addTrack = function () {
	var priv = this.priv;

	if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();

	//Parse arguments
	var track = arguments[0];
	var streams = Array.prototype.slice.call(arguments, 1);

	//Ensure that we are attaching to at most 1, as it is not supported in libwebrtc
	if (streams.length > 1) throw new Error("Adding track to more than one stream is not currently supported");

	//Get stream label, as it is the only param needed by libwebrtc
	var label = streams.length ? streams[0].id : "";

	//Add native track to native object it only needs the stream label not the stream
	var sender = priv.pc.addTrack(track.priv.track, label);

	//Check result
	if (!sender) return null;

	//Create sender
	var rtpSender = new RTCRtpSender(sender);

	//Get native sender id
	var senderId = rtpSender.priv.id;

	//Add to senders
	priv.senders[senderId] = rtpSender;

	return rtpSender;
};

RTCPeerConnection.prototype.addStream = function (stream) {
	var tracks = stream.getTracks();
	for (var i = 0; i < tracks.length; ++i) {
		this.addTrack(tracks[i], stream);
	}
};

RTCPeerConnection.prototype.removeTrack = function (rtpSender) {
	var priv = this.priv;

	if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();

	//Check if sender is invalid
	if (!rtpSender || !rtpSender.priv.sender || !rtpSender.priv.track) return ThrowInvalidStateError();

	//Get native sender id
	var senderId = rtpSender.priv.id;

	//Check if senders is from this pc
	if (!priv.senders.hasOwnProperty(senderId)) return ThrowInvalidStateError();

	//Pass the nateive object
	priv.pc.removeTrack(rtpSender.priv.sender);

	//Set sender track to null
	rtpSender.priv.track = null;

	//Remove from senders
	delete priv.senders[senderId];
};

RTCPeerConnection.prototype.createDataChannel = function (label, dataChannelDict) {
	var priv = this.priv;

	if (!priv.pc || priv.isClosed) return ThrowInvalidStateError();

	if (!label) return new TypeError();

	//Create native datachannel
	var dataChannel = priv.pc.createDataChannel(label, dataChannelDict);

	//Check
	if (!dataChannel) return null;

	//Return wrapper
	return new DataChannel(dataChannel);
};

defineEventAttribute(RTCPeerConnection.prototype, "track");

module.exports = RTCPeerConnection;

},{"./DataChannel.js":2,"./RTCIceCandidate.js":6,"./RTCRtpSender.js":8,"./RTCSessionDescription.js":9,"./WebRTCProxy.js":11,"event-target-shim/dist/event-target-shim.umd.js":12,"promise-polyfill":13}],8:[function(require,module,exports){
'use strict';

/*
[Exposed=Window]
interface RTCRtpSender {
    readonly attribute MediaStreamTrack? track;
    readonly attribute RTCDtlsTransport? transport;
    readonly attribute RTCDtlsTransport? rtcpTransport;
    // Feature at risk
    static RTCRtpCapabilities getCapabilities(DOMString kind);
    Promise<void>           setParameters(optional RTCRtpParameters parameters);
    RTCRtpParameters        getParameters();
    Promise<void>           replaceTrack(MediaStreamTrack? withTrack);
    Promise<RTCStatsReport> getStats();
};
*/
var RTCRtpSender = function RTCRtpSender(sender, track) {
	//Add to map
	this.priv = {
		sender: sender,
		track: track
	};

	Object.defineProperty(this, 'track', { enumerable: true, configurable: false, get: function get() {
			return priv.track;
		} });
	Object.defineProperty(this, 'transport', { enumerable: true, configurable: false, get: function get() {
			new Error("Not supported yet");
		} });
	Object.defineProperty(this, 'rtcpTransport', { enumerable: true, configurable: false, get: function get() {
			new Error("Not supported yet");
		} });

	return this;
};

RTCRtpSender.prototype.getCapabilities = function () {
	throw new Error("Not supported yet");
};

RTCRtpSender.prototype.setParameters = function () {
	throw new Error("Not supported yet");
};

RTCRtpSender.prototype.getParameters = function () {
	throw new Error("Not supported yet");
};

RTCRtpSender.prototype.replaceTrack = function () {
	throw new Error("Not supported yet");
};

RTCRtpSender.prototype.getStats = function () {
	throw new Error("Not supported yet");
};

module.exports = RTCRtpSender;

},{}],9:[function(require,module,exports){
"use strict";

/*
 [Constructor(RTCSessionDescriptionInit descriptionInitDict),
 Exposed=Window]
interface RTCSessionDescription {
    readonly attribute RTCSdpType type;
    readonly attribute DOMString  sdp;
    [Default] object toJSON();
}; 
 
 dictionary RTCSessionDescriptionInit {
    required RTCSdpType type;
             DOMString  sdp = "";
};

 */

function RTCSessionDescription(descriptionInitDict) {
	//Get values from dictionary
	var type = descriptionInitDict.type;
	var sdp = descriptionInitDict.sdp;

	//Direct attributes from init
	Object.defineProperty(this, "type", { enumerable: true, configurable: false, get: function get() {
			return type;
		} });
	Object.defineProperty(this, "sdp", { enumerable: true, configurable: false, get: function get() {
			return sdp;
		} });

	return this;
};

RTCSessionDescription.prototype.toJSON = function () {
	return {
		type: this.type,
		sdp: this.sdp
	};
};

module.exports = RTCSessionDescription;

},{}],10:[function(require,module,exports){
"use strict";

// This obvserver checks when a video element has been set a srcObj
var videoObserver = new MutationObserver(function (mutations) {
	for (var i = 0, numMutations = mutations.length; i < numMutations; i++) {
		var mutation = mutations[i];
		// HTML video element.
		if (mutation.target.videoRenderer) mutation.target.videoRenderer.mutate(mutation);
	}
});

var CLASSID = "CLSID:B8E874D9-72BA-4E54-B59B-3513081DF516";

function VideoRenderer(video) {
	var srcObject;
	var self = this;
	//Store video element
	this.video = video;

	//Create a new video renderer object
	var object = this.object = document.createElement("object");
	//Set csid
	this.object.classid = CLASSID;
	//Apped it hidden
	video.appendChild(this.object);

	// Add .src observer to the video element.
	videoObserver.observe(video, {
		// Set to true if additions and removals of the target node's child elements (including text
		// nodes) are to be observed.
		childList: false,
		// Set to true if mutations to target's attributes are to be observed.
		attributes: true,
		// Set to true if mutations to target's data are to be observed.
		characterData: false,
		// Set to true if mutations to not just target, but also target's descendants are to be observed.
		subtree: false,
		// Set to true if attributes is set to true and target's attribute value before the mutation
		// needs to be recorded.
		attributeOldValue: true,
		// Set to true if characterData is set to true and target's data before the mutation needs to be
		// recorded.
		characterDataOldValue: false
		// Set to an array of attribute local names (without namespace) if not all attribute mutations
		// need to be observed.
		//attributeFilter: [ 'srcObject']
	});
	// Define srcObject properties
	Object.defineProperty(video, 'srcObject', {
		enumerable: true,
		configurable: true,
		get: function get() {
			return srcObject;
		},
		set: function set(stream) {
			//We need to fire metadata event when we get first resize
			var needsmetadata = true;
			//Attach resize event
			object.onresize = function () {
				//Create event
				var event = document.createEvent("Event");
				//Init metadata or resize event
				event.initEvent(needsmetadata ? "loadedmetadata" : "resize", false, false);
				//Dispatch it
				video.dispatchEvent(event);
				//No more medatada event
				needsmetadata = false;
			};
			//Get stream track video stream
			var videoTracks = stream.getVideoTracks();
			//If found any
			if (videoTracks.length)
				//Set native video track on video renderer object
				object.setTrack(videoTracks[0].priv.track);
			//Store it
			srcObject = stream;
			//Show renderer
			self.show();
		}
	});

	// Override properties
	Object.defineProperty(video, 'videoWidth', { enumerable: true, configurable: true, get: function get() {
			return object.videoWidth;
		} });
	Object.defineProperty(video, 'videoHeight', { enumerable: true, configurable: true, get: function get() {
			return object.videoHeight;
		} });
	//TODO: clone attributes
}

VideoRenderer.prototype.mutate = function (mutation) {
	//Get mutation type
	//TODO: clone attributes
};

VideoRenderer.prototype.close = function () {
	//Hide video object
	this.hide();
	//Unobserver video element
	videoObserver.unobserve(this.video);
	//Remove srcObject property
	Object.defineProperty(this.video, 'srcObject', {});
	Object.defineProperty(this.video, 'videoWidth', {});
	Object.defineProperty(this.video, 'videoHeigth', {});
	//delete object, IE only method
	this.object.removeNode(false);
	delete this.object;
};

VideoRenderer.handle = function (video) {
	if (!video.videoRenderer) video.videoRenderer = new VideoRenderer(video);
};

VideoRenderer.unhandle = function (video) {
	if (video.videoRenderer) {
		video.videoRender.close();
		delete video.videoRenderer;
	}
};

VideoRenderer.prototype.show = function () {
	//Check object is not shown
	if (this.video !== this.object.parentElement)
		//Nothing
		return;
	//Swap them
	this.video.parentNode.replaceChild(this.object, this.video);
	this.object.appendChild(this.video);
};

VideoRenderer.prototype.hide = function () {
	//Check object is not shown
	if (this.object !== this.video.parentElement)
		//Nothing
		return;
	//Swap them
	this.object.parentNode.replaceChild(this.video, this.object);
	this.video.appendChild(this.object);
};

module.exports = VideoRenderer;

},{}],11:[function(require,module,exports){
"use strict";

// Create singleton
var WebRTCProxy = new ActiveXObject("Cosmo.WebRTCProxy.1");

module.exports = WebRTCProxy;

},{}],12:[function(require,module,exports){
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b(a.EventTargetShim={})})(this,function(a){'use strict';function b(a){var b=s.get(a);return console.assert(null!=b,'\'this\' is expected an Event object, but got',a),b}function c(a,b){s.set(this,{eventTarget:a,event:b,eventPhase:2,currentTarget:a,canceled:!1,stopped:!1,passiveListener:null,timeStamp:b.timeStamp||Date.now()}),Object.defineProperty(this,'isTrusted',{value:!1,enumerable:!0});for(var c,e=Object.keys(b),f=0;f<e.length;++f)c=e[f],c in this||Object.defineProperty(this,c,d(c))}function d(a){return{get:function(){return b(this).event[a]},set:function(c){b(this).event[a]=c},configurable:!0,enumerable:!0}}function e(a){return{value:function(){var c=b(this).event;return c[a].apply(c,arguments)},configurable:!0,enumerable:!0}}function f(a,b){function c(b,c){a.call(this,b,c)}var f=Object.keys(b);if(0===f.length)return a;c.prototype=Object.create(a.prototype,{constructor:{value:c,configurable:!0,writable:!0}});for(var g,h=0;h<f.length;++h)if(g=f[h],!(g in a.prototype)){var i=Object.getOwnPropertyDescriptor(b,g),j='function'==typeof i.value;Object.defineProperty(c.prototype,g,j?e(g):d(g))}return c}function g(a){if(null==a||a===Object.prototype)return c;var b=t.get(a);return null==b&&(b=f(g(Object.getPrototypeOf(a)),a),t.set(a,b)),b}function h(a,b){var c=g(Object.getPrototypeOf(b));return new c(a,b)}function i(a){return b(a).stopped}function j(a,c){b(a).eventPhase=c}function k(a,c){b(a).currentTarget=c}function l(a,c){b(a).passiveListener=c}function m(a){return null!==a&&'object'===('undefined'==typeof a?'undefined':u(a))}function n(a){var b=v.get(a);return console.assert(null!=b,'\'this\' is expected an EventTarget object, but got',a),b||new Map}function o(a){return{get:function(){for(var b=n(this),c=b.get(a);null!=c;){if(c.listenerType===y)return c.listener;c=c.next}return null},set:function(b){'function'==typeof b||m(b)||(b=null);for(var c=n(this),d=null,e=c.get(a);null!=e;)e.listenerType===y?null==d?null===e.next?c.delete(a):c.set(a,e.next):d.next=e.next:d=e,e=e.next;if(null!==b){var f={listener:b,listenerType:y,passive:!1,once:!1,next:null};null===d?c.set(a,f):d.next=f}},configurable:!0,enumerable:!0}}function p(a,b){Object.defineProperty(a,'on'+b,o(b))}function q(a){function b(){r.call(this)}b.prototype=Object.create(r.prototype,{constructor:{value:b,configurable:!0,writable:!0}});for(var c=0;c<a.length;++c)p(b.prototype,a[c]);return b}function r(){if(this instanceof r)return void v.set(this,new Map);if(1===arguments.length&&Array.isArray(arguments[0]))return q(arguments[0]);if(0<arguments.length){for(var a=Array(arguments.length),b=0;b<arguments.length;++b)a[b]=arguments[b];return q(a)}throw new TypeError('Cannot call a class as a function')}var s=new WeakMap,t=new WeakMap;c.prototype={get type(){return b(this).event.type},get target(){return b(this).eventTarget},get currentTarget(){return b(this).currentTarget},composedPath:function(){var a=b(this).currentTarget;return null==a?[]:[a]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return b(this).eventPhase},stopPropagation:function(){var a=b(this);'function'==typeof a.event.stopPropagation&&a.event.stopPropagation()},stopImmediatePropagation:function(){var a=b(this);a.stopped=!0,'function'==typeof a.event.stopImmediatePropagation&&a.event.stopImmediatePropagation()},get bubbles(){return!!b(this).event.bubbles},get cancelable(){return!!b(this).event.cancelable},preventDefault:function(){var a=b(this);return null==a.passiveListener?void(!a.event.cancelable||(a.canceled=!0,'function'==typeof a.event.preventDefault&&a.event.preventDefault())):void console.warn('Event#preventDefault() was called from a passive listener:',a.passiveListener)},get defaultPrevented(){return b(this).canceled},get composed(){return!!b(this).event.composed},get timeStamp(){return b(this).timeStamp}},Object.defineProperty(c.prototype,'constructor',{value:c,configurable:!0,writable:!0}),'undefined'!=typeof window&&'undefined'!=typeof window.Event&&(Object.setPrototypeOf(c.prototype,window.Event.prototype),t.set(window.Event.prototype,c));var u='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},v=new WeakMap,w=1,x=2,y=3;if(r.prototype={addEventListener:function(a,b,c){if(null==b)return!1;if('function'!=typeof b&&!m(b))throw new TypeError('\'listener\' should be a function or an object.');var d=n(this),e=m(c),f=e?!!c.capture:!!c,g=f?w:x,h={listener:b,listenerType:g,passive:e&&!!c.passive,once:e&&!!c.once,next:null},i=d.get(a);if(void 0===i)return d.set(a,h),!0;for(var j=null;null!=i;){if(i.listener===b&&i.listenerType===g)return!1;j=i,i=i.next}return j.next=h,!0},removeEventListener:function(a,b,c){if(null==b)return!1;for(var d=n(this),e=m(c)?!!c.capture:!!c,f=e?w:x,g=null,h=d.get(a);null!=h;){if(h.listener===b&&h.listenerType===f)return null==g?null===h.next?d.delete(a):d.set(a,h.next):g.next=h.next,!0;g=h,h=h.next}return!1},dispatchEvent:function(a){if(null==a||'string'!=typeof a.type)throw new TypeError('"event.type" should be a string.');var b=n(this),c=a.type,d=b.get(c);if(null==d)return!0;for(var e=h(this,a),f=null;null!=d&&(d.once?null==f?null===d.next?b.delete(c):b.set(c,d.next):f.next=d.next:f=d,l(e,d.passive?d.listener:null),'function'==typeof d.listener?d.listener.call(this,e):d.listenerType!==y&&'function'==typeof d.listener.handleEvent&&d.listener.handleEvent(e),!i(e));)d=d.next;return l(e,null),j(e,0),k(e,null),!e.defaultPrevented}},Object.defineProperty(r.prototype,'constructor',{value:r,configurable:!0,writable:!0}),'undefined'!=typeof window&&'undefined'!=typeof window.EventTarget&&Object.setPrototypeOf(r.prototype,window.EventTarget.prototype),a.defineEventAttribute=p,a.EventTarget=r,a['default']=r,Object.defineProperty(a,'__esModule',{value:!0}),'undefined'==typeof module&&'undefined'==typeof define){const a=Function('return this');a.EventTargetShim=r,a.EventTargetShim.defineEventAttribute=p}});


},{}],13:[function(require,module,exports){
(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

},{}]},{},[1])(1)
});