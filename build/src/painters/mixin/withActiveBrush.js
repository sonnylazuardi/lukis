define(["require"],function(){function t(){var t;this.after("initialize",function(){this.on("change-activeBrush",function(t,e){this.requestBrushInstance(e.activeBrushId)}.bind(this)),this.on("brushProperty-updated",function(t,e){this.updateBrushProperty(e.key,e.newValue)}.bind(this))}),this.requestBrushInstance=function(t){this.on("brush-served",this.onBrushServed),this.trigger("request-brush",{id:t})},this.onBrushServed=function(t,e){this.off("brush-served",this.onBrushServed),this.setActiveBrushInstance(e.brush)},this.setActiveBrushInstance=function(e){t=e,this.trigger("activeBrush-ready",{activeBrush:e})},this.getActiveBrush=function(){return t},this.updateBrushProperty=function(e,s){t&&t.set(e,s)}}return t});