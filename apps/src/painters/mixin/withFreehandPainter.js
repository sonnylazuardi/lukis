/**
 * I know whats needed to draw a free hand
 */
define(function(require){

  var fabric = require("fabric"),
      brushDistance = require("extBrushes/fabric.BrushDistance"),
      brushSensitivity = require("extBrushes/fabric.BrushSensitivity");

  return withFreeHandPainter;

  function withFreeHandPainter() {

    this.defaultAttrs({
      /**
       * Canvas instance hold by this mixin
       * @type {Object}
       */
      mixinCanvas: undefined,

      /**
       * The brush to use for painting
       * @type {Object}
       */
      activeBrush: undefined,

    });

    this.after("initialize", function() {
      this.on("brush-served", function( e, data ) {
        this.setBrush(data.brush);
      }.bind(this));

      this.on("brushProperty-updated", function( e, data ) {
        if (data.key === "width") {
          this.setBrushWidth(data.newValue);  
        } else if (data.key === "fillColor" || data.key === "strokeColor") {
          this.setBrushColor(data.newValue);
        } else if (data.key === "distance") {
          this.setBrushDistance(data.newValue);
        } else if (data.key === "sensitivity") {
          this.setSensitivity(data.newValue);
        }
      }.bind(this));
    });

    /**
     * Start free hand painting
     * @param  {Object} canvas Canvas
     * @param  {Object} brush  The custom brush to use. If not provided, then
     *                         we use the one saved by this mixin
     */
    this.startFreehandPainting = function( canvas, brush ) {
      var usedBrush = brush || this.attr.activeBrush;

      if (usedBrush) {
        this.attr.mixinCanvas = canvas;
        this.attr.mixinCanvas.isDrawingMode = true;
        this.setupFreehandPaintingProperty(usedBrush);  
      }
    };

    /**
     * Stop painting
     */
    this.stopFreehandPainting = function() {
      if (this.attr.mixinCanvas) {
        this.attr.mixinCanvas.isDrawingMode = false;  
      }
    };

    /**
     * Setting brush instance to use for painting
     * @param {Object} brush The brush
     */
    this.setBrush = function( brush ) {
      this.attr.activeBrush = brush;

      if (this.attr.mixinCanvas && this.attr.mixinCanvas.isDrawingMode) {
        this.setupFreehandPaintingProperty(brush);
      }
    };

    /**
     * Setting up freehand brush properties for painting
     * @param  {Object} brush The brush
     */
    this.setupFreehandPaintingProperty = function( brush ) {
      var freeDrawingBrush = brush.getBrush();
      freeDrawingBrush.color = brush.get("fillColor");
      freeDrawingBrush.width = brush.get("width");

      this.attr.mixinCanvas.freeDrawingBrush = freeDrawingBrush;
      brushDistance.hijack(freeDrawingBrush);
      brushSensitivity.hijack(freeDrawingBrush);
    };

    /**
     * Update brush width
     * @param {Integer} width Width
     */
    this.setBrushWidth = function( width ) {
      this.attr.activeBrush.set("width", width);

      if (this.attr.mixinCanvas && this.attr.mixinCanvas.isDrawingMode) {
        this.attr.mixinCanvas.freeDrawingBrush.width = width;
      }
    };

    /**
     * Setting brush color
     * @param {String} color Color
     */
    this.setBrushColor = function( color ) {
      this.attr.activeBrush.set("fillColor", color);

      if (this.attr.mixinCanvas && this.attr.mixinCanvas.isDrawingMode) {
        this.attr.mixinCanvas.freeDrawingBrush.color = color;
      }
    };

    this.setBrushDistance = function( distance ) {
      brushDistance.setDistance(distance);
    };

    this.setSensitivity = function( sensitivity ) {
      brushSensitivity.setSensitivity(sensitivity);
    };

  }

});