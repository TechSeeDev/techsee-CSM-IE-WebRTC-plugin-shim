# Web Platform Tests
This test have been extracted from https://github.com/w3c/web-platform-tests but they are written in es6 which is not supported by IE.

In order to do so you have to use `babel` them in order to run properly (some even require a bit or manual changing, see commit history) so they can run.

`
babel --presets es2015-ie wtp\resources\idlharness.js -o wtp\resources\idlharness.js
`

For changing the inline javascript inside the html we have used https://github.com/murillo128/babel-html
