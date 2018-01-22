/*
 [Constructor(RTCSessionDescriptionInit descriptionInitDict),
 Exposed=Window]
interface RTCSessionDescription {
    readonly attribute RTCSdpType type;
    readonly attribute DOMString  sdp;
    [Default] object toJSON();
}; 
 
 dictionary RTCSessionDescriptionInit {
    required RTCSdpType type;
             DOMString  sdp = "";
};

 */

function RTCSessionDescription(descriptionInitDict)
{
	//Get values from dictionary
	// we support custom constructor to pass array instead of object as "dictionary" from activexobject
	var type	= Array.isArray(descriptionInitDict) ? descriptionInitDict[0] : descriptionInitDict.type;
	var sdp		= Array.isArray(descriptionInitDict) ? descriptionInitDict[1] : descriptionInitDict.sdp;
	
	//Direct attributes from init
	Object.defineProperty(this, "type"		, { enumerable: true, configurable: false, get: function() { return type;		}});
	Object.defineProperty(this, "sdp"		, { enumerable: true, configurable: false, get: function() { return sdp;		}});
	
	return this;
};

RTCSessionDescription.prototype.toJSON = function() 
{
	return {
		type	: this.type,
		sdp	: this.sdp
	};
};

Object.defineProperty(RTCSessionDescription, 'name', { enumerable: false, configurable: true, writable: false, value: "RTCSessionDescription" });
Object.defineProperty(RTCSessionDescription, 'prototype'	, { writable:false });
module.exports = RTCSessionDescription;