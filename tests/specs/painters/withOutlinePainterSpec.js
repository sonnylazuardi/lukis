define(function(require){

  var fabric = require("fabric"),
      canvas = new fabric.Canvas(),
      RectOutline = require("outlineShapes/rectOutline"),
      withCanvas = require("painters/withCanvasEvents"),
      compose = require("flight/lib/compose"),
      canvasEventsService = {};

  compose.mixin(canvasEventsService, [withCanvas]);

  describeMixin("painters/withOutlinePainter", function(){

    beforeEach(function(){
      setupComponent();
    });

    describe("Event Listener", function(){

      it("Should have changed the active outline shape on activeOutlineShapeUpdated event", function(){
        $('.component-root').trigger("activeOutlineShapeUpdated", {
          newActiveOutlineShape: "example"
        });

        expect(this.component.attr.activeOutlineShape).toEqual("example");
      });

      it("Should have updated the property of the active outline shape instance", function(){
        this.component.attr.activeOutlineShape = {
          id: "rectOutline",
          outlineShape: new RectOutline(canvas, {})
        };

        $('.component-root').trigger("outlineShapePropertyUpdated", {
          key: "width",
          newValue: 50
        });

        var outlineShape = this.component.attr.activeOutlineShape.outlineShape;
        expect(outlineShape.get("width")).toEqual(50);
      });

    });

    describe("Outline shape painting", function(){

      beforeEach(function(){
        this.component.attr.activeOutlineShape = {
          id: "rectOutline",
          outlineShape: new RectOutline(canvas, {})
        };
      });

      it("Should have register the canvas events handler properly", function(){
        $('.component-root').trigger("outlineShapePaintingInitted", {
          canvas: canvas,
          canvasEventsService: canvasEventsService
        });

        var activeOutlineShape = this.component.attr.activeOutlineShape.outlineShape;
        spyOn(activeOutlineShape, "onMouseMove");

        canvas.fire("mouse:move");
        expect(activeOutlineShape.onMouseMove).toHaveBeenCalled();
      });

    });

  });

});