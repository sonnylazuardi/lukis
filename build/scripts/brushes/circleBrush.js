define(["require","fabric","brushes/circleBrushHelper","flight/lib/compose","brushes/with_outline_helper"],function(i){var e=i("fabric"),t=i("brushes/circleBrushHelper"),a=i("flight/lib/compose"),r=i("brushes/with_outline_helper"),o={create:function(i){return new e.CircleBrush(i)},createShapeBrush:function(i,e){var a=this.create(i);a.width=e.brushWidth||10;var r=this.createOutline(a,e.shape,e),o=r.length;a.color=e.color||"#000000";for(var u=0;o>u;u++)a.addPoint(r[u]);t.drawCircles(i,{points:a.points})}};return a.mixin(o,[r]),o});