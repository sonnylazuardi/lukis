define(["require","fabric"],function(t){var e=t("fabric");return{create:function(t,i){if(!i.x||!i.y||!i.radius)throw new Error("Required params not provided");var n=new e.Circle({left:i.x,top:i.y,radius:i.radius,fill:null,stroke:i.color});t.add(n).renderAll()}}});