var EventTarget			= require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute	= require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;
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

var MediaStream = function(tracks)
{
	//Init event targetr
	EventTarget.call(this);
	
	//Private vars
	this.priv = {
		tracks : {}
	};
	
	//Add input tracks to our map
	if (tracks)
		for (var i=0; i<tracks.length; ++i)
			this.priv.tracks[tracks[i].id] = tracks[i];
	
	Object.defineProperty(this, 'id'	, { enumerable: true, configurable: false, writable: false, value: "stream-"+(count++)});
	Object.defineProperty(this, 'active'	, { enumerable: true, configurable: false, writable: false, value: true});
	
	return this;
};

//Inherit from Event Target
MediaStream.prototype = Object.create(EventTarget.prototype, {
	constructor: { 
		value		: MediaStream, 
		configurable	: true,
		writable	: true 
	}
});

// Define Event Handlers
defineEventAttribute(MediaStream.prototype, "addtrack");
defineEventAttribute(MediaStream.prototype, "removetrack");

MediaStream.prototype.getAudioTracks = function()
{
	var arr = [];
	for (var id in this.priv.tracks)
		if (this.priv.tracks[id].kind==="audio")
		arr.push(this.priv.tracks[id]);
	return arr;
};

MediaStream.prototype.getVideoTracks = function()
{
	var arr = [];
	for (var id in this.priv.tracks)
		if (this.priv.tracks[id].kind==="video")
			arr.push(this.priv.tracks[id]);
	return arr;	
};

MediaStream.prototype.getTracks = function()
{
	var arr = [];
	for (var id in this.priv.tracks)
		arr.push(this.priv.tracks[id]);
	return arr;
};

MediaStream.prototype.getTrackById = function(id)
{
	return this.priv.tracks[id];
};

MediaStream.prototype.addTrack = function(track)
{
	//Check if already present
	if (this.priv.tracks.hasOwnProperty(track.id))
		return;
	//Add to track
	this.priv.tracks[track.id] = track;
	//Create event
	var event = document.createEvent("Event");
	event.initEvent("addtrack", false, false);
	event.track = track;
	//Fire it
	this.dispatchEvent(event);
};

MediaStream.prototype.removeTrack = function(track)
{
	//Check if it is notalready present
	if (!this.priv.tracks.hasOwnProperty(track.id))
		return;
	//Add to track
	delete(this.priv.tracks[track.id]);
	//Create event
	var event = document.createEvent("Event");
	event.initEvent("removetrack", false, false);
	event.track = track;
	//Fire it
	this.dispatchEvent(event);
};

MediaStream.prototype.clone = function()
{
	return new MediaStream(this.getTracks());
};

module.exports = MediaStream;