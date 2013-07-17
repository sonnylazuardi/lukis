define(function(require){
  var circleBrush = require("brushes/circleBrush"),
      lineOutlinePts = require("utils/lineOutlinePoints");

  function createLineCircleBrush(canvas, cfg){
    var cb = circleBrush.create(canvas),
        outline = lineOutlinePts(cb, cfg.x1, cfg.y1, cfg.x2, cfg.y2),
        outlineLength = outline.length;

    cb.color = cfg.color || "#000000";

    for (var i = 0; i < outlineLength; i++){
      cb.addPoint(outline[i]);
    }

    cb.onMouseUp();
  }

  return {
    create: function(canvas, cfg){
      if (!cfg.x1 || !cfg.x2 || !cfg.y1 || !cfg.y2){
        throw new Error("Required params not provided");
      }

      return createLineCircleBrush(canvas, cfg);
    }
  };
});