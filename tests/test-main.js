'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/Spec\.js$/.test(file));
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/apps/src',

  paths: {
    fabric: 'canvas-lib/fabric',
    flight: './../../vendor/flight',
    text: './../../vendor/requirejs-text/text',
    mustache: '../../vendor/mustache/mustache',
  },

  shim: {
    fabric: {
      exports: "fabric"
    },
    jquery: {
      exports: "$"
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});