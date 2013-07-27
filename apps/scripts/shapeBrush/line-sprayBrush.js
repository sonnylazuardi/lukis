define(function(require){
  var sprayBrush = require("brushes/sprayBrush"),
      lineOutlinePts = require("utils/lineOutlinePoints");

  function createLineCircleBrush(canvas, cfg){
    var sb = sprayBrush.create(canvas);
    // for performance reason
    sb.width = (cfg.brushWidth < 10 ? 10 : cfg.brushWidth);
    sb.dotWidth = 5;

    var outline = lineOutlinePts(sb, cfg.x1, cfg.y1, cfg.x2, cfg.y2),
        outlineLength = outline.length;

    sb.color = cfg.color || "#000000";

    for (var i = 0; i < outlineLength; i++){
      sb.addSprayChunk(outline[i]);
    }

    sb.onMouseUp();
  }

  return {
    create: function(canvas, cfg){
      if (!cfg.x1 || !cfg.x2 || !cfg.y1 || !cfg.y2){
        throw new Error("Required params not provided");
      }

      cfg.brushWidth = cfg.brushWidth || 10;

      return createLineCircleBrush(canvas, cfg);
    }
  };
});