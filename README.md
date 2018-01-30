# CSM-IE-WebRTC shim
WebRTC shim for IE based on the [CSM-IE-WebRTC-plugin](https://github.com/CoSMoSoftware/CSM-IE-WebRTC-plugin). The plugin should be compiled, installed and registered first, befor eusing this shim.

## WebRTC Web Platform Test 
```
TOTAL [271/1099]
```

## Install and package

Warning, this supposes that you have compiled, installed and registered the ActiveX plugin first.

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
