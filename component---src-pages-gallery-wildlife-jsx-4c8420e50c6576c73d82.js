webpackJsonp([0x7c47b4640ff5],{228:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),c=n(o),d=a(15),r=(n(d),a(26)),f=n(r),u=a(62),m=n(u),p=a(43),g=n(p),h=a(58),y=(n(h),a(59)),x=(n(y),a(60)),I=(n(x),a(81)),b=(n(I),a(87)),E=n(b),v=a(88),w=n(v),C=a(89),k=n(C),N=a(90),_=n(N),S=a(91),O=n(S),j=a(92),M=n(j),P=a(93),T=n(P),J=a(56),R=n(J),q=a(82),z=n(q),A=a(57),B=n(A),D=a(83),F=n(D),G=a(84),H=n(G),K=a(85),L=n(K),Q=a(86),U=n(Q),V=[g.default,E.default,w.default,k.default],W=[_.default,O.default,M.default],X=[T.default,R.default,z.default,B.default],Y=[F.default,H.default,L.default,U.default],Z=function(e){function t(a){i(this,t);var n=l(this,e.call(this,a));return n.state={images:V.concat(W).concat(X).concat(Y),imgIndex:0,opacity:"0",display:"none"},n}return s(t,e),t.prototype.expandImage=function(e){console.log(e);var t=this.state.images.findIndex(function(t){return t===e});console.log("Setting state?"),t>-1&&(this.setState({imgIndex:t,display:"flex",opacity:"1"}),console.log("Set state"))},t.prototype.collapseImage=function(){this.setState({display:"none",opacity:"0"})},t.prototype.nextImage=function(){this.setState({imgIndex:this.state.imgIndex+1<this.state.images.length?this.state.imgIndex+1:0})},t.prototype.prevImage=function(){this.setState({imgIndex:this.state.imgIndex-1<0?this.state.images.length-1:this.state.imgIndex-1})},t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement(f.default,null),c.default.createElement("div",{className:"gallery-container"},c.default.createElement("div",{className:"container-wide space-between"},c.default.createElement(m.default,{images:V,imgClick:this.expandImage.bind(this)}),c.default.createElement(m.default,{images:W,imgClick:this.expandImage.bind(this)}),c.default.createElement(m.default,{images:X,imgClick:this.expandImage.bind(this)}),c.default.createElement(m.default,{images:Y,imgClick:this.expandImage.bind(this)}))),c.default.createElement("div",{className:"image-modal",style:{display:this.state.display,opacity:this.state.opacity}},c.default.createElement("div",{className:"image-modal-overlay",onClick:this.collapseImage.bind(this)}),c.default.createElement("img",{src:this.state.images[this.state.imgIndex],alt:""}),c.default.createElement("div",{className:"image-modal-prev",onClick:this.nextImage.bind(this)},c.default.createElement("i",{className:"fa fa-chevron-left"})),c.default.createElement("div",{className:"image-modal-next",onClick:this.prevImage.bind(this)},c.default.createElement("i",{className:"fa fa-chevron-right"}))))},t}(c.default.Component);t.default=Z,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-gallery-wildlife-jsx-4c8420e50c6576c73d82.js.map