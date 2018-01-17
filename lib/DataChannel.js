var EventTarget			= require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute	= require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;

/*
 interface RTCDataChannel : EventTarget {
    readonly attribute USVString           label;
    readonly attribute boolean             ordered;
    readonly attribute unsigned short?     maxPacketLifeTime;
    readonly attribute unsigned short?     maxRetransmits;
    readonly attribute USVString           protocol;
    readonly attribute boolean             negotiated;
    readonly attribute unsigned short?     id;
    readonly attribute RTCPriorityType     priority;
    readonly attribute RTCDataChannelState readyState;
    readonly attribute unsigned long       bufferedAmount;
             attribute unsigned long       bufferedAmountLowThreshold;
             attribute EventHandler        onopen;
             attribute EventHandler        onbufferedamountlow;
             attribute EventHandler        onerror;
             attribute EventHandler        onclose;
    void close();
             attribute EventHandler        onmessage;
             attribute DOMString           binaryType;
    void send(USVString data);
    void send(Blob data);
    void send(ArrayBuffer data);
    void send(ArrayBufferView data);
};
 */
var DataChannel = function(dataChannel)
{
	//Init event targetr
	EventTarget.call(this);
	
	//Private vars
	var priv = this.priv = {
		dataChannel : dataChannel
	};
	
	//Object.defineProperty(this, 'label'	, { enumerable: true, configurable: false, get: function(){ return priv.track.kind;	}});
	
	return this;
};

//Inherit from Event Target
DataChannel.prototype = Object.create(EventTarget.prototype, {
	constructor: { 
		value		: DataChannel, 
		configurable	: true,
		writable	: true 
	}
});

// Define Event Handlers
defineEventAttribute(DataChannel.prototype, "open");
defineEventAttribute(DataChannel.prototype, "bufferedamountlow");
defineEventAttribute(DataChannel.prototype, "error");
defineEventAttribute(DataChannel.prototype, "close");
defineEventAttribute(DataChannel.prototype, "message");

DataChannel.prototype.send = function(data)
{
	
};

DataChannel.prototype.close = function()
{
	
};

module.exports = DataChannel;