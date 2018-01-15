'use strict';

// Test is based on the following editor draft:
// https://w3c.github.io/webrtc-pc/archives/20170605/webrtc.html

// This file depends on dictionary-helper.js which should
// be loaded from the main HTML file.

/*
  5.2.  RTCRtpSender Interface
    dictionary RTCRtpCapabilities {
      sequence<RTCRtpCodecCapability>           codecs;
      sequence<RTCRtpHeaderExtensionCapability> headerExtensions;
    };

    dictionary RTCRtpCodecCapability {
      DOMString      mimeType;
      unsigned long  clockRate;
      unsigned short channels;
      DOMString      sdpFmtpLine;
    };

    dictionary RTCRtpHeaderExtensionCapability {
      DOMString uri;
    };
 */

function validateRtpCapabilities(capabilities) {
  assert_array_field(capabilities, 'codecs');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = capabilities.codecs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var codec = _step.value;

      validateCodecCapability(codec);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  assert_greater_than(capabilities.codec, 0, 'Expect at least one codec capability available');

  assert_array_field(capabilities, 'headerExtensions');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = capabilities.headerExtensions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var headerExt = _step2.value;

      validateHeaderExtensionCapability(headerExt);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function validateCodecCapability(codec) {
  assert_optional_string_field(codec, 'mimeType');
  assert_optional_unsigned_int_field(codec, 'clockRate');
  assert_optional_unsigned_int_field(codec, 'channels');
  assert_optional_string_field(codec, 'sdpFmtpLine');
}

function validateHeaderExtensionCapability(headerExt) {
  assert_optional_string_field(headerExt, 'uri');
}
