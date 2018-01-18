var browser = require("detect-browser").detect();

var WebRTCProxy;

//If it is internet exploer
if (browser.name === "ie")
	// Create singleton
	WebRTCProxy = new ActiveXObject("Cosmo.WebRTCProxy.1");

module.exports = WebRTCProxy;