define(["require","fabric"],function(e){var t=e("fabric");return{drawSquares:function(e,r){var i=r.points,n=e.renderOnAddition;e.renderOnAddition=!1;for(var o=i.length-1;o>=0;o--){var a=i[o];e.add(new t.Rect({width:a.width,height:a.height,left:a.x,top:a.y,fill:a.fill?a.fill:null,stroke:a.strokeColor?a.strokeColor:null,hasControls:!1,hasRotatingPoint:!1,lockUniScaling:!0}))}e.clearContext(e.contextTop),e.renderOnAddition=n,e.renderAll()}}});