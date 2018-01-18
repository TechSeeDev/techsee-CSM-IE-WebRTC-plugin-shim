var EventTarget			= require("event-target-shim/dist/event-target-shim.umd.js").EventTarget;
var defineEventAttribute	= require("event-target-shim/dist/event-target-shim.umd.js").defineEventAttribute;
var InvalidStateError           = require("./InvalidStateError.js");

/*
 interface RTCRTCDataChannel : EventTarget {
    readonly attribute USVString           label;
    readonly attribute boolean             ordered;
    readonly attribute unsigned short?     maxPacketLifeTime;
    readonly attribute unsigned short?     maxRetransmits;
    readonly attribute USVString           protocol;
    readonly attribute boolean             negotiated;
    readonly attribute unsigned short?     id;
    readonly attribute RTCPriorityType     priority;
    readonly attribute RTCRTCDataChannelState readyState;
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
var RTCDataChannel = function(dataChannel)
{
	//Init event targetr
	EventTarget.call(this);
	
	//Private vars
	var self = this;
	var priv = this.priv = {
		binaryType  : "blob",
		dataChannel : dataChannel
	};
	
	//Read only properties
	Object.defineProperty(this, 'label'		, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.label;		}});
	Object.defineProperty(this, 'ordered'		, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.ordered;		}});
	Object.defineProperty(this, 'maxPacketLifeTime'	, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.maxPacketLifeTime;	}});
	Object.defineProperty(this, 'protocol'		, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.protocol;		}});
	Object.defineProperty(this, 'negotiated'	, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.negotiated;		}});
	Object.defineProperty(this, 'id'		, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.id;			}});
	Object.defineProperty(this, 'priority'		, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.priority;		}});
	Object.defineProperty(this, 'readyState'	, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.readyState;		}});
	Object.defineProperty(this, 'bufferedAmount'	, { enumerable: true, configurable: false, get: function(){ return priv.dataChannel.bufferedAmount;	}});
	//Read & write
	Object.defineProperty(this, 'bufferedAmountLowThreshold', { enumerable: true, configurable: false,
		get: function() {
			return priv.dataChannel.bufferedAmountLowThreshold;	
		},
		set: function(bufferedAmountLowThreshold){
			return priv.dataChannel.bufferedAmountLowThreshold = bufferedAmountLowThreshold;
		}
	});
	Object.defineProperty(this, 'binaryType'		, { enumerable: true, configurable: false, 
		get: function() {
			return priv.dataChannel.bufferedAmount;	
		},
		set: function(binaryType){
			if (binaryType!=="blob" && binaryType!=="arraybuffer")
				throw new SyntaxError();
			return priv.binaryType = binaryType;
		}
	});
	
	function createEvent(name) {
		var e = document.createEvent("Event");
		e.initEvent(name, false, false);
		return e;
	}
	
	function fire(name) {
		self.dispatchEvent(createEvent(name));
	}
	
	//Set event
	priv.dataChannel.onopen = function() {
		fire("open");
	};
	priv.dataChannel.onbufferedamountlow= function() {
		fire("bufferedamountlow");
	};
	priv.dataChannel.onerror = function() {
		fire("error");
	};
	priv.dataChannel.onclose = function() {
		fire("close");
	};
	priv.dataChannel.onmessage = function(message) {
		//Create event
		var event = createEvent("message");
		
		//Check if message is binary
		if (typeof message !== "string")
		{
			//Create uint array
			var array = new Uint8Array(message);
			//Check binary type
			if (priv.binaryType==="blob")
			{
				//Create blob builder
				var builder = new MSBlobBuilder();
				//Append message
				builder.append(array);
				//Get blob
				event.data = builder.getBlob();
			} else if (priv.binaryType==="arraybuffer") {
				//Get array buffer
				event.data = array.buffer;
			} else
				return;
		} else {
			//It is a string
			event.data = message;
		}

		//Check if 
		self.dispatchEvent(event);
	};
	
	//Done
	return this;
};

//Inherit from Event Target
RTCDataChannel.prototype = Object.create(EventTarget.prototype, {
	constructor: { 
		value		: RTCDataChannel, 
		configurable	: true,
		writable	: true 
	}
});

// Define Event Handlers
defineEventAttribute(RTCDataChannel.prototype, "open");
defineEventAttribute(RTCDataChannel.prototype, "bufferedamountlow");
defineEventAttribute(RTCDataChannel.prototype, "error");
defineEventAttribute(RTCDataChannel.prototype, "close");
defineEventAttribute(RTCDataChannel.prototype, "message");

RTCDataChannel.prototype.send = function(data)
{
	var self = this;
	//Check state
	if (this.readyState!=="open")
		throw new InvalidStateError();
	
	try {
		//Check type
		if (data instanceof Blob)
		{
			var reader = new FileReader();
			reader.onloadend = function() {
				//Create array from buffer
				var array = new Uint8Array(reader.result)
				//Send it
				self.priv.dataChannel.send(array);
			}
			//Read data as array
			reader.readAsArrayBuffer(data);
		} else if (data instanceof ArrayBuffer) {
			//Send it
			this.priv.dataChannel.send(array);
		} else if (typeof data === "string") {
			//Send it
			this.priv.dataChannel.send(data);
		} else {
			throw new TypeError();
		}
	} catch(e) {
		throw InvalidStateError();
	}
};

RTCDataChannel.prototype.close = function()
{
	this.priv.dataChannel.close();
};

module.exports = RTCDataChannel;