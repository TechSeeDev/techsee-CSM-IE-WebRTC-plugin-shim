var browser = require("detect-browser").detect();

//If it is not internet exploer, do nothign
if (browser.name === "ie") 
{
	// Add objects to global
	var MediaDevices		= require("./lib/MediaDevices.js");
	var VideoRenderer		= require("./lib/VideoRenderer.js");
	navigator.mediaDevices		= new MediaDevices();

	window.RTCPeerConnection	= require("./lib/RTCPeerConnection.js");
	window.RTCSessionDescription	= require("./lib/RTCSessionDescription.js");
	window.RTCIceCandidate		= require("./lib/RTCIceCandidate.js");
	window.MediaStream		= require("./lib/MediaStream.js");
	window.MediaStreamTrack		= require("./lib/MediaStreamTrack.js");
	window.Promise			= require("promise-polyfill");


	//Helper functions to check video nodes
	function checkNewNode(node) 
	{
		//If it is a video element
		if (node.nodeName === 'video') 
			// Observe changes in the video element
			return VideoRenderer.handle(node);
		//Look in childs
		for (var j = 0; j < node.childNodes.length; j++) 
			checkNewNode(node.childNodes.item(j));
	}

	function checkRemovedNode(node)
	{
		//If it is a video element
		if (node.nodeName === 'video') 
			return VideoRenderer.unhandle(node);
		//Look in childs
		for (var j = 0; j < node.childNodes.length; j++) 
			checkRemovedNode(node.childNodes.item(j));
	}
	
	// DOM mutation observer to check when a new video element has been added to the DOM
	var domObserver = new MutationObserver(function (mutations) {
		for (var i = 0, numMutations = mutations.length; i < numMutations; i++)
		{
			var mutation = mutations[i];

			// Check if there has been addition or deletion of nodes
			if (mutation.type !== 'childList')
				continue;

			// Check added nodes.
			for (var j = 0, numNodes = mutation.addedNodes.length; j < numNodes; j++)
				//Check node recursively
				checkNewNode(mutation.addedNodes[j]);

			// Check removed nodes.
			for (j = 0, numNodes = mutation.removedNodes.length; j < numNodes; j++) 
				//Check node recursively
				checkRemovedNode(mutation.removedNodes[j]);
		}
	});

	//Get all video elements already present
	var videos = document.getElementsByTagName("video");

	//Handle them
	for (var i=0; i<videos.length; ++i)
		VideoRenderer.handle(videos[i]);
}