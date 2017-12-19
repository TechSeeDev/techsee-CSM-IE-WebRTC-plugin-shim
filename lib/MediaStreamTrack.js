var EventTarget			= require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute	= require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;
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
var MediaStreamTrack = function(track)
{
	//Init event targetr
	EventTarget.call(this);
	
	//Private vars
	var priv = this.priv = {
		track : track,
		muted : false
	};
	
	Object.defineProperty(this, 'kind'	, { enumerable: true, configurable: false, get: function(){ return priv.track.kind;	}});
	Object.defineProperty(this, 'id'	, { enumerable: true, configurable: false, get: function(){ return priv.track.id;	}});
	Object.defineProperty(this, 'label'	, { enumerable: true, configurable: false, get: function(){ return priv.track.id;	}});
	Object.defineProperty(this, 'enabled'	, { enumerable: true, configurable: false, get: function(){ return priv.track.enabled;} , set: function(enabled){ priv.track.enabled = !!enabled; }});
	Object.defineProperty(this, 'muted'	, { enumerable: true, configurable: false, get: function(){ return priv.muted;	}});
	Object.defineProperty(this, 'readyState', { enumerable: true, configurable: false, get: function(){ return priv.track.state;	}});
	
	return this;
};

//Inherit from Event Target
MediaStreamTrack.prototype = Object.create(EventTarget.prototype, {
	constructor: { 
		value		: MediaStreamTrack, 
		configurable	: true,
		writable	: true 
	}
});

// Define Event Handlers
//TODO: fire them somehow
defineEventAttribute(MediaStreamTrack.prototype, "mute");
defineEventAttribute(MediaStreamTrack.prototype, "unmute");
defineEventAttribute(MediaStreamTrack.prototype, "ended");

MediaStreamTrack.prototype.clone = function()
{
	return null;
};

MediaStreamTrack.prototype.stop = function()
{
	this.priv.track.stop();
};

MediaStreamTrack.prototype.getCapabilities = function()
{
	
};

MediaStreamTrack.prototype.getConstraints = function()
{
	
};

MediaStreamTrack.prototype.getSettings = function()
{
	
};

MediaStreamTrack.prototype.applyConstraints = function()
{
	
};

module.exports = MediaStreamTrack;