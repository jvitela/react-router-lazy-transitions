(this["webpackJsonpreact-router-v5"]=this["webpackJsonpreact-router-v5"]||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){e.exports=n(53)},38:function(e,t,n){},40:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(17),o=n.n(i),c=(n(38),n(18)),u=n(6),s=n.n(u),l=n(9),p=n(10),f=n(11),m=n(12),h=n(14),y=n(13),b=n(15),v=n(29),d=n(16),g=n(7),O=n(22),j=n(30),E=n.n(j),k=(n(40),function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"onNavigate",value:function(){this.props.history.push("/search")}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Cupcake ipsum dolor sit. Amet jelly-o caramels liquorice apple pie. Brownie lemon drops cookie tart gummies jelly beans I love souffl\xe9. Caramels apple pie powder tootsie roll I love jelly beans dessert danish I love. Halvah I love pie bear claw wafer macaroon halvah sesame snaps. Liquorice marzipan brownie icing."),a.a.createElement("p",null,a.a.createElement(d.b,{to:this.props.links.success,className:"App-link"},"Navigate using a link")),a.a.createElement("p",null,a.a.createElement("button",{className:"btn",onClick:this.onNavigate.bind(this)},"Navigate Imperatively"))))}}],[{key:"getInitialProps",value:function(){var e=Object(p.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),t}(r.Component));function P(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}k.defaultProps={history:null,links:{success:"/"}};var C=function(e,t){switch(t.type){case"locationChanged":return function(e,t){var n=t.key||"initial";return{result:e.result.concat(n),entities:x({},e.entities,Object(l.a)({},n,{location:t,initialProps:null,isExiting:!1,isEntered:!1}))}}(e,t.location);case"pageEnter":return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.result.reduce((function(r,a){return a===t?r[t]=x({},e.entities[t],{initialProps:n}):r[a]=x({},e.entities[a],{isExiting:!0}),r}),{});return x({},e,{entities:r})}(e,t.key,t.initialProps);case"pageExited":return function(e,t){var n=e.result.filter((function(e){return e!==t})),r=e.entities;r[t];return{result:n,entities:Object(c.a)(r,[t].map(P))}}(e,t.key);case"pageEntered":return function(e,t){return x({},e,{entities:x({},e.entities,Object(l.a)({},t,x({},e.entities[t],{isEntered:!0})))})}(e,t.key);default:return e}};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t=e.location,n=e.routes,i=Object(r.useReducer)(C,{result:[],entities:{}}),o=Object(v.a)(i,2),c=o[0],u=o[1];Object(r.useEffect)((function(){u(function(e){return{type:"locationChanged",location:e}}(t))}),[t]);var s=function(e){var t=[],n=[];return e.result.forEach((function(r){var a=e.entities[r];null===a.initialProps?n.push({entity:a,key:r}):a.isExiting||t.push({entity:a,key:r})})),{toRender:t,toFetchData:n}}(c),l=s.toRender,p=s.toFetchData;return a.a.createElement(a.a.Fragment,null,p.map((function(e){var t=e.entity,r=e.key;return a.a.createElement(S,{key:r,routes:n,location:t.location,initialProps:null,onPageReady:function(e){return u(function(e,t){return{type:"pageEnter",key:e,initialProps:t}}(r,e))}})})),a.a.createElement(O.TransitionGroup,{className:"transition-group"},l.map((function(e){var t=e.entity,r=e.key;return a.a.createElement(O.CSSTransition,{key:r,timeout:300,classNames:"container--fade",onExited:function(){return u(function(e){return{type:"pageExited",key:e}}(r))},onEntered:function(){return u(function(e){return{type:"pageEntered",key:e}}(r))}},a.a.createElement(S,{routes:n,location:t.location,initialProps:t.initialProps}))}))))};var S=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.initialProps!==e.initialProps}},{key:"render",value:function(){var e=this.props,t=e.routes,n=e.location,r=e.initialProps,i=e.onPageReady;return a.a.createElement("div",{className:"container"},a.a.createElement(g.c,{location:n},t.map((function(e){var t=R(e);return a.a.createElement(g.a,{exact:!0,key:e.path,path:e.path,component:function(n){return a.a.createElement(t,Object.assign({},n,{path:e.path,initialProps:r,onPageReady:i}))}})}))))}}]),t}(a.a.Component),R=function(e){if(e.importComponent)return A(e);if(e.component)return B(e.component,e);throw new Error("A route must include a component or importComponent method")},A=function(e){var t=Object(r.lazy)(Object(p.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.importComponent();case 2:return n=t.sent,t.abrupt("return",D({},n,{default:B(n.default,e)}));case 4:case"end":return t.stop()}}),t)}))));return function(e){return a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(t,e))}},B=function(e,t){var n=function(t){function n(){return Object(f.a)(this,n),Object(h.a)(this,Object(y.a)(n).apply(this,arguments))}return Object(b.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){this.fetchInitialProps().then(this.props.onPageReady)}},{key:"fetchInitialProps",value:function(){var t=Object(p.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!==typeof e.getInitialProps){t.next=5;break}return t.next=3,e.getInitialProps(this.props);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return null}}]),n}(a.a.Component),r=function(n){var r=n.initialProps,i=(n.onPageReady,Object(c.a)(n,["initialProps","onPageReady"]));return a.a.createElement(e,Object.assign({},r,i,{links:t.links}))};return function(e){return null===e.initialProps?a.a.createElement(n,e):a.a.createElement(r,e)}},F=function(){return a.a.createElement(d.a,null,a.a.createElement(g.a,{render:function(e){return a.a.createElement(I,Object.assign({},e,{routes:[{path:"/",component:k,links:{success:"/search"}},{path:"/search",importComponent:function(){return n.e(4).then(n.bind(null,54))},links:{success:"/flights",cancel:"/"}},{path:"/flights",importComponent:function(){return n.e(3).then(n.bind(null,55))},links:{cancel:"/"}}]}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.aeacff57.chunk.js.map