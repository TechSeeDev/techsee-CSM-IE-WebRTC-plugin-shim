function InvalidStateError()
{
	try {
		var xhr = new XMLHttpRequest(); 
		xhr.responseType = "blob";
	} catch(e) { 
		return e;
	}
}

module.exports = InvalidStateError;