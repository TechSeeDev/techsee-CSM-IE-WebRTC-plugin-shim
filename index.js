
// TODO: Check if we are in correct IE version

// Add objects to global
var MediaDevices	 = require("./lib/MediaDevices.js");
navigator.mediaDevices	 = new MediaDevices();

window.RTCPeerConnection = require("./lib/RTCPeerConnection.js");
window.MediaStream	 = require("./lib/MediaStream.js");
window.MediaStreamTrack	 = require("./lib/MediaStreamTrack.js");

