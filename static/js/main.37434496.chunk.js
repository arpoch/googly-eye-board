(this["webpackJsonpgoogly-eye"]=this["webpackJsonpgoogly-eye"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(16),c=n.n(r),i=(n(24),n(5)),o=(n(25),n(12)),l=n(0),u=n(9),d=n(1);var b=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"title",children:"Googly Eyed"}),Object(d.jsx)("div",{className:"word",children:Object(d.jsx)("input",{type:"text",autoFocus:!0,id:"box",placeholder:".   .   .",onChange:function(e){var t=document.getElementById("next-page-btn");""!==e.target.value?t.style.display="block":t.style.display="none"}})})]}),Object(d.jsx)(o.b,{to:"/canvas",children:Object(d.jsx)(l.b.Provider,{value:{size:"4.5em",className:"ri-arrow-btn"},children:Object(d.jsx)("button",{style:{display:"none"},id:"next-page-btn",onMouseOver:function(){s(!0)},onMouseLeave:function(){s(!1)},children:n?Object(d.jsx)(u.b,{}):Object(d.jsx)(u.a,{})})})})]})},h=n(10),j=n(17),v=(n(27),n(7)),f=n(8),m=function(){function e(t){Object(v.a)(this,e),this.modeContext=null,this.modeContext=t}return Object(f.a)(e,[{key:"getThemeMode",value:function(){this.modeContext.handleThemeChange(this.isDarkMode()?"white":"black")}},{key:"isDarkMode",value:function(){return null==localStorage.getItem("mode")?window.matchMedia("(prefers-color-scheme: dark)").matches:"black"===localStorage.getItem("mode")}}]),e}(),g=n(3),C="THEME",y={click:!1,darkMode:"black"===localStorage.getItem("mode")||window.matchMedia("(prefers-color-scheme: dark)").matches};function O(e,t){return t.type===C?(localStorage.setItem("mode",t.payload),Object(g.a)(Object(g.a)({},e),{},{click:!e.click,darkMode:"black"===localStorage.getItem("mode")})):e}var p=s.a.createContext();var k=function(e){var t=e.children,n=Object(a.useReducer)(O,y),s=Object(i.a)(n,2),r=s[0],c=s[1],o={states:r,handleThemeChange:function(e){c({type:C,payload:e})}};return Object(d.jsx)(p.Provider,{value:o,children:t})};var x=function(){var e=Object(a.useContext)(p),t=new m(e);return Object(d.jsx)("div",{className:"dark-mode",children:Object(d.jsx)(l.b.Provider,{value:{title:"Pen",size:"2.5em",className:"ri-theme-mode"},children:Object(d.jsx)("button",{className:"mode",onClick:function(){t.getThemeMode()},children:t.isDarkMode()?(document.documentElement.setAttribute("theme-mode","dark"),Object(d.jsx)(j.a,{})):(document.documentElement.setAttribute("theme-mode","light"),Object(d.jsx)(h.c,{}))})})})};n(28);var E=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(k,{children:Object(d.jsx)(x,{})}),Object(d.jsx)(b,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},P=n(4),N=function(){function e(t){Object(v.a)(this,e),e.CanvasContext=t}return Object(f.a)(e,[{key:"setCanvasProperties",value:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"round";e.getCanvas().strokeStyle=t,e.getCanvas().lineWidth=n,e.getCanvas().cap=a}},{key:"setCanvasStroke",value:function(t){e.getCanvas().strokeStyle=t}},{key:"setCanvasLineWidth",value:function(t){e.getCanvas().lineWidth=t}}],[{key:"setCanvas",value:function(t){e.CanvasContext.setCanvas(t)}},{key:"getCanvas",value:function(){return e.CanvasContext.states.Canvas.canvas}},{key:"setCanvasElement",value:function(t){e.CanvasContext.setDOMElement(t)}},{key:"getCanvasElement",value:function(){return e.CanvasContext.states.Canvas.dElement}},{key:"setCursor",value:function(t){"PEN"===t?e.getCanvasElement().style.cursor="url(https://img.icons8.com/external-others-inmotus-design/67/000000/external-Pen-result-others-inmotus-design-3.png) 25 45, crosshair":"ERASER"===t?e.getCanvasElement().style.cursor="url(https://img.icons8.com/external-those-icons-lineal-color-those-icons/32/000000/external-Eraser-design-those-icons-lineal-color-those-icons.png)  10 30, pointer":"DEFAULT"===t&&(e.getCanvasElement().style.cursor="pointer")}}]),e}();N.CanvasContext=null;var S=N,M="SET_CANVAS",B="SET_ELEMENT",T={Canvas:{canvas:null,dElement:null}};function V(e,t){switch(t.type){case M:if(e.canvas!==t.payload)return{Canvas:Object(g.a)(Object(g.a)({},e),{},{canvas:t.payload})};break;case B:if(e.dElement!==t.payload)return Object(g.a)(Object(g.a)({},e),{},{dElement:t.payload});break;default:return e}}var D=s.a.createContext();var I=function(e){var t=e.children,n=Object(a.useReducer)(V,T),s=Object(i.a)(n,2),r=s[0],c=s[1],o={states:r,setCanvas:function(e){c({type:M,payload:e})},setDOMElement:function(e){c({type:B,payload:e})}};return Object(d.jsx)(D.Provider,{value:o,children:t})},L=(n(29),n(15),"LINE_WIDTH"),R="COLOR",W="ERASER_COLOR",A={PenProps:{lineWidth:2,color:"",cap:"round"},EraserProps:{color:"",radius:10}};function F(e,t){switch(t.type){case L:return Object(g.a)(Object(g.a)({},e),{},{PenProps:Object(g.a)(Object(g.a)({},e.PenProps),{},{lineWidth:t.payload})});case R:return Object(g.a)(Object(g.a)({},e),{},{PenProps:Object(g.a)(Object(g.a)({},e.PenProps),{},{color:t.payload})});case W:return Object(g.a)(Object(g.a)({},e),{},{EraserProps:Object(g.a)(Object(g.a)({},e.EraserProps),{},{color:t.payload})});default:return e}}var H=s.a.createContext();var U=function(e){var t=e.children,n=Object(a.useReducer)(F,A),s=Object(i.a)(n,2),r=s[0],c=s[1],o={states:r,handleLineWidth:function(e){c({type:L,payload:e})},handleLineColor:function(e){c({type:R,payload:e})},handleEraserColor:function(e){c({type:W,payload:e})}};return Object(d.jsx)(H.Provider,{value:o,children:t})},X=n(18),Y=function(){function e(t,n){Object(v.a)(this,e),this.propsContext=null,this.canvasViewModel=null,this.propsContext=t,this.canvasViewModel=n}return Object(f.a)(e,[{key:"handleSwatchColor",value:function(e){this.propsContext.handleLineColor(e)}},{key:"handleSlider",value:function(e){this.propsContext.handleLineWidth(e)}},{key:"getSliderValue",value:function(){return this.propsContext.states.PenProps.lineWidth}},{key:"getSwatchColor",value:function(){return""===this.propsContext.states.PenProps.color?"black"===localStorage.getItem("mode")?"#ffffff":"#000000":this.propsContext.states.PenProps.color}}]),e}();n(30);var q=function(e){var t=e.title,n=e.className,a=e.onClickEventHandler,s=e.icon;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{title:t,size:"1.7em",className:n},children:Object(d.jsx)("button",{onClick:a,className:"sidebar-button props-menu-button",children:s})})})};var z=function(e){var t=e.penPropertiesViewModel,n=Object(a.useCallback)((function(e){if(null!=e){var n=e.width,a=e.height,s=e.getContext("2d"),r=t.getSliderValue();s.clearRect(0,0,n,a),s.beginPath(),s.arc(n/2,a/2,r,0,2*Math.PI,!0),s.fillStyle=t.getSwatchColor(),s.fill()}}),[t]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"dot-slider-container",children:[Object(d.jsx)("div",{className:"dot-container",children:Object(d.jsx)("canvas",{width:55,height:45,className:"dot-canvas",ref:n})}),Object(d.jsx)("div",{className:"slider-container",children:Object(d.jsx)("input",{type:"range",onChange:function(e){t.handleSlider(e.target.value)},min:1,max:20,value:t.getSliderValue(),className:"slider"})}),Object(d.jsx)("p",{className:"text",children:"Thickness"})]})})};var G=function(e){var t=e.penPropertiesViewModel,n=Object(a.useRef)(null),s=Object(a.useCallback)((function(e){n.current=e}),[]);function r(){return"black"===localStorage.getItem("mode")?"#ffffff":"#000000"}function c(e,a){n.current.className="swatch",e.target.className+=" active",n.current=e.target,t.handleSwatchColor(a)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"palette",children:[Object(d.jsx)("button",{onClick:function(e){return c(e,"#fcc135")},className:"swatch",style:{backgroundColor:"#fcc135"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#ffa31a")},className:"swatch",style:{backgroundColor:"#ffa31a"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#ff751a")},className:"swatch",style:{backgroundColor:"#ff751a"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#8000ff")},className:"swatch",style:{backgroundColor:"#8000ff"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#9933ff")},className:"swatch",style:{backgroundColor:"#9933ff"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#e600ac")},className:"swatch",style:{backgroundColor:"#e600ac"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#66e0ff")},className:"swatch",style:{backgroundColor:"#66e0ff"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#1a75ff")},className:"swatch",style:{backgroundColor:"#1a75ff"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#0052cc")},className:"swatch",style:{backgroundColor:"#0052cc"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#00e600")},className:"swatch",style:{backgroundColor:"#00e600"}}),Object(d.jsx)("button",{onClick:function(e){return c(e,"#009900")},className:"swatch",style:{backgroundColor:"#009900"}}),Object(d.jsx)("button",{ref:s,onClick:function(e){return c(e,r())},className:"swatch active",style:{backgroundColor:r()}})]})})};var _=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(H),s=Object(a.useMemo)((function(){return new Y(n,t)}),[n,t]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(q,{title:"Pen",className:"ri-pen-props",onClickEventHandler:function(){var e=document.getElementsByClassName("pen-menu")[0];"block"===e.style.display?e.style.display="none":e.style.display="block"},icon:Object(d.jsx)(X.a,{})}),Object(d.jsxs)("div",{className:"pen-menu",children:[Object(d.jsx)(z,{penPropertiesViewModel:s}),Object(d.jsx)(G,{penPropertiesViewModel:s})]})]})};n(31);var J=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"menu",children:Object(d.jsx)("div",{className:"menu-container",children:Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)(_,{})})})})})},K=function(){function e(t,n,a){Object(v.a)(this,e),this.sidebarContext=null,this.canvasViewModel=null,this.propsContext=null,this.propsContext=t,this.sidebarContext=n,this.canvasViewModel=a}return Object(f.a)(e,[{key:"handlePenClick",value:function(){this.sidebarContext.handlePenClick()}},{key:"getPenClick",value:function(){return this.sidebarContext.states.Pen.isPenClicked}},{key:"startDrawing",value:function(){e.penDraw=!0,this.setPenProperties();var t=S.getCanvasElement();S.setCursor("PEN"),t.addEventListener("mousedown",e.penDown),t.addEventListener("mousemove",e.penMove),t.addEventListener("mouseup",e.penUp)}},{key:"stopDrawing",value:function(){if(e.penDraw){var t=S.getCanvasElement();S.setCursor("DEFAULT"),t.removeEventListener("mousemove",e.penMove),t.removeEventListener("mousedown",e.penDown),t.removeEventListener("mouseup",e.penUp),e.penDraw=!1}}},{key:"setPenProperties",value:function(){if(e.penDraw)if(""===this.propsContext.states.PenProps.color){var t="black"===localStorage.getItem("mode")?"#ffffff":"#000000";this.canvasViewModel.setCanvasProperties(t,this.propsContext.states.PenProps.lineWidth)}else this.canvasViewModel.setCanvasStroke(this.propsContext.states.PenProps.color),this.canvasViewModel.setCanvasLineWidth(this.propsContext.states.PenProps.lineWidth)}}],[{key:"penMove",value:function(t){if(e.penDraw&&e.isDrawing){var n=S.getCanvas();n.lineTo(t.offsetX,t.offsetY),n.stroke()}}},{key:"penDown",value:function(t){var n=S.getCanvas();e.isDrawing=!0,n.beginPath(),n.moveTo(t.offsetX,t.offsetY)}},{key:"penUp",value:function(t){var n=S.getCanvas();e.isDrawing=!1,n.closePath()}}]),e}();K.penDraw=!1,K.isDrawing=!1;var Q=K,Z="PEN",$="ERASER",ee="BACKGROUND",te="SELECT",ne={Pen:{isPenClicked:!1,isDrawing:!1},Eraser:{isEraserClicked:!1,isErasing:!1},Background:{isBackgroundClicked:!1},Select:{isSelected:!1}};function ae(e,t){switch(t.type){case Z:return Object(g.a)(Object(g.a)({},e),{},{Pen:Object(g.a)(Object(g.a)({},e.Pen),{},{isPenClicked:!e.Pen.isPenClicked,isDrawing:!e.Pen.isDrawing}),Eraser:Object(g.a)(Object(g.a)({},e.Eraser),{},{isEraserClicked:!1,isErasing:!1}),Background:Object(g.a)(Object(g.a)({},e.Background),{},{isBackgroundClicked:!1}),Select:{isSelected:!1}});case $:return Object(g.a)(Object(g.a)({},e),{},{Eraser:Object(g.a)(Object(g.a)({},e.Eraser),{},{isEraserClicked:!e.Eraser.isEraserClicked,isErasing:!e.Eraser.isErasing}),Pen:Object(g.a)(Object(g.a)({},e.Pen),{},{isPenClicked:!1,isDrawing:!1}),Background:Object(g.a)(Object(g.a)({},e.Background),{},{isBackgroundClicked:!1}),Select:{isSelected:!1}});case ee:return Object(g.a)(Object(g.a)({},e),{},{Background:Object(g.a)(Object(g.a)({},e.Background),{},{isBackgroundClicked:!e.Background.isBackgroundClicked}),Eraser:Object(g.a)(Object(g.a)({},e.Eraser),{},{isEraserClicked:!1}),Pen:Object(g.a)(Object(g.a)({},e.Pen),{},{isPenClicked:!1}),Select:{isSelected:!1}});case te:return Object(g.a)(Object(g.a)({},e),{},{Select:{isSelected:!e.Select.isSelected},Background:Object(g.a)(Object(g.a)({},e.Background),{},{isBackgroundClicked:!1}),Eraser:Object(g.a)(Object(g.a)({},e.Eraser),{},{isEraserClicked:!1}),Pen:Object(g.a)(Object(g.a)({},e.Pen),{},{isPenClicked:!1})});default:return e}}var se=s.a.createContext();var re=function(e){var t=e.children,n=Object(a.useReducer)(ae,ne),s=Object(i.a)(n,2),r=s[0],c=s[1],o={states:r,handlePenClick:function(){c({type:Z})},handleEraserClick:function(){c({type:$})},handleBackgroundClick:function(){c({type:ee})},handleSelection:function(){c({type:te})}};return Object(d.jsx)(se.Provider,{value:o,children:t})};var ce=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=Object(a.useContext)(H),r=Object(a.useMemo)((function(){return new Q(s,n,t)}),[s,n,t]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{title:"Pen",size:"2.3em",className:"react-icons"},children:Object(d.jsx)("button",{className:"sidebar-button pen",onClick:function(){r.handlePenClick()},children:r.getPenClick()?(r.startDrawing(),Object(d.jsx)(u.d,{})):(r.stopDrawing(),Object(d.jsx)(u.c,{}))})})})},ie=function(){function e(t,n,a){Object(v.a)(this,e),this.sidebarContext=null,this.canvasViewModel=null,this.propsContext=null,this.propsContext=t,this.sidebarContext=n,this.canvasViewModel=a}return Object(f.a)(e,[{key:"handleEraserClick",value:function(){this.sidebarContext.handleEraserClick()}},{key:"getEraserClick",value:function(){return this.sidebarContext.states.Eraser.isEraserClicked}},{key:"startErasing",value:function(){var t=S.getCanvasElement();S.setCursor("ERASER"),t.addEventListener("mousedown",e.eraserDown),t.addEventListener("mousemove",e.eraserMove),t.addEventListener("mouseup",e.eraserUp),e.eraser=!0,this.setEraserProperties()}},{key:"stopErasing",value:function(){if(e.eraser){var t=S.getCanvasElement();S.setCursor("DEFAULT"),t.removeEventListener("mousemove",e.eraserMove),t.removeEventListener("mousedown",e.eraserDown),t.removeEventListener("mouseup",e.eraserUp),e.eraser=!1}}},{key:"setEraserProperties",value:function(){if(e.eraser){var t="black"===localStorage.getItem("mode")?"#000000":"#ffffff";this.canvasViewModel.setCanvasProperties(t,this.propsContext.states.EraserProps.radius)}}}],[{key:"eraserMove",value:function(t){if(e.eraser&&e.isErasing){var n=S.getCanvas();n.lineTo(t.offsetX,t.offsetY),n.stroke()}}},{key:"eraserDown",value:function(t){var n=S.getCanvas();e.isErasing=!0,n.beginPath(),n.moveTo(t.offsetX,t.offsetY)}},{key:"eraserUp",value:function(){var t=S.getCanvas();e.isErasing=!1,t.closePath()}}]),e}();ie.eraser=!1,ie.isErasing=!1;var oe=ie;var le=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=Object(a.useContext)(H),r=new oe(s,n,t);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{size:"2.3em",className:"react-icons"},children:Object(d.jsx)("button",{className:"sidebar-button",onClick:function(){r.handleEraserClick()},children:r.getEraserClick()?(r.startErasing(),Object(d.jsx)(h.a,{})):(r.stopErasing(),Object(d.jsx)(h.b,{}))})})})},ue="CLICKED",de="MOUSE_POSITION",be={GoogleEyeCount:{c:0},IsClicked:{click:!1},MousePosition:{x:0,y:0}};function he(e,t){switch(t.type){case de:return Object(g.a)(Object(g.a)({},e),{},{MousePosition:{x:t.payload.x,y:t.payload.y}});case ue:return Object(g.a)(Object(g.a)({},e),{},{GoogleEyeCount:{c:e.GoogleEyeCount.c+1},IsClicked:{click:!e.IsClicked.click}});default:return e}}var je=s.a.createContext();var ve=function(e){var t=e.children,n=Object(a.useReducer)(he,be),s=Object(i.a)(n,2),r=s[0],c=s[1],o={states:r,handleIconClick:function(){c({type:ue})},handleMousePosition:function(e){c({type:de,payload:e})}};return Object(d.jsx)(je.Provider,{value:o,children:t})},fe=(n(32),function(){function e(t,n,a){Object(v.a)(this,e),this.googleEye=null,this.eyeBall=null,this.irs=null,this.isEyeContainerPressed=!1,this.borderProps={northBorder:{isPressed:!1},southBorder:{isPressed:!1}},this.types={NORTH:"NORTH_BORDER",SOUTH:"SOUTH_BORDER"},e.sidebarContext=t,e.context=n,e.canvasViewModel=a}return Object(f.a)(e,[{key:"handleIconClick",value:function(){this.addGoogleEye()}},{key:"getIconClick",value:function(){return e.context.states.IsClicked.click}},{key:"setBordersToNone",value:function(){e.eyeBallTarget.querySelector(".close-btn").style.display="none",e.eyeBallTarget.querySelector(".top-border").style.display="none",e.eyeBallTarget.querySelector(".bottom-border").style.display="none",e.eyeBallTarget.querySelector(".right-border").style.display="none",e.eyeBallTarget.querySelector(".left-border").style.display="none"}},{key:"setEyeContainerBorders",value:function(t){null!==e.eyeBallTarget&&e.eyeBallTarget!==t&&this.setBordersToNone(),e.eyeBallTarget=t,t.querySelector(".close-btn").style.display="block",t.querySelector(".top-border").style.display="block",t.querySelector(".bottom-border").style.display="block",t.querySelector(".right-border").style.display="block",t.querySelector(".left-border").style.display="block"}},{key:"hideEyeContainerBorders",value:function(){null===e.eyeBallTarget||e.sidebarContext.states.Select.isSelected||this.setBordersToNone()}},{key:"selectEyeball",value:function(t){if(e.sidebarContext.states.Select.isSelected){var n=t.currentTarget;this.setEyeContainerBorders(n),this.isEyeContainerPressed=!0}}},{key:"dragEyeball",value:function(t){if(this.isEyeContainerPressed&&e.sidebarContext.states.Select.isSelected){var n=t.currentTarget;n.style.top=t.clientY+"px",n.style.left=t.clientX+"px"}}},{key:"dropEyeball",value:function(t){e.sidebarContext.states.Select.isSelected&&(t.currentTarget.style.border="",this.isEyeContainerPressed=!1)}},{key:"moveUp",value:function(e){}},{key:"nsBorderMouseDown",value:function(e){}},{key:"nsBorderMouseUp",value:function(e){}},{key:"addGoogleEye",value:function(){var t=this;console.log("Adding.."),this.googleEye=document.createElement("div"),this.googleEye.className="eye-container",this.googleEye.onmousemove=function(e){t.dragEyeball(e)},this.googleEye.onmousedown=function(e){t.selectEyeball(e)},this.googleEye.onmouseup=function(e){t.dropEyeball(e)};var n=document.createElement("div");n.className="top-border",this.googleEye.appendChild(n);var a=document.createElement("button");a.className="close-btn",a.addEventListener("click",(function(){e.eyeBallTarget.remove(),e.eyeBallTarget=null})),this.googleEye.appendChild(a);var s=document.createElement("div");s.className="left-border",this.googleEye.appendChild(s);var r=document.createElement("div");r.className="right-border",this.googleEye.appendChild(r),this.eyeBall=document.createElement("div"),this.eyeBall.className="Eye-ball",this.googleEye.appendChild(this.eyeBall),this.irs=document.createElement("div"),this.irs.className="Irs",this.irs.style.left="50%",this.irs.style.right="50%",this.eyeBall.appendChild(this.irs);var c=document.createElement("div");c.className="bottom-border",this.googleEye.appendChild(c),document.getElementsByClassName("canvas")[0].after(this.googleEye)}},{key:"getWindowMidX",value:function(){return window.innerWidth/2}},{key:"getWindowMidY",value:function(){return window.innerHeight/2}},{key:"checkValue",value:function(e){return e<20?"20%":e>80?"80%":e}},{key:"getX",value:function(e,t){if(console.log(e,t),t<this.getWindowMidX()){var n=100*e/window.innerWidth+(50-100*t/window.innerWidth);return this.checkValue(n)+"%"}if(t>this.getWindowMidX()){var a=100*e/window.innerWidth-(100*t/window.innerWidth-50);return this.checkValue(a)+"%"}return this.checkValue(100*e/window.innerWidth)+"%"}},{key:"getY",value:function(e,t){if(t<this.getWindowMidY()){var n=100*e/window.innerHeight+(50-100*t/window.innerHeight);return this.checkValue(n)+"%"}if(t>this.getWindowMidY()){var a=100*e/window.innerHeight-(100*t/window.innerHeight-50);return this.checkValue(a)+"%"}return this.checkValue(100*e/window.innerHeight)+"%"}},{key:"setIrsPosition",value:function(e,t){for(var n=document.getElementsByClassName("eye-container"),a=document.getElementsByClassName("Irs"),s=0;s<a.length;s++)a[s].style.top=this.getY(t,n[s].getBoundingClientRect().top),a[s].style.left=this.getX(e,n[s].getBoundingClientRect().left)}}],[{key:"setMousePosition",value:function(t,n){e.context.handleMousePosition({x:t,y:n})}}]),e}());fe.sidebarContext=null,fe.context=null,fe.canvasViewModel=null,fe.eyeBallTarget=null;var me=fe,ge=n(11);var Ce=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=Object(a.useContext)(je),r=new me(n,s,t);return Object(a.useEffect)((function(){var e=new AbortController;return document.getElementsByClassName("message")[0].addEventListener("animationend",(function(){document.getElementsByClassName("message")[0].style.display="none"}),{once:!0}),document.defaultView.addEventListener("mousemove",(function(e){r.setIrsPosition(e.clientX,e.clientY)}),{signal:e.signal}),function(){e.abort()}})),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.b.Provider,{value:{title:"Pen",size:"2.3em",className:"react-icons"},children:[Object(d.jsx)("button",{className:"sidebar-button",onClick:function(){r.addGoogleEye()},children:(r.hideEyeContainerBorders(),Object(d.jsx)(ge.a,{}))}),Object(d.jsxs)("span",{className:"message",children:[Object(d.jsx)("br",{}),"Add a googly eye to make things more fun!"]})]})})},ye=n(19),Oe=function(){function e(t,n){Object(v.a)(this,e),this.context=null,this.canvasViewModel=null,this.context=t,this.canvasViewModel=n}return Object(f.a)(e,[{key:"handleIconClick",value:function(){this.context.handleSelection()}},{key:"getIconClick",value:function(){return this.context.states.Select.isSelected}}]),e}();var pe=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=new Oe(n,t);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{title:"Select",size:"2.3em",className:"react-icons"},children:Object(d.jsx)("button",{className:"sidebar-button",onClick:function(){s.handleIconClick()},children:s.getIconClick()?Object(d.jsx)(ye.a,{}):Object(d.jsx)(ge.b,{})})})})};var ke=function(e){var t=e.canvasViewModel;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsxs)("div",{className:"sidebar-container",children:[Object(d.jsx)("div",{className:"sidebar-item",title:"Pen",children:Object(d.jsx)(ce,{canvasViewModel:t})}),Object(d.jsx)("div",{className:"sidebar-item",title:"Eraser",children:Object(d.jsx)(le,{canvasViewModel:t})}),Object(d.jsx)(ve,{children:Object(d.jsx)("div",{className:"sidebar-item",title:"Add",children:Object(d.jsx)(Ce,{canvasViewModel:t})})}),Object(d.jsx)("div",{className:"sidebar-item",title:"Select",children:Object(d.jsx)(pe,{canvasViewModel:t})})]})})})},xe=function(e){var t=e.canvasViewModel,n=Object(a.useState)(!1),s=Object(i.a)(n,2);s[0],s[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(U,{children:[Object(d.jsx)(J,{}),Object(d.jsx)(ke,{canvasViewModel:t})]})})};n(33);var Ee=function(){var e=Object(a.useRef)(null),t=Object(a.useContext)(D),n=new S(t);Object(a.useEffect)((function(){"black"===localStorage.getItem("mode")?document.documentElement.setAttribute("theme-mode","dark"):document.documentElement.setAttribute("theme-mode","light"),window.addEventListener("resize",(function(){null!=e.current&&(e.current.width=window.innerWidth,e.current.height=window.innerHeight)}))}),[]);var s=Object(a.useCallback)((function(t){if(null!=t&&e.current!==t){e.current=t,t.width=window.innerWidth,t.height=window.innerHeight,t.style.backgroundColor=localStorage.getItem("mode"),S.setCanvasElement(t);var n=t.getContext("2d");S.setCanvas(n)}}),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("canvas",{className:"canvas",ref:s,style:{position:"relative"}}),null!=S.getCanvas()?Object(d.jsx)(re,{children:Object(d.jsx)(xe,{canvasViewModel:n})}):Object(d.jsx)("h1",{children:"Null"})]})};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(P.c,{children:[Object(d.jsx)(P.a,{path:"",element:Object(d.jsx)(E,{})}),Object(d.jsx)(P.a,{path:"canvas",element:Object(d.jsx)(I,{children:Object(d.jsx)(Ee,{})})})]})})}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.37434496.chunk.js.map