/*
 [Exposed=Window]
 interface RTCRtpTransceiver {
    readonly attribute DOMString?                  mid;
    [SameObject]
    readonly attribute RTCRtpSender                sender;
    [SameObject]
    readonly attribute RTCRtpReceiver              receiver;
    readonly attribute boolean                     stopped;
             attribute RTCRtpTransceiverDirection  direction;
    readonly attribute RTCRtpTransceiverDirection? currentDirection;
    void stop();
    void setCodecPreferences(sequence<RTCRtpCodecCapability> codecs);
};

 */
var RTPRtcTransceiver = function(sender,receiver)
{

	//Private attributes
	var priv = this.priv = {
		mid		: null,
		sender		: sender,
		receiver	: receiver,
		stopped		: false,
		direction	: "sendrecv",
		currentDirection: "sendrecv"
	};
	
	//Read only
	Object.defineProperty(this, "mid"		, { enumerable: true, configurable: false, get: function() { return priv.mid;			}});
	Object.defineProperty(this, "sender"		, { enumerable: true, configurable: false, get: function() { return priv.sender;		}});
	Object.defineProperty(this, "receiver"		, { enumerable: true, configurable: false, get: function() { return priv.receiver;		}});
	Object.defineProperty(this, "stopped"		, { enumerable: true, configurable: false, get: function() { return priv.stopped;		}});
	Object.defineProperty(this, "currentDirection"	, { enumerable: true, configurable: false, get: function() { return priv.currentDirection;	}});
	
	//REad and write
	Object.defineProperty(this, "currentDirection"	, { enumerable: true, configurable: false, 
		get: function() {
			return priv.direction;	
		},
		set: function(direction) {
			priv.direction = direction;
			priv.currentDirection = direction;
			return direction;	
		}
	});

};

RTPRtcTransceiver.prototype.stop = function()
{
	throw "Not implemented";
};

Object.defineProperty(RTPRtcTransceiver, 'name', { enumerable: false, configurable: true, writable: false, value: "RTPRtcTransceiver" });
Object.defineProperty(RTPRtcTransceiver, 'prototype'	, { writable:false });
module.exports = RTPRtcTransceiver;