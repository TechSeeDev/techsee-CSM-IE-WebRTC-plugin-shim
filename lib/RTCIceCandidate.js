/*
interface RTCIceCandidate {
    readonly attribute DOMString               candidate;
    readonly attribute DOMString?              sdpMid;
    readonly attribute unsigned short?         sdpMLineIndex;
    readonly attribute DOMString?              foundation;
    readonly attribute RTCIceComponent?        component;
    readonly attribute unsigned long?          priority;
    readonly attribute DOMString?              ip;
    readonly attribute RTCIceProtocol?         protocol;
    readonly attribute unsigned short?         port;
    readonly attribute RTCIceCandidateType?    type;
    readonly attribute RTCIceTcpCandidateType? tcpType;
    readonly attribute DOMString?              relatedAddress;
    readonly attribute unsigned short?         relatedPort;
    readonly attribute DOMString?              usernameFragment;
    RTCIceCandidateInit toJSON();
};
 */
var RTCIceCandidate = function(candidate,sdpMid,sdpMLineIndex,foundation,component,priority,ip,protocol,port,type,tcpType,relatedAddress,relatedPort,usernameFragment) 
{
	//Direct attributes from init
	Object.defineProperty(this, "candidate"		, { enumerable: true, configurable: false, get: function() { return candidate;		}});
	Object.defineProperty(this, "sdpMid"		, { enumerable: true, configurable: false, get: function() { return sdpMid;		}});
	Object.defineProperty(this, "sdpMLineIndex"	, { enumerable: true, configurable: false, get: function() { return sdpMLineIndex;	}});
	Object.defineProperty(this, "foundation"	, { enumerable: true, configurable: false, get: function() { return foundation;		}});
	Object.defineProperty(this, "component"		, { enumerable: true, configurable: false, get: function() { return component;		}});
	Object.defineProperty(this, "priority"		, { enumerable: true, configurable: false, get: function() { return priority;		}});
	Object.defineProperty(this, "ip"		, { enumerable: true, configurable: false, get: function() { return ip;			}});
	Object.defineProperty(this, "protocol"		, { enumerable: true, configurable: false, get: function() { return protocol;		}});
	Object.defineProperty(this, "port"		, { enumerable: true, configurable: false, get: function() { return port;		}});
	Object.defineProperty(this, "type"		, { enumerable: true, configurable: false, get: function() { return type;		}});
	Object.defineProperty(this, "tcpType"		, { enumerable: true, configurable: false, get: function() { return tcpType;		}});
	Object.defineProperty(this, "relatedAddress"	, { enumerable: true, configurable: false, get: function() { return relatedAddress;	}});
	Object.defineProperty(this, "relatedPort"	, { enumerable: true, configurable: false, get: function() { return relatedPort;	}});
	Object.defineProperty(this, "usernameFragment"	, { enumerable: true, configurable: false, get: function() { return usernameFragment;	}});
	
	return this;
};

RTCIceCandidate.prototype.toJSON = function() 
{
	return {
		candidate	: this.candidate,
		sdpMid		: this.sdpMid,
		sdpMLineIndex	: this.sdpMLineIndex,
		usernameFragment: this.usernameFragment
	};
};

module.exports = RTCIceCandidate;
