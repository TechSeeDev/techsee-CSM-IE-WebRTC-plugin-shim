'use strict';

// Test is based on the following editor draft:
// https://w3c.github.io/webrtc-pc/archives/20170605/webrtc.html

// Code using this helper should also include RTCPeerConnection-helper.js
// in the main HTML file

// The following helper functions are called from RTCPeerConnection-helper.js:
//   getTrackFromUserMedia

// Create a RTCDTMFSender using getUserMedia()

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function createDtmfSender() {
  var pc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new RTCPeerConnection();

  return getTrackFromUserMedia('audio').then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        track = _ref2[0],
        mediaStream = _ref2[1];

    var sender = pc.addTrack(track, mediaStream);
    var dtmfSender = sender.dtmf;

    assert_true(dtmfSender instanceof RTCDTMFSender, 'Expect audio sender.dtmf to be set to a RTCDTMFSender');

    return dtmfSender;
  });
}

/*
  Create an RTCDTMFSender and test tonechange events on it.
    testFunc
      Test function that is going to manipulate the DTMFSender.
      It will be called with:
        t - the test object
        sender - the created RTCDTMFSender
        pc - the associated RTCPeerConnection as second argument.
    toneChanges
      Array of expected tonechange events fired. The elements
      are array of 3 items:
        expectedTone
          The expected character in event.tone
        expectedToneBuffer
          The expected new value of dtmfSender.toneBuffer
        expectedDuration
          The rough time since beginning or last tonechange event
          was fired.
    desc
      Test description.
 */
function test_tone_change_events(testFunc, toneChanges, desc) {
  async_test(function (t) {
    var pc = new RTCPeerConnection();

    createDtmfSender(pc).then(function (dtmfSender) {
      var lastEventTime = Date.now();

      var onToneChange = t.step_func(function (ev) {
        assert_true(ev instanceof RTCDTMFToneChangeEvent, 'Expect tone change event object to be an RTCDTMFToneChangeEvent');

        var tone = ev.tone;

        assert_equals(typeof tone === 'undefined' ? 'undefined' : _typeof(tone), 'string', 'Expect event.tone to be the tone string');

        assert_greater_than(toneChanges.length, 0, 'More tonechange event is fired than expected');

        var _toneChanges$shift = toneChanges.shift(),
            _toneChanges$shift2 = _slicedToArray(_toneChanges$shift, 3),
            expectedTone = _toneChanges$shift2[0],
            expectedToneBuffer = _toneChanges$shift2[1],
            expectedDuration = _toneChanges$shift2[2];

        assert_equals(tone, expectedTone, 'Expect current event.tone to be ' + expectedTone);

        assert_equals(dtmfSender.toneBuffer, expectedToneBuffer, 'Expect dtmfSender.toneBuffer to be updated to ' + expectedToneBuffer);

        var now = Date.now();
        var duration = now - lastEventTime;

        assert_approx_equals(duration, expectedDuration, 250, 'Expect tonechange event for "' + tone + '" to be fired approximately after ' + expectedDuration + ' milliseconds');

        lastEventTime = now;

        if (toneChanges.length === 0) {
          // Wait for same duration as last expected duration + 100ms
          // before passing test in case there are new tone events fired,
          // in which case the test should fail.
          t.step_timeout(t.step_func(function () {
            t.done();
            pc.close();
          }), expectedDuration + 100);
        }
      });

      dtmfSender.addEventListener('tonechange', onToneChange);

      testFunc(t, dtmfSender, pc);
    }).catch(t.step_func(function (err) {
      assert_unreached('Unexpected promise rejection: ' + err);
    }));
  }, desc);
}

// Get the one and only tranceiver from pc.getTransceivers().
// Assumes that there is only one tranceiver in pc.
function getTransceiver(pc) {
  var transceivers = pc.getTransceivers();
  assert_equals(transceivers.length, 1, 'Expect there to be only one tranceiver in pc');

  return transceivers[0];
}
