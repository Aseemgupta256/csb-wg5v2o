parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iMte":[function(require,module,exports) {

},{}],"mpVp":[function(require,module,exports) {
"use strict";require("./style.css");var e,t,o,n,i=document.getElementById("ball"),l=document.getElementById("rod1"),s=document.getElementById("rod2"),d="PPName",f="PPMaxScore",r="Rod 1",a="Rod 2",c=2,g=2,y=!1,h=window.innerWidth,x=window.innerHeight;function u(t){l.style.left=(window.innerWidth-l.offsetWidth)/2+"px",s.style.left=(window.innerWidth-s.offsetWidth)/2+"px",i.style.left=(h-i.offsetWidth)/2+"px",t===a?(i.style.top=l.offsetTop+l.offsetHeight+"px",g=2):t===r&&(i.style.top=s.offsetTop-s.offsetHeight+"px",g=-2),e=0,y=!1}function m(e,n){n>t&&(t=n,localStorage.setItem(d,e),localStorage.setItem(f,t)),clearInterval(o),u(e),alert(e+" wins with a score of "+100*n+". Max score is: "+100*t)}n=localStorage.getItem(d),t=localStorage.getItem(f),"null"===n||"null"===t?(alert("This is the first time you are playing this game. LET'S START"),t=0,n="Rod1"):alert(n+" has maximum score of "+100*t),u(n),window.addEventListener("keypress",function(){var t=l.getBoundingClientRect();if("KeyD"===event.code&&t.x+t.width<window.innerWidth?(l.style.left=t.x+20+"px",s.style.left=l.style.left):"KeyA"===event.code&&t.x>0&&(l.style.left=t.x-20+"px",s.style.left=l.style.left),"Enter"===event.code&&!y){y=!0;var n=i.getBoundingClientRect(),d=n.x,f=n.y,u=n.width,p=l.offsetHeight,w=s.offsetHeight,v=l.offsetWidth,I=s.offsetWidth;o=setInterval(function(){d+=c,f+=g,rod1X=l.getBoundingClientRect().x,rod2X=s.getBoundingClientRect().x,i.style.left=d+"px",i.style.top=f+"px",(d+u>h||d<0)&&(c=-c);var t=d+u/2;f<=p?(g=-g,e++,(t<rod1X||t>rod1X+v)&&m(a,e)):f+u>=x-w&&(g=-g,e++,(t<rod2X||t>rod2X+I)&&m(r,e))},10)}});
},{"./style.css":"iMte"}]},{},["mpVp"], null)
//# sourceMappingURL=/csb-wg5v2o/script.e280b275.js.map