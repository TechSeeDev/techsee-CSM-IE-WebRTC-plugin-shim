# Web Platform test results
||Test|IE|Chrome|Firefox|
|---|---|---|---|---|
|:hammer:| **datachannel-emptystring**||||
||Can send empty strings across a WebRTC data channel.|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **getstats**||||
||Can get stats from a basic WebRTC call.|:white_check_mark:|:x:|:x:|
||`Test Total` |0/1|1/1|0/1|
|:hammer:| **historical**||||
||RTCDataChannel member reliable should not exist|:x:|:white_check_mark:|:x:|
||RTCPeerConnection member addStream should not exist|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection member createDTMFSender should not exist|:x:|:white_check_mark:|:x:|
||RTCPeerConnection member getLocalStreams should not exist|:x:|:white_check_mark:|:x:|
||RTCPeerConnection member getRemoteStreams should not exist|:x:|:white_check_mark:|:x:|
||RTCPeerConnection member getStreamById should not exist|:x:|:x:|:x:|
||RTCPeerConnection member onaddstream should not exist|:x:|:white_check_mark:|:x:|
||RTCPeerConnection member onremovestream should not exist|:x:|:white_check_mark:|:x:|
||RTCPeerConnection member removeStream should not exist|:x:|:white_check_mark:|:x:|
||RTCPeerConnection member updateIce should not exist|:x:|:x:|:x:|
||mozRTCIceCandidate interface should not exist|:x:|:x:|:x:|
||mozRTCPeerConnection interface should not exist|:x:|:x:|:x:|
||mozRTCSessionDescription interface should not exist|:x:|:x:|:x:|
||webkitRTCPeerConnection interface should not exist|:x:|:white_check_mark:|:x:|
||`Test Total` |13/14|5/14|5/14|
|:hammer:| **interfaces.https**||||
||Main test driver|:x:|:x:|:x:|
||Test driver for asyncInitCertificate|:white_check_mark:|:x:|:x:|
||Test driver for asyncInitTransports|:white_check_mark:|:white_check_mark:|:x:|
||Test driver for asyncInitMediaStreamTrack|:x:|:x:|:x:|
||MediaStreamTrack interface: existence and properties of interface object|:x:|:x:|:x:|
||MediaStreamTrack interface object length|:white_check_mark:|:x:|:x:|
||MediaStreamTrack interface object name|:x:|:x:|:x:|
||MediaStreamTrack interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||MediaStreamTrack interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||MediaStreamTrack interface: attribute isolated|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack interface: attribute onisolationchange|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack must be primary interface of idlTestObjects.mediaStreamTrack|:white_check_mark:|:x:|:x:|
||Stringification of idlTestObjects.mediaStreamTrack|:white_check_mark:|:x:|:x:|
||MediaStreamTrack interface: idlTestObjects.mediaStreamTrack must inherit property "isolated" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack interface: idlTestObjects.mediaStreamTrack must inherit property "onisolationchange" with the proper type|:x:|:white_check_mark:|:x:|
||MediaStreamTrack must be primary interface of generateMediaStreamTrack('audio')|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of generateMediaStreamTrack('audio')|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack interface: generateMediaStreamTrack('audio') must inherit property "isolated" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack interface: generateMediaStreamTrack('audio') must inherit property "onisolationchange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCPeerConnection interface object length|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface object name|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCPeerConnection interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCPeerConnection interface: operation createOffer(RTCOfferOptions)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation createAnswer(RTCAnswerOptions)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation setLocalDescription(RTCSessionDescriptionInit)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute localDescription|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute currentLocalDescription|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute pendingLocalDescription|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation setRemoteDescription(RTCSessionDescriptionInit)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute remoteDescription|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute currentRemoteDescription|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute pendingRemoteDescription|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation addIceCandidate([object Object],[object Object])|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute signalingState|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute iceGatheringState|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute iceConnectionState|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute connectionState|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute canTrickleIceCandidates|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation getDefaultIceServers()|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation getConfiguration()|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation setConfiguration(RTCConfiguration)|:x:|:x:|:x:|
||RTCPeerConnection interface: operation close()|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute onnegotiationneeded|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute onicecandidate|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute onicecandidateerror|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute onsignalingstatechange|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute oniceconnectionstatechange|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute onicegatheringstatechange|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute onconnectionstatechange|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute onfingerprintfailure|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation createOffer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback, RTCOfferOptions)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation setLocalDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation createAnswer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation setRemoteDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation addIceCandidate([object Object],[object Object], VoidFunction, RTCPeerConnectionErrorCallback)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation generateCertificate(AlgorithmIdentifier)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation getSenders()|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation getReceivers()|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation getTransceivers()|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation addTrack(MediaStreamTrack, MediaStream)|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation removeTrack(RTCRtpSender)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation addTransceiver([object Object],[object Object], RTCRtpTransceiverInit)|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute ontrack|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute sctp|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation createDataChannel(USVString, RTCDataChannelInit)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: attribute ondatachannel|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation getStats(MediaStreamTrack)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation setIdentityProvider(DOMString, RTCIdentityProviderOptions)|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation getIdentityAssertion()|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute peerIdentity|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute idpLoginUrl|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute idpErrorInfo|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection must be primary interface of new RTCPeerConnection()|:x:|:x:|:x:|
||Stringification of new RTCPeerConnection()|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createOffer(RTCOfferOptions)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling createOffer(RTCOfferOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createAnswer(RTCAnswerOptions)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling createAnswer(RTCAnswerOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setLocalDescription(RTCSessionDescriptionInit)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling setLocalDescription(RTCSessionDescriptionInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "localDescription" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "currentLocalDescription" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "pendingLocalDescription" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setRemoteDescription(RTCSessionDescriptionInit)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling setRemoteDescription(RTCSessionDescriptionInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "remoteDescription" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "currentRemoteDescription" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "pendingRemoteDescription" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addIceCandidate([object Object],[object Object])" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling addIceCandidate([object Object],[object Object]) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "signalingState" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "iceGatheringState" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "iceConnectionState" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "connectionState" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "canTrickleIceCandidates" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getDefaultIceServers()" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getConfiguration()" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setConfiguration(RTCConfiguration)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling setConfiguration(RTCConfiguration) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "close()" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onnegotiationneeded" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onicecandidate" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onicecandidateerror" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onsignalingstatechange" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "oniceconnectionstatechange" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onicegatheringstatechange" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onconnectionstatechange" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onfingerprintfailure" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createOffer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback, RTCOfferOptions)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling createOffer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback, RTCOfferOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setLocalDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling setLocalDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createAnswer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling createAnswer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setRemoteDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling setRemoteDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addIceCandidate([object Object],[object Object], VoidFunction, RTCPeerConnectionErrorCallback)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling addIceCandidate([object Object],[object Object], VoidFunction, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "generateCertificate(AlgorithmIdentifier)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling generateCertificate(AlgorithmIdentifier) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getSenders()" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getReceivers()" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getTransceivers()" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addTrack(MediaStreamTrack, MediaStream)" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling addTrack(MediaStreamTrack, MediaStream) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "removeTrack(RTCRtpSender)" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling removeTrack(RTCRtpSender) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addTransceiver([object Object],[object Object], RTCRtpTransceiverInit)" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling addTransceiver([object Object],[object Object], RTCRtpTransceiverInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "ontrack" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "sctp" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createDataChannel(USVString, RTCDataChannelInit)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling createDataChannel(USVString, RTCDataChannelInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "ondatachannel" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getStats(MediaStreamTrack)" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: calling getStats(MediaStreamTrack) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setIdentityProvider(DOMString, RTCIdentityProviderOptions)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling setIdentityProvider(DOMString, RTCIdentityProviderOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getIdentityAssertion()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "peerIdentity" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "idpLoginUrl" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "idpErrorInfo" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCSessionDescription interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface object name|:x:|:x:|:x:|
||RTCSessionDescription interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCSessionDescription interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCSessionDescription interface: attribute type|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface: attribute sdp|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface: operation toJSON()|:white_check_mark:|:x:|:x:|
||RTCSessionDescription must be primary interface of new RTCSessionDescription({ type: 'offer' })|:x:|:x:|:x:|
||Stringification of new RTCSessionDescription({ type: 'offer' })|:white_check_mark:|:x:|:x:|
||RTCSessionDescription interface: new RTCSessionDescription({ type: 'offer' }) must inherit property "type" with the proper type|:white_check_mark:|:x:|:x:|
||RTCSessionDescription interface: new RTCSessionDescription({ type: 'offer' }) must inherit property "sdp" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface: new RTCSessionDescription({ type: 'offer' }) must inherit property "toJSON()" with the proper type|:x:|:x:|:x:|
||Test default toJSON operation of RTCSessionDescription|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCIceCandidate interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface object name|:x:|:x:|:x:|
||RTCIceCandidate interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCIceCandidate interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute candidate|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute sdpMid|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute sdpMLineIndex|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute foundation|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute component|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute priority|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute ip|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute protocol|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute port|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute tcpType|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute relatedAddress|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute relatedPort|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute usernameFragment|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: operation toJSON()|:white_check_mark:|:x:|:x:|
||RTCIceCandidate must be primary interface of new RTCIceCandidate({ sdpMid: 1 })|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCIceCandidate({ sdpMid: 1 })|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "candidate" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "sdpMid" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "sdpMLineIndex" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "foundation" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "component" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "priority" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "ip" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "protocol" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "port" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "type" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "tcpType" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "relatedAddress" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "relatedPort" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "usernameFragment" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "toJSON()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||Test toJSON operation of RTCIceCandidate|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface: existence and properties of interface object|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface object length|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface object name|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface: attribute candidate|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface: attribute url|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent must be primary interface of new RTCPeerConnectionIceEvent('ice')|:white_check_mark:|:x:|:x:|
||Stringification of new RTCPeerConnectionIceEvent('ice')|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface: new RTCPeerConnectionIceEvent('ice') must inherit property "candidate" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent interface: new RTCPeerConnectionIceEvent('ice') must inherit property "url" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute hostCandidate|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute url|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute errorCode|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute errorText|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent must be primary interface of new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 });|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 });|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "hostCandidate" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "url" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "errorCode" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "errorText" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCCertificate interface: existence and properties of interface object|:white_check_mark:|:x:|:x:|
||RTCCertificate interface object length|:white_check_mark:|:x:|:x:|
||RTCCertificate interface object name|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: attribute expires|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: operation getFingerprints()|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: operation getAlgorithm()|:white_check_mark:|:white_check_mark:|:x:|
||RTCCertificate must be primary interface of idlTestObjects.certificate|:white_check_mark:|:x:|:x:|
||Stringification of idlTestObjects.certificate|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: idlTestObjects.certificate must inherit property "expires" with the proper type|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: idlTestObjects.certificate must inherit property "getFingerprints()" with the proper type|:white_check_mark:|:x:|:x:|
||RTCCertificate interface: idlTestObjects.certificate must inherit property "getAlgorithm()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: attribute track|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: attribute transport|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: attribute rtcpTransport|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: operation getCapabilities(DOMString)|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: operation setParameters(RTCRtpParameters)|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: operation getParameters()|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: operation replaceTrack(MediaStreamTrack)|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: operation getStats()|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: attribute dtmf|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender must be primary interface of new RTCPeerConnection().addTransceiver('audio').sender|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCPeerConnection().addTransceiver('audio').sender|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "track" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "transport" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "rtcpTransport" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "getCapabilities(DOMString)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: calling getCapabilities(DOMString) on new RTCPeerConnection().addTransceiver('audio').sender with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "setParameters(RTCRtpParameters)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: calling setParameters(RTCRtpParameters) on new RTCPeerConnection().addTransceiver('audio').sender with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "getParameters()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "replaceTrack(MediaStreamTrack)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: calling replaceTrack(MediaStreamTrack) on new RTCPeerConnection().addTransceiver('audio').sender with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "getStats()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "dtmf" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCRtpReceiver interface object length|:white_check_mark:|:x:|:x:|
||RTCRtpReceiver interface object name|:x:|:x:|:x:|
||RTCRtpReceiver interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||RTCRtpReceiver interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||RTCRtpReceiver interface: attribute track|:white_check_mark:|:x:|:x:|
||RTCRtpReceiver interface: attribute transport|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: attribute rtcpTransport|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: operation getCapabilities(DOMString)|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: operation getParameters()|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: operation getContributingSources()|:white_check_mark:|:x:|:x:|
||RTCRtpReceiver interface: operation getSynchronizationSources()|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: operation getStats()|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver must be primary interface of new RTCPeerConnection().addTransceiver('audio').receiver|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCPeerConnection().addTransceiver('audio').receiver|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "track" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "transport" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "rtcpTransport" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getCapabilities(DOMString)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: calling getCapabilities(DOMString) on new RTCPeerConnection().addTransceiver('audio').receiver with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getParameters()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getContributingSources()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getSynchronizationSources()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getStats()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface: existence and properties of interface object|:white_check_mark:|:x:|:x:|
||RTCRtpContributingSource interface object length|:white_check_mark:|:x:|:x:|
||RTCRtpContributingSource interface object name|:white_check_mark:|:x:|:x:|
||RTCRtpContributingSource interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||RTCRtpContributingSource interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||RTCRtpContributingSource interface: attribute timestamp|:white_check_mark:|:x:|:x:|
||RTCRtpContributingSource interface: attribute source|:white_check_mark:|:x:|:x:|
||RTCRtpContributingSource interface: attribute audioLevel|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface: attribute timestamp|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface: attribute source|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface: attribute audioLevel|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSynchronizationSource interface: attribute voiceActivityFlag|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: existence and properties of interface object|:x:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: attribute mid|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: attribute sender|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: attribute receiver|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: attribute stopped|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: attribute direction|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: attribute currentDirection|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: operation setDirection(RTCRtpTransceiverDirection)|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: operation stop()|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: operation setCodecPreferences([object Object])|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver must be primary interface of new RTCPeerConnection().addTransceiver('audio')|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCPeerConnection().addTransceiver('audio')|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "mid" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "sender" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "receiver" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "stopped" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "direction" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "currentDirection" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "setDirection(RTCRtpTransceiverDirection)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: calling setDirection(RTCRtpTransceiverDirection) on new RTCPeerConnection().addTransceiver('audio') with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "stop()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "setCodecPreferences([object Object])" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpTransceiver interface: calling setCodecPreferences([object Object]) on new RTCPeerConnection().addTransceiver('audio') with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: attribute transport|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: attribute state|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: operation getRemoteCertificates()|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: attribute onstatechange|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport must be primary interface of idlTestObjects.dtlsTransport|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of idlTestObjects.dtlsTransport|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "transport" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "state" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "getRemoteCertificates()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "onstatechange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: attribute role|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: attribute component|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: attribute state|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: attribute gatheringState|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: operation getLocalCandidates()|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: operation getRemoteCandidates()|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: operation getSelectedCandidatePair()|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: operation getLocalParameters()|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: operation getRemoteParameters()|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: attribute onstatechange|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: attribute ongatheringstatechange|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: attribute onselectedcandidatepairchange|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport must be primary interface of idlTestObjects.iceTransport|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of idlTestObjects.iceTransport|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "role" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "component" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "state" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "gatheringState" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getLocalCandidates()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getRemoteCandidates()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getSelectedCandidatePair()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getLocalParameters()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getRemoteParameters()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "onstatechange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "ongatheringstatechange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "onselectedcandidatepairchange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: attribute receiver|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: attribute track|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: attribute streams|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: attribute transceiver|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent must be primary interface of initTrackEvent()|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of initTrackEvent()|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "receiver" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "track" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "streams" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "transceiver" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface: attribute transport|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface: attribute maxMessageSize|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport must be primary interface of idlTestObjects.sctpTransport|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of idlTestObjects.sctpTransport|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface: idlTestObjects.sctpTransport must inherit property "transport" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCSctpTransport interface: idlTestObjects.sctpTransport must inherit property "maxMessageSize" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCDataChannel interface object length|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface object name|:x:|:x:|:x:|
||RTCDataChannel interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute label|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute ordered|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute maxPacketLifeTime|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute maxRetransmits|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute protocol|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute negotiated|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute id|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute priority|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute readyState|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute bufferedAmount|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute bufferedAmountLowThreshold|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute onopen|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute onbufferedamountlow|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute onerror|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute onclose|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: operation close()|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute onmessage|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: attribute binaryType|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: operation send(USVString)|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: operation send(Blob)|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: operation send(ArrayBuffer)|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: operation send(ArrayBufferView)|:white_check_mark:|:x:|:x:|
||RTCDataChannel must be primary interface of new RTCPeerConnection().createDataChannel('')|:white_check_mark:|:x:|:x:|
||Stringification of new RTCPeerConnection().createDataChannel('')|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "label" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "ordered" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "maxPacketLifeTime" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "maxRetransmits" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "protocol" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "negotiated" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "id" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "priority" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "readyState" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "bufferedAmount" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "bufferedAmountLowThreshold" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onopen" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onbufferedamountlow" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onerror" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onclose" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "close()" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onmessage" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "binaryType" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(USVString)" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: calling send(USVString) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(Blob)" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: calling send(Blob) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(ArrayBuffer)" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: calling send(ArrayBuffer) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(ArrayBufferView)" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: calling send(ArrayBufferView) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent interface: existence and properties of interface object|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent interface object length|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent interface object name|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent interface: attribute channel|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent must be primary interface of new RTCDataChannelEvent('channel', { channel: new RTCPeerConnection().createDataChannel('') })|:white_check_mark:|:x:|:x:|
||Stringification of new RTCDataChannelEvent('channel', { channel: new RTCPeerConnection().createDataChannel('') })|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent interface: new RTCDataChannelEvent('channel', { channel: new RTCPeerConnection().createDataChannel('') }) must inherit property "channel" with the proper type|:white_check_mark:|:x:|:x:|
||RTCDTMFSender interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFSender interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFSender interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFSender interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFSender interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFSender interface: operation insertDTMF(DOMString, unsigned long, unsigned long)|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFSender interface: attribute ontonechange|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFSender interface: attribute toneBuffer|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFToneChangeEvent interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFToneChangeEvent interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFToneChangeEvent interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFToneChangeEvent interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFToneChangeEvent interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCDTMFToneChangeEvent interface: attribute tone|:white_check_mark:|:white_check_mark:|:x:|
||RTCStatsReport interface: existence and properties of interface object|:white_check_mark:|:x:|:x:|
||RTCStatsReport interface object length|:white_check_mark:|:x:|:x:|
||RTCStatsReport interface object name|:white_check_mark:|:x:|:x:|
||RTCStatsReport interface: existence and properties of interface prototype object|:white_check_mark:|:x:|:x:|
||RTCStatsReport interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:x:|:x:|
||RTCIdentityProviderGlobalScope interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCIdentityProviderRegistrar interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCIdentityAssertion interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityAssertion interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityAssertion interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityAssertion interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityAssertion interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityAssertion interface: attribute idp|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityAssertion interface: attribute name|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent interface object length|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent interface: attribute error|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent must be primary interface of new RTCErrorEvent('error')|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCErrorEvent('error')|:white_check_mark:|:white_check_mark:|:x:|
||RTCErrorEvent interface: new RTCErrorEvent('error') must inherit property "error" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannelEvent must be primary interface of new RTCDataChannelEvent('channel',        { channel: new RTCPeerConnection().createDataChannel('') })|:x:|:x:|:x:|
||Stringification of new RTCDataChannelEvent('channel',        { channel: new RTCPeerConnection().createDataChannel('') })|:x:|:x:|:x:|
||RTCDataChannelEvent interface: new RTCDataChannelEvent('channel',        { channel: new RTCPeerConnection().createDataChannel('') }) must inherit property "channel" with the proper type|:x:|:x:|:x:|
||`Test Total` |82/504|201/504|221/504|
|:hammer:| **no-media-call**||||
||Can set up a basic WebRTC call with no data.|:x:|:x:|:x:|
||`Test Total` |0/1|1/1|0/1|
|:hammer:| **promises-call**||||
||Can set up a basic WebRTC call with only data using promises.|:x:|:x:|:x:|
||`Test Total` |1/1|1/1|1/1|
|:hammer:| **RTCCertificate**||||
||Constructing RTCPeerConnection with expired certificate should reject with InvalidAccessError|:white_check_mark:|:x:|:x:|
||Calling setConfiguration with different set of certs should reject with InvalidModificationError|:white_check_mark:|:x:|:x:|
||RTCCertificate should have at least one fingerprint|:white_check_mark:|:x:|:x:|
||RTCPeerConnection({ certificates }) should generate offer SDP with fingerprint of provided certificate|:white_check_mark:|:x:|:x:|
||RTCPeerConnection({ certificates }) should generate offer SDP with fingerprint of all provided certificates|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/5|4/5|0/5|
|:hammer:| **RTCConfiguration-bundlePolicy**||||
||Default bundlePolicy should be balanced|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ bundlePolicy: undefined }) should have bundlePolicy balanced|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'balanced' }) should succeed|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'max-compat' }) should succeed|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'max-bundle' }) should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration({}) with initial default bundlePolicy balanced should succeed|:x:|:x:|:x:|
||setConfiguration({}) with initial bundlePolicy balanced should succeed|:x:|:x:|:x:|
||setConfiguration({ bundlePolicy: balanced }) with initial default bundlePolicy balanced should succeed|:x:|:x:|:x:|
||setConfiguration({ bundlePolicy: 'balanced' }) with initial bundlePolicy balanced should succeed|:x:|:x:|:x:|
||setConfiguration({ bundlePolicy: 'max-compat' }) with initial bundlePolicy max-compat should succeed|:x:|:x:|:x:|
||setConfiguration({ bundlePolicy: 'max-bundle' }) with initial bundlePolicy max-bundle should succeed|:x:|:x:|:x:|
||new RTCPeerConnection({ bundlePolicy: null }) should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'invalid' }) should throw TypeError|:x:|:x:|:x:|
||setConfiguration({ bundlePolicy: 'max-compat' }) with initial bundlePolicy max-bundle should throw InvalidModificationError|:white_check_mark:|:x:|:x:|
||setConfiguration({}) with initial bundlePolicy max-bundle should throw InvalidModificationError|:white_check_mark:|:x:|:x:|
||`Test Total` |13/15|10/15|7/15|
|:hammer:| **RTCConfiguration-iceCandidatePoolSize**||||
||Initialize a new RTCPeerConnection with no iceCandidatePoolSize|:x:|:white_check_mark:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: 0|:x:|:white_check_mark:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: 255|:x:|:white_check_mark:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: -1 (Out Of Range)|:x:|:x:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: 256 (Out Of Range)|:x:|:x:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to 0|:x:|:white_check_mark:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to 255|:x:|:white_check_mark:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to -1 (Out Of Range)|:x:|:x:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to 256 (Out Of Range)|:x:|:x:|:x:|
||`Test Total` |9/9|4/9|0/9|
|:hammer:| **RTCConfiguration-iceServers**||||
||new RTCPeerConnection() should have default configuration.iceServers of undefined|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - { iceServers: null } should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - { iceServers: null } should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - { iceServers: undefined } should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - { iceServers: undefined } should succeed|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - { iceServers: [] } should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - { iceServers: [] } should succeed|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - { iceServers: [null] } should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - { iceServers: [null] } should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - { iceServers: [undefined] } should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - { iceServers: [undefined] } should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - { iceServers: [{}] } should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - { iceServers: [{}] } should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with empty list urls should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with empty list urls should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with stun server should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with stun server should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with stun server array should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with stun server array should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with 2 stun servers should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with 2 stun servers should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turn server, username, credential should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turn server, username, credential should succeed|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turns server and empty string username, credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with turns server and empty string username, credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turn server and empty string username, credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with turn server and empty string username, credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with one turns server, one turn server, username, credential should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with one turns server, one turn server, username, credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with stun server and credentialType password should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with stun server and credentialType password should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turn server and no credentials should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turn server and no credentials should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with turn server and only username should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turn server and only username should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with turn server and only credential should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turn server and only credential should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with turns server and no credentials should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turns server and no credentials should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with turns server and only username should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turns server and only username should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with turns server and only credential should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turns server and only credential should throw InvalidAccessError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with relative url should throw SyntaxError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with relative url should throw SyntaxError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with http url should throw SyntaxError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with http url should throw SyntaxError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with invalid turn url should throw SyntaxError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with invalid turn url should throw SyntaxError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with invalid stun url should throw SyntaxError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with invalid stun url should throw SyntaxError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with empty urls and credentialType password should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with empty urls and credentialType password should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with empty urls and credentialType oauth should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with empty urls and credentialType oauth should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with invalid credentialType should throw TypeError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with invalid credentialType should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with credentialType token should throw TypeError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with credentialType token should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with url field should throw TypeError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with url field should throw TypeError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turns server, credentialType password, and RTCOauthCredential credential should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with turns server, credentialType password, and RTCOauthCredential credential should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turns server, credentialType oauth, and string credential should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with turns server, credentialType oauth, and string credential should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turns server, credentialType oauth and RTCOAuthCredential credential should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turns server, credentialType oauth and RTCOAuthCredential credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with both turns and stun server, credentialType oauth and RTCOAuthCredential credential should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with both turns and stun server, credentialType oauth and RTCOAuthCredential credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with stun server, credentialType oauth, and string credential should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with stun server, credentialType oauth, and string credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with stun server, credentialType password, and RTCOAuthCredential credential should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with stun server, credentialType password, and RTCOAuthCredential credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with empty urls list, credentialType oauth, and string credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with empty urls list, credentialType oauth, and string credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with empty urls list, credentialType password, and RTCOAuthCredential credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with empty urls list, credentialType password, and RTCOAuthCredential credential should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |28/77|24/77|24/77|
|:hammer:| **RTCConfiguration-iceTransportPolicy**||||
||new RTCPeerConnection() should have default iceTransportPolicy all|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ iceTransportPolicy: undefined }) should have default iceTransportPolicy all|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ iceTransportPolicy: 'all' }) should succeed|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ iceTransportPolicy: 'relay' }) should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration({ iceTransportPolicy: 'relay' }) with initial iceTransportPolicy all should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration({ iceTransportPolicy: 'all' }) with initial iceTransportPolicy relay should succeed|:x:|:white_check_mark:|:x:|
||setConfiguration({}) with initial iceTransportPolicy relay should set new value to all|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with invalid iceTransportPolicy should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - with invalid iceTransportPolicy should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with none iceTransportPolicy should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - with none iceTransportPolicy should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with null iceTransportPolicy should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - with null iceTransportPolicy should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection({ iceTransports: 'relay' }) should have no effect|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ iceTransports: 'invalid' }) should have no effect|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ iceTransports: null }) should have no effect|:x:|:white_check_mark:|:x:|
||`Test Total` |16/16|6/16|10/16|
|:hammer:| **RTCConfiguration-rtcpMuxPolicy**||||
||new RTCPeerConnection() should have default rtcpMuxPolicy require|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ rtcpMuxPolicy: undefined }) should have default rtcpMuxPolicy require|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ rtcpMuxPolicy: 'require' }) should succeed|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ rtcpMuxPolicy: 'negotiate' }) may succeed or throw NotSupportedError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with { rtcpMuxPolicy: null } should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - with { rtcpMuxPolicy: null } should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with { rtcpMuxPolicy: 'invalid' } should throw TypeError|:x:|:x:|:x:|
||setConfiguration(config) - with { rtcpMuxPolicy: 'invalid' } should throw TypeError|:x:|:x:|:x:|
||setConfiguration({ rtcpMuxPolicy: 'negotiate' }) with initial rtcpMuxPolicy require should throw InvalidModificationError|:white_check_mark:|:x:|:x:|
||setConfiguration({ rtcpMuxPolicy: 'require' }) with initial rtcpMuxPolicy negotiate should throw InvalidModificationError|:white_check_mark:|:x:|:x:|
||setConfiguration({}) with initial rtcpMuxPolicy negotiate should throw InvalidModificationError|:white_check_mark:|:x:|:x:|
||`Test Total` |8/11|7/11|0/11|
|:hammer:| **RTCDataChannel-bufferedAmount**||||
||bufferedAmount should increase to byte length of encoded unicode string sent|:white_check_mark:|:white_check_mark:|:x:|
||bufferedAmount should increase to byte length of buffer sent|:white_check_mark:|:white_check_mark:|:x:|
||bufferedAmount should increase to size of blob sent|:white_check_mark:|:white_check_mark:|:x:|
||bufferedAmount should increase by byte length for each message sent|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/4|0/4|0/4|
|:hammer:| **RTCDataChannel-id**||||
||DTLS client uses odd data channel IDs|:x:|:x:|:x:|
||DTLS server uses even data channel IDs|:x:|:x:|:x:|
||`Test Total` |2/2|2/2|0/2|
|:hammer:| **RTCDataChannel-send**||||
||Calling send() when data channel is in connecting state should throw InvalidStateError|:x:|:x:|:x:|
||Data channel should be able to send simple string and receive as string|:x:|:x:|:x:|
||Data channel should be able to send unicode string and receive as unicode string|:white_check_mark:|:x:|:x:|
||Data channel should ignore binaryType and always receive string message as string|:x:|:x:|:x:|
||Data channel should be able to send Uint8Array message and receive as ArrayBuffer|:white_check_mark:|:x:|:x:|
||Data channel should be able to send ArrayBuffer message and receive as ArrayBuffer|:white_check_mark:|:x:|:x:|
||Data channel should be able to send Blob message and receive as ArrayBuffer|:white_check_mark:|:white_check_mark:|:x:|
||Data channel should be able to send ArrayBuffer message and receive as Blob|:white_check_mark:|:white_check_mark:|:x:|
||Data channel binaryType should receive message as Blob by default|:white_check_mark:|:white_check_mark:|:x:|
||Sending multiple messages with different types should succeed and be received|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |3/10|6/10|10/10|
|:hammer:| **RTCDataChannelEvent-constructor**||||
||RTCDataChannelEvent constructor without a required argument.|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent constructor with channel passed as null.|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent constructor with a channel passed as undefined.|:white_check_mark:|:x:|:x:|
||RTCDataChannelEvent constructor with full arguments.|:white_check_mark:|:x:|:x:|
||`Test Total` |0/4|4/4|1/4|
|:hammer:| **RTCDtlsTransport-getRemoteCertificates**||||
||RTCDtlsTransport.prototype.getRemoteCertificates|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCDTMFSender-insertDTMF.https**||||
||insertDTMF() should succeed if tones contains valid DTMF characters|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() should throw InvalidCharacterError if tones contains invalid DTMF characters|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() should throw InvalidStateError if transceiver is stopped|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() should throw InvalidStateError if transceiver.currentDirection is recvonly|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() should throw InvalidStateError if transceiver.currentDirection is inactive|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() should set toneBuffer to provided tones normalized, with old tones overridden|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/6|0/6|3/6|
|:hammer:| **RTCDTMFSender-ontonechange-long.https**||||
||insertDTMF with duration greater than 6000 should be clamped to 6000|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|1/1|
|:hammer:| **RTCDTMFSender-ontonechange.https**||||
||insertDTMF() with default duration and intertoneGap should fire tonechange events at the expected time|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() with explicit duration and intertoneGap should fire tonechange events at the expected time|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF('') should not fire any tonechange event, including for '' tone|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() with duration less than 40 should be clamped to 40|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() with interToneGap less than 30 should be clamped to 30|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF with comma should delay next tonechange event for a constant 2000ms|:white_check_mark:|:white_check_mark:|:x:|
||insertDTMF() with transceiver stopped in the middle should stop future tonechange events from firing|:white_check_mark:|:white_check_mark:|:x:|
||Calling insertDTMF() in the middle of tonechange events should cause future tonechanges to be updated to new tones|:white_check_mark:|:white_check_mark:|:x:|
||Calling insertDTMF() multiple times in the middle of tonechange events should cause future tonechanges to be updated the last provided tones|:white_check_mark:|:white_check_mark:|:x:|
||Calling insertDTMF('') in the middle of tonechange events should stop future tonechange events from firing|:white_check_mark:|:white_check_mark:|:x:|
||Setting transceiver.currentDirection to recvonly in the middle of tonechange events should stop future tonechange events from firing|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/11|0/11|5/11|
|:hammer:| **RTCIceCandidate-constructor**||||
||new RTCIceCandidate()|:x:|:x:|:x:|
||new RTCIceCandidate({})|:x:|:white_check_mark:|:x:|
||new RTCIceCandidate({ ... }) with manually filled default values|:x:|:white_check_mark:|:x:|
||new RTCIceCandidate({ sdpMid: null, sdpMLineIndex: null })|:x:|:white_check_mark:|:x:|
||new RTCIceCandidate({ candidate: '' })|:x:|:white_check_mark:|:x:|
||new RTCIceCandidate({ candidate: null })|:x:|:white_check_mark:|:x:|
||new RTCIceCandidate({ ... }) with valid candidate string only|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ sdpMid: 'audio' })|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ sdpMLineIndex: 0 })|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ sdpMid: 'audio', sdpMLineIndex: 0 })|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ candidate: '', sdpMid: 'audio' }|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ candidate: '', sdpMLineIndex: 0 }|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ ... }) with valid candidate string and sdpMid|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ ... }) with invalid candidate string and sdpMid|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ ... }) with non default value for all fields|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ ... }) with invalid sdpMid|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({ ... }) with invalid sdpMLineIndex|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |6/17|1/17|3/17|
|:hammer:| **RTCIceTransport**||||
||Two connected iceTransports should has matching local/remote candidates returned|:white_check_mark:|:white_check_mark:|:x:|
||Unconnected iceTransport should have empty remote candidates and selected pair|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCPeerConnection-addIceCandidate**||||
||Add null candidate should reject with TypeError|:x:|:x:|:x:|
||Add ICE candidate before setting remote description should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||Add ICE candidate after setting remote description should succeed|:x:|:x:|:x:|
||Add ICE candidate with RTCIceCandidate should succeed|:x:|:x:|:x:|
||Add candidate with only valid sdpMid should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate with only valid sdpMLineIndex should succeed|:white_check_mark:|:white_check_mark:|:x:|
||addIceCandidate with first sdpMid and sdpMLineIndex add candidate to first media stream|:x:|:x:|:x:|
||addIceCandidate with second sdpMid and sdpMLineIndex should add candidate to second media stream|:x:|:x:|:x:|
||Add candidate for first media stream with null ufrag should add candidate to first media stream|:x:|:x:|:x:|
||Adding multiple candidates should add candidates to their corresponding media stream|:x:|:x:|:x:|
||Add with empty candidate string (end of candidate) should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate with both sdpMid and sdpMLineIndex manually set to null should reject with TypeError|:x:|:white_check_mark:|:x:|
||Add candidate with only valid candidate string should reject with TypeError|:x:|:x:|:x:|
||Add candidate with invalid candidate string and both sdpMid and sdpMLineIndex null should reject with TypeError|:x:|:white_check_mark:|:x:|
||Add candidate with empty dict should reject with TypeError|:x:|:x:|:x:|
||Add candidate with manually filled default values should reject with TypeError|:x:|:white_check_mark:|:x:|
||Add candidate with invalid sdpMid should reject with OperationError|:white_check_mark:|:x:|:x:|
||Add candidate with invalid sdpMLineIndex should reject with OperationError|:white_check_mark:|:x:|:x:|
||Invalid sdpMLineIndex should be ignored if valid sdpMid is provided|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate for media stream 2 with null ufrag should succeed|:x:|:x:|:x:|
||Add candidate with invalid ufrag should reject with OperationError|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate with invalid candidate string should reject with OperationError|:white_check_mark:|:x:|:x:|
||Add candidate with sdpMid belonging to different ufrag should reject with OperationError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |14/23|13/23|13/23|
|:hammer:| **RTCPeerConnection-addTrack.https**||||
||addTrack when pc is closed should throw InvalidStateError|:x:|:white_check_mark:|:x:|
||addTrack with single track argument and no mediaStream should succeed|:white_check_mark:|:white_check_mark:|:x:|
||addTrack with single track argument and single mediaStream should succeed|:white_check_mark:|:white_check_mark:|:x:|
||addTrack with single track argument and multiple mediaStreams should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Adding the same track multiple times should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||addTrack with existing sender with null track, same kind, and recvonly direction should reuse sender|:white_check_mark:|:white_check_mark:|:x:|
||addTrack with existing sender with null track, same kind, and sendrecv direction should create new sender|:white_check_mark:|:white_check_mark:|:x:|
||addTrack with existing sender with null track, different kind, and recvonly direction should create new sender|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |1/8|0/8|3/8|
|:hammer:| **RTCPeerConnection-addTransceiver**||||
||addTransceiver() with string argument as invalid kind should throw TypeError|:x:|:white_check_mark:|:x:|
||addTransceiver('audio') should return an audio transceiver|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver('video') should return a video transceiver|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with direction sendonly should have result transceiver.direction be the same|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with direction inactive should have result transceiver.direction be the same|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with invalid direction should throw TypeError|:x:|:white_check_mark:|:x:|
||addTransceiver(track) should have result with sender.track be given track|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver(track) multiple times should create multiple transceivers|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with rid containing invalid non-alphanumeric characters should throw TypeError|:x:|:white_check_mark:|:x:|
||addTransceiver() with rid longer than 16 characters should throw TypeError|:x:|:white_check_mark:|:x:|
||addTransceiver() with valid rid value should succeed|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with readonly ssrc set should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with readonly rtx set should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with readonly fec set should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with valid sendEncodings should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |4/15|0/15|0/15|
|:hammer:| **RTCPeerConnection-canTrickleIceCandidates**||||
||canTrickleIceCandidates property is null prior to setRemoteDescription|:x:|:white_check_mark:|:x:|
||canTrickleIceCandidates property is true after setRemoteDescription with a=ice-options:trickle|:white_check_mark:|:white_check_mark:|:x:|
||canTrickleIceCandidates property is false after setRemoteDescription without a=ice-options:trickle|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |1/3|0/3|3/3|
|:hammer:| **RTCPeerConnection-connectionState**||||
||Initial connectionState should be new|:x:|:white_check_mark:|:x:|
||connection with one data channel should eventually have connected connection state|:x:|:white_check_mark:|:x:|
||`Test Total` |1/2|0/2|0/2|
|:hammer:| **RTCPeerConnection-constructor**||||
||RTCPeerConnection.length|:x:|:x:|:x:|
||new RTCPeerConnection()|:x:|:x:|:x:|
||new RTCPeerConnection(null)|:x:|:x:|:x:|
||new RTCPeerConnection(undefined)|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({})|:x:|:x:|:x:|
||new RTCPeerConnection({ peerIdentity: toStringThrows })|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection({ certificates: null })|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ certificates: undefined })|:x:|:x:|:x:|
||new RTCPeerConnection({ certificates: [] })|:x:|:x:|:x:|
||new RTCPeerConnection({ certificates: [null] })|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ certificates: [undefined] })|:white_check_mark:|:x:|:x:|
||localDescription initial value|:x:|:white_check_mark:|:x:|
||currentLocalDescription initial value|:x:|:white_check_mark:|:x:|
||pendingLocalDescription initial value|:x:|:white_check_mark:|:x:|
||remoteDescription initial value|:x:|:white_check_mark:|:x:|
||currentRemoteDescription initial value|:x:|:white_check_mark:|:x:|
||pendingRemoteDescription initial value|:x:|:white_check_mark:|:x:|
||signalingState initial value|:x:|:x:|:x:|
||iceGatheringState initial value|:x:|:x:|:x:|
||iceConnectionState initial value|:x:|:x:|:x:|
||connectionState initial value|:x:|:white_check_mark:|:x:|
||canTrickleIceCandidates initial value|:x:|:white_check_mark:|:x:|
||`Test Total` |17/22|13/22|21/22|
|:hammer:| **RTCPeerConnection-createAnswer**||||
||createAnswer() with null remoteDescription should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||createAnswer() after setting remote description should succeed|:x:|:white_check_mark:|:x:|
||createAnswer() when connection is closed reject with InvalidStateError|:x:|:x:|:x:|
||`Test Total` |3/3|1/3|3/3|
|:hammer:| **RTCPeerConnection-createDataChannel**||||
||createDataChannel with no argument should throw TypeError|:white_check_mark:|:x:|:x:|
||createDataChannel with closed connection should throw InvalidStateError|:white_check_mark:|:x:|:x:|
||createDataChannel attribute default values|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with provided parameters should initialize attributes to provided values|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with label "foo" should succeed|:x:|:x:|:x:|
||createDataChannel with label null should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with label undefined should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with label lone surrogate should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with ordered false should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with ordered null/undefined should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with maxPacketLifeTime 0 should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with maxRetransmits 0 should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with both maxPacketLifeTime and maxRetransmits should throw SyntaxError|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with protocol "foo" should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with protocol null should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with protocol undefined should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with protocol lone surrogate should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with negotiated true should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with id 0 should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with id 1 should succeed|:white_check_mark:|:x:|:x:|
||createDataChannel with id 65534 should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with id -1 should throw TypeError|:white_check_mark:|:x:|:x:|
||createDataChannel with id 65535 should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with id 65536 should throw TypeError|:white_check_mark:|:x:|:x:|
||createDataChannel with priority "high" should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with invalid priority should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with negotiated false and long label should throw TypeError|:x:|:white_check_mark:|:x:|
||createDataChannel with negotiated false and long protocol should throw TypeError|:x:|:white_check_mark:|:x:|
||createDataChannel with negotiated true and long label and long protocol should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Channels created after SCTP transport is established should have id assigned|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |3/30|14/30|11/30|
|:hammer:| **RTCPeerConnection-createOffer-offerToReceive**||||
||createOffer() with offerToReceiveAudio set to false should not create a transceiver|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() with offerToReceiveAudio should create a "recvonly" transceiver|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveAudio option should be ignored if a non-stopped "recvonly" transceiver exists|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveAudio option should be ignored if a non-stopped "sendrecv" transceiver exists|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveAudio set to false with a track should create a "sendonly" transceiver|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveAudio set to false with a "recvonly" transceiver should change the direction to "inactive"|:white_check_mark:|:white_check_mark:|:x:|
||subsequent offerToReceiveAudio set to false with a track should change the direction to "sendonly"|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() with offerToReceiveVideo set to false should not create a transceiver|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() with offerToReceiveVideo should create a "recvonly" transceiver|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveVideo option should be ignored if a non-stopped "recvonly" transceiver exists|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveVideo option should be ignored if a non-stopped "sendrecv" transceiver exists|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveVideo set to false with a track should create a "sendonly" transceiver|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveVideo set to false with a "recvonly" transceiver should change the direction to "inactive"|:white_check_mark:|:white_check_mark:|:x:|
||subsequent offerToReceiveVideo set to false with a track should change the direction to "sendonly"|:white_check_mark:|:white_check_mark:|:x:|
||offerToReceiveAudio and Video should create two "recvonly" transceivers|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/15|0/15|0/15|
|:hammer:| **RTCPeerConnection-createOffer**||||
||createOffer() with no argument from newly created RTCPeerConnection should succeed|:x:|:white_check_mark:|:x:|
||createOffer() and then setLocalDescription() should succeed|:x:|:white_check_mark:|:x:|
||createOffer() after connection is closed should reject with InvalidStateError|:x:|:x:|:x:|
||When media stream is added when createOffer() is running in parallel, the result offer should contain the new media stream|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() with offerToReceiveAudio should add audio line to all subsequent created offers|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() with offerToReceiveVideo should add video line to all subsequent created offers|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() with offerToReceiveAudio:true then offerToReceiveVideo:true should have result offer with both audio and video line|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for createOffer() and then setLocalDescription() should succeed|:x:|:x:|:x:|
||`Test Total` |4/8|2/8|3/8|
|:hammer:| **RTCPeerConnection-generateCertificate**||||
||generateCertificate() with compulsary RSASSA-PKCS1-v1_5 parameters should succeed|:white_check_mark:|:x:|:x:|
||generateCertificate() with compulsary ECDSA parameters should succeed|:white_check_mark:|:x:|:x:|
||generateCertificate() with invalid string algorithm should reject with NotSupportedError|:white_check_mark:|:x:|:x:|
||generateCertificate() with invalid algorithm dict should reject with NotSupportedError|:white_check_mark:|:x:|:x:|
||generateCertificate() with valid expires parameter should succeed|:white_check_mark:|:x:|:x:|
||generateCertificate() with 0 expires parameter should generate expired cert|:white_check_mark:|:x:|:x:|
||generateCertificate() with invalid range for expires should reject with TypeError|:white_check_mark:|:white_check_mark:|:x:|
||generateCertificate() with invalid type for expires should reject with TypeError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/8|6/8|6/8|
|:hammer:| **RTCPeerConnection-getDefaultIceServers**||||
||RTCPeerConnection.getDefaultIceServers() should return array of RTCIceServer|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCPeerConnection-getIdentityAssertion**||||
||getIdentityAssertion() should load IdP proxy and return assertion generated|:white_check_mark:|:white_check_mark:|:x:|
||getIdentityAssertion() should succeed if mock-idp.js return different domain and protocol in assertion|:white_check_mark:|:white_check_mark:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-execution-failure') if mock-idp.js throws error|:white_check_mark:|:white_check_mark:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-bad-script-failure') if IdP proxy script do not register its callback|:white_check_mark:|:white_check_mark:|:x:|
||getIdentityAssertion() should reject with OperationError if mock-idp.js return invalid result|:white_check_mark:|:white_check_mark:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-load-failure') if IdP cannot be loaded|:white_check_mark:|:white_check_mark:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-need-login') when mock-idp.js requires login|:white_check_mark:|:white_check_mark:|:x:|
||setIdentityProvider() with no peerIdentity provided should use peerIdentity value from getConfiguration()|:white_check_mark:|:white_check_mark:|:x:|
||Calling setIdentityProvider() multiple times should reset identity assertions|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() should return SDP containing identity assertion string if identity provider is set|:white_check_mark:|:white_check_mark:|:x:|
||createOffer() should reject with NotReadableError if identitity assertion request fails|:white_check_mark:|:white_check_mark:|:x:|
||createAnswer() should reject with NotReadableError if identitity assertion request fails|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/12|0/12|0/12|
|:hammer:| **RTCPeerConnection-getStats.https**||||
||getStats() with no argument should succeed|:white_check_mark:|:x:|:x:|
||getStats(null) should succeed|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with track not added to connection should reject with InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with track added via addTrack should succeed|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with track added via addTransceiver should succeed|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with track associated with more than one sender should reject with InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with track associated with both sender and receiver should reject with InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with no argument should return stats report containing peer-connection stats on an empty PC|:white_check_mark:|:x:|:x:|
||getStats() with no argument should return stats report containing peer-connection stats and outbound-track-stats|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with no argument should return stats for no-stream tracks|:white_check_mark:|:white_check_mark:|:x:|
||getStats() on track associated with RtpSender should return stats report containing outbound-rtp stats|:white_check_mark:|:white_check_mark:|:x:|
||getStats() on track associated with RtpReceiver should return stats report containing inbound-rtp stats|:white_check_mark:|:white_check_mark:|:x:|
||getStats() with connected peer connections having tracks and data channel should return all mandatory to implement stats|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/13|2/13|3/13|
|:hammer:| **RTCPeerConnection-getTransceivers**||||
||Initial peer connection should have list of zero senders, receivers and transceivers|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCPeerConnection-iceConnectionState**||||
||Initial iceConnectionState should be new|:x:|:x:|:x:|
||connection with one data channel should eventually have connected connection state|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |1/2|1/2|1/2|
|:hammer:| **RTCPeerConnection-iceGatheringState**||||
||Initial iceGatheringState should be new|:x:|:x:|:x:|
||iceGatheringState should eventually become complete after setLocalDescription|:x:|:x:|:x:|
||connection with one data channel should eventually have connected connection state|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |2/3|2/3|2/3|
|:hammer:| **RTCPeerConnection-ondatachannel**||||
||datachannel event should fire when new data channel is announced to the remote peer|:white_check_mark:|:x:|:x:|
||Data channel created on remote peer should match the same configuration as local peer|:white_check_mark:|:white_check_mark:|:x:|
||Data channel created with negotiated set to true should not fire datachannel event on remote peer|:white_check_mark:|:x:|:x:|
||`Test Total` |0/3|2/3|1/3|
|:hammer:| **RTCPeerConnection-onnegotiationneeded**||||
||Creating first data channel should fire negotiationneeded event|:x:|:x:|:x:|
||calling createDataChannel twice should fire negotiationneeded event once|:x:|:x:|:x:|
||addTransceiver() should fire negotiationneeded event|:white_check_mark:|:white_check_mark:|:x:|
||Calling addTransceiver() twice should fire negotiationneeded event once|:white_check_mark:|:white_check_mark:|:x:|
||Calling both addTransceiver() and createDataChannel() should fire negotiationneeded event once|:white_check_mark:|:white_check_mark:|:x:|
||negotiationneeded event should not fire if signaling state is not stable|:x:|:x:|:x:|
||negotiationneeded event should fire only after signaling state go back to stable|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |3/7|3/7|3/7|
|:hammer:| **RTCPeerConnection-ontrack.https**||||
||setRemoteDescription should trigger ontrack event when the MSID of the stream is is parsed.|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription() with m= line of recvonly direction should not trigger track event|:x:|:white_check_mark:|:x:|
||addTrack() should cause remote connection to fire ontrack when setRemoteDescription()|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver('video') should cause remote connection to fire ontrack when setRemoteDescription()|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with inactive direction should not cause remote connection to fire ontrack when setRemoteDescription()|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |1/5|0/5|1/5|
|:hammer:| **RTCPeerConnection-peerIdentity**||||
||setRemoteDescription() on offer with a=identity should establish peerIdentity|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription() on offer with a=identity that resolve to value different from target peer identity should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription() with peerIdentity set and with IdP proxy that return validationAssertion with mismatch contents should reject with OperationError|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription() and peerIdentity should reject with OperationError if IdP return validated identity that is different from its own domain|:white_check_mark:|:white_check_mark:|:x:|
||When IdP throws error and pc has target peer identity, setRemoteDescription() and peerIdentity rejected with RTCError('idp-execution-error')|:white_check_mark:|:white_check_mark:|:x:|
||IdP failure with no target peer identity should have following setRemoteDescription() succeed and replace pc.peerIdentity with a new promise|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/6|0/6|0/6|
|:hammer:| **RTCPeerConnection-removeTrack.https**||||
||addTransceiver - Calling removeTrack when connection is closed should throw InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||addTrack - Calling removeTrack when connection is closed should throw InvalidStateError|:x:|:white_check_mark:|:x:|
||addTransceiver - Calling removeTrack on different connection that is closed should throw InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||addTrack - Calling removeTrack on different connection that is closed should throw InvalidStateError|:x:|:white_check_mark:|:x:|
||addTransceiver - Calling removeTrack on different connection should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||addTrack - Calling removeTrack on different connection should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver - Calling removeTrack with valid sender should set sender.track to null|:white_check_mark:|:white_check_mark:|:x:|
||addTrack - Calling removeTrack with valid sender should set sender.track to null|:white_check_mark:|:white_check_mark:|:x:|
||Calling removeTrack with currentDirection sendrecv should set direction to recvonly|:white_check_mark:|:white_check_mark:|:x:|
||Calling removeTrack with currentDirection sendonly should set direction to inactive|:white_check_mark:|:white_check_mark:|:x:|
||Calling removeTrack with currentDirection recvonly should not change direction|:white_check_mark:|:white_check_mark:|:x:|
||Calling removeTrack with currentDirection inactive should not change direction|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |2/12|0/12|2/12|
|:hammer:| **RTCPeerConnection-setDescription-transceiver**||||
||setLocalDescription(offer) with m= section should assign mid to corresponding transceiver|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription(offer) with m= section and no existing transceiver should create corresponding transceiver|:white_check_mark:|:white_check_mark:|:x:|
||setLocalDescription(rollback) should unset transceiver.mid|:white_check_mark:|:white_check_mark:|:x:|
||setLocalDescription(rollback) should only unset transceiver mids associated with current round|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription(rollback) should remove newly created transceiver from transceiver list|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/5|0/5|0/5|
|:hammer:| **RTCPeerConnection-setLocalDescription-answer**||||
||setLocalDescription() with valid answer should succeed|:x:|:white_check_mark:|:x:|
||setLocalDescription() with type answer and null sdp should use lastAnswer generated from createAnswer|:x:|:white_check_mark:|:x:|
||setLocalDescription() with answer not created by own createAnswer() should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||Calling setLocalDescription(answer) from stable state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||Calling setLocalDescription(answer) from have-local-offer state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setLocalDescription() with valid answer should succeed|:white_check_mark:|:x:|:x:|
||`Test Total` |4/6|1/6|2/6|
|:hammer:| **RTCPeerConnection-setLocalDescription-offer**||||
||setLocalDescription with valid offer should succeed|:x:|:white_check_mark:|:x:|
||setLocalDescription with type offer and null sdp should use lastOffer generated from createOffer|:x:|:white_check_mark:|:x:|
||setLocalDescription() with offer not created by own createOffer() should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||Set created offer other than last offer should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||Creating and setting offer multiple times should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setLocalDescription with valid offer should succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for Creating and setting offer multiple times should succeed|:x:|:x:|:x:|
||`Test Total` |4/7|2/7|3/7|
|:hammer:| **RTCPeerConnection-setLocalDescription-pranswer**||||
||setLocalDescription(pranswer) from stable state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||setLocalDescription(pranswer) should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setLocalDescription(pranswer) can be applied multiple times while still in have-local-pranswer|:x:|:x:|:x:|
||setLocalDescription(answer) from have-local-pranswer state should succeed|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setLocalDescription(pranswer) should succeed|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setLocalDescription(pranswer) can be applied multiple times while still in have-local-pranswer|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setLocalDescription(answer) from have-local-pranswer state should succeed|:white_check_mark:|:x:|:x:|
||`Test Total` |3/7|4/7|0/7|
|:hammer:| **RTCPeerConnection-setLocalDescription-rollback**||||
||setLocalDescription(rollback) from have-local-offer state should reset back to stable state|:white_check_mark:|:white_check_mark:|:x:|
||setLocalDescription(rollback) from stable state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||setLocalDescription(rollback) after setting answer description should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||setLocalDescription(rollback) should ignore invalid sdp content and succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setLocalDescription(rollback) from have-local-offer state should reset back to stable state|:x:|:x:|:x:|
||`Test Total` |2/5|0/5|2/5|
|:hammer:| **RTCPeerConnection-setLocalDescription**||||
||Calling createOffer() and setLocalDescription() again after one round of local-offer/remote-answer should succeed|:x:|:white_check_mark:|:x:|
||Switching role from answerer to offerer after going back to stable state should succeed|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for Calling createOffer() and setLocalDescription() again after one round of local-offer/remote-answer should succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for Switching role from answerer to offerer after going back to stable state should succeed|:white_check_mark:|:x:|:x:|
||`Test Total` |3/4|2/4|3/4|
|:hammer:| **RTCPeerConnection-setRemoteDescription-answer**||||
||setRemoteDescription() with valid state and answer should succeed|:x:|:white_check_mark:|:x:|
||Calling setRemoteDescription(answer) from stable state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||Calling setRemoteDescription(answer) from have-remote-offer state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription() with valid state and answer should succeed|:x:|:x:|:x:|
||`Test Total` |4/4|1/4|2/4|
|:hammer:| **RTCPeerConnection-setRemoteDescription-offer**||||
||setRemoteDescription with valid offer should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription multiple times should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription multiple times with different offer should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription(offer) with invalid SDP should reject with RTCError|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription(offer) from have-local-offer state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription with valid offer should succeed|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription multiple times should succeed|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription multiple times with different offer should succeed|:white_check_mark:|:x:|:x:|
||`Test Total` |1/8|3/8|3/8|
|:hammer:| **RTCPeerConnection-setRemoteDescription-pranswer**||||
||setRemoteDescription(pranswer) from stable state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||setRemoteDescription(pranswer) from have-local-offer state should succeed|:x:|:white_check_mark:|:x:|
||setRemoteDescription(pranswer) multiple times should succeed|:x:|:x:|:x:|
||setRemoteDescription(answer) from have-remote-pranswer state should succeed|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(pranswer) from have-local-offer state should succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(pranswer) multiple times should succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(answer) from have-remote-pranswer state should succeed|:x:|:x:|:x:|
||`Test Total` |7/7|4/7|0/7|
|:hammer:| **RTCPeerConnection-setRemoteDescription-replaceTrack.https**||||
||replaceTrack() sets the track attribute to a new track.|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() sets the track attribute to null.|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() does not set the track synchronously.|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() rejects when the peer connection is closed.|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() rejects when invoked after removeTrack().|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() rejects after a subsequent removeTrack().|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/6|0/6|0/6|
|:hammer:| **RTCPeerConnection-setRemoteDescription-rollback**||||
||setRemoteDescription(rollback) in have-remote-offer state should revert to stable state|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription(rollback) from stable state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||setRemoteDescription(rollback) should ignore invalid sdp content and succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(rollback) in have-remote-offer state should revert to stable state|:x:|:x:|:x:|
||`Test Total` |1/4|0/4|2/4|
|:hammer:| **RTCPeerConnection-setRemoteDescription-tracks.https**||||
||addTrack() with a track and no stream makes ontrack fire with a track and no stream.|:white_check_mark:|:white_check_mark:|:x:|
||addTrack() with a track and a stream makes ontrack fire with a track and a stream.|:x:|:white_check_mark:|:x:|
||ontrack fires before setRemoteDescription resolves.|:x:|:white_check_mark:|:x:|
||addTrack() with two tracks and one stream makes ontrack fire twice with the tracks and shared stream.|:white_check_mark:|:white_check_mark:|:x:|
||addTrack() with a track and two streams makes ontrack fire with a track and two streams.|:white_check_mark:|:white_check_mark:|:x:|
||ontrack's receiver matches getReceivers().|:white_check_mark:|:white_check_mark:|:x:|
||removeTrack() does not remove the receiver.|:white_check_mark:|:white_check_mark:|:x:|
||removeTrack() makes stream.onremovetrack fire and the track to be removed from the stream.|:white_check_mark:|:white_check_mark:|:x:|
||stream.onremovetrack fires before setRemoteDescription resolves.|:white_check_mark:|:white_check_mark:|:x:|
||removeTrack() makes track.onmute fire and the track to be muted.|:white_check_mark:|:white_check_mark:|:x:|
||track.onmute fires before setRemoteDescription resolves.|:white_check_mark:|:white_check_mark:|:x:|
||removeTrack() twice is safe.|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |2/12|0/12|1/12|
|:hammer:| **RTCPeerConnection-setRemoteDescription**||||
||setRemoteDescription with invalid type and invalid SDP should reject with TypeError|:white_check_mark:|:x:|:x:|
||setRemoteDescription() with invalid SDP and stable state should reject with InvalidStateError|:x:|:white_check_mark:|:x:|
||Calling setRemoteDescription() again after one round of remote-offer/local-answer should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Switching role from offerer to answerer after going back to stable state should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for Calling setRemoteDescription() again after one round of remote-offer/local-answer should succeed|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for Switching role from offerer to answerer after going back to stable state should succeed|:x:|:x:|:x:|
||`Test Total` |1/6|1/6|2/6|
|:hammer:| **RTCPeerConnection-track-stats.https**||||
||addTrack() without setLocalDescription() yields track stats|:white_check_mark:|:white_check_mark:|:x:|
||addTrack() without setLocalDescription() yields media stream stats|:white_check_mark:|:white_check_mark:|:x:|
||addTrack() with setLocalDescription() yields track stats|:white_check_mark:|:white_check_mark:|:x:|
||addTrack() with setLocalDescription() yields media stream stats|:white_check_mark:|:white_check_mark:|:x:|
||addTrack(): Media stream stats references track stats|:white_check_mark:|:white_check_mark:|:x:|
||Legacy addStream(): Media stream stats references track stats|:white_check_mark:|:x:|:x:|
||O/A exchange yields outbound RTP stream stats for sending track|:white_check_mark:|:white_check_mark:|:x:|
||O/A exchange yields inbound RTP stream stats for receiving track|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() before offer: new track attachment stats present|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() after offer, before answer: new track attachment stats present|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack() after answer: new track attachment stats present|:white_check_mark:|:white_check_mark:|:x:|
||replaceTrack(): original track attachment stats present after replacing|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/12|1/12|0/12|
|:hammer:| **RTCPeerConnectionIceEvent-constructor**||||
||RTCPeerConnectionIceEvent with no arguments throws TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent with no eventInitDict (default)|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent with empty object as eventInitDict (default)|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent.candidate is null when constructed with { candidate: null }|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent.candidate is null when constructed with { candidate: undefined }|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent with RTCIceCandidate|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent with non RTCIceCandidate object throws|:white_check_mark:|:x:|:x:|
||RTCPeerConnectionIceEvent bubbles and cancelable|:white_check_mark:|:x:|:x:|
||`Test Total` |0/8|5/8|6/8|
|:hammer:| **RTCRtpParameters-codecs**||||
||setParameters() with codec.payloadType modified should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with codec.mimeType modified should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with codec.clockRate modified should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with codec.channels modified should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with codec.sdpFmtpLine modified should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with new codecs inserted should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters with reordered codecs should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters with dropped codec should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/8|0/8|0/8|
|:hammer:| **RTCRtpParameters-degradationPreference**||||
||setParameters with degradationPreference set should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters with degradationPreference unset should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpParameters-encodings**||||
||addTransceiver() with undefined sendEncodings should have default encoding parameter with active set to true|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() with empty list sendEncodings should have default encoding parameter with active set to true|:white_check_mark:|:white_check_mark:|:x:|
||sender.getParameters() should return sendEncodings set by addTransceiver()|:white_check_mark:|:white_check_mark:|:x:|
||sender.setParameters() with mismatch number of encodings should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||sender.setParameters() with encodings unset should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.ssrc field should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.rtx field should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.fec field should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.rid field should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with encoding.scaleResolutionDownBy field set to less than 1.0 should reject with RangeError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with encoding.scaleResolutionDownBy field set to greater than 1.0 should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.dtx should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with unset encoding.dtx should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.active should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.priority should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.ptime should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.maxBitrate should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified encoding.maxFramerate should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/18|0/18|0/18|
|:hammer:| **RTCRtpParameters-headerExtensions**||||
||setParameters() with modified headerExtensions should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpParameters-rtcp**||||
||setParameters() with modified rtcp.cname should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with modified rtcp.reducedSize should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpParameters-transactionId**||||
||sender.getParameters() should return different transaction IDs for each call|:white_check_mark:|:white_check_mark:|:x:|
||sender.setParameters() with transaction ID different from last getParameters() should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||sender.setParameters() with transaction ID unset should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() twice with the same parameters should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||setParameters() with parameters older than last getParameters() should reject with InvalidModificationError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/5|0/5|0/5|
|:hammer:| **RTCRtpReceiver-getCapabilities**||||
||RTCRtpSender.getCapabilities('audio') should return RTCRtpCapabilities dictionary|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender.getCapabilities('video') should return RTCRtpCapabilities dictionary|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpReceiver-getContributingSources.https**||||
||getContributingSources() should return list of CSRC after connection is established|:x:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpReceiver-getParameters**||||
||RTCRtpReceiver.prototype.getParameters|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpReceiver-getStats**||||
||receiver.getStats() should return stats report containing inbound-rtp stats|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpReceiver-getSynchronizationSources.https**||||
||getContributingSources() should return list of CSRC after connection is established|:x:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpSender-getCapabilities**||||
||RTCRtpSender.getCapabilities('audio') should return RTCRtpCapabilities dictionary|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpSender.getCapabilities('video') should return RTCRtpCapabilities dictionary|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpSender-getStats.https**||||
||sender.getStats() via addTransceiver should return stats report containing outbound-rtp stats|:white_check_mark:|:white_check_mark:|:x:|
||sender.getStats() via addTrack should return stats report containing outbound-rtp stats|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpSender-replaceTrack**||||
||Calling replaceTrack on closed connection should reject with InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack with track of different kind should reject with TypeError|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack on stopped sender should reject with InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack on sender with null track and not set to session description should resolve with sender.track set to given track|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack on sender not set to session description should resolve with sender.track set to given track|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack(null) on sender not set to session description should resolve with sender.track set to null|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack(null) on sender set to session description should resolve with sender.track set to null|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack on sender with stopped track and and set to session description should resolve with sender.track set to given track|:white_check_mark:|:white_check_mark:|:x:|
||Calling replaceTrack on sender with similar track and and set to session description should resolve with sender.track set to new track|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/9|0/9|0/9|
|:hammer:| **RTCRtpSender-setParameters**||||
||setParameters() when transceiver is stopped should reject with InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpTransceiver-setCodecPreferences**||||
||setCodecPreferences() on audio transceiver with codecs returned from RTCRtpSender.getCapabilities('audio') should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences() on video transceiver with codecs returned from RTCRtpReceiver.getCapabilities('video') should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences() with both sender receiver codecs combined should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences([]) should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences() with reordered codecs should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences() on audio transceiver with codecs returned from getCapabilities('video') should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences() with user defined codec should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences() with user defined codec together with codecs returned from getCapabilities() should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||setCodecPreferences() with modified codecs returned from getCapabilities() should throw InvalidAccessError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/9|0/9|0/9|
|:hammer:| **RTCRtpTransceiver-setDirection**||||
||setDirection should change transceiver.direction|:white_check_mark:|:white_check_mark:|:x:|
||setDirection with same direction should have no effect|:white_check_mark:|:white_check_mark:|:x:|
||setDirection should change transceiver.direction independent of transceiver.currentDirection|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/3|0/3|0/3|
|:hammer:| **RTCSctpTransport-constructor**||||
||setRemoteDescription() with answer containing data media should initialize pc.sctp|:white_check_mark:|:white_check_mark:|:x:|
||setLocalDescription() with answer containing data media should initialize pc.sctp|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCSctpTransport-maxMessageSize**||||
||Determine the local side send limitation (canSendSize) by offering a max-message-size of 0|:white_check_mark:|:white_check_mark:|:x:|
||Remote offer SDP missing max-message-size attribute|:white_check_mark:|:white_check_mark:|:x:|
||max-message-size with a (non-zero) value provided by the remote peer|:white_check_mark:|:white_check_mark:|:x:|
||Renegotiate max-message-size with a (non-zero) value provided by the remote peer|:white_check_mark:|:white_check_mark:|:x:|
||max-message-size with a (non-zero) value larger than canSendSize provided by the remote peer|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/5|0/5|0/5|
|:hammer:| **RTCTrackEvent-constructor**||||
||new RTCTrackEvent() with valid receiver, track, transceiver should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCTrackEvent() with valid receiver, track, streams, transceiver should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCTrackEvent() with valid receiver, track, multiple streams, transceiver should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCTrackEvent() with unrelated receiver, track, streams, transceiver should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCTrackEvent() with no transceiver should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCTrackEvent() with no track should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCTrackEvent() with no receiver should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |0/7|0/7|0/7|
|:hammer:| **simplecall**||||
||Can set up a basic WebRTC call.|:x:|:white_check_mark:|:x:|
||`Test Total` |0/1|0/1|1/1|
||`Totals` |270/1099|360/1099|394/1099|
