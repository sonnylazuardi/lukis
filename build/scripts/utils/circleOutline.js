define([],function(){return function(t,e,i,r){for(var n=[],s=t.width-5,o=0;360>o;o+=s)0===o?n.push({x:e,y:i-r}):90===o?n.push({x:e+r,y:i}):180===o?n.push({x:e,y:i+r}):270===o?n.push({x:e-r,y:i}):n.push({x:Math.sin(o)*r+e,y:Math.cos(o)*r+i});return n}});