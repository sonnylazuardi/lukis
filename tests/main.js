require.config({
  baseUrl: "../apps/src",

  paths: {
    fabric: "../libs/fabric.1.4.0",
    text: "../../vendor/requirejs-text/text",
    mustache: "../../vendor/mustache/mustache"
  },

  shim:{
    fabric: {
      exports: "fabric"
    }
  },

  map: {
    "*": {
      'flight/component': '../../vendor/flight/lib/component',
      'flight': '../../vendor/flight',
      'brushes': 'brushes',
      'specs': '../../tests/specs'
    }
  }
});

require(

[
  "specs/brushes/circleSpec",
  "specs/brushServices/brushManagerSpec.js",
  "specs/outlineServices/outlineManagerSpec.js",
  "specs/dataServices/brushlistSpec.js",
  "specs/dataServices/paintWidgetListSpec.js",
  "specs/painters/lukisSpec",
  "specs/painters/mixin/withCanvasEventsSpec",
  "specs/painters/mixin/withBrushPainterSpec",
  "specs/painters/mixin/withOutlinePainterSpec",
  "specs/ui/paintWidget/paintWidgetsSpec"
],

function(){
  var jasmineEnv = jasmine.getEnv();

  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();
});