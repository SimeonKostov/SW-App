(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/logo.93895aa2.png"},21:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=n(9),l=n(8),s=n(18),p=n(19),u=n.n(p),m={isPending:!0,type:"",content:[],error:""},d=(n(30),n(2)),h=n(3),E=n(5),f=n(4),b=n(6),y=n(20),g=n.n(y),O=function(){return r.a.createElement("div",{className:"header-logo"},r.a.createElement("img",{src:g.a,alt:"Star Wars logo"}))},v=(n(33),function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(O,null))}}]),t}(a.Component)),j=["people","planets","species","vehicles","starships"],w=(n(7),function(e,t){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://swapi.co/api/".concat(t,"/?format=json")).then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:{type:t,content:n}})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})}),N=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onContentChange,n=e.option;return r.a.createElement("div",{className:""},r.a.createElement("p",{className:"option",id:n,onClick:t},n.toUpperCase()))}}]),t}(a.Component),S=Object(l.b)(function(e){return{isPending:e.isPending,type:e.type,content:e.content,error:e.error}},function(e){return{onContentChange:function(t){return w(e,t.target.id)}}})(N),k=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-25 pa3"},this.props.options.map(function(e){return r.a.createElement(S,{key:e,option:e})}))}}]),t}(a.Component),C=(n(36),function(e){var t=e.name,n=e.by;return r.a.createElement("div",{className:"tc dib h5 pa2 mr2 mb2 br4-l grow bg-black",style:{border:"2px solid #f1c40f"}},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=150x150"),alt:"avatar"}),r.a.createElement("h4",{style:{color:"white"}},t),r.a.createElement("p",{style:{color:"white"}},n))}),R=function(e){var t=e.name,n=e.terrain,a=e.gravity,o=e.climate,c=e.population;return r.a.createElement("div",{className:"tc dib h5 pa2 pt4 mr2 mb2 br4-l grow bg-navy",style:{border:"2px solid #f1c40f"}},r.a.createElement("h4",{className:"yellow"},t),r.a.createElement("p",{className:"green"},"terrain: ",n),r.a.createElement("p",{className:"orange"},"gravity: ",a),r.a.createElement("p",{className:"pink"},"climate: ",o),r.a.createElement("p",{className:"gold"},"population: ",c))},_=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRender()}},{key:"render",value:function(){var e=this.props,t=e.isPending,n=e.content,a=e.type;return t?r.a.createElement("div",{className:"tc w-75"},r.a.createElement("h1",{className:"yellow"},"Loading...")):r.a.createElement("div",{className:"tc w-75"},r.a.createElement("h1",{className:"yellow"},a.toUpperCase()),"people"===a||"planets"===a?n.map(function(e){switch(a){case"people":return r.a.createElement(C,{key:e.name,name:e.name,by:e.birth_year});case"planets":return r.a.createElement(R,{key:e.name,name:e.name,terrain:e.terrain,gravity:e.gravity,climate:e.climate,population:e.population});default:return null}}):r.a.createElement("div",null,r.a.createElement("img",{src:"https://robohash.org/oops?set=set2&size=300x300",alt:"Oops.."}),r.a.createElement("h2",{className:"white"},"Oops... Something went wrong")))}}]),t}(a.Component),T=Object(l.b)(function(e){return{isPending:e.isPending,type:e.type,content:e.content,error:e.error}},function(e){return{onRender:function(){return w(e,"people")}}})(_),P=function(){return r.a.createElement("div",{className:"flex flex-wrap"},r.a.createElement(k,{options:j}),r.a.createElement(T,null))},U=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=Object(i.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,type:t.payload.type,content:t.payload.content.results});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}},Object(i.a)(s.a,u.a));c.a.render(r.a.createElement(l.a,{store:x},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.9c89ad9f.chunk.js.map