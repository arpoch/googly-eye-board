(this["webpackJsonpgoogly-eye"]=this["webpackJsonpgoogly-eye"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(15),r=n.n(c),o=(n(22),n(5)),i=(n(23),n(11)),l=n(0),u=n(9),d=n(1);var b=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"title",children:"Googly Eyed"}),Object(d.jsx)("div",{className:"word",children:Object(d.jsx)("input",{type:"text",autoFocus:!0,id:"box",placeholder:".   .   .",onChange:function(e){var t=document.getElementById("next-page-btn");""!==e.target.value?t.style.display="block":t.style.display="none"}})})]}),Object(d.jsx)(i.b,{to:"/googly-eye",children:Object(d.jsx)(l.b.Provider,{value:{size:"4.5em",className:"ri-arrow-btn"},children:Object(d.jsx)("button",{style:{display:"none"},id:"next-page-btn",onMouseOver:function(){s(!0)},onMouseLeave:function(){s(!1)},children:n?Object(d.jsx)(u.b,{}):Object(d.jsx)(u.a,{})})})})]})},h=n(10),j=n(16),v=(n(25),n(7)),f=n(8),g=function(){function e(t){Object(v.a)(this,e),this.modeContext=null,this.modeContext=t}return Object(f.a)(e,[{key:"getThemeMode",value:function(){this.modeContext.handleThemeChange(this.isDarkMode()?"white":"black")}},{key:"isDarkMode",value:function(){return"black"===localStorage.getItem("mode")}}]),e}(),m=n(3),y="THEME",C={click:!1,darkMode:"black"===localStorage.getItem("mode")||window.matchMedia("(prefers-color-scheme: dark)").matches};function O(e,t){return t.type===y?(localStorage.setItem("mode",t.payload),Object(m.a)(Object(m.a)({},e),{},{click:!e.click,darkMode:"black"===localStorage.getItem("mode")})):e}var p=s.a.createContext();var k=function(e){var t=e.children,n=Object(a.useReducer)(O,C),s=Object(o.a)(n,2),c=s[0],r=s[1],i={states:c,handleThemeChange:function(e){r({type:y,payload:e})}};return Object(d.jsx)(p.Provider,{value:i,children:t})};var x=function(){var e=Object(a.useContext)(p),t=new g(e);return Object(d.jsx)("div",{className:"dark-mode",children:Object(d.jsx)(l.b.Provider,{value:{title:"Pen",size:"2.5em",className:"ri-theme-mode"},children:Object(d.jsx)("button",{className:"mode",onClick:function(){t.getThemeMode()},children:(null==localStorage.getItem("mode")?window.matchMedia("(prefers-color-scheme: dark)").matches:"black"===localStorage.getItem("mode"))?(document.documentElement.setAttribute("theme-mode","dark"),Object(d.jsx)(j.a,{})):(document.documentElement.setAttribute("theme-mode","light"),Object(d.jsx)(h.c,{}))})})})};n(26);var w=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(k,{children:Object(d.jsx)(x,{})}),Object(d.jsx)(b,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},P=n(4),N=function(){function e(t){Object(v.a)(this,e),e.CanvasContext=t}return Object(f.a)(e,[{key:"handleMouseMoves",value:function(e){e.nativeEvent}},{key:"handleMouseDown",value:function(e){e.nativeEvent}},{key:"handleMouseUp",value:function(){}},{key:"setCanvasProperties",value:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"round";e.getCanvas().strokeStyle=t,e.getCanvas().lineWidth=n,e.getCanvas().cap=a}},{key:"setCanvasStroke",value:function(t){e.getCanvas().strokeStyle=t}},{key:"setCanvasLineWidth",value:function(t){e.getCanvas().lineWidth=t}}],[{key:"setCanvas",value:function(t){e.CanvasContext.setCanvas(t)}},{key:"getCanvas",value:function(){return e.CanvasContext.states.Canvas.canvas}},{key:"getMousePosition",value:function(){return e.CanvasContext.states.Canvas.mousePos}}]),e}();N.CanvasContext=null;var M=N,S="SET_CANVAS",B="SET_BG_COLOR",V={Canvas:{canvas:null,mousePos:{x:0,y:0},bgColor:"white"}};function T(e,t){switch(t.type){case S:if(e.Canvas.canvas!==t.payload)return{Canvas:{canvas:t.payload}};break;case B:return{Canvas:Object(m.a)(Object(m.a)({},e.Canvas),{},{bgColor:t.payload})};default:return e}}var D=s.a.createContext();var I=function(e){var t=e.children,n=Object(a.useReducer)(T,V),s=Object(o.a)(n,2),c=s[0],r=s[1],i={states:c,setCanvas:function(e){r({type:S,payload:e})},setLightMode:function(e){r({type:B,payload:e})},setDarkMode:function(e){r({type:B,payload:e})}};return Object(d.jsx)(D.Provider,{value:i,children:t})},L=(n(27),n(35),"LINE_WIDTH"),W="COLOR",R="ERASER_COLOR",F={PenProps:{lineWidth:2,color:"",cap:"round"},EraserProps:{color:"",radius:2}};function H(e,t){switch(t.type){case L:return Object(m.a)(Object(m.a)({},e),{},{PenProps:Object(m.a)(Object(m.a)({},e.PenProps),{},{lineWidth:t.payload})});case W:return Object(m.a)(Object(m.a)({},e),{},{PenProps:Object(m.a)(Object(m.a)({},e.PenProps),{},{color:t.payload})});case R:return Object(m.a)(Object(m.a)({},e),{},{EraserProps:Object(m.a)(Object(m.a)({},e.EraserProps),{},{color:t.payload})});default:return e}}var A=s.a.createContext();var U=function(e){var t=e.children,n=Object(a.useReducer)(H,F),s=Object(o.a)(n,2),c=s[0],r=s[1],i={states:c,handleLineWidth:function(e){r({type:L,payload:e})},handleLineColor:function(e){r({type:W,payload:e})},handleEraserColor:function(e){r({type:R,payload:e})}};return Object(d.jsx)(A.Provider,{value:i,children:t})},X=n(17),Y=function(){function e(t,n){Object(v.a)(this,e),this.propsContext=null,this.canvasViewModel=null,this.propsContext=t,this.canvasViewModel=n}return Object(f.a)(e,[{key:"handleSwatchColor",value:function(e){this.propsContext.handleLineColor(e)}},{key:"handleSlider",value:function(e){this.propsContext.handleLineWidth(e)}},{key:"getSliderValue",value:function(){return this.propsContext.states.PenProps.lineWidth}},{key:"getSwatchColor",value:function(){return""===this.propsContext.states.PenProps.color?"black"===localStorage.getItem("mode")?"#ffffff":"#000000":this.propsContext.states.PenProps.color}}]),e}();n(28);var q=function(e){var t=e.title,n=e.className,a=e.onClickEventHandler,s=e.icon;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{title:t,size:"1.7em",className:n},children:Object(d.jsx)("button",{onClick:a,className:"sidebar-button props-menu-button",children:s})})})};var G=function(e){var t=e.penPropertiesViewModel,n=Object(a.useCallback)((function(e){if(null!=e){var n=e.width,a=e.height,s=e.getContext("2d"),c=t.getSliderValue();s.clearRect(0,0,n,a),s.beginPath(),s.arc(n/2,a/2,c,0,2*Math.PI,!0),s.fillStyle=t.getSwatchColor(),s.fill()}}),[t]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"dot-slider-container",children:[Object(d.jsx)("div",{className:"dot-container",children:Object(d.jsx)("canvas",{width:55,height:45,className:"dot-canvas",ref:n})}),Object(d.jsx)("div",{className:"slider-container",children:Object(d.jsx)("input",{type:"range",onChange:function(e){t.handleSlider(e.target.value)},min:1,max:20,value:t.getSliderValue(),className:"slider"})}),Object(d.jsx)("p",{className:"text",children:"Thickness"})]})})};var z=function(e){var t=e.penPropertiesViewModel,n=Object(a.useRef)(null),s=Object(a.useCallback)((function(e){n.current=e}),[]);function c(){return"black"===localStorage.getItem("mode")?"#ffffff":"#000000"}function r(e,a){n.current.className="swatch",e.target.className+=" active",n.current=e.target,t.handleSwatchColor(a)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"palette",children:[Object(d.jsx)("button",{onClick:function(e){return r(e,"#fcc135")},className:"swatch",style:{backgroundColor:"#fcc135"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#ffa31a")},className:"swatch",style:{backgroundColor:"#ffa31a"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#ff751a")},className:"swatch",style:{backgroundColor:"#ff751a"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#8000ff")},className:"swatch",style:{backgroundColor:"#8000ff"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#9933ff")},className:"swatch",style:{backgroundColor:"#9933ff"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#e600ac")},className:"swatch",style:{backgroundColor:"#e600ac"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#66e0ff")},className:"swatch",style:{backgroundColor:"#66e0ff"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#1a75ff")},className:"swatch",style:{backgroundColor:"#1a75ff"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#0052cc")},className:"swatch",style:{backgroundColor:"#0052cc"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#00e600")},className:"swatch",style:{backgroundColor:"#00e600"}}),Object(d.jsx)("button",{onClick:function(e){return r(e,"#009900")},className:"swatch",style:{backgroundColor:"#009900"}}),Object(d.jsx)("button",{ref:s,onClick:function(e){return r(e,c())},className:"swatch active",style:{backgroundColor:c()}})]})})};var _=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(A),s=Object(a.useMemo)((function(){return new Y(n,t)}),[n,t]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(q,{title:"Pen",className:"ri-pen-props",onClickEventHandler:function(){var e=document.getElementsByClassName("pen-menu")[0];"block"===e.style.display?e.style.display="none":e.style.display="block"},icon:Object(d.jsx)(X.a,{})}),Object(d.jsxs)("div",{className:"pen-menu",children:[Object(d.jsx)(G,{penPropertiesViewModel:s}),Object(d.jsx)(z,{penPropertiesViewModel:s})]})]})};n(29);var J=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"menu",children:Object(d.jsx)("div",{className:"menu-container",children:Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)(_,{})})})})})},K=function(){function e(t,n,a){Object(v.a)(this,e),this.sidebarContext=null,this.canvasViewModel=null,this.propsContext=null,this.propsContext=t,this.sidebarContext=n,this.canvasViewModel=a}return Object(f.a)(e,[{key:"handlePenClick",value:function(){this.sidebarContext.handlePenClick()}},{key:"getPenClick",value:function(){return this.sidebarContext.states.Pen.isPenClicked}},{key:"startDrawing",value:function(){e.penDraw=!0,this.setPenProperties();var t=document.getElementsByClassName("canvas")[0];t.addEventListener("mousedown",e.penDown),t.addEventListener("mousemove",e.penMove),t.addEventListener("mouseup",e.penUp)}},{key:"stopDrawing",value:function(){if(e.penDraw){var t=document.getElementsByClassName("canvas")[0];t.removeEventListener("mousemove",e.penMove),t.removeEventListener("mousedown",e.penDown),t.removeEventListener("mouseup",e.penUp),e.penDraw=!1}}},{key:"setPenProperties",value:function(){if(e.penDraw)if(""===this.propsContext.states.PenProps.color){var t="black"===localStorage.getItem("mode")?"#ffffff":"#000000";this.canvasViewModel.setCanvasProperties(t,this.propsContext.states.PenProps.lineWidth)}else this.canvasViewModel.setCanvasStroke(this.propsContext.states.PenProps.color),this.canvasViewModel.setCanvasLineWidth(this.propsContext.states.PenProps.lineWidth)}}],[{key:"penMove",value:function(t){if(e.penDraw&&e.isDrawing){var n=M.getCanvas();n.lineTo(t.offsetX,t.offsetY),n.stroke()}}},{key:"penDown",value:function(t){var n=M.getCanvas();e.isDrawing=!0,n.beginPath(),n.moveTo(t.offsetX,t.offsetY)}},{key:"penUp",value:function(t){var n=M.getCanvas();e.isDrawing=!1,n.closePath()}}]),e}();K.penDraw=!1,K.isDrawing=!1;var Q=K,Z="PEN",$="ERASER",ee="BACKGROUND",te="SELECT",ne={Pen:{isPenClicked:!1,isDrawing:!1},Eraser:{isEraserClicked:!1,isErasing:!1},Background:{isBackgroundClicked:!1},Select:{isSelected:!1}};function ae(e,t){switch(t.type){case Z:return Object(m.a)(Object(m.a)({},e),{},{Pen:Object(m.a)(Object(m.a)({},e.Pen),{},{isPenClicked:!e.Pen.isPenClicked,isDrawing:!e.Pen.isDrawing}),Eraser:Object(m.a)(Object(m.a)({},e.Eraser),{},{isEraserClicked:!1,isErasing:!1}),Background:Object(m.a)(Object(m.a)({},e.Background),{},{isBackgroundClicked:!1}),Select:{isSelected:!1}});case $:return Object(m.a)(Object(m.a)({},e),{},{Eraser:Object(m.a)(Object(m.a)({},e.Eraser),{},{isEraserClicked:!e.Eraser.isEraserClicked,isErasing:!e.Eraser.isErasing}),Pen:Object(m.a)(Object(m.a)({},e.Pen),{},{isPenClicked:!1,isDrawing:!1}),Background:Object(m.a)(Object(m.a)({},e.Background),{},{isBackgroundClicked:!1}),Select:{isSelected:!1}});case ee:return Object(m.a)(Object(m.a)({},e),{},{Background:Object(m.a)(Object(m.a)({},e.Background),{},{isBackgroundClicked:!e.Background.isBackgroundClicked}),Eraser:Object(m.a)(Object(m.a)({},e.Eraser),{},{isEraserClicked:!1}),Pen:Object(m.a)(Object(m.a)({},e.Pen),{},{isPenClicked:!1}),Select:{isSelected:!1}});case te:return Object(m.a)(Object(m.a)({},e),{},{Select:{isSelected:!e.Select.isSelected},Background:Object(m.a)(Object(m.a)({},e.Background),{},{isBackgroundClicked:!1}),Eraser:Object(m.a)(Object(m.a)({},e.Eraser),{},{isEraserClicked:!1}),Pen:Object(m.a)(Object(m.a)({},e.Pen),{},{isPenClicked:!1})});default:return e}}var se=s.a.createContext();var ce=function(e){var t=e.children,n=Object(a.useReducer)(ae,ne),s=Object(o.a)(n,2),c=s[0],r=s[1],i={states:c,handlePenClick:function(){r({type:Z})},handleEraserClick:function(){r({type:$})},handleBackgroundClick:function(){r({type:ee})},handleSelection:function(){r({type:te})}};return Object(d.jsx)(se.Provider,{value:i,children:t})};var re=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=Object(a.useContext)(A),c=Object(a.useMemo)((function(){return new Q(s,n,t)}),[s,n,t]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{title:"Pen",size:"2.3em",className:"react-icons"},children:Object(d.jsx)("button",{className:"sidebar-button pen",onClick:function(){c.handlePenClick()},children:c.getPenClick()?(c.startDrawing(),Object(d.jsx)(u.d,{})):(c.stopDrawing(),Object(d.jsx)(u.c,{}))})})})},oe=function(){function e(t,n,a){Object(v.a)(this,e),this.sidebarContext=null,this.canvasViewModel=null,this.propsContext=null,this.propsContext=t,this.sidebarContext=n,this.canvasViewModel=a}return Object(f.a)(e,[{key:"handleEraserClick",value:function(){this.sidebarContext.handleEraserClick()}},{key:"getEraserClick",value:function(){return this.sidebarContext.states.Eraser.isEraserClicked}},{key:"startErasing",value:function(){var t=document.getElementsByClassName("canvas")[0];t.addEventListener("mousedown",e.eraserDown),t.addEventListener("mousemove",e.eraserMove),t.addEventListener("mouseup",e.eraserUp),e.eraser=!0,this.setEraserProperties()}},{key:"stopErasing",value:function(){if(e.eraser){var t=document.getElementsByClassName("canvas")[0];t.removeEventListener("mousemove",e.eraserMove),t.removeEventListener("mousedown",e.eraserDown),t.removeEventListener("mouseup",e.eraserUp),e.eraser=!1}}},{key:"setEraserProperties",value:function(){if(e.eraser){var t="black"===localStorage.getItem("mode")?"#000000":"#ffffff";this.canvasViewModel.setCanvasProperties(t,this.propsContext.states.EraserProps.radius)}}}],[{key:"eraserMove",value:function(t){if(e.eraser&&e.isErasing){var n=M.getCanvas();n.arc(t.offsetX,t.offsetY,10,0,2*Math.PI),n.stroke()}}},{key:"eraserDown",value:function(t){var n=M.getCanvas();e.isErasing=!0,n.beginPath(),n.moveTo(t.offsetX,t.offsetY)}},{key:"eraserUp",value:function(){var t=M.getCanvas();e.isErasing=!1,t.closePath()}}]),e}();oe.eraser=!1,oe.isErasing=!1;var ie=oe;var le=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=Object(a.useContext)(A),c=new ie(s,n,t);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{size:"2.3em",className:"react-icons"},children:Object(d.jsx)("button",{className:"sidebar-button",onClick:function(){c.handleEraserClick()},children:c.getEraserClick()?(c.startErasing(),Object(d.jsx)(h.a,{})):(c.stopErasing(),Object(d.jsx)(h.b,{}))})})})},ue="CLICKED",de="MOUSE_POSITION",be={GoogleEyeCount:{c:0},IsClicked:{click:!1},MousePosition:{x:0,y:0}};function he(e,t){switch(t.type){case de:return Object(m.a)(Object(m.a)({},e),{},{MousePosition:{x:t.payload.x,y:t.payload.y}});case ue:return Object(m.a)(Object(m.a)({},e),{},{GoogleEyeCount:{c:e.GoogleEyeCount.c+1},IsClicked:{click:!e.IsClicked.click}});default:return e}}var je=s.a.createContext();var ve=function(e){var t=e.children,n=Object(a.useReducer)(he,be),s=Object(o.a)(n,2),c=s[0],r=s[1],i={states:c,handleIconClick:function(){r({type:ue})},handleMousePosition:function(e){r({type:de,payload:e})}};return Object(d.jsx)(je.Provider,{value:i,children:t})},fe=(n(30),function(){function e(t,n,a){Object(v.a)(this,e),this.googleEye=null,this.eyeBall=null,this.irs=null,this.isEyeContainerPressed=!1,this.borderProps={northBorder:{isPressed:!1},southBorder:{isPressed:!1}},this.types={NORTH:"NORTH_BORDER",SOUTH:"SOUTH_BORDER"},e.sidebarContext=t,e.context=n,e.canvasViewModel=a}return Object(f.a)(e,[{key:"handleIconClick",value:function(){this.addGoogleEye()}},{key:"getIconClick",value:function(){return e.context.states.IsClicked.click}},{key:"setBordersToNone",value:function(){e.eyeBallTarget.querySelector(".close-btn").style.display="none",e.eyeBallTarget.querySelector(".top-border").style.display="none",e.eyeBallTarget.querySelector(".bottom-border").style.display="none",e.eyeBallTarget.querySelector(".right-border").style.display="none",e.eyeBallTarget.querySelector(".left-border").style.display="none"}},{key:"setEyeContainerBorders",value:function(t){null!==e.eyeBallTarget&&e.eyeBallTarget!==t&&this.setBordersToNone(),e.eyeBallTarget=t,t.querySelector(".close-btn").style.display="block",t.querySelector(".top-border").style.display="block",t.querySelector(".bottom-border").style.display="block",t.querySelector(".right-border").style.display="block",t.querySelector(".left-border").style.display="block"}},{key:"hideEyeContainerBorders",value:function(){null===e.eyeBallTarget||e.sidebarContext.states.Select.isSelected||this.setBordersToNone()}},{key:"selectEyeball",value:function(t){if(e.sidebarContext.states.Select.isSelected){var n=t.currentTarget;this.setEyeContainerBorders(n),this.isEyeContainerPressed=!0}}},{key:"dragEyeball",value:function(t){if(this.isEyeContainerPressed&&e.sidebarContext.states.Select.isSelected){var n=t.currentTarget;n.style.top=t.clientY+"px",n.style.left=t.clientX+"px"}}},{key:"dropEyeball",value:function(t){e.sidebarContext.states.Select.isSelected&&(t.currentTarget.style.border="",this.isEyeContainerPressed=!1)}},{key:"moveUp",value:function(e){}},{key:"nsBorderMouseDown",value:function(e){}},{key:"nsBorderMouseUp",value:function(e){}},{key:"addGoogleEye",value:function(){var t=this;console.log("Adding.."),this.googleEye=document.createElement("div"),this.googleEye.className="eye-container",this.googleEye.onmousemove=function(e){t.dragEyeball(e)},this.googleEye.onmousedown=function(e){t.selectEyeball(e)},this.googleEye.onmouseup=function(e){t.dropEyeball(e)};var n=document.createElement("div");n.className="top-border",this.googleEye.appendChild(n);var a=document.createElement("button");a.className="close-btn",a.addEventListener("click",(function(){e.eyeBallTarget.remove(),e.eyeBallTarget=null})),this.googleEye.appendChild(a);var s=document.createElement("div");s.className="left-border",this.googleEye.appendChild(s);var c=document.createElement("div");c.className="right-border",this.googleEye.appendChild(c),this.eyeBall=document.createElement("div"),this.eyeBall.className="Eye-ball",this.googleEye.appendChild(this.eyeBall),this.irs=document.createElement("div"),this.irs.className="Irs",this.irs.style.left="50%",this.irs.style.right="50%",this.eyeBall.appendChild(this.irs);var r=document.createElement("div");r.className="bottom-border",this.googleEye.appendChild(r),document.getElementsByClassName("canvas")[0].after(this.googleEye)}},{key:"getWindowMidX",value:function(){return window.innerWidth/2}},{key:"getWindowMidY",value:function(){return window.innerHeight/2}},{key:"checkValue",value:function(e){return e<20?"20%":e>80?"80%":e}},{key:"getX",value:function(e,t){if(console.log(e,t),t<this.getWindowMidX()){var n=100*e/window.innerWidth+(50-100*t/window.innerWidth);return this.checkValue(n)+"%"}if(t>this.getWindowMidX()){var a=100*e/window.innerWidth-(100*t/window.innerWidth-50);return this.checkValue(a)+"%"}return this.checkValue(100*e/window.innerWidth)+"%"}},{key:"getY",value:function(e,t){if(t<this.getWindowMidY()){var n=100*e/window.innerHeight+(50-100*t/window.innerHeight);return this.checkValue(n)+"%"}if(t>this.getWindowMidY()){var a=100*e/window.innerHeight-(100*t/window.innerHeight-50);return this.checkValue(a)+"%"}return this.checkValue(100*e/window.innerHeight)+"%"}},{key:"setIrsPosition",value:function(e,t){for(var n=document.getElementsByClassName("eye-container"),a=document.getElementsByClassName("Irs"),s=0;s<a.length;s++)a[s].style.top=this.getY(t,n[s].getBoundingClientRect().top),a[s].style.left=this.getX(e,n[s].getBoundingClientRect().left)}}],[{key:"setMousePosition",value:function(t,n){e.context.handleMousePosition({x:t,y:n})}}]),e}());fe.sidebarContext=null,fe.context=null,fe.canvasViewModel=null,fe.eyeBallTarget=null;var ge=fe,me=n(33);var ye=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=Object(a.useContext)(je),c=new ge(n,s,t);return Object(a.useEffect)((function(){var e=new AbortController;return document.getElementsByClassName("message")[0].addEventListener("animationend",(function(){document.getElementsByClassName("message")[0].style.display="none"}),{once:!0}),document.defaultView.addEventListener("mousemove",(function(e){c.setIrsPosition(e.clientX,e.clientY)}),{signal:e.signal}),function(){e.abort()}})),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.b.Provider,{value:{title:"Pen",size:"2.3em",className:"react-icons"},children:[Object(d.jsx)("button",{className:"sidebar-button",onClick:function(){c.addGoogleEye()},children:(c.hideEyeContainerBorders(),Object(d.jsx)(me.a,{}))}),Object(d.jsxs)("span",{className:"message",children:[Object(d.jsx)("br",{}),"Add a googly eye to make things more fun!"]})]})})},Ce=n(34),Oe=function(){function e(t,n){Object(v.a)(this,e),this.context=null,this.canvasViewModel=null,this.context=t,this.canvasViewModel=n}return Object(f.a)(e,[{key:"handleIconClick",value:function(){this.context.handleSelection()}},{key:"getIconClick",value:function(){return this.context.states.Select.isSelected}}]),e}();var pe=function(e){var t=e.canvasViewModel,n=Object(a.useContext)(se),s=new Oe(n,t);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b.Provider,{value:{title:"Select",size:"2.3em",className:"react-icons"},children:Object(d.jsx)("button",{className:"sidebar-button",onClick:function(){s.handleIconClick()},children:s.getIconClick()?Object(d.jsx)(Ce.a,{}):Object(d.jsx)(me.b,{})})})})};var ke=function(e){var t=e.canvasViewModel;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsxs)("div",{className:"sidebar-container",children:[Object(d.jsx)("div",{className:"sidebar-item",title:"Pen",children:Object(d.jsx)(re,{canvasViewModel:t})}),Object(d.jsx)("div",{className:"sidebar-item",title:"Eraser",children:Object(d.jsx)(le,{canvasViewModel:t})}),Object(d.jsx)(ve,{children:Object(d.jsx)("div",{className:"sidebar-item",title:"Add",children:Object(d.jsx)(ye,{canvasViewModel:t})})}),Object(d.jsx)("div",{className:"sidebar-item",title:"Select",children:Object(d.jsx)(pe,{canvasViewModel:t})})]})})})},xe=function(e){var t=e.canvasViewModel,n=Object(a.useState)(!1),s=Object(o.a)(n,2);s[0],s[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(U,{children:[Object(d.jsx)(J,{}),Object(d.jsx)(ke,{canvasViewModel:t})]})})};n(31);var we=function(){var e=Object(a.useRef)(null),t=Object(a.useContext)(D),n=new M(t);Object(a.useEffect)((function(){window.addEventListener("resize",(function(){null!=e.current&&(e.current.width=window.innerWidth,e.current.height=window.innerHeight)}))}),[]);var s=Object(a.useCallback)((function(t){if(null!=t&&e.current!==t){e.current=t,t.width=window.innerWidth,t.height=window.innerHeight,t.style.backgroundColor=localStorage.getItem("mode"),"black"===localStorage.getItem("mode")?document.documentElement.setAttribute("theme-mode","dark"):document.documentElement.setAttribute("theme-mode","light");var n=t.getContext("2d");M.setCanvas(n)}}),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("canvas",{className:"canvas",ref:s,style:{position:"relative"},onMouseMove:n.handleMouseMoves,onMouseDown:n.handleMouseDown,onMouseUp:n.handleMouseUp}),null!=M.getCanvas()?Object(d.jsx)(ce,{children:Object(d.jsx)(xe,{canvasViewModel:n})}):Object(d.jsx)("h1",{children:"Null"})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(P.c,{children:[Object(d.jsx)(P.a,{path:"/",element:Object(d.jsx)(w,{})}),Object(d.jsx)(P.a,{path:"googly-eye",element:Object(d.jsx)(I,{children:Object(d.jsx)(we,{})})})]})})}),document.getElementById("root")),E()}},[[32,1,2]]]);
//# sourceMappingURL=main.1fec8f23.chunk.js.map