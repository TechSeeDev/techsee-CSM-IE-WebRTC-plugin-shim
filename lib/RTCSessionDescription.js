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
	var type	= descriptionInitDict.type;
	var sdp		= descriptionInitDict.sdp;
	
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


module.exports = RTCSessionDescription;