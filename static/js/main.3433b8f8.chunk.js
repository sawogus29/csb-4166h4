(this["webpackJsonpone-click-copy"]=this["webpackJsonpone-click-copy"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(21),r=n(42),i=n(24),o=n(5),u=n(4);var l=function(e){var t=e.value,n=e.onChange,c=e.onRemove;return Object(u.jsxs)("div",{className:"inputcopy",children:[Object(u.jsx)("textarea",{className:"inputcopy__input",value:t,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("button",{className:"inputcopy__button",onClick:function(){navigator.clipboard.writeText(t)},children:"copy"}),Object(u.jsx)("button",{className:"inputcopy__remove",onClick:c,children:"x"})]})},s=n(43),d=n(44),j=function(e){var t=e.index,n=e.moveCard,a=e.children,r=Object(c.useRef)(null),i=Object(s.a)({accept:"BOX",collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,c){if(r.current){var a=e.index,i=t;a!==i&&(n(a,i),e.index=i)}}}),l=Object(o.a)(i,2),j=(l[0].handlerId,l[1]),v=Object(d.a)({type:"BOX",item:function(){return{index:t}},collect:function(e){return{isDragging:e.isDragging()}}}),b=Object(o.a)(v,3),O=b[0].isDragging,f=b[1],p=O?0:1;return(0,b[2])(j(r)),Object(u.jsxs)("div",{className:"dragitem",ref:r,style:{opacity:p},children:[Object(u.jsx)("div",{className:"dragitem__handle",ref:f,children:"handle"}),a]})},v=n(8);var b=n(23),O=n.n(b),f=n(45);n(35);function p(){var e,t=Object(c.useState)(null!==(e=JSON.parse(localStorage.getItem("values")))&&void 0!==e?e:[{id:Object(f.a)(),value:"0"},{id:Object(f.a)(),value:"1"}]),n=Object(o.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){localStorage.setItem("values",JSON.stringify(a))}),[a]);var i=function(e,t){r((function(n){return O()(n,{$splice:[[e,1],[t,0,n[e]]]})}))},s=a.map((function(e,t){return Object(u.jsx)(j,{index:t,moveCard:i,children:Object(u.jsx)(l,{value:e.value,onChange:function(n){return r((c=a,i=t,o={id:e.id,value:n},c.map((function(e,t){return t===i?o:e}))));var c,i,o},onRemove:function(){return r((e=t,a.filter((function(t,n){return n!==e}))));var e}})},e.id)}));return Object(u.jsxs)("div",{className:"App",children:[s,Object(u.jsx)("button",{className:"add",onClick:function(){return r((e=a,t={id:Object(f.a)(),value:""},[].concat(Object(v.a)(e),[t])));var e,t},children:"+ADD"})]})}var g=document.getElementById("root");Object(a.createRoot)(g).render(Object(u.jsx)(c.StrictMode,{children:Object(u.jsx)(r.a,{backend:i.a,children:Object(u.jsx)(p,{})})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.3433b8f8.chunk.js.map