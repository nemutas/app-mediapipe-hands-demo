(this.webpackJsonpmediapipe_hands=this.webpackJsonpmediapipe_hands||[]).push([[0],{14:function(t,n,e){},21:function(t,n,e){"use strict";e.r(n);e(14);var a,i,c,r,o=e(0),s=e.n(o),d=e(9),u=e.n(d),l=e(2),h=e(7),f=e.n(h),b=e(10),p=e(11),m=e.n(p),j=e(3),v=e(12),g=e(4),O=e(13),x=e(8),w=function(t,n){if(2===n.length&&n[0].length>8&&n[1].length>8){var e=t.canvas.width,a=t.canvas.height,i=n[0][8].x*e,c=n[0][8].y*a,r=n[1][8].x*e,o=n[1][8].y*a,s=(i+r)/2,d=(c+o)/2,u=Math.sqrt(Math.pow(i-r,2)+Math.pow(c-o,2))/2;t.strokeStyle="#0082cf",t.lineWidth=3,t.beginPath(),t.arc(s,d,u,0,2*Math.PI,!0),t.stroke()}},C=e(1),k=function(){var t=Object(o.useRef)(null),n=Object(o.useRef)(null),e=Object(o.useRef)(null),a=Object(o.useCallback)((function(t){e.current=t,function(t,n){var e=t.canvas.width,a=t.canvas.height;if(t.save(),t.clearRect(0,0,e,a),t.scale(-1,1),t.translate(-e,0),t.drawImage(n.image,0,0,e,a),n.multiHandLandmarks){var i,c=Object(O.a)(n.multiHandLandmarks);try{for(c.s();!(i=c.n()).done;){var r=i.value;Object(x.drawConnectors)(t,r,g.HAND_CONNECTIONS,{color:"#00FF00",lineWidth:1}),Object(x.drawLandmarks)(t,r,{color:"#FF0000",lineWidth:1,radius:2})}}catch(o){c.e(o)}finally{c.f()}w(t,n.multiHandLandmarks)}t.restore()}(n.current.getContext("2d"),t)}),[]);Object(o.useEffect)((function(){var n=new g.Hands({locateFile:function(t){return"https://cdn.jsdelivr.net/npm/@mediapipe/hands/".concat(t)}});if(n.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),n.onResults(a),"undefined"!==typeof t.current&&null!==t.current){var e=new v.Camera(t.current.video,{onFrame:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.send({image:t.current.video});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),width:1280,height:720});e.start()}}),[a]);return Object(C.jsxs)("div",{className:y.container,children:[Object(C.jsx)(m.a,{audio:!1,style:{visibility:"hidden"},width:1280,height:720,ref:t,screenshotFormat:"image/jpeg",videoConstraints:{width:1280,height:720,facingMode:"user"}}),Object(C.jsx)("canvas",{ref:n,className:y.canvas}),Object(C.jsx)("div",{className:y.buttonContainer,children:Object(C.jsx)("button",{className:y.button,onClick:function(){var t=e.current;console.log(t.multiHandLandmarks)},children:"Output Data"})})]})},y={container:Object(j.a)(a||(a=Object(l.a)(["\n\t\tposition: relative;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\toverflow: hidden;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t"]))),canvas:Object(j.a)(i||(i=Object(l.a)(["\n\t\tposition: absolute;\n\t\twidth: 1280px;\n\t\theight: 720px;\n\t\tbackground-color: #fff;\n\t"]))),buttonContainer:Object(j.a)(c||(c=Object(l.a)(["\n\t\tposition: absolute;\n\t\ttop: 20px;\n\t\tleft: 20px;\n\t"]))),button:Object(j.a)(r||(r=Object(l.a)(["\n\t\tcolor: #fff;\n\t\tbackground-color: #0082cf;\n\t\tfont-size: 1rem;\n\t\tborder: none;\n\t\tborder-radius: 5px;\n\t\tpadding: 10px 10px;\n\t\tcursor: pointer;\n\t"])))},F=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(n){var e=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;e(t),a(t),i(t),c(t),r(t)}))};u.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(k,{})}),document.getElementById("root")),F()}},[[21,1,2]]]);
//# sourceMappingURL=main.0f4505c6.chunk.js.map