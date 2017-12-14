//debugger;
var iceServers = [
	{urls: 'stun:stun1.example.net'},
	{urls: ['turns:turn.example.org', 'turn:turn.example.net'],
		username: 'user',
		credential: 'myPassword',
		credentialType: 'password'},
	{urls: 'turns:turn2.example.net',
		username: '22BIjxU93h/IgwEb',
		credential: {
			macKey: 'WmtzanB3ZW9peFhtdm42NzUzNG0=',
			accessToken: 'AAwg3kPHWPfvk9bDFL936wYvkoctMADzQ5VhNDgeMR3+ZlZ35byg972fW8QjpEl7bx91YLBPFsIhsxloWcXPhA=='
		},
		credentialType: 'oauth'}
];

var pc = new RTCPeerConnection ({
	//iceServers: iceServers
});

pc.onsignalingstatechange = function(event) {
	console.log("RTCPeerConnection::onsignalingstatechange [state:"+pc.signalingState+"]");
};
pc.onicecandidate = function(event) {
	console.log("RTCPeerConnection::onicecandidate [candidate:"+ event.candidate.candidate+", url:" + event.url + "]", event.candidate);
};
pc.oniceconnectionstatechange = function(event) {
	console.log("RTCPeerConnection::oniceconnectionstatechange [state:"+pc.iceConnectionState+"]");
};
pc.onicegatheringstatechange = function(event) {
	console.log("RTCPeerConnection::onicegatheringstatechange [state:"+pc.iceGatheringState+"]");
};

pc.onconnectionstatechange = function(event) {
	console.log("RTCPeerConnection::onconnectionstatechange [state:"+pc.connectionState+"]");
};

navigator.mediaDevices.getUserMedia({
		audio:true,
		video:true
	})
	.then(function(stream){
		var tracks = stream.getTracks();
	
		for (var i=0;i<tracks.length;++i)
			var sender = pc.addTrack(tracks[i]);
	
		return pc.createOffer();
	})
	.then(function(offer){
		console.log("RTCPeerConnection::createOffer() [type: "+ offer.type + "]");
		console.log(offer.sdp);
		return pc.setLocalDescription(offer);
	})
	.then(function(){
		console.log("RTCPeerConnection::setLocalDescription() sucess");
		return pc.close();
	})
	.then(function(){
		console.log("RTCPeerConnection::close() sucess");
	})
	.catch(function(error){
		console.error(error);
	});
