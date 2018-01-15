'use strict';

/*
 *  Helper Methods for testing the following methods in RTCPeerConnection:
 *    createOffer
 *    createAnswer
 *    setLocalDescription
 *    setRemoteDescription
 *
 *  This file offers the following features:
 *    SDP similarity comparison
 *    Generating offer/answer using anonymous peer connection
 *    Test signalingstatechange event
 *    Test promise that never resolve
 */

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var audioLineRegex = /\r\nm=audio.+\r\n/g;
var videoLineRegex = /\r\nm=video.+\r\n/g;
var applicationLineRegex = /\r\nm=application.+\r\n/g;

function countLine(sdp, regex) {
  var matches = sdp.match(regex);
  if (matches === null) {
    return 0;
  } else {
    return matches.length;
  }
}

function countAudioLine(sdp) {
  return countLine(sdp, audioLineRegex);
}

function countVideoLine(sdp) {
  return countLine(sdp, videoLineRegex);
}

function countApplicationLine(sdp) {
  return countLine(sdp, applicationLineRegex);
}

function similarMediaDescriptions(sdp1, sdp2) {
  if (sdp1 === sdp2) {
    return true;
  } else if (countAudioLine(sdp1) !== countAudioLine(sdp2) || countVideoLine(sdp1) !== countVideoLine(sdp2) || countApplicationLine(sdp1) !== countApplicationLine(sdp2)) {
    return false;
  } else {
    return true;
  }
}

// Assert that given object is either an
// RTCSessionDescription or RTCSessionDescriptionInit
function assert_is_session_description(sessionDesc) {
  if (sessionDesc instanceof RTCSessionDescription) {
    return;
  }

  assert_not_equals(sessionDesc, undefined, 'Expect session description to be defined');

  assert_true((typeof sessionDesc === 'undefined' ? 'undefined' : _typeof(sessionDesc)) === 'object', 'Expect sessionDescription to be either a RTCSessionDescription or an object');

  assert_true(typeof sessionDesc.type === 'string', 'Expect sessionDescription.type to be a string');

  assert_true(typeof sessionDesc.sdp === 'string', 'Expect sessionDescription.sdp to be a string');
}

// We can't do string comparison to the SDP content,
// because RTCPeerConnection may return SDP that is
// slightly modified or reordered from what is given
// to it due to ICE candidate events or serialization.
// Instead, we create SDP with different number of media
// lines, and if the SDP strings are not the same, we
// simply count the media description lines and if they
// are the same, we assume it is the same.
function isSimilarSessionDescription(sessionDesc1, sessionDesc2) {
  assert_is_session_description(sessionDesc1);
  assert_is_session_description(sessionDesc2);

  if (sessionDesc1.type !== sessionDesc2.type) {
    return false;
  } else {
    return similarMediaDescriptions(sessionDesc1.sdp, sessionDesc2.sdp);
  }
}

function assert_session_desc_equals(sessionDesc1, sessionDesc2) {
  assert_true(isSimilarSessionDescription(sessionDesc1, sessionDesc2), 'Expect both session descriptions to have the same count of media lines');
}

function assert_session_desc_not_equals(sessionDesc1, sessionDesc2) {
  assert_false(isSimilarSessionDescription(sessionDesc1, sessionDesc2), 'Expect both session descriptions to have different count of media lines');
}

// Helper function to generate offer using a freshly created RTCPeerConnection
// object with any audio, video, data media lines present
function generateOffer() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$audio = options.audio,
      audio = _options$audio === undefined ? false : _options$audio,
      _options$video = options.video,
      video = _options$video === undefined ? false : _options$video,
      _options$data = options.data,
      data = _options$data === undefined ? false : _options$data,
      pc = options.pc;


  if (data) {
    pc.createDataChannel('test');
  }

  var setup = {};

  if (audio) {
    setup.offerToReceiveAudio = true;
  }

  if (video) {
    setup.offerToReceiveVideo = true;
  }

  return pc.createOffer(setup).then(function (offer) {
    // Guard here to ensure that the generated offer really
    // contain the number of media lines we want
    var sdp = offer.sdp;


    if (audio) {
      assert_equals(countAudioLine(sdp), 1, 'Expect m=audio line to be present in generated SDP');
    } else {
      assert_equals(countAudioLine(sdp), 0, 'Expect m=audio line to be present in generated SDP');
    }

    if (video) {
      assert_equals(countVideoLine(sdp), 1, 'Expect m=video line to be present in generated SDP');
    } else {
      assert_equals(countVideoLine(sdp), 0, 'Expect m=video line to not present in generated SDP');
    }

    if (data) {
      assert_equals(countApplicationLine(sdp), 1, 'Expect m=application line to be present in generated SDP');
    } else {
      assert_equals(countApplicationLine(sdp), 0, 'Expect m=application line to not present in generated SDP');
    }

    return offer;
  });
}

// Helper function to generate answer based on given offer using a freshly
// created RTCPeerConnection object
function generateAnswer(offer) {
  var pc = new RTCPeerConnection();
  return pc.setRemoteDescription(offer).then(function () {
    return pc.createAnswer();
  });
}

// Wait for peer connection to fire onsignalingstatechange
// event, compare and make sure the new state is the same
// as expected state. It accepts an RTCPeerConnection object
// and an array of expected state changes. The test passes
// if all expected state change events have been fired, and
// fail if the new state is different from the expected state.
//
// Note that the promise is never resolved if no change
// event is fired. To avoid confusion with the main test
// getting timed out, this is done in parallel as a separate
// test
function test_state_change_event(parentTest, pc, expectedStates) {
  return async_test(function (t) {
    pc.onsignalingstatechange = t.step_func(function () {
      if (expectedStates.length === 0) {
        return;
      }

      var newState = pc.signalingState;
      var expectedState = expectedStates.shift();

      assert_equals(newState, expectedState, 'New signaling state is different from expected.');

      if (expectedStates.length === 0) {
        t.done();
      }
    });
  }, 'Test onsignalingstatechange event for ' + parentTest.name);
}

// Run a test function that return a promise that should
// never be resolved. For lack of better options,
// we wait for a time out and pass the test if the
// promise doesn't resolve within that time.
function test_never_resolve(testFunc, testName) {
  async_test(function (t) {
    testFunc(t).then(t.step_func(function (result) {
      assert_unreached('Pending promise should never be resolved. Instead it is fulfilled with: ' + result);
    }), t.step_func(function (err) {
      assert_unreached('Pending promise should never be resolved. Instead it is rejected with: ' + err);
    }));

    t.step_timeout(t.step_func_done(), 100);
  }, testName);
}

// Helper function to exchange ice candidates between
// two local peer connections
function exchangeIceCandidates(pc1, pc2) {
  // private function
  function doExchange(localPc, remotePc) {
    localPc.addEventListener('icecandidate', function (event) {
      var candidate = event.candidate;

      // candidate may be null to indicate end of candidate gathering.
      // There is ongoing discussion on w3c/webrtc-pc#1213
      // that there should be an empty candidate string event
      // for end of candidate for each m= section.

      if (candidate) {
        remotePc.addIceCandidate(candidate);
      }
    });
  }

  doExchange(pc1, pc2);
  doExchange(pc2, pc1);
}

// Helper function for doing one round of offer/answer exchange
// betweeen two local peer connections
function doSignalingHandshake(localPc, remotePc) {
  return localPc.createOffer().then(function (offer) {
    return Promise.all([localPc.setLocalDescription(offer), remotePc.setRemoteDescription(offer)]);
  }).then(function () {
    return remotePc.createAnswer();
  }).then(function (answer) {
    return Promise.all([remotePc.setLocalDescription(answer), localPc.setRemoteDescription(answer)]);
  });
}

// Helper function to create a pair of connected data channel.
// On success the promise resolves to an array with two data channels.
// It does the heavy lifting of performing signaling handshake,
// ICE candidate exchange, and waiting for data channel at two
// end points to open.
function createDataChannelPair() {
  var pc1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new RTCPeerConnection();
  var pc2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new RTCPeerConnection();

  var channel1 = pc1.createDataChannel('');

  exchangeIceCandidates(pc1, pc2);

  return new Promise(function (resolve, reject) {
    var channel2 = void 0;
    var opened1 = false;
    var opened2 = false;

    function onBothOpened() {
      resolve([channel1, channel2]);
    }

    function onOpen1() {
      opened1 = true;
      if (opened2) onBothOpened();
    }

    function onOpen2() {
      opened2 = true;
      if (opened1) onBothOpened();
    }

    function onDataChannel(event) {
      channel2 = event.channel;
      channel2.addEventListener('error', reject);
      var _channel = channel2,
          readyState = _channel.readyState;


      if (readyState === 'open') {
        onOpen2();
      } else if (readyState === 'connecting') {
        channel2.addEventListener('open', onOpen2);
      } else {
        reject(new Error('Unexpected ready state ' + readyState));
      }
    }

    channel1.addEventListener('open', onOpen1);
    channel1.addEventListener('error', reject);

    pc2.addEventListener('datachannel', onDataChannel);

    doSignalingHandshake(pc1, pc2);
  });
}

// Wait for a single message event and return
// a promise that resolve when the event fires
function awaitMessage(channel) {
  return new Promise(function (resolve, reject) {
    channel.addEventListener('message', function (event) {
      return resolve(event.data);
    }, { once: true });

    channel.addEventListener('error', reject, { once: true });
  });
}

// Helper to convert a blob to array buffer so that
// we can read the content
function blobToArrayBuffer(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      resolve(reader.result);
    });

    reader.addEventListener('error', reject);

    reader.readAsArrayBuffer(blob);
  });
}

// Assert that two ArrayBuffer objects have the same byte values
function assert_equals_array_buffer(buffer1, buffer2) {
  assert_true(buffer1 instanceof ArrayBuffer, 'Expect buffer to be instance of ArrayBuffer');

  assert_true(buffer2 instanceof ArrayBuffer, 'Expect buffer to be instance of ArrayBuffer');

  assert_equals(buffer1.byteLength, buffer2.byteLength, 'Expect both array buffers to be of the same byte length');

  var byteLength = buffer1.byteLength;
  var byteArray1 = new Uint8Array(buffer1);
  var byteArray2 = new Uint8Array(buffer2);

  for (var i = 0; i < byteLength; i++) {
    assert_equals(byteArray1[i], byteArray2[i], 'Expect byte at buffer position ' + i + ' to be equal');
  }
}

// Generate a MediaStreamTrack for testing use.
// We generate it by creating an anonymous RTCPeerConnection,
// call addTransceiver(), and use the remote track
// from RTCRtpReceiver. This track is supposed to
// receive media from a remote peer and be played locally.
// We use this approach instead of getUserMedia()
// to bypass the permission dialog and fake media devices,
// as well as being able to generate many unique tracks.
function generateMediaStreamTrack(kind) {
  var pc = new RTCPeerConnection();

  assert_idl_attribute(pc, 'addTransceiver', 'Expect pc to have addTransceiver() method');

  var transceiver = pc.addTransceiver(kind);
  var receiver = transceiver.receiver;
  var track = receiver.track;


  assert_true(track instanceof MediaStreamTrack, 'Expect receiver track to be instance of MediaStreamTrack');

  return track;
}

// Obtain a MediaStreamTrack of kind using getUserMedia.
// Return Promise of pair of track and associated mediaStream.
// Assumes that there is at least one available device
// to generate the track.
function getTrackFromUserMedia(kind) {
  return navigator.mediaDevices.getUserMedia(_defineProperty({}, kind, true)).then(function (mediaStream) {
    var tracks = mediaStream.getTracks();
    assert_greater_than(tracks.length, 0, 'Expect getUserMedia to return at least one track of kind ' + kind);

    var _tracks = _slicedToArray(tracks, 1),
        track = _tracks[0];

    return [track, mediaStream];
  });
}

// Obtain |count| MediaStreamTracks of type |kind| and MediaStreams. The tracks
// do not belong to any stream and the streams are empty. Returns a Promise
// resolved with a pair of arrays [tracks, streams].
// Assumes there is at least one available device to generate the tracks and
// streams and that the getUserMedia() calls resolve.
function getUserMediaTracksAndStreams(count) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'audio';

  var otherTracksPromise = void 0;
  if (count > 1) otherTracksPromise = getUserMediaTracksAndStreams(count - 1, type);else otherTracksPromise = Promise.resolve([[], []]);
  return otherTracksPromise.then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        tracks = _ref2[0],
        streams = _ref2[1];

    return getTrackFromUserMedia(type).then(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          track = _ref4[0],
          stream = _ref4[1];

      // Remove the default stream-track relationship.
      stream.removeTrack(track);
      tracks.push(track);
      streams.push(stream);
      return [tracks, streams];
    });
  });
}

// Creates an offer for the caller, set it as the caller's local description and
// then sets the callee's remote description to the offer. Returns the Promise
// of the setRemoteDescription call.
function performOffer(caller, callee) {
  var sessionDescription = void 0;
  return caller.createOffer().then(function (offer) {
    sessionDescription = offer;
    return caller.setLocalDescription(offer);
  }).then(function () {
    return callee.setRemoteDescription(sessionDescription);
  });
}

// The resolver has a |promise| that can be resolved or rejected using |resolve|
// or |reject|.

var Resolver = function Resolver() {
  _classCallCheck(this, Resolver);

  var promiseResolve = void 0;
  var promiseReject = void 0;
  this.promise = new Promise(function (resolve, reject) {
    promiseResolve = resolve;
    promiseReject = reject;
  });
  this.resolve = promiseResolve;
  this.reject = promiseReject;
};
