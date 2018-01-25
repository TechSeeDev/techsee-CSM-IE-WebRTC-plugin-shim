# CSM-IE-WebRTC shim
WebRTC shim for IE based on the [CSM-IE-WebRTC-plugin](https://github.com/CoSMoSoftware/CSM-IE-WebRTC-plugin).

## WebRTC Web Platform Test 
```
√ datachannel-emptystring [0/1]
√ getstats [0/1]
√ historical [13/14]
√ interfaces.https [82/504]
× no-media-call (Timeout) [0/1]
√ promises-call [1/1]
√ RTCCertificate [0/5]
√ RTCConfiguration-bundlePolicy [13/15]
√ RTCConfiguration-iceCandidatePoolSize [9/9]
√ RTCConfiguration-iceServers [28/77]
√ RTCConfiguration-iceTransportPolicy [16/16]
√ RTCConfiguration-rtcpMuxPolicy [8/11]
√ RTCDataChannel-bufferedAmount [0/4]
√ RTCDataChannel-id [2/2]
√ RTCDataChannel-send [3/10]
√ RTCDataChannelEvent-constructor [0/4]
√ RTCDtlsTransport-getRemoteCertificates [0/1]
√ RTCDTMFSender-insertDTMF.https [0/6]
√ RTCDTMFSender-ontonechange-long.https [0/1]
√ RTCDTMFSender-ontonechange.https [0/11]
√ RTCIceCandidate-constructor [6/17]
√ RTCIceTransport [0/2]
√ RTCPeerConnection-addIceCandidate [14/23]
√ RTCPeerConnection-addTrack.https [1/8]
√ RTCPeerConnection-addTransceiver [4/15]
√ RTCPeerConnection-canTrickleIceCandidates [1/3]
× RTCPeerConnection-connectionState (Timeout) [1/2]
√ RTCPeerConnection-constructor [17/22]
√ RTCPeerConnection-createAnswer [3/3]
√ RTCPeerConnection-createDataChannel [3/30]
√ RTCPeerConnection-createOffer-offerToReceive [0/15]
√ RTCPeerConnection-createOffer [4/8]
√ RTCPeerConnection-generateCertificate [0/8]
√ RTCPeerConnection-getDefaultIceServers [0/1]
√ RTCPeerConnection-getIdentityAssertion [0/12]
√ RTCPeerConnection-getStats.https [0/13]
√ RTCPeerConnection-getTransceivers [0/1]
√ RTCPeerConnection-iceConnectionState [1/2]
√ RTCPeerConnection-iceGatheringState [2/3]
√ RTCPeerConnection-ondatachannel [0/3]
√ RTCPeerConnection-onnegotiationneeded [4/7]
√ RTCPeerConnection-ontrack.https [1/5]
√ RTCPeerConnection-peerIdentity [0/6]
√ RTCPeerConnection-removeTrack.https [2/12]
√ RTCPeerConnection-setDescription-transceiver [0/5]
√ RTCPeerConnection-setLocalDescription-answer [4/6]
√ RTCPeerConnection-setLocalDescription-offer [4/7]
√ RTCPeerConnection-setLocalDescription-pranswer [3/7]
× RTCPeerConnection-setLocalDescription-rollback (Timeout) [2/5]
√ RTCPeerConnection-setLocalDescription [3/4]
√ RTCPeerConnection-setRemoteDescription-answer [4/4]
√ RTCPeerConnection-setRemoteDescription-offer [1/8]
√ RTCPeerConnection-setRemoteDescription-pranswer [7/7]
√ RTCPeerConnection-setRemoteDescription-replaceTrack.https [0/6]
× RTCPeerConnection-setRemoteDescription-rollback (Timeout) [1/4]
√ RTCPeerConnection-setRemoteDescription-tracks.https [2/12]
× RTCPeerConnection-setRemoteDescription (Timeout) [1/6]
√ RTCPeerConnection-track-stats.https [0/12]
√ RTCPeerConnectionIceEvent-constructor [0/8]
√ RTCRtpParameters-codecs [0/8]
√ RTCRtpParameters-degradationPreference [0/2]
√ RTCRtpParameters-encodings [0/18]
√ RTCRtpParameters-headerExtensions [0/1]
√ RTCRtpParameters-rtcp [0/2]
√ RTCRtpParameters-transactionId [0/5]
√ RTCRtpReceiver-getCapabilities [0/2]
× RTCRtpReceiver-getContributingSources.https (Fail: No se pudo completar la operación debido un error 80020101.) [0/1]
√ RTCRtpReceiver-getParameters [0/1]
√ RTCRtpReceiver-getStats [0/1]
× RTCRtpReceiver-getSynchronizationSources.https (Fail: No se pudo completar la operación debido un error 80020101.) [0/1]
√ RTCRtpSender-getCapabilities [0/2]
√ RTCRtpSender-getStats.https [0/2]
√ RTCRtpSender-replaceTrack [0/9]
√ RTCRtpSender-setParameters [0/1]
√ RTCRtpTransceiver-setCodecPreferences [0/9]
√ RTCRtpTransceiver-setDirection [0/3]
√ RTCSctpTransport-constructor [0/2]
√ RTCSctpTransport-maxMessageSize [0/5]
√ RTCTrackEvent-constructor [0/7]
√ simplecall [0/1]
TOTAL [271/1099]
```

## Install and package

Install dev depencies (brorserify and babel) globaly:
```
npm install --only=dev -g
```

Install project dependencies
```
npm install
```

Create bundled package (not minimized):
```
npm run-script broserify
```

## Run WTP tests
```
npm test
```
## Usage

Just add the bundled js package into your page:
```html
<script src="dist/webrtc-ie-shim.js" type="text/javascript" async></script>
```
 
## Documentation
The following webrtc 1.0 apis are supported:

- MediaDevices
```
		attribute EventHandler ondevicechange;
	Promise<sequence<MediaDeviceInfo>> enumerateDevices();
	//TODO: MediaTrackSupportedConstraints getSupportedConstraints();
	Promise<MediaStream>		getUserMedia(optional MediaStreamConstraints constraints);
```
- RTCPeerConnection
```
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
	//TODO: readonly attribute boolean?               canTrickleIceCandidates;
	static sequence<RTCIceServer>      getDefaultIceServers();
	//TODO: RTCConfiguration                   getConfiguration();
	//TODO: void                               setConfiguration(RTCConfiguration configuration);
	void                               close();

		 attribute EventHandler           onnegotiationneeded;
	  	 attribute EventHandler           onicecandidate;
	 	 attribute EventHandler           onicecandidateerror;
		 attribute EventHandler           onsignalingstatechange;
		 attribute EventHandler           oniceconnectionstatechange;
		 attribute EventHandler           onicegatheringstatechange;
		 attribute EventHandler           onconnectionstatechange;
	//TODO: sequence<RTCRtpSender>      getSenders();
	//TODO: sequence<RTCRtpReceiver>    getReceivers();
	//TODO: sequence<RTCRtpTransceiver> getTransceivers();
	RTCRtpSender                addTrack(MediaStreamTrack track, MediaStream... streams);
	void                        removeTrack(RTCRtpSender sender);
	//TODO: RTCRtpTransceiver           addTransceiver((MediaStreamTrack or DOMString) trackOrKind, optional RTCRtpTransceiverInit init);
		 attribute EventHandler ontrack;
```
- MediaStream
```
	readonly attribute DOMString    id;
	sequence<MediaStreamTrack> getAudioTracks();
	sequence<MediaStreamTrack> getVideoTracks();
	sequence<MediaStreamTrack> getTracks();
	MediaStreamTrack?          getTrackById(DOMString trackId);
	void                       addTrack(MediaStreamTrack track);
	void                       removeTrack(MediaStreamTrack track);
	MediaStream                clone();
	readonly attribute boolean      active;
		 attribute EventHandler		onaddtrack;
		 attribute EventHandler		onremovetrack;
```
- MediaStreamTrack
```
    readonly attribute DOMString             kind;
    readonly attribute DOMString             id;
    readonly attribute DOMString             label;
             attribute boolean               enabled;
    readonly attribute boolean               muted;
    //TODO:  attribute EventHandler          onmute;
    //TODO:  attribute EventHandler          onunmute;
    readonly attribute MediaStreamTrackState readyState;
    //TODO:  attribute EventHandler          onended;
   //TODO: MediaStreamTrack       clone();
    void                   stop();
    //TODO: MediaTrackCapabilities getCapabilities();
    //TODO:vMediaTrackConstraints  getConstraints();
    //TODO: MediaTrackSettings     getSettings();
    //TODO: Promise<void>          applyConstraints(optional MediaTrackConstraints constraints);
    //TODO: attribute EventHandler          onoverconstrained;
```
- RTPSender
```
    readonly attribute MediaStreamTrack? track;
    //TODO: readonly attribute RTCDtlsTransport? transport;
    //TODO: readonly attribute RTCDtlsTransport? rtcpTransport;
    //TODO: static RTCRtpCapabilities getCapabilities(DOMString kind);
    //TODO: Promise<void>           setParameters(optional RTCRtpParameters parameters);
    //TODO: RTCRtpParameters        getParameters();
    //TODO: Promise<void>           replaceTrack(MediaStreamTrack? withTrack);
    //TODO: Promise<RTCStatsReport> getStats();
```

## License

Apache License Version 2.0, 
January 2004
 http://www.apache.org/licenses/