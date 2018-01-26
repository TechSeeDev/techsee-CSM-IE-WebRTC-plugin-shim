# Web Platform test results
||Test|IE|Chrome|Firefox|
|---|---|---|---|---|
|:hammer:| **datachannel-emptystring**||||
||Can send empty strings across a WebRTC data channel.|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **getstats**||||
||Can get stats from a basic WebRTC call.|:x:|:white_check_mark:|:x:|
||`Test Total` |0/1|1/1|0/1|
|:hammer:| **historical**||||
||RTCDataChannel member reliable should not exist|:white_check_mark:|:x:|:x:|
||RTCPeerConnection member addStream should not exist|:x:|:x:|:x:|
||RTCPeerConnection member createDTMFSender should not exist|:white_check_mark:|:x:|:x:|
||RTCPeerConnection member getLocalStreams should not exist|:white_check_mark:|:x:|:x:|
||RTCPeerConnection member getRemoteStreams should not exist|:white_check_mark:|:x:|:x:|
||RTCPeerConnection member getStreamById should not exist|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection member onaddstream should not exist|:white_check_mark:|:x:|:x:|
||RTCPeerConnection member onremovestream should not exist|:white_check_mark:|:x:|:x:|
||RTCPeerConnection member removeStream should not exist|:white_check_mark:|:x:|:x:|
||RTCPeerConnection member updateIce should not exist|:white_check_mark:|:white_check_mark:|:x:|
||mozRTCIceCandidate interface should not exist|:white_check_mark:|:white_check_mark:|:x:|
||mozRTCPeerConnection interface should not exist|:white_check_mark:|:white_check_mark:|:x:|
||mozRTCSessionDescription interface should not exist|:white_check_mark:|:white_check_mark:|:x:|
||webkitRTCPeerConnection interface should not exist|:white_check_mark:|:x:|:x:|
||`Test Total` |13/14|5/14|5/14|
|:hammer:| **interfaces.https**||||
||Main test driver|:white_check_mark:|:white_check_mark:|:x:|
||Test driver for asyncInitCertificate|:x:|:white_check_mark:|:x:|
||Test driver for asyncInitTransports|:x:|:x:|:x:|
||Test driver for asyncInitMediaStreamTrack|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack interface object length|:x:|:white_check_mark:|:x:|
||MediaStreamTrack interface object name|:white_check_mark:|:white_check_mark:|:x:|
||MediaStreamTrack interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||MediaStreamTrack interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||MediaStreamTrack interface: attribute isolated|:x:|:x:|:x:|
||MediaStreamTrack interface: attribute onisolationchange|:x:|:x:|:x:|
||MediaStreamTrack must be primary interface of idlTestObjects.mediaStreamTrack|:x:|:white_check_mark:|:x:|
||Stringification of idlTestObjects.mediaStreamTrack|:x:|:white_check_mark:|:x:|
||MediaStreamTrack interface: idlTestObjects.mediaStreamTrack must inherit property "isolated" with the proper type|:x:|:x:|:x:|
||MediaStreamTrack interface: idlTestObjects.mediaStreamTrack must inherit property "onisolationchange" with the proper type|:white_check_mark:|:x:|:x:|
||MediaStreamTrack must be primary interface of generateMediaStreamTrack('audio')|:x:|:x:|:x:|
||Stringification of generateMediaStreamTrack('audio')|:x:|:x:|:x:|
||MediaStreamTrack interface: generateMediaStreamTrack('audio') must inherit property "isolated" with the proper type|:x:|:x:|:x:|
||MediaStreamTrack interface: generateMediaStreamTrack('audio') must inherit property "onisolationchange" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface object length|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface object name|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation createOffer(RTCOfferOptions)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation createAnswer(RTCAnswerOptions)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation setLocalDescription(RTCSessionDescriptionInit)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute localDescription|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute currentLocalDescription|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute pendingLocalDescription|:x:|:x:|:x:|
||RTCPeerConnection interface: operation setRemoteDescription(RTCSessionDescriptionInit)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute remoteDescription|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute currentRemoteDescription|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute pendingRemoteDescription|:x:|:x:|:x:|
||RTCPeerConnection interface: operation addIceCandidate([object Object],[object Object])|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute signalingState|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute iceGatheringState|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute iceConnectionState|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute connectionState|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute canTrickleIceCandidates|:x:|:x:|:x:|
||RTCPeerConnection interface: operation getDefaultIceServers()|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation getConfiguration()|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation setConfiguration(RTCConfiguration)|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation close()|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute onnegotiationneeded|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute onicecandidate|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute onicecandidateerror|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute onsignalingstatechange|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute oniceconnectionstatechange|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute onicegatheringstatechange|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute onconnectionstatechange|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute onfingerprintfailure|:x:|:x:|:x:|
||RTCPeerConnection interface: operation createOffer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback, RTCOfferOptions)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation setLocalDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation createAnswer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation setRemoteDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation addIceCandidate([object Object],[object Object], VoidFunction, RTCPeerConnectionErrorCallback)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation generateCertificate(AlgorithmIdentifier)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation getSenders()|:x:|:x:|:x:|
||RTCPeerConnection interface: operation getReceivers()|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation getTransceivers()|:x:|:x:|:x:|
||RTCPeerConnection interface: operation addTrack(MediaStreamTrack, MediaStream)|:x:|:x:|:x:|
||RTCPeerConnection interface: operation removeTrack(RTCRtpSender)|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: operation addTransceiver([object Object],[object Object], RTCRtpTransceiverInit)|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute ontrack|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute sctp|:x:|:x:|:x:|
||RTCPeerConnection interface: operation createDataChannel(USVString, RTCDataChannelInit)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: attribute ondatachannel|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation getStats(MediaStreamTrack)|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: operation setIdentityProvider(DOMString, RTCIdentityProviderOptions)|:x:|:x:|:x:|
||RTCPeerConnection interface: operation getIdentityAssertion()|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute peerIdentity|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute idpLoginUrl|:x:|:x:|:x:|
||RTCPeerConnection interface: attribute idpErrorInfo|:x:|:x:|:x:|
||RTCPeerConnection must be primary interface of new RTCPeerConnection()|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCPeerConnection()|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createOffer(RTCOfferOptions)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling createOffer(RTCOfferOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createAnswer(RTCAnswerOptions)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling createAnswer(RTCAnswerOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setLocalDescription(RTCSessionDescriptionInit)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling setLocalDescription(RTCSessionDescriptionInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "localDescription" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "currentLocalDescription" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "pendingLocalDescription" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setRemoteDescription(RTCSessionDescriptionInit)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling setRemoteDescription(RTCSessionDescriptionInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "remoteDescription" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "currentRemoteDescription" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "pendingRemoteDescription" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addIceCandidate([object Object],[object Object])" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling addIceCandidate([object Object],[object Object]) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "signalingState" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "iceGatheringState" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "iceConnectionState" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "connectionState" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "canTrickleIceCandidates" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getDefaultIceServers()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getConfiguration()" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setConfiguration(RTCConfiguration)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling setConfiguration(RTCConfiguration) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "close()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onnegotiationneeded" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onicecandidate" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onicecandidateerror" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onsignalingstatechange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "oniceconnectionstatechange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onicegatheringstatechange" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onconnectionstatechange" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "onfingerprintfailure" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createOffer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback, RTCOfferOptions)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling createOffer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback, RTCOfferOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setLocalDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling setLocalDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createAnswer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling createAnswer(RTCSessionDescriptionCallback, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setRemoteDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling setRemoteDescription(RTCSessionDescriptionInit, VoidFunction, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addIceCandidate([object Object],[object Object], VoidFunction, RTCPeerConnectionErrorCallback)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling addIceCandidate([object Object],[object Object], VoidFunction, RTCPeerConnectionErrorCallback) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "generateCertificate(AlgorithmIdentifier)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling generateCertificate(AlgorithmIdentifier) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getSenders()" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getReceivers()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getTransceivers()" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addTrack(MediaStreamTrack, MediaStream)" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: calling addTrack(MediaStreamTrack, MediaStream) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "removeTrack(RTCRtpSender)" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: calling removeTrack(RTCRtpSender) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "addTransceiver([object Object],[object Object], RTCRtpTransceiverInit)" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: calling addTransceiver([object Object],[object Object], RTCRtpTransceiverInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "ontrack" with the proper type|:white_check_mark:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "sctp" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "createDataChannel(USVString, RTCDataChannelInit)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling createDataChannel(USVString, RTCDataChannelInit) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "ondatachannel" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getStats(MediaStreamTrack)" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: calling getStats(MediaStreamTrack) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "setIdentityProvider(DOMString, RTCIdentityProviderOptions)" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: calling setIdentityProvider(DOMString, RTCIdentityProviderOptions) on new RTCPeerConnection() with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "getIdentityAssertion()" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "peerIdentity" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "idpLoginUrl" with the proper type|:x:|:x:|:x:|
||RTCPeerConnection interface: new RTCPeerConnection() must inherit property "idpErrorInfo" with the proper type|:x:|:x:|:x:|
||RTCSessionDescription interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface object length|:x:|:x:|:x:|
||RTCSessionDescription interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCSessionDescription interface: attribute type|:x:|:x:|:x:|
||RTCSessionDescription interface: attribute sdp|:x:|:x:|:x:|
||RTCSessionDescription interface: operation toJSON()|:x:|:white_check_mark:|:x:|
||RTCSessionDescription must be primary interface of new RTCSessionDescription({ type: 'offer' })|:white_check_mark:|:white_check_mark:|:x:|
||Stringification of new RTCSessionDescription({ type: 'offer' })|:x:|:white_check_mark:|:x:|
||RTCSessionDescription interface: new RTCSessionDescription({ type: 'offer' }) must inherit property "type" with the proper type|:x:|:white_check_mark:|:x:|
||RTCSessionDescription interface: new RTCSessionDescription({ type: 'offer' }) must inherit property "sdp" with the proper type|:x:|:x:|:x:|
||RTCSessionDescription interface: new RTCSessionDescription({ type: 'offer' }) must inherit property "toJSON()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||Test default toJSON operation of RTCSessionDescription|:x:|:x:|:x:|
||RTCIceCandidate interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface object length|:x:|:x:|:x:|
||RTCIceCandidate interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: existence and properties of interface prototype object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: existence and properties of interface prototype object's "constructor" property|:white_check_mark:|:white_check_mark:|:x:|
||RTCIceCandidate interface: attribute candidate|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute sdpMid|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute sdpMLineIndex|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute foundation|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute component|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute priority|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute ip|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute protocol|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute port|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute type|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute tcpType|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute relatedAddress|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute relatedPort|:x:|:x:|:x:|
||RTCIceCandidate interface: attribute usernameFragment|:x:|:x:|:x:|
||RTCIceCandidate interface: operation toJSON()|:x:|:white_check_mark:|:x:|
||RTCIceCandidate must be primary interface of new RTCIceCandidate({ sdpMid: 1 })|:x:|:x:|:x:|
||Stringification of new RTCIceCandidate({ sdpMid: 1 })|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "candidate" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "sdpMid" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "sdpMLineIndex" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "foundation" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "component" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "priority" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "ip" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "protocol" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "port" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "type" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "tcpType" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "relatedAddress" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "relatedPort" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "usernameFragment" with the proper type|:x:|:x:|:x:|
||RTCIceCandidate interface: new RTCIceCandidate({ sdpMid: 1 }) must inherit property "toJSON()" with the proper type|:x:|:x:|:x:|
||Test toJSON operation of RTCIceCandidate|:x:|:x:|:x:|
||RTCPeerConnectionIceEvent interface: existence and properties of interface object|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface object length|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface object name|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface: attribute candidate|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface: attribute url|:x:|:x:|:x:|
||RTCPeerConnectionIceEvent must be primary interface of new RTCPeerConnectionIceEvent('ice')|:x:|:white_check_mark:|:x:|
||Stringification of new RTCPeerConnectionIceEvent('ice')|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface: new RTCPeerConnectionIceEvent('ice') must inherit property "candidate" with the proper type|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent interface: new RTCPeerConnectionIceEvent('ice') must inherit property "url" with the proper type|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface object length|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface object name|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute hostCandidate|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute url|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute errorCode|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: attribute errorText|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent must be primary interface of new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 });|:x:|:x:|:x:|
||Stringification of new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 });|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "hostCandidate" with the proper type|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "url" with the proper type|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "errorCode" with the proper type|:x:|:x:|:x:|
||RTCPeerConnectionIceErrorEvent interface: new RTCPeerConnectionIceErrorEvent('ice-error', { errorCode: 701 }); must inherit property "errorText" with the proper type|:x:|:x:|:x:|
||RTCCertificate interface: existence and properties of interface object|:x:|:white_check_mark:|:x:|
||RTCCertificate interface object length|:x:|:white_check_mark:|:x:|
||RTCCertificate interface object name|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: attribute expires|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: operation getFingerprints()|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: operation getAlgorithm()|:x:|:x:|:x:|
||RTCCertificate must be primary interface of idlTestObjects.certificate|:x:|:white_check_mark:|:x:|
||Stringification of idlTestObjects.certificate|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: idlTestObjects.certificate must inherit property "expires" with the proper type|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: idlTestObjects.certificate must inherit property "getFingerprints()" with the proper type|:x:|:white_check_mark:|:x:|
||RTCCertificate interface: idlTestObjects.certificate must inherit property "getAlgorithm()" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCRtpSender interface object length|:x:|:x:|:x:|
||RTCRtpSender interface object name|:x:|:x:|:x:|
||RTCRtpSender interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCRtpSender interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCRtpSender interface: attribute track|:x:|:x:|:x:|
||RTCRtpSender interface: attribute transport|:x:|:x:|:x:|
||RTCRtpSender interface: attribute rtcpTransport|:x:|:x:|:x:|
||RTCRtpSender interface: operation getCapabilities(DOMString)|:x:|:x:|:x:|
||RTCRtpSender interface: operation setParameters(RTCRtpParameters)|:x:|:x:|:x:|
||RTCRtpSender interface: operation getParameters()|:x:|:x:|:x:|
||RTCRtpSender interface: operation replaceTrack(MediaStreamTrack)|:x:|:x:|:x:|
||RTCRtpSender interface: operation getStats()|:x:|:x:|:x:|
||RTCRtpSender interface: attribute dtmf|:x:|:x:|:x:|
||RTCRtpSender must be primary interface of new RTCPeerConnection().addTransceiver('audio').sender|:x:|:x:|:x:|
||Stringification of new RTCPeerConnection().addTransceiver('audio').sender|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "track" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "transport" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "rtcpTransport" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "getCapabilities(DOMString)" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: calling getCapabilities(DOMString) on new RTCPeerConnection().addTransceiver('audio').sender with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "setParameters(RTCRtpParameters)" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: calling setParameters(RTCRtpParameters) on new RTCPeerConnection().addTransceiver('audio').sender with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "getParameters()" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "replaceTrack(MediaStreamTrack)" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: calling replaceTrack(MediaStreamTrack) on new RTCPeerConnection().addTransceiver('audio').sender with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "getStats()" with the proper type|:x:|:x:|:x:|
||RTCRtpSender interface: new RTCPeerConnection().addTransceiver('audio').sender must inherit property "dtmf" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface object length|:x:|:white_check_mark:|:x:|
||RTCRtpReceiver interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: attribute track|:x:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: attribute transport|:x:|:x:|:x:|
||RTCRtpReceiver interface: attribute rtcpTransport|:x:|:x:|:x:|
||RTCRtpReceiver interface: operation getCapabilities(DOMString)|:x:|:x:|:x:|
||RTCRtpReceiver interface: operation getParameters()|:x:|:x:|:x:|
||RTCRtpReceiver interface: operation getContributingSources()|:x:|:white_check_mark:|:x:|
||RTCRtpReceiver interface: operation getSynchronizationSources()|:x:|:x:|:x:|
||RTCRtpReceiver interface: operation getStats()|:x:|:x:|:x:|
||RTCRtpReceiver must be primary interface of new RTCPeerConnection().addTransceiver('audio').receiver|:x:|:x:|:x:|
||Stringification of new RTCPeerConnection().addTransceiver('audio').receiver|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "track" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "transport" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "rtcpTransport" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getCapabilities(DOMString)" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: calling getCapabilities(DOMString) on new RTCPeerConnection().addTransceiver('audio').receiver with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getParameters()" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getContributingSources()" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getSynchronizationSources()" with the proper type|:x:|:x:|:x:|
||RTCRtpReceiver interface: new RTCPeerConnection().addTransceiver('audio').receiver must inherit property "getStats()" with the proper type|:x:|:x:|:x:|
||RTCRtpContributingSource interface: existence and properties of interface object|:x:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface object length|:x:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface object name|:x:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface: attribute timestamp|:x:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface: attribute source|:x:|:white_check_mark:|:x:|
||RTCRtpContributingSource interface: attribute audioLevel|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface object length|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface object name|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface: attribute timestamp|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface: attribute source|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface: attribute audioLevel|:x:|:x:|:x:|
||RTCRtpSynchronizationSource interface: attribute voiceActivityFlag|:x:|:x:|:x:|
||RTCRtpTransceiver interface: existence and properties of interface object|:white_check_mark:|:x:|:x:|
||RTCRtpTransceiver interface object length|:x:|:x:|:x:|
||RTCRtpTransceiver interface object name|:x:|:x:|:x:|
||RTCRtpTransceiver interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCRtpTransceiver interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCRtpTransceiver interface: attribute mid|:x:|:x:|:x:|
||RTCRtpTransceiver interface: attribute sender|:x:|:x:|:x:|
||RTCRtpTransceiver interface: attribute receiver|:x:|:x:|:x:|
||RTCRtpTransceiver interface: attribute stopped|:x:|:x:|:x:|
||RTCRtpTransceiver interface: attribute direction|:x:|:x:|:x:|
||RTCRtpTransceiver interface: attribute currentDirection|:x:|:x:|:x:|
||RTCRtpTransceiver interface: operation setDirection(RTCRtpTransceiverDirection)|:x:|:x:|:x:|
||RTCRtpTransceiver interface: operation stop()|:x:|:x:|:x:|
||RTCRtpTransceiver interface: operation setCodecPreferences([object Object])|:x:|:x:|:x:|
||RTCRtpTransceiver must be primary interface of new RTCPeerConnection().addTransceiver('audio')|:x:|:x:|:x:|
||Stringification of new RTCPeerConnection().addTransceiver('audio')|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "mid" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "sender" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "receiver" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "stopped" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "direction" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "currentDirection" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "setDirection(RTCRtpTransceiverDirection)" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: calling setDirection(RTCRtpTransceiverDirection) on new RTCPeerConnection().addTransceiver('audio') with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "stop()" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: new RTCPeerConnection().addTransceiver('audio') must inherit property "setCodecPreferences([object Object])" with the proper type|:x:|:x:|:x:|
||RTCRtpTransceiver interface: calling setCodecPreferences([object Object]) on new RTCPeerConnection().addTransceiver('audio') with too few arguments must throw TypeError|:x:|:x:|:x:|
||RTCDtlsTransport interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCDtlsTransport interface object length|:x:|:x:|:x:|
||RTCDtlsTransport interface object name|:x:|:x:|:x:|
||RTCDtlsTransport interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCDtlsTransport interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCDtlsTransport interface: attribute transport|:x:|:x:|:x:|
||RTCDtlsTransport interface: attribute state|:x:|:x:|:x:|
||RTCDtlsTransport interface: operation getRemoteCertificates()|:x:|:x:|:x:|
||RTCDtlsTransport interface: attribute onstatechange|:x:|:x:|:x:|
||RTCDtlsTransport must be primary interface of idlTestObjects.dtlsTransport|:x:|:x:|:x:|
||Stringification of idlTestObjects.dtlsTransport|:x:|:x:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "transport" with the proper type|:x:|:x:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "state" with the proper type|:x:|:x:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "getRemoteCertificates()" with the proper type|:x:|:x:|:x:|
||RTCDtlsTransport interface: idlTestObjects.dtlsTransport must inherit property "onstatechange" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCIceTransport interface object length|:x:|:x:|:x:|
||RTCIceTransport interface object name|:x:|:x:|:x:|
||RTCIceTransport interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCIceTransport interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCIceTransport interface: attribute role|:x:|:x:|:x:|
||RTCIceTransport interface: attribute component|:x:|:x:|:x:|
||RTCIceTransport interface: attribute state|:x:|:x:|:x:|
||RTCIceTransport interface: attribute gatheringState|:x:|:x:|:x:|
||RTCIceTransport interface: operation getLocalCandidates()|:x:|:x:|:x:|
||RTCIceTransport interface: operation getRemoteCandidates()|:x:|:x:|:x:|
||RTCIceTransport interface: operation getSelectedCandidatePair()|:x:|:x:|:x:|
||RTCIceTransport interface: operation getLocalParameters()|:x:|:x:|:x:|
||RTCIceTransport interface: operation getRemoteParameters()|:x:|:x:|:x:|
||RTCIceTransport interface: attribute onstatechange|:x:|:x:|:x:|
||RTCIceTransport interface: attribute ongatheringstatechange|:x:|:x:|:x:|
||RTCIceTransport interface: attribute onselectedcandidatepairchange|:x:|:x:|:x:|
||RTCIceTransport must be primary interface of idlTestObjects.iceTransport|:x:|:x:|:x:|
||Stringification of idlTestObjects.iceTransport|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "role" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "component" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "state" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "gatheringState" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getLocalCandidates()" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getRemoteCandidates()" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getSelectedCandidatePair()" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getLocalParameters()" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "getRemoteParameters()" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "onstatechange" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "ongatheringstatechange" with the proper type|:x:|:x:|:x:|
||RTCIceTransport interface: idlTestObjects.iceTransport must inherit property "onselectedcandidatepairchange" with the proper type|:x:|:x:|:x:|
||RTCTrackEvent interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCTrackEvent interface object length|:x:|:x:|:x:|
||RTCTrackEvent interface object name|:x:|:x:|:x:|
||RTCTrackEvent interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCTrackEvent interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCTrackEvent interface: attribute receiver|:x:|:x:|:x:|
||RTCTrackEvent interface: attribute track|:x:|:x:|:x:|
||RTCTrackEvent interface: attribute streams|:x:|:x:|:x:|
||RTCTrackEvent interface: attribute transceiver|:x:|:x:|:x:|
||RTCTrackEvent must be primary interface of initTrackEvent()|:x:|:x:|:x:|
||Stringification of initTrackEvent()|:x:|:x:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "receiver" with the proper type|:x:|:x:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "track" with the proper type|:x:|:x:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "streams" with the proper type|:x:|:x:|:x:|
||RTCTrackEvent interface: initTrackEvent() must inherit property "transceiver" with the proper type|:x:|:x:|:x:|
||RTCSctpTransport interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCSctpTransport interface object length|:x:|:x:|:x:|
||RTCSctpTransport interface object name|:x:|:x:|:x:|
||RTCSctpTransport interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCSctpTransport interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCSctpTransport interface: attribute transport|:x:|:x:|:x:|
||RTCSctpTransport interface: attribute maxMessageSize|:x:|:x:|:x:|
||RTCSctpTransport must be primary interface of idlTestObjects.sctpTransport|:x:|:x:|:x:|
||Stringification of idlTestObjects.sctpTransport|:x:|:x:|:x:|
||RTCSctpTransport interface: idlTestObjects.sctpTransport must inherit property "transport" with the proper type|:x:|:x:|:x:|
||RTCSctpTransport interface: idlTestObjects.sctpTransport must inherit property "maxMessageSize" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface object length|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface object name|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute label|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute ordered|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute maxPacketLifeTime|:x:|:x:|:x:|
||RTCDataChannel interface: attribute maxRetransmits|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute protocol|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute negotiated|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute id|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute priority|:x:|:x:|:x:|
||RTCDataChannel interface: attribute readyState|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute bufferedAmount|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute bufferedAmountLowThreshold|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute onopen|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute onbufferedamountlow|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute onerror|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute onclose|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: operation close()|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute onmessage|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: attribute binaryType|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: operation send(USVString)|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: operation send(Blob)|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: operation send(ArrayBuffer)|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: operation send(ArrayBufferView)|:x:|:white_check_mark:|:x:|
||RTCDataChannel must be primary interface of new RTCPeerConnection().createDataChannel('')|:x:|:white_check_mark:|:x:|
||Stringification of new RTCPeerConnection().createDataChannel('')|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "label" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "ordered" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "maxPacketLifeTime" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "maxRetransmits" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "protocol" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "negotiated" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "id" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "priority" with the proper type|:x:|:x:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "readyState" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "bufferedAmount" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "bufferedAmountLowThreshold" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onopen" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onbufferedamountlow" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onerror" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onclose" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "close()" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "onmessage" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "binaryType" with the proper type|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(USVString)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: calling send(USVString) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(Blob)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: calling send(Blob) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(ArrayBuffer)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: calling send(ArrayBuffer) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCDataChannel interface: new RTCPeerConnection().createDataChannel('') must inherit property "send(ArrayBufferView)" with the proper type|:white_check_mark:|:white_check_mark:|:x:|
||RTCDataChannel interface: calling send(ArrayBufferView) on new RTCPeerConnection().createDataChannel('') with too few arguments must throw TypeError|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent interface: existence and properties of interface object|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent interface object length|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent interface object name|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent interface: attribute channel|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent must be primary interface of new RTCDataChannelEvent('channel', { channel: new RTCPeerConnection().createDataChannel('') })|:x:|:x:|:x:|
||Stringification of new RTCDataChannelEvent('channel', { channel: new RTCPeerConnection().createDataChannel('') })|:x:|:x:|:x:|
||RTCDataChannelEvent interface: new RTCDataChannelEvent('channel', { channel: new RTCPeerConnection().createDataChannel('') }) must inherit property "channel" with the proper type|:x:|:x:|:x:|
||RTCDTMFSender interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCDTMFSender interface object length|:x:|:x:|:x:|
||RTCDTMFSender interface object name|:x:|:x:|:x:|
||RTCDTMFSender interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCDTMFSender interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCDTMFSender interface: operation insertDTMF(DOMString, unsigned long, unsigned long)|:x:|:x:|:x:|
||RTCDTMFSender interface: attribute ontonechange|:x:|:x:|:x:|
||RTCDTMFSender interface: attribute toneBuffer|:x:|:x:|:x:|
||RTCDTMFToneChangeEvent interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCDTMFToneChangeEvent interface object length|:x:|:x:|:x:|
||RTCDTMFToneChangeEvent interface object name|:x:|:x:|:x:|
||RTCDTMFToneChangeEvent interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCDTMFToneChangeEvent interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCDTMFToneChangeEvent interface: attribute tone|:x:|:x:|:x:|
||RTCStatsReport interface: existence and properties of interface object|:x:|:white_check_mark:|:x:|
||RTCStatsReport interface object length|:x:|:white_check_mark:|:x:|
||RTCStatsReport interface object name|:x:|:white_check_mark:|:x:|
||RTCStatsReport interface: existence and properties of interface prototype object|:x:|:white_check_mark:|:x:|
||RTCStatsReport interface: existence and properties of interface prototype object's "constructor" property|:x:|:white_check_mark:|:x:|
||RTCIdentityProviderGlobalScope interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityProviderRegistrar interface: existence and properties of interface object|:white_check_mark:|:white_check_mark:|:x:|
||RTCIdentityAssertion interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCIdentityAssertion interface object length|:x:|:x:|:x:|
||RTCIdentityAssertion interface object name|:x:|:x:|:x:|
||RTCIdentityAssertion interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCIdentityAssertion interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCIdentityAssertion interface: attribute idp|:x:|:x:|:x:|
||RTCIdentityAssertion interface: attribute name|:x:|:x:|:x:|
||RTCErrorEvent interface: existence and properties of interface object|:x:|:x:|:x:|
||RTCErrorEvent interface object length|:x:|:x:|:x:|
||RTCErrorEvent interface object name|:x:|:x:|:x:|
||RTCErrorEvent interface: existence and properties of interface prototype object|:x:|:x:|:x:|
||RTCErrorEvent interface: existence and properties of interface prototype object's "constructor" property|:x:|:x:|:x:|
||RTCErrorEvent interface: attribute error|:x:|:x:|:x:|
||RTCErrorEvent must be primary interface of new RTCErrorEvent('error')|:x:|:x:|:x:|
||Stringification of new RTCErrorEvent('error')|:x:|:x:|:x:|
||RTCErrorEvent interface: new RTCErrorEvent('error') must inherit property "error" with the proper type|:x:|:x:|:x:|
||RTCDataChannelEvent must be primary interface of new RTCDataChannelEvent('channel',        { channel: new RTCPeerConnection().createDataChannel('') })|:x:|:white_check_mark:|:x:|
||Stringification of new RTCDataChannelEvent('channel',        { channel: new RTCPeerConnection().createDataChannel('') })|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent interface: new RTCDataChannelEvent('channel',        { channel: new RTCPeerConnection().createDataChannel('') }) must inherit property "channel" with the proper type|:x:|:white_check_mark:|:x:|
||`Test Total` |82/504|201/504|221/504|
|:hammer:| **no-media-call**||||
||Can set up a basic WebRTC call with no data.|:x:|:white_check_mark:|:x:|
||`Test Total` |0/1|1/1|0/1|
|:hammer:| **promises-call**||||
||Can set up a basic WebRTC call with only data using promises.|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |1/1|1/1|1/1|
|:hammer:| **RTCCertificate**||||
||Constructing RTCPeerConnection with expired certificate should reject with InvalidAccessError|:x:|:white_check_mark:|:x:|
||Calling setConfiguration with different set of certs should reject with InvalidModificationError|:x:|:white_check_mark:|:x:|
||RTCCertificate should have at least one fingerprint|:x:|:white_check_mark:|:x:|
||RTCPeerConnection({ certificates }) should generate offer SDP with fingerprint of provided certificate|:x:|:white_check_mark:|:x:|
||RTCPeerConnection({ certificates }) should generate offer SDP with fingerprint of all provided certificates|:x:|:x:|:x:|
||`Test Total` |0/5|4/5|0/5|
|:hammer:| **RTCConfiguration-bundlePolicy**||||
||Default bundlePolicy should be balanced|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ bundlePolicy: undefined }) should have bundlePolicy balanced|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'balanced' }) should succeed|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'max-compat' }) should succeed|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'max-bundle' }) should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration({}) with initial default bundlePolicy balanced should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration({}) with initial bundlePolicy balanced should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration({ bundlePolicy: balanced }) with initial default bundlePolicy balanced should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration({ bundlePolicy: 'balanced' }) with initial bundlePolicy balanced should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration({ bundlePolicy: 'max-compat' }) with initial bundlePolicy max-compat should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration({ bundlePolicy: 'max-bundle' }) with initial bundlePolicy max-bundle should succeed|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection({ bundlePolicy: null }) should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection({ bundlePolicy: 'invalid' }) should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration({ bundlePolicy: 'max-compat' }) with initial bundlePolicy max-bundle should throw InvalidModificationError|:x:|:white_check_mark:|:x:|
||setConfiguration({}) with initial bundlePolicy max-bundle should throw InvalidModificationError|:x:|:white_check_mark:|:x:|
||`Test Total` |13/15|10/15|7/15|
|:hammer:| **RTCConfiguration-iceCandidatePoolSize**||||
||Initialize a new RTCPeerConnection with no iceCandidatePoolSize|:white_check_mark:|:x:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: 0|:white_check_mark:|:x:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: 255|:white_check_mark:|:x:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: -1 (Out Of Range)|:white_check_mark:|:white_check_mark:|:x:|
||Initialize a new RTCPeerConnection with iceCandidatePoolSize: 256 (Out Of Range)|:white_check_mark:|:white_check_mark:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to 0|:white_check_mark:|:x:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to 255|:white_check_mark:|:x:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to -1 (Out Of Range)|:white_check_mark:|:white_check_mark:|:x:|
||Reconfigure RTCPeerConnection instance iceCandidatePoolSize to 256 (Out Of Range)|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |9/9|4/9|0/9|
|:hammer:| **RTCConfiguration-iceServers**||||
||new RTCPeerConnection() should have default configuration.iceServers of undefined|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - { iceServers: null } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - { iceServers: null } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - { iceServers: undefined } should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - { iceServers: undefined } should succeed|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - { iceServers: [] } should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - { iceServers: [] } should succeed|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - { iceServers: [null] } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - { iceServers: [null] } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - { iceServers: [undefined] } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - { iceServers: [undefined] } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - { iceServers: [{}] } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - { iceServers: [{}] } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with empty list urls should succeed|:x:|:x:|:x:|
||setConfiguration(config) - with empty list urls should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with stun server should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with stun server should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with stun server array should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with stun server array should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with 2 stun servers should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with 2 stun servers should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with turn server, username, credential should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turn server, username, credential should succeed|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with turns server and empty string username, credential should succeed|:x:|:x:|:x:|
||setConfiguration(config) - with turns server and empty string username, credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with turn server and empty string username, credential should succeed|:x:|:x:|:x:|
||setConfiguration(config) - with turn server and empty string username, credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with one turns server, one turn server, username, credential should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with one turns server, one turn server, username, credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with stun server and credentialType password should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with stun server and credentialType password should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with turn server and no credentials should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turn server and no credentials should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turn server and only username should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turn server and only username should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turn server and only credential should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turn server and only credential should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turns server and no credentials should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turns server and no credentials should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turns server and only username should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turns server and only username should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with turns server and only credential should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with turns server and only credential should throw InvalidAccessError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with relative url should throw SyntaxError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with relative url should throw SyntaxError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with http url should throw SyntaxError|:x:|:white_check_mark:|:x:|
||setConfiguration(config) - with http url should throw SyntaxError|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with invalid turn url should throw SyntaxError|:x:|:x:|:x:|
||setConfiguration(config) - with invalid turn url should throw SyntaxError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with invalid stun url should throw SyntaxError|:x:|:x:|:x:|
||setConfiguration(config) - with invalid stun url should throw SyntaxError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with empty urls and credentialType password should succeed|:x:|:x:|:x:|
||setConfiguration(config) - with empty urls and credentialType password should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with empty urls and credentialType oauth should succeed|:x:|:x:|:x:|
||setConfiguration(config) - with empty urls and credentialType oauth should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with invalid credentialType should throw TypeError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with invalid credentialType should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with credentialType token should throw TypeError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with credentialType token should throw TypeError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with url field should throw TypeError|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with url field should throw TypeError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with turns server, credentialType password, and RTCOauthCredential credential should throw InvalidAccessError|:x:|:x:|:x:|
||setConfiguration(config) - with turns server, credentialType password, and RTCOauthCredential credential should throw InvalidAccessError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with turns server, credentialType oauth, and string credential should throw InvalidAccessError|:x:|:x:|:x:|
||setConfiguration(config) - with turns server, credentialType oauth, and string credential should throw InvalidAccessError|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with turns server, credentialType oauth and RTCOAuthCredential credential should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with turns server, credentialType oauth and RTCOAuthCredential credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with both turns and stun server, credentialType oauth and RTCOAuthCredential credential should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with both turns and stun server, credentialType oauth and RTCOAuthCredential credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with stun server, credentialType oauth, and string credential should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with stun server, credentialType oauth, and string credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with stun server, credentialType password, and RTCOAuthCredential credential should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration(config) - with stun server, credentialType password, and RTCOAuthCredential credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with empty urls list, credentialType oauth, and string credential should succeed|:x:|:x:|:x:|
||setConfiguration(config) - with empty urls list, credentialType oauth, and string credential should succeed|:x:|:x:|:x:|
||new RTCPeerConnection(config) - with empty urls list, credentialType password, and RTCOAuthCredential credential should succeed|:x:|:x:|:x:|
||setConfiguration(config) - with empty urls list, credentialType password, and RTCOAuthCredential credential should succeed|:x:|:x:|:x:|
||`Test Total` |28/77|24/77|24/77|
|:hammer:| **RTCConfiguration-iceTransportPolicy**||||
||new RTCPeerConnection() should have default iceTransportPolicy all|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ iceTransportPolicy: undefined }) should have default iceTransportPolicy all|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ iceTransportPolicy: 'all' }) should succeed|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ iceTransportPolicy: 'relay' }) should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration({ iceTransportPolicy: 'relay' }) with initial iceTransportPolicy all should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration({ iceTransportPolicy: 'all' }) with initial iceTransportPolicy relay should succeed|:white_check_mark:|:x:|:x:|
||setConfiguration({}) with initial iceTransportPolicy relay should set new value to all|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with invalid iceTransportPolicy should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with invalid iceTransportPolicy should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with none iceTransportPolicy should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with none iceTransportPolicy should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with null iceTransportPolicy should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with null iceTransportPolicy should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection({ iceTransports: 'relay' }) should have no effect|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ iceTransports: 'invalid' }) should have no effect|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ iceTransports: null }) should have no effect|:white_check_mark:|:x:|:x:|
||`Test Total` |16/16|6/16|10/16|
|:hammer:| **RTCConfiguration-rtcpMuxPolicy**||||
||new RTCPeerConnection() should have default rtcpMuxPolicy require|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ rtcpMuxPolicy: undefined }) should have default rtcpMuxPolicy require|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ rtcpMuxPolicy: 'require' }) should succeed|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection({ rtcpMuxPolicy: 'negotiate' }) may succeed or throw NotSupportedError|:white_check_mark:|:x:|:x:|
||new RTCPeerConnection(config) - with { rtcpMuxPolicy: null } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with { rtcpMuxPolicy: null } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(config) - with { rtcpMuxPolicy: 'invalid' } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration(config) - with { rtcpMuxPolicy: 'invalid' } should throw TypeError|:white_check_mark:|:white_check_mark:|:x:|
||setConfiguration({ rtcpMuxPolicy: 'negotiate' }) with initial rtcpMuxPolicy require should throw InvalidModificationError|:x:|:white_check_mark:|:x:|
||setConfiguration({ rtcpMuxPolicy: 'require' }) with initial rtcpMuxPolicy negotiate should throw InvalidModificationError|:x:|:white_check_mark:|:x:|
||setConfiguration({}) with initial rtcpMuxPolicy negotiate should throw InvalidModificationError|:x:|:white_check_mark:|:x:|
||`Test Total` |8/11|7/11|0/11|
|:hammer:| **RTCDataChannel-bufferedAmount**||||
||bufferedAmount should increase to byte length of encoded unicode string sent|:x:|:x:|:x:|
||bufferedAmount should increase to byte length of buffer sent|:x:|:x:|:x:|
||bufferedAmount should increase to size of blob sent|:x:|:x:|:x:|
||bufferedAmount should increase by byte length for each message sent|:x:|:x:|:x:|
||`Test Total` |0/4|0/4|0/4|
|:hammer:| **RTCDataChannel-id**||||
||DTLS client uses odd data channel IDs|:white_check_mark:|:white_check_mark:|:x:|
||DTLS server uses even data channel IDs|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |2/2|2/2|0/2|
|:hammer:| **RTCDataChannel-send**||||
||Calling send() when data channel is in connecting state should throw InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||Data channel should be able to send simple string and receive as string|:white_check_mark:|:white_check_mark:|:x:|
||Data channel should be able to send unicode string and receive as unicode string|:x:|:white_check_mark:|:x:|
||Data channel should ignore binaryType and always receive string message as string|:white_check_mark:|:white_check_mark:|:x:|
||Data channel should be able to send Uint8Array message and receive as ArrayBuffer|:x:|:white_check_mark:|:x:|
||Data channel should be able to send ArrayBuffer message and receive as ArrayBuffer|:x:|:white_check_mark:|:x:|
||Data channel should be able to send Blob message and receive as ArrayBuffer|:x:|:x:|:x:|
||Data channel should be able to send ArrayBuffer message and receive as Blob|:x:|:x:|:x:|
||Data channel binaryType should receive message as Blob by default|:x:|:x:|:x:|
||Sending multiple messages with different types should succeed and be received|:x:|:x:|:x:|
||`Test Total` |3/10|6/10|10/10|
|:hammer:| **RTCDataChannelEvent-constructor**||||
||RTCDataChannelEvent constructor without a required argument.|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent constructor with channel passed as null.|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent constructor with a channel passed as undefined.|:x:|:white_check_mark:|:x:|
||RTCDataChannelEvent constructor with full arguments.|:x:|:white_check_mark:|:x:|
||`Test Total` |0/4|4/4|1/4|
|:hammer:| **RTCDtlsTransport-getRemoteCertificates**||||
||RTCDtlsTransport.prototype.getRemoteCertificates|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCDTMFSender-insertDTMF.https**||||
||insertDTMF() should succeed if tones contains valid DTMF characters|:x:|:x:|:x:|
||insertDTMF() should throw InvalidCharacterError if tones contains invalid DTMF characters|:x:|:x:|:x:|
||insertDTMF() should throw InvalidStateError if transceiver is stopped|:x:|:x:|:x:|
||insertDTMF() should throw InvalidStateError if transceiver.currentDirection is recvonly|:x:|:x:|:x:|
||insertDTMF() should throw InvalidStateError if transceiver.currentDirection is inactive|:x:|:x:|:x:|
||insertDTMF() should set toneBuffer to provided tones normalized, with old tones overridden|:x:|:x:|:x:|
||`Test Total` |0/6|0/6|3/6|
|:hammer:| **RTCDTMFSender-ontonechange-long.https**||||
||insertDTMF with duration greater than 6000 should be clamped to 6000|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|1/1|
|:hammer:| **RTCDTMFSender-ontonechange.https**||||
||insertDTMF() with default duration and intertoneGap should fire tonechange events at the expected time|:x:|:x:|:x:|
||insertDTMF() with explicit duration and intertoneGap should fire tonechange events at the expected time|:x:|:x:|:x:|
||insertDTMF('') should not fire any tonechange event, including for '' tone|:x:|:x:|:x:|
||insertDTMF() with duration less than 40 should be clamped to 40|:x:|:x:|:x:|
||insertDTMF() with interToneGap less than 30 should be clamped to 30|:x:|:x:|:x:|
||insertDTMF with comma should delay next tonechange event for a constant 2000ms|:x:|:x:|:x:|
||insertDTMF() with transceiver stopped in the middle should stop future tonechange events from firing|:x:|:x:|:x:|
||Calling insertDTMF() in the middle of tonechange events should cause future tonechanges to be updated to new tones|:x:|:x:|:x:|
||Calling insertDTMF() multiple times in the middle of tonechange events should cause future tonechanges to be updated the last provided tones|:x:|:x:|:x:|
||Calling insertDTMF('') in the middle of tonechange events should stop future tonechange events from firing|:x:|:x:|:x:|
||Setting transceiver.currentDirection to recvonly in the middle of tonechange events should stop future tonechange events from firing|:x:|:x:|:x:|
||`Test Total` |0/11|0/11|5/11|
|:hammer:| **RTCIceCandidate-constructor**||||
||new RTCIceCandidate()|:white_check_mark:|:white_check_mark:|:x:|
||new RTCIceCandidate({})|:white_check_mark:|:x:|:x:|
||new RTCIceCandidate({ ... }) with manually filled default values|:white_check_mark:|:x:|:x:|
||new RTCIceCandidate({ sdpMid: null, sdpMLineIndex: null })|:white_check_mark:|:x:|:x:|
||new RTCIceCandidate({ candidate: '' })|:white_check_mark:|:x:|:x:|
||new RTCIceCandidate({ candidate: null })|:white_check_mark:|:x:|:x:|
||new RTCIceCandidate({ ... }) with valid candidate string only|:x:|:x:|:x:|
||new RTCIceCandidate({ sdpMid: 'audio' })|:x:|:x:|:x:|
||new RTCIceCandidate({ sdpMLineIndex: 0 })|:x:|:x:|:x:|
||new RTCIceCandidate({ sdpMid: 'audio', sdpMLineIndex: 0 })|:x:|:x:|:x:|
||new RTCIceCandidate({ candidate: '', sdpMid: 'audio' }|:x:|:x:|:x:|
||new RTCIceCandidate({ candidate: '', sdpMLineIndex: 0 }|:x:|:x:|:x:|
||new RTCIceCandidate({ ... }) with valid candidate string and sdpMid|:x:|:x:|:x:|
||new RTCIceCandidate({ ... }) with invalid candidate string and sdpMid|:x:|:x:|:x:|
||new RTCIceCandidate({ ... }) with non default value for all fields|:x:|:x:|:x:|
||new RTCIceCandidate({ ... }) with invalid sdpMid|:x:|:x:|:x:|
||new RTCIceCandidate({ ... }) with invalid sdpMLineIndex|:x:|:x:|:x:|
||`Test Total` |6/17|1/17|3/17|
|:hammer:| **RTCIceTransport**||||
||Two connected iceTransports should has matching local/remote candidates returned|:x:|:x:|:x:|
||Unconnected iceTransport should have empty remote candidates and selected pair|:x:|:x:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCPeerConnection-addIceCandidate**||||
||Add null candidate should reject with TypeError|:white_check_mark:|:white_check_mark:|:x:|
||Add ICE candidate before setting remote description should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||Add ICE candidate after setting remote description should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Add ICE candidate with RTCIceCandidate should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate with only valid sdpMid should succeed|:x:|:x:|:x:|
||Add candidate with only valid sdpMLineIndex should succeed|:x:|:x:|:x:|
||addIceCandidate with first sdpMid and sdpMLineIndex add candidate to first media stream|:white_check_mark:|:white_check_mark:|:x:|
||addIceCandidate with second sdpMid and sdpMLineIndex should add candidate to second media stream|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate for first media stream with null ufrag should add candidate to first media stream|:white_check_mark:|:white_check_mark:|:x:|
||Adding multiple candidates should add candidates to their corresponding media stream|:white_check_mark:|:white_check_mark:|:x:|
||Add with empty candidate string (end of candidate) should succeed|:x:|:x:|:x:|
||Add candidate with both sdpMid and sdpMLineIndex manually set to null should reject with TypeError|:white_check_mark:|:x:|:x:|
||Add candidate with only valid candidate string should reject with TypeError|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate with invalid candidate string and both sdpMid and sdpMLineIndex null should reject with TypeError|:white_check_mark:|:x:|:x:|
||Add candidate with empty dict should reject with TypeError|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate with manually filled default values should reject with TypeError|:white_check_mark:|:x:|:x:|
||Add candidate with invalid sdpMid should reject with OperationError|:x:|:white_check_mark:|:x:|
||Add candidate with invalid sdpMLineIndex should reject with OperationError|:x:|:white_check_mark:|:x:|
||Invalid sdpMLineIndex should be ignored if valid sdpMid is provided|:x:|:x:|:x:|
||Add candidate for media stream 2 with null ufrag should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Add candidate with invalid ufrag should reject with OperationError|:x:|:x:|:x:|
||Add candidate with invalid candidate string should reject with OperationError|:x:|:white_check_mark:|:x:|
||Add candidate with sdpMid belonging to different ufrag should reject with OperationError|:x:|:x:|:x:|
||`Test Total` |14/23|13/23|13/23|
|:hammer:| **RTCPeerConnection-addTrack.https**||||
||addTrack when pc is closed should throw InvalidStateError|:white_check_mark:|:x:|:x:|
||addTrack with single track argument and no mediaStream should succeed|:x:|:x:|:x:|
||addTrack with single track argument and single mediaStream should succeed|:x:|:x:|:x:|
||addTrack with single track argument and multiple mediaStreams should succeed|:x:|:x:|:x:|
||Adding the same track multiple times should throw InvalidAccessError|:x:|:x:|:x:|
||addTrack with existing sender with null track, same kind, and recvonly direction should reuse sender|:x:|:x:|:x:|
||addTrack with existing sender with null track, same kind, and sendrecv direction should create new sender|:x:|:x:|:x:|
||addTrack with existing sender with null track, different kind, and recvonly direction should create new sender|:x:|:x:|:x:|
||`Test Total` |1/8|0/8|3/8|
|:hammer:| **RTCPeerConnection-addTransceiver**||||
||addTransceiver() with string argument as invalid kind should throw TypeError|:white_check_mark:|:x:|:x:|
||addTransceiver('audio') should return an audio transceiver|:x:|:x:|:x:|
||addTransceiver('video') should return a video transceiver|:x:|:x:|:x:|
||addTransceiver() with direction sendonly should have result transceiver.direction be the same|:x:|:x:|:x:|
||addTransceiver() with direction inactive should have result transceiver.direction be the same|:x:|:x:|:x:|
||addTransceiver() with invalid direction should throw TypeError|:white_check_mark:|:x:|:x:|
||addTransceiver(track) should have result with sender.track be given track|:x:|:x:|:x:|
||addTransceiver(track) multiple times should create multiple transceivers|:x:|:x:|:x:|
||addTransceiver() with rid containing invalid non-alphanumeric characters should throw TypeError|:white_check_mark:|:x:|:x:|
||addTransceiver() with rid longer than 16 characters should throw TypeError|:white_check_mark:|:x:|:x:|
||addTransceiver() with valid rid value should succeed|:x:|:x:|:x:|
||addTransceiver() with readonly ssrc set should throw InvalidAccessError|:x:|:x:|:x:|
||addTransceiver() with readonly rtx set should throw InvalidAccessError|:x:|:x:|:x:|
||addTransceiver() with readonly fec set should throw InvalidAccessError|:x:|:x:|:x:|
||addTransceiver() with valid sendEncodings should succeed|:x:|:x:|:x:|
||`Test Total` |4/15|0/15|0/15|
|:hammer:| **RTCPeerConnection-canTrickleIceCandidates**||||
||canTrickleIceCandidates property is null prior to setRemoteDescription|:white_check_mark:|:x:|:x:|
||canTrickleIceCandidates property is true after setRemoteDescription with a=ice-options:trickle|:x:|:x:|:x:|
||canTrickleIceCandidates property is false after setRemoteDescription without a=ice-options:trickle|:x:|:x:|:x:|
||`Test Total` |1/3|0/3|3/3|
|:hammer:| **RTCPeerConnection-connectionState**||||
||Initial connectionState should be new|:white_check_mark:|:x:|:x:|
||connection with one data channel should eventually have connected connection state|:x:|:x:|:x:|
||`Test Total` |1/2|0/2|0/2|
|:hammer:| **RTCPeerConnection-constructor**||||
||RTCPeerConnection.length|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection()|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(null)|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection(undefined)|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({})|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection({ peerIdentity: toStringThrows })|:x:|:x:|:x:|
||new RTCPeerConnection({ certificates: null })|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ certificates: undefined })|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection({ certificates: [] })|:white_check_mark:|:white_check_mark:|:x:|
||new RTCPeerConnection({ certificates: [null] })|:x:|:white_check_mark:|:x:|
||new RTCPeerConnection({ certificates: [undefined] })|:x:|:white_check_mark:|:x:|
||localDescription initial value|:white_check_mark:|:x:|:x:|
||currentLocalDescription initial value|:white_check_mark:|:x:|:x:|
||pendingLocalDescription initial value|:white_check_mark:|:x:|:x:|
||remoteDescription initial value|:white_check_mark:|:x:|:x:|
||currentRemoteDescription initial value|:white_check_mark:|:x:|:x:|
||pendingRemoteDescription initial value|:white_check_mark:|:x:|:x:|
||signalingState initial value|:white_check_mark:|:white_check_mark:|:x:|
||iceGatheringState initial value|:white_check_mark:|:white_check_mark:|:x:|
||iceConnectionState initial value|:white_check_mark:|:white_check_mark:|:x:|
||connectionState initial value|:white_check_mark:|:x:|:x:|
||canTrickleIceCandidates initial value|:white_check_mark:|:x:|:x:|
||`Test Total` |17/22|13/22|21/22|
|:hammer:| **RTCPeerConnection-createAnswer**||||
||createAnswer() with null remoteDescription should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||createAnswer() after setting remote description should succeed|:white_check_mark:|:x:|:x:|
||createAnswer() when connection is closed reject with InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |3/3|1/3|3/3|
|:hammer:| **RTCPeerConnection-createDataChannel**||||
||createDataChannel with no argument should throw TypeError|:x:|:white_check_mark:|:x:|
||createDataChannel with closed connection should throw InvalidStateError|:x:|:white_check_mark:|:x:|
||createDataChannel attribute default values|:x:|:x:|:x:|
||createDataChannel with provided parameters should initialize attributes to provided values|:x:|:x:|:x:|
||createDataChannel with label "foo" should succeed|:white_check_mark:|:white_check_mark:|:x:|
||createDataChannel with label null should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with label undefined should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with label lone surrogate should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with ordered false should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with ordered null/undefined should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with maxPacketLifeTime 0 should succeed|:x:|:x:|:x:|
||createDataChannel with maxRetransmits 0 should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with both maxPacketLifeTime and maxRetransmits should throw SyntaxError|:x:|:x:|:x:|
||createDataChannel with protocol "foo" should succeed|:x:|:x:|:x:|
||createDataChannel with protocol null should succeed|:x:|:x:|:x:|
||createDataChannel with protocol undefined should succeed|:x:|:x:|:x:|
||createDataChannel with protocol lone surrogate should succeed|:x:|:x:|:x:|
||createDataChannel with negotiated true should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with id 0 should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with id 1 should succeed|:x:|:white_check_mark:|:x:|
||createDataChannel with id 65534 should succeed|:x:|:x:|:x:|
||createDataChannel with id -1 should throw TypeError|:x:|:white_check_mark:|:x:|
||createDataChannel with id 65535 should throw TypeError|:x:|:x:|:x:|
||createDataChannel with id 65536 should throw TypeError|:x:|:white_check_mark:|:x:|
||createDataChannel with priority "high" should succeed|:x:|:x:|:x:|
||createDataChannel with invalid priority should throw TypeError|:x:|:x:|:x:|
||createDataChannel with negotiated false and long label should throw TypeError|:white_check_mark:|:x:|:x:|
||createDataChannel with negotiated false and long protocol should throw TypeError|:white_check_mark:|:x:|:x:|
||createDataChannel with negotiated true and long label and long protocol should succeed|:x:|:x:|:x:|
||Channels created after SCTP transport is established should have id assigned|:x:|:x:|:x:|
||`Test Total` |3/30|14/30|11/30|
|:hammer:| **RTCPeerConnection-createOffer-offerToReceive**||||
||createOffer() with offerToReceiveAudio set to false should not create a transceiver|:x:|:x:|:x:|
||createOffer() with offerToReceiveAudio should create a "recvonly" transceiver|:x:|:x:|:x:|
||offerToReceiveAudio option should be ignored if a non-stopped "recvonly" transceiver exists|:x:|:x:|:x:|
||offerToReceiveAudio option should be ignored if a non-stopped "sendrecv" transceiver exists|:x:|:x:|:x:|
||offerToReceiveAudio set to false with a track should create a "sendonly" transceiver|:x:|:x:|:x:|
||offerToReceiveAudio set to false with a "recvonly" transceiver should change the direction to "inactive"|:x:|:x:|:x:|
||subsequent offerToReceiveAudio set to false with a track should change the direction to "sendonly"|:x:|:x:|:x:|
||createOffer() with offerToReceiveVideo set to false should not create a transceiver|:x:|:x:|:x:|
||createOffer() with offerToReceiveVideo should create a "recvonly" transceiver|:x:|:x:|:x:|
||offerToReceiveVideo option should be ignored if a non-stopped "recvonly" transceiver exists|:x:|:x:|:x:|
||offerToReceiveVideo option should be ignored if a non-stopped "sendrecv" transceiver exists|:x:|:x:|:x:|
||offerToReceiveVideo set to false with a track should create a "sendonly" transceiver|:x:|:x:|:x:|
||offerToReceiveVideo set to false with a "recvonly" transceiver should change the direction to "inactive"|:x:|:x:|:x:|
||subsequent offerToReceiveVideo set to false with a track should change the direction to "sendonly"|:x:|:x:|:x:|
||offerToReceiveAudio and Video should create two "recvonly" transceivers|:x:|:x:|:x:|
||`Test Total` |0/15|0/15|0/15|
|:hammer:| **RTCPeerConnection-createOffer**||||
||createOffer() with no argument from newly created RTCPeerConnection should succeed|:white_check_mark:|:x:|:x:|
||createOffer() and then setLocalDescription() should succeed|:white_check_mark:|:x:|:x:|
||createOffer() after connection is closed should reject with InvalidStateError|:white_check_mark:|:white_check_mark:|:x:|
||When media stream is added when createOffer() is running in parallel, the result offer should contain the new media stream|:x:|:x:|:x:|
||createOffer() with offerToReceiveAudio should add audio line to all subsequent created offers|:x:|:x:|:x:|
||createOffer() with offerToReceiveVideo should add video line to all subsequent created offers|:x:|:x:|:x:|
||createOffer() with offerToReceiveAudio:true then offerToReceiveVideo:true should have result offer with both audio and video line|:x:|:x:|:x:|
||Test onsignalingstatechange event for createOffer() and then setLocalDescription() should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |4/8|2/8|3/8|
|:hammer:| **RTCPeerConnection-generateCertificate**||||
||generateCertificate() with compulsary RSASSA-PKCS1-v1_5 parameters should succeed|:x:|:white_check_mark:|:x:|
||generateCertificate() with compulsary ECDSA parameters should succeed|:x:|:white_check_mark:|:x:|
||generateCertificate() with invalid string algorithm should reject with NotSupportedError|:x:|:white_check_mark:|:x:|
||generateCertificate() with invalid algorithm dict should reject with NotSupportedError|:x:|:white_check_mark:|:x:|
||generateCertificate() with valid expires parameter should succeed|:x:|:white_check_mark:|:x:|
||generateCertificate() with 0 expires parameter should generate expired cert|:x:|:white_check_mark:|:x:|
||generateCertificate() with invalid range for expires should reject with TypeError|:x:|:x:|:x:|
||generateCertificate() with invalid type for expires should reject with TypeError|:x:|:x:|:x:|
||`Test Total` |0/8|6/8|6/8|
|:hammer:| **RTCPeerConnection-getDefaultIceServers**||||
||RTCPeerConnection.getDefaultIceServers() should return array of RTCIceServer|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCPeerConnection-getIdentityAssertion**||||
||getIdentityAssertion() should load IdP proxy and return assertion generated|:x:|:x:|:x:|
||getIdentityAssertion() should succeed if mock-idp.js return different domain and protocol in assertion|:x:|:x:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-execution-failure') if mock-idp.js throws error|:x:|:x:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-bad-script-failure') if IdP proxy script do not register its callback|:x:|:x:|:x:|
||getIdentityAssertion() should reject with OperationError if mock-idp.js return invalid result|:x:|:x:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-load-failure') if IdP cannot be loaded|:x:|:x:|:x:|
||getIdentityAssertion() should reject with RTCError('idp-need-login') when mock-idp.js requires login|:x:|:x:|:x:|
||setIdentityProvider() with no peerIdentity provided should use peerIdentity value from getConfiguration()|:x:|:x:|:x:|
||Calling setIdentityProvider() multiple times should reset identity assertions|:x:|:x:|:x:|
||createOffer() should return SDP containing identity assertion string if identity provider is set|:x:|:x:|:x:|
||createOffer() should reject with NotReadableError if identitity assertion request fails|:x:|:x:|:x:|
||createAnswer() should reject with NotReadableError if identitity assertion request fails|:x:|:x:|:x:|
||`Test Total` |0/12|0/12|0/12|
|:hammer:| **RTCPeerConnection-getStats.https**||||
||getStats() with no argument should succeed|:x:|:white_check_mark:|:x:|
||getStats(null) should succeed|:x:|:x:|:x:|
||getStats() with track not added to connection should reject with InvalidAccessError|:x:|:x:|:x:|
||getStats() with track added via addTrack should succeed|:x:|:x:|:x:|
||getStats() with track added via addTransceiver should succeed|:x:|:x:|:x:|
||getStats() with track associated with more than one sender should reject with InvalidAccessError|:x:|:x:|:x:|
||getStats() with track associated with both sender and receiver should reject with InvalidAccessError|:x:|:x:|:x:|
||getStats() with no argument should return stats report containing peer-connection stats on an empty PC|:x:|:white_check_mark:|:x:|
||getStats() with no argument should return stats report containing peer-connection stats and outbound-track-stats|:x:|:x:|:x:|
||getStats() with no argument should return stats for no-stream tracks|:x:|:x:|:x:|
||getStats() on track associated with RtpSender should return stats report containing outbound-rtp stats|:x:|:x:|:x:|
||getStats() on track associated with RtpReceiver should return stats report containing inbound-rtp stats|:x:|:x:|:x:|
||getStats() with connected peer connections having tracks and data channel should return all mandatory to implement stats|:x:|:x:|:x:|
||`Test Total` |0/13|2/13|3/13|
|:hammer:| **RTCPeerConnection-getTransceivers**||||
||Initial peer connection should have list of zero senders, receivers and transceivers|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCPeerConnection-iceConnectionState**||||
||Initial iceConnectionState should be new|:white_check_mark:|:white_check_mark:|:x:|
||connection with one data channel should eventually have connected connection state|:x:|:x:|:x:|
||`Test Total` |1/2|1/2|1/2|
|:hammer:| **RTCPeerConnection-iceGatheringState**||||
||Initial iceGatheringState should be new|:white_check_mark:|:white_check_mark:|:x:|
||iceGatheringState should eventually become complete after setLocalDescription|:white_check_mark:|:white_check_mark:|:x:|
||connection with one data channel should eventually have connected connection state|:x:|:x:|:x:|
||`Test Total` |2/3|2/3|2/3|
|:hammer:| **RTCPeerConnection-ondatachannel**||||
||datachannel event should fire when new data channel is announced to the remote peer|:x:|:white_check_mark:|:x:|
||Data channel created on remote peer should match the same configuration as local peer|:x:|:x:|:x:|
||Data channel created with negotiated set to true should not fire datachannel event on remote peer|:x:|:white_check_mark:|:x:|
||`Test Total` |0/3|2/3|1/3|
|:hammer:| **RTCPeerConnection-onnegotiationneeded**||||
||Creating first data channel should fire negotiationneeded event|:white_check_mark:|:white_check_mark:|:x:|
||calling createDataChannel twice should fire negotiationneeded event once|:white_check_mark:|:white_check_mark:|:x:|
||addTransceiver() should fire negotiationneeded event|:x:|:x:|:x:|
||Calling addTransceiver() twice should fire negotiationneeded event once|:x:|:x:|:x:|
||Calling both addTransceiver() and createDataChannel() should fire negotiationneeded event once|:x:|:x:|:x:|
||negotiationneeded event should not fire if signaling state is not stable|:white_check_mark:|:white_check_mark:|:x:|
||negotiationneeded event should fire only after signaling state go back to stable|:x:|:x:|:x:|
||`Test Total` |3/7|3/7|3/7|
|:hammer:| **RTCPeerConnection-ontrack.https**||||
||setRemoteDescription should trigger ontrack event when the MSID of the stream is is parsed.|:x:|:x:|:x:|
||setRemoteDescription() with m= line of recvonly direction should not trigger track event|:white_check_mark:|:x:|:x:|
||addTrack() should cause remote connection to fire ontrack when setRemoteDescription()|:x:|:x:|:x:|
||addTransceiver('video') should cause remote connection to fire ontrack when setRemoteDescription()|:x:|:x:|:x:|
||addTransceiver() with inactive direction should not cause remote connection to fire ontrack when setRemoteDescription()|:x:|:x:|:x:|
||`Test Total` |1/5|0/5|1/5|
|:hammer:| **RTCPeerConnection-peerIdentity**||||
||setRemoteDescription() on offer with a=identity should establish peerIdentity|:x:|:x:|:x:|
||setRemoteDescription() on offer with a=identity that resolve to value different from target peer identity should reject with InvalidModificationError|:x:|:x:|:x:|
||setRemoteDescription() with peerIdentity set and with IdP proxy that return validationAssertion with mismatch contents should reject with OperationError|:x:|:x:|:x:|
||setRemoteDescription() and peerIdentity should reject with OperationError if IdP return validated identity that is different from its own domain|:x:|:x:|:x:|
||When IdP throws error and pc has target peer identity, setRemoteDescription() and peerIdentity rejected with RTCError('idp-execution-error')|:x:|:x:|:x:|
||IdP failure with no target peer identity should have following setRemoteDescription() succeed and replace pc.peerIdentity with a new promise|:x:|:x:|:x:|
||`Test Total` |0/6|0/6|0/6|
|:hammer:| **RTCPeerConnection-removeTrack.https**||||
||addTransceiver - Calling removeTrack when connection is closed should throw InvalidStateError|:x:|:x:|:x:|
||addTrack - Calling removeTrack when connection is closed should throw InvalidStateError|:white_check_mark:|:x:|:x:|
||addTransceiver - Calling removeTrack on different connection that is closed should throw InvalidStateError|:x:|:x:|:x:|
||addTrack - Calling removeTrack on different connection that is closed should throw InvalidStateError|:white_check_mark:|:x:|:x:|
||addTransceiver - Calling removeTrack on different connection should throw InvalidAccessError|:x:|:x:|:x:|
||addTrack - Calling removeTrack on different connection should throw InvalidAccessError|:x:|:x:|:x:|
||addTransceiver - Calling removeTrack with valid sender should set sender.track to null|:x:|:x:|:x:|
||addTrack - Calling removeTrack with valid sender should set sender.track to null|:x:|:x:|:x:|
||Calling removeTrack with currentDirection sendrecv should set direction to recvonly|:x:|:x:|:x:|
||Calling removeTrack with currentDirection sendonly should set direction to inactive|:x:|:x:|:x:|
||Calling removeTrack with currentDirection recvonly should not change direction|:x:|:x:|:x:|
||Calling removeTrack with currentDirection inactive should not change direction|:x:|:x:|:x:|
||`Test Total` |2/12|0/12|2/12|
|:hammer:| **RTCPeerConnection-setDescription-transceiver**||||
||setLocalDescription(offer) with m= section should assign mid to corresponding transceiver|:x:|:x:|:x:|
||setRemoteDescription(offer) with m= section and no existing transceiver should create corresponding transceiver|:x:|:x:|:x:|
||setLocalDescription(rollback) should unset transceiver.mid|:x:|:x:|:x:|
||setLocalDescription(rollback) should only unset transceiver mids associated with current round|:x:|:x:|:x:|
||setRemoteDescription(rollback) should remove newly created transceiver from transceiver list|:x:|:x:|:x:|
||`Test Total` |0/5|0/5|0/5|
|:hammer:| **RTCPeerConnection-setLocalDescription-answer**||||
||setLocalDescription() with valid answer should succeed|:white_check_mark:|:x:|:x:|
||setLocalDescription() with type answer and null sdp should use lastAnswer generated from createAnswer|:white_check_mark:|:x:|:x:|
||setLocalDescription() with answer not created by own createAnswer() should reject with InvalidModificationError|:x:|:x:|:x:|
||Calling setLocalDescription(answer) from stable state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||Calling setLocalDescription(answer) from have-local-offer state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setLocalDescription() with valid answer should succeed|:x:|:white_check_mark:|:x:|
||`Test Total` |4/6|1/6|2/6|
|:hammer:| **RTCPeerConnection-setLocalDescription-offer**||||
||setLocalDescription with valid offer should succeed|:white_check_mark:|:x:|:x:|
||setLocalDescription with type offer and null sdp should use lastOffer generated from createOffer|:white_check_mark:|:x:|:x:|
||setLocalDescription() with offer not created by own createOffer() should reject with InvalidModificationError|:x:|:x:|:x:|
||Set created offer other than last offer should reject with InvalidModificationError|:x:|:x:|:x:|
||Creating and setting offer multiple times should succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for setLocalDescription with valid offer should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for Creating and setting offer multiple times should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |4/7|2/7|3/7|
|:hammer:| **RTCPeerConnection-setLocalDescription-pranswer**||||
||setLocalDescription(pranswer) from stable state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||setLocalDescription(pranswer) should succeed|:x:|:x:|:x:|
||setLocalDescription(pranswer) can be applied multiple times while still in have-local-pranswer|:white_check_mark:|:white_check_mark:|:x:|
||setLocalDescription(answer) from have-local-pranswer state should succeed|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setLocalDescription(pranswer) should succeed|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setLocalDescription(pranswer) can be applied multiple times while still in have-local-pranswer|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setLocalDescription(answer) from have-local-pranswer state should succeed|:x:|:white_check_mark:|:x:|
||`Test Total` |3/7|4/7|0/7|
|:hammer:| **RTCPeerConnection-setLocalDescription-rollback**||||
||setLocalDescription(rollback) from have-local-offer state should reset back to stable state|:x:|:x:|:x:|
||setLocalDescription(rollback) from stable state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||setLocalDescription(rollback) after setting answer description should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||setLocalDescription(rollback) should ignore invalid sdp content and succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for setLocalDescription(rollback) from have-local-offer state should reset back to stable state|:x:|:x:|:x:|
||`Test Total` |2/5|0/5|2/5|
|:hammer:| **RTCPeerConnection-setLocalDescription**||||
||Calling createOffer() and setLocalDescription() again after one round of local-offer/remote-answer should succeed|:white_check_mark:|:x:|:x:|
||Switching role from answerer to offerer after going back to stable state should succeed|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for Calling createOffer() and setLocalDescription() again after one round of local-offer/remote-answer should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for Switching role from answerer to offerer after going back to stable state should succeed|:x:|:white_check_mark:|:x:|
||`Test Total` |3/4|2/4|3/4|
|:hammer:| **RTCPeerConnection-setRemoteDescription-answer**||||
||setRemoteDescription() with valid state and answer should succeed|:white_check_mark:|:x:|:x:|
||Calling setRemoteDescription(answer) from stable state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||Calling setRemoteDescription(answer) from have-remote-offer state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription() with valid state and answer should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |4/4|1/4|2/4|
|:hammer:| **RTCPeerConnection-setRemoteDescription-offer**||||
||setRemoteDescription with valid offer should succeed|:x:|:x:|:x:|
||setRemoteDescription multiple times should succeed|:x:|:x:|:x:|
||setRemoteDescription multiple times with different offer should succeed|:x:|:x:|:x:|
||setRemoteDescription(offer) with invalid SDP should reject with RTCError|:x:|:x:|:x:|
||setRemoteDescription(offer) from have-local-offer state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription with valid offer should succeed|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription multiple times should succeed|:x:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription multiple times with different offer should succeed|:x:|:white_check_mark:|:x:|
||`Test Total` |1/8|3/8|3/8|
|:hammer:| **RTCPeerConnection-setRemoteDescription-pranswer**||||
||setRemoteDescription(pranswer) from stable state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||setRemoteDescription(pranswer) from have-local-offer state should succeed|:white_check_mark:|:x:|:x:|
||setRemoteDescription(pranswer) multiple times should succeed|:white_check_mark:|:white_check_mark:|:x:|
||setRemoteDescription(answer) from have-remote-pranswer state should succeed|:white_check_mark:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(pranswer) from have-local-offer state should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(pranswer) multiple times should succeed|:white_check_mark:|:white_check_mark:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(answer) from have-remote-pranswer state should succeed|:white_check_mark:|:white_check_mark:|:x:|
||`Test Total` |7/7|4/7|0/7|
|:hammer:| **RTCPeerConnection-setRemoteDescription-replaceTrack.https**||||
||replaceTrack() sets the track attribute to a new track.|:x:|:x:|:x:|
||replaceTrack() sets the track attribute to null.|:x:|:x:|:x:|
||replaceTrack() does not set the track synchronously.|:x:|:x:|:x:|
||replaceTrack() rejects when the peer connection is closed.|:x:|:x:|:x:|
||replaceTrack() rejects when invoked after removeTrack().|:x:|:x:|:x:|
||replaceTrack() rejects after a subsequent removeTrack().|:x:|:x:|:x:|
||`Test Total` |0/6|0/6|0/6|
|:hammer:| **RTCPeerConnection-setRemoteDescription-rollback**||||
||setRemoteDescription(rollback) in have-remote-offer state should revert to stable state|:x:|:x:|:x:|
||setRemoteDescription(rollback) from stable state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||setRemoteDescription(rollback) should ignore invalid sdp content and succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for setRemoteDescription(rollback) in have-remote-offer state should revert to stable state|:x:|:x:|:x:|
||`Test Total` |1/4|0/4|2/4|
|:hammer:| **RTCPeerConnection-setRemoteDescription-tracks.https**||||
||addTrack() with a track and no stream makes ontrack fire with a track and no stream.|:x:|:x:|:x:|
||addTrack() with a track and a stream makes ontrack fire with a track and a stream.|:white_check_mark:|:x:|:x:|
||ontrack fires before setRemoteDescription resolves.|:white_check_mark:|:x:|:x:|
||addTrack() with two tracks and one stream makes ontrack fire twice with the tracks and shared stream.|:x:|:x:|:x:|
||addTrack() with a track and two streams makes ontrack fire with a track and two streams.|:x:|:x:|:x:|
||ontrack's receiver matches getReceivers().|:x:|:x:|:x:|
||removeTrack() does not remove the receiver.|:x:|:x:|:x:|
||removeTrack() makes stream.onremovetrack fire and the track to be removed from the stream.|:x:|:x:|:x:|
||stream.onremovetrack fires before setRemoteDescription resolves.|:x:|:x:|:x:|
||removeTrack() makes track.onmute fire and the track to be muted.|:x:|:x:|:x:|
||track.onmute fires before setRemoteDescription resolves.|:x:|:x:|:x:|
||removeTrack() twice is safe.|:x:|:x:|:x:|
||`Test Total` |2/12|0/12|1/12|
|:hammer:| **RTCPeerConnection-setRemoteDescription**||||
||setRemoteDescription with invalid type and invalid SDP should reject with TypeError|:x:|:white_check_mark:|:x:|
||setRemoteDescription() with invalid SDP and stable state should reject with InvalidStateError|:white_check_mark:|:x:|:x:|
||Calling setRemoteDescription() again after one round of remote-offer/local-answer should succeed|:x:|:x:|:x:|
||Switching role from offerer to answerer after going back to stable state should succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for Calling setRemoteDescription() again after one round of remote-offer/local-answer should succeed|:x:|:x:|:x:|
||Test onsignalingstatechange event for Switching role from offerer to answerer after going back to stable state should succeed|:x:|:x:|:x:|
||`Test Total` |1/6|1/6|2/6|
|:hammer:| **RTCPeerConnection-track-stats.https**||||
||addTrack() without setLocalDescription() yields track stats|:x:|:x:|:x:|
||addTrack() without setLocalDescription() yields media stream stats|:x:|:x:|:x:|
||addTrack() with setLocalDescription() yields track stats|:x:|:x:|:x:|
||addTrack() with setLocalDescription() yields media stream stats|:x:|:x:|:x:|
||addTrack(): Media stream stats references track stats|:x:|:x:|:x:|
||Legacy addStream(): Media stream stats references track stats|:x:|:white_check_mark:|:x:|
||O/A exchange yields outbound RTP stream stats for sending track|:x:|:x:|:x:|
||O/A exchange yields inbound RTP stream stats for receiving track|:x:|:x:|:x:|
||replaceTrack() before offer: new track attachment stats present|:x:|:x:|:x:|
||replaceTrack() after offer, before answer: new track attachment stats present|:x:|:x:|:x:|
||replaceTrack() after answer: new track attachment stats present|:x:|:x:|:x:|
||replaceTrack(): original track attachment stats present after replacing|:x:|:x:|:x:|
||`Test Total` |0/12|1/12|0/12|
|:hammer:| **RTCPeerConnectionIceEvent-constructor**||||
||RTCPeerConnectionIceEvent with no arguments throws TypeError|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent with no eventInitDict (default)|:x:|:x:|:x:|
||RTCPeerConnectionIceEvent with empty object as eventInitDict (default)|:x:|:x:|:x:|
||RTCPeerConnectionIceEvent.candidate is null when constructed with { candidate: null }|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent.candidate is null when constructed with { candidate: undefined }|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent with RTCIceCandidate|:x:|:x:|:x:|
||RTCPeerConnectionIceEvent with non RTCIceCandidate object throws|:x:|:white_check_mark:|:x:|
||RTCPeerConnectionIceEvent bubbles and cancelable|:x:|:white_check_mark:|:x:|
||`Test Total` |0/8|5/8|6/8|
|:hammer:| **RTCRtpParameters-codecs**||||
||setParameters() with codec.payloadType modified should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with codec.mimeType modified should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with codec.clockRate modified should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with codec.channels modified should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with codec.sdpFmtpLine modified should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with new codecs inserted should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters with reordered codecs should succeed|:x:|:x:|:x:|
||setParameters with dropped codec should succeed|:x:|:x:|:x:|
||`Test Total` |0/8|0/8|0/8|
|:hammer:| **RTCRtpParameters-degradationPreference**||||
||setParameters with degradationPreference set should succeed|:x:|:x:|:x:|
||setParameters with degradationPreference unset should succeed|:x:|:x:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpParameters-encodings**||||
||addTransceiver() with undefined sendEncodings should have default encoding parameter with active set to true|:x:|:x:|:x:|
||addTransceiver() with empty list sendEncodings should have default encoding parameter with active set to true|:x:|:x:|:x:|
||sender.getParameters() should return sendEncodings set by addTransceiver()|:x:|:x:|:x:|
||sender.setParameters() with mismatch number of encodings should reject with InvalidModificationError|:x:|:x:|:x:|
||sender.setParameters() with encodings unset should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with modified encoding.ssrc field should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with modified encoding.rtx field should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with modified encoding.fec field should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with modified encoding.rid field should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with encoding.scaleResolutionDownBy field set to less than 1.0 should reject with RangeError|:x:|:x:|:x:|
||setParameters() with encoding.scaleResolutionDownBy field set to greater than 1.0 should succeed|:x:|:x:|:x:|
||setParameters() with modified encoding.dtx should succeed|:x:|:x:|:x:|
||setParameters() with unset encoding.dtx should succeed|:x:|:x:|:x:|
||setParameters() with modified encoding.active should succeed|:x:|:x:|:x:|
||setParameters() with modified encoding.priority should succeed|:x:|:x:|:x:|
||setParameters() with modified encoding.ptime should succeed|:x:|:x:|:x:|
||setParameters() with modified encoding.maxBitrate should succeed|:x:|:x:|:x:|
||setParameters() with modified encoding.maxFramerate should succeed|:x:|:x:|:x:|
||`Test Total` |0/18|0/18|0/18|
|:hammer:| **RTCRtpParameters-headerExtensions**||||
||setParameters() with modified headerExtensions should reject with InvalidModificationError|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpParameters-rtcp**||||
||setParameters() with modified rtcp.cname should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with modified rtcp.reducedSize should reject with InvalidModificationError|:x:|:x:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpParameters-transactionId**||||
||sender.getParameters() should return different transaction IDs for each call|:x:|:x:|:x:|
||sender.setParameters() with transaction ID different from last getParameters() should reject with InvalidModificationError|:x:|:x:|:x:|
||sender.setParameters() with transaction ID unset should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() twice with the same parameters should reject with InvalidModificationError|:x:|:x:|:x:|
||setParameters() with parameters older than last getParameters() should reject with InvalidModificationError|:x:|:x:|:x:|
||`Test Total` |0/5|0/5|0/5|
|:hammer:| **RTCRtpReceiver-getCapabilities**||||
||RTCRtpSender.getCapabilities('audio') should return RTCRtpCapabilities dictionary|:x:|:x:|:x:|
||RTCRtpSender.getCapabilities('video') should return RTCRtpCapabilities dictionary|:x:|:x:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpReceiver-getContributingSources.https**||||
||getContributingSources() should return list of CSRC after connection is established|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpReceiver-getParameters**||||
||RTCRtpReceiver.prototype.getParameters|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpReceiver-getStats**||||
||receiver.getStats() should return stats report containing inbound-rtp stats|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpReceiver-getSynchronizationSources.https**||||
||getContributingSources() should return list of CSRC after connection is established|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpSender-getCapabilities**||||
||RTCRtpSender.getCapabilities('audio') should return RTCRtpCapabilities dictionary|:x:|:x:|:x:|
||RTCRtpSender.getCapabilities('video') should return RTCRtpCapabilities dictionary|:x:|:x:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpSender-getStats.https**||||
||sender.getStats() via addTransceiver should return stats report containing outbound-rtp stats|:x:|:x:|:x:|
||sender.getStats() via addTrack should return stats report containing outbound-rtp stats|:x:|:x:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCRtpSender-replaceTrack**||||
||Calling replaceTrack on closed connection should reject with InvalidStateError|:x:|:x:|:x:|
||Calling replaceTrack with track of different kind should reject with TypeError|:x:|:x:|:x:|
||Calling replaceTrack on stopped sender should reject with InvalidStateError|:x:|:x:|:x:|
||Calling replaceTrack on sender with null track and not set to session description should resolve with sender.track set to given track|:x:|:x:|:x:|
||Calling replaceTrack on sender not set to session description should resolve with sender.track set to given track|:x:|:x:|:x:|
||Calling replaceTrack(null) on sender not set to session description should resolve with sender.track set to null|:x:|:x:|:x:|
||Calling replaceTrack(null) on sender set to session description should resolve with sender.track set to null|:x:|:x:|:x:|
||Calling replaceTrack on sender with stopped track and and set to session description should resolve with sender.track set to given track|:x:|:x:|:x:|
||Calling replaceTrack on sender with similar track and and set to session description should resolve with sender.track set to new track|:x:|:x:|:x:|
||`Test Total` |0/9|0/9|0/9|
|:hammer:| **RTCRtpSender-setParameters**||||
||setParameters() when transceiver is stopped should reject with InvalidStateError|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|0/1|
|:hammer:| **RTCRtpTransceiver-setCodecPreferences**||||
||setCodecPreferences() on audio transceiver with codecs returned from RTCRtpSender.getCapabilities('audio') should succeed|:x:|:x:|:x:|
||setCodecPreferences() on video transceiver with codecs returned from RTCRtpReceiver.getCapabilities('video') should succeed|:x:|:x:|:x:|
||setCodecPreferences() with both sender receiver codecs combined should succeed|:x:|:x:|:x:|
||setCodecPreferences([]) should succeed|:x:|:x:|:x:|
||setCodecPreferences() with reordered codecs should succeed|:x:|:x:|:x:|
||setCodecPreferences() on audio transceiver with codecs returned from getCapabilities('video') should throw InvalidAccessError|:x:|:x:|:x:|
||setCodecPreferences() with user defined codec should throw InvalidAccessError|:x:|:x:|:x:|
||setCodecPreferences() with user defined codec together with codecs returned from getCapabilities() should throw InvalidAccessError|:x:|:x:|:x:|
||setCodecPreferences() with modified codecs returned from getCapabilities() should throw InvalidAccessError|:x:|:x:|:x:|
||`Test Total` |0/9|0/9|0/9|
|:hammer:| **RTCRtpTransceiver-setDirection**||||
||setDirection should change transceiver.direction|:x:|:x:|:x:|
||setDirection with same direction should have no effect|:x:|:x:|:x:|
||setDirection should change transceiver.direction independent of transceiver.currentDirection|:x:|:x:|:x:|
||`Test Total` |0/3|0/3|0/3|
|:hammer:| **RTCSctpTransport-constructor**||||
||setRemoteDescription() with answer containing data media should initialize pc.sctp|:x:|:x:|:x:|
||setLocalDescription() with answer containing data media should initialize pc.sctp|:x:|:x:|:x:|
||`Test Total` |0/2|0/2|0/2|
|:hammer:| **RTCSctpTransport-maxMessageSize**||||
||Determine the local side send limitation (canSendSize) by offering a max-message-size of 0|:x:|:x:|:x:|
||Remote offer SDP missing max-message-size attribute|:x:|:x:|:x:|
||max-message-size with a (non-zero) value provided by the remote peer|:x:|:x:|:x:|
||Renegotiate max-message-size with a (non-zero) value provided by the remote peer|:x:|:x:|:x:|
||max-message-size with a (non-zero) value larger than canSendSize provided by the remote peer|:x:|:x:|:x:|
||`Test Total` |0/5|0/5|0/5|
|:hammer:| **RTCTrackEvent-constructor**||||
||new RTCTrackEvent() with valid receiver, track, transceiver should succeed|:x:|:x:|:x:|
||new RTCTrackEvent() with valid receiver, track, streams, transceiver should succeed|:x:|:x:|:x:|
||new RTCTrackEvent() with valid receiver, track, multiple streams, transceiver should succeed|:x:|:x:|:x:|
||new RTCTrackEvent() with unrelated receiver, track, streams, transceiver should succeed|:x:|:x:|:x:|
||new RTCTrackEvent() with no transceiver should throw TypeError|:x:|:x:|:x:|
||new RTCTrackEvent() with no track should throw TypeError|:x:|:x:|:x:|
||new RTCTrackEvent() with no receiver should throw TypeError|:x:|:x:|:x:|
||`Test Total` |0/7|0/7|0/7|
|:hammer:| **simplecall**||||
||Can set up a basic WebRTC call.|:x:|:x:|:x:|
||`Test Total` |0/1|0/1|1/1|
||`Totals` |270/1099|360/1099|394/1099|
