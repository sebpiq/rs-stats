(this["webpackJsonprs-stats"]=this["webpackJsonprs-stats"]||[]).push([[0],{25:function(e,t){},49:function(e,t){},50:function(e,t){},56:function(e,t,n){"use strict";n.r(t);var r,c,a,i=n(0),o=n.n(i),s=n(26),u=n.n(s),l=n(12),d=n(5),j=n.n(d),b=n(7),f=n(6),h=n(35),p=n(9),O=n(17),g=n(28),v=n(29),m=n(36),x=n(37),y=/(\d\d)\/(\d\d)\/(\d\d\d\d) \xe0 (\d\d):(\d\d):(\d\d)/,I=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return n}(Object(x.a)(Error)),k=function(e){var t=y.exec(e);if(!t)throw new I("invalid date string");var n=new Date;return n.setFullYear(parseInt(t[3],10)),n.setMonth(parseInt(t[2],10)-1),n.setDate(parseInt(t[1],10)),n.setHours(parseInt(t[4],10)),n.setMinutes(parseInt(t[5],10)),n.setSeconds(parseInt(t[6],10)),n},P=n(1),w=Object(p.a)((function(e){var t=e.className,n=e.onLoad,r=Object(i.useCallback)((function(e){var t=new FileReader;t.onload=function(e){if(e&&e.target&&e.target.result){var t=new Uint8Array(e.target.result),r=Object(O.read)(t,{type:"array"}),c=O.utils.sheet_to_json(Object.values(r.Sheets)[0]).slice(1).map((function(e){return Object(f.a)(Object(f.a)({},e),{},{"Publi\xe9":k(e.Publi\u00e9)})}));n(c)}else console.error("missing file")},t.readAsArrayBuffer(e[0])}),[]),c=Object(h.a)({onDrop:r}),a=c.getRootProps,o=c.getInputProps,s=c.isDragActive;return Object(P.jsxs)("div",Object(f.a)(Object(f.a)({className:t},a()),{},{children:[Object(P.jsx)("input",Object(f.a)({},o())),s?Object(P.jsx)("p",{children:"Drop the files here ..."}):Object(P.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"})]}))}))(r||(r=Object(b.a)(["\n    padding: 1em;\n    border: solid 1px black;\n    display: inline-block;\n    cursor: pointer;\n"]))),D=n(33),S=n.n(D),F=n(34),L=n.n(F),M=n(60),A={0:"Lundi",1:"Mardi",2:"Mercredi",3:"Jeudi",4:"Vendredi",5:"Samedi",6:"Dimanche"},E=function(e){return Math.round(e).toString(10)},C=p.a.td(c||(c=Object(b.a)(["\n    padding: 2em;\n    background: ","\n"])),(function(e){return"rgba(0, 255, 0, ".concat(e.ratio,")")})),N=Object(p.a)((function(e){e.className;var t=e.data;if(0===t.length)throw new Error("data empty");var n=j()(t,(function(e){return e.columns.day})),r=Object.keys(n).map((function(e){return parseInt(e,10)})),c=j()(t,(function(e){return e.columns.hour})),a=Object.keys(c).map((function(e){return parseInt(e,10)}));r.sort((function(e,t){return e-t})),a.sort((function(e,t){return e-t})),console.log(n,c,r,a);var i=M.a().domain([L()(t,(function(e){return e.value})).value,S()(t,(function(e){return e.value})).value]).range([0,1]);return Object(P.jsxs)("table",{children:[Object(P.jsx)("thead",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{}),r.map((function(e){return Object(P.jsx)("th",{children:A[e.toString(10)]})}))]})}),Object(P.jsx)("tbody",{children:a.map((function(e){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{children:e}),r.map((function(n){var r=function(e,t,n){var r=e.filter((function(e){return e.columns.day===t&&e.columns.hour===n}));return 1!==r.length?{value:0,columns:{day:t,hour:n}}:r[0]}(t,n,e).value;return Object(P.jsx)(C,{ratio:i(r),children:E(r)})}))]})}))})]})}))(a||(a=Object(b.a)(["\n    padding: 1em;\n    border: solid 1px black;\n    display: inline-block;\n    cursor: pointer;\n"])));var R=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(P.jsxs)("div",{className:"App",children:[n?null:Object(P.jsx)(w,{onLoad:function(e){var t;r(function(e,t){var n=[],r=j()(e,(function(e){return e.Publi\u00e9.getDay()}));return Object.entries(r).forEach((function(e){var r=Object(l.a)(e,2),c=r[0],a=r[1],i=j()(a,(function(e){return e.Publi\u00e9.getHours()}));Object.entries(i).forEach((function(e){var r=Object(l.a)(e,2),a=r[0],i=r[1];n.push({value:t(i),columns:{hour:parseInt(a,10),day:parseInt(c,10)}})}))})),n}(e,(t="Lifetime Post Total Reach",function(e){return e.reduce((function(e,n){return e+n[t]}),0)/e.length})))}}),n?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h2",{children:"Lifetime Post Total Reach"}),Object(P.jsx)(N,{data:n})]}):null]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};u.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(R,{})}),document.getElementById("root")),T()}},[[56,1,2]]]);
//# sourceMappingURL=main.2b29ccfc.chunk.js.map