(this["webpackJsonpreact-router-v5"]=this["webpackJsonpreact-router-v5"]||[]).push([[4],{57:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(6),r=a.n(n),c=a(15),l=a(0),s=a.n(l),o=a(13),u=a(19),i=a(25),m=a(10),p=a(14),d=a(20);function h({history:e,user:t}){return s.a.createElement(o.a,null,s.a.createElement(u.a,null,"Third page"),s.a.createElement(i.a,{kind:"info"},"This page fetches a random profile from"," ",s.a.createElement(m.a,{to:"https://randomuser.me/"},"random user generator api"),".",s.a.createElement("br",null),"The navigation is halted until the data is fetched from the API."),s.a.createElement("div",{className:"p-4 md:p-12 mt-10 text-center"},s.a.createElement("div",{className:"block rounded-full shadow-xl mx-auto -mt-16 h-32 w-32 bg-cover bg-center",style:{backgroundImage:"url('".concat(t.picture.large,"')")}}),s.a.createElement("h1",{className:"text-2xl font-bold text-blue-600 pt-8"},t.name.title+" "+t.name.first+" "+t.name.last),s.a.createElement("div",{className:"mx-auto w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"}),s.a.createElement("p",{className:"pt-4 text-base text-gray-700 text-center"},s.a.createElement(m.a,{to:"email:".concat(t.email)},t.email),s.a.createElement("br",null),s.a.createElement("span",null,"Phone: ",t.phone),s.a.createElement("br",null),s.a.createElement("span",null,"Mobile: ",t.cell)),s.a.createElement("p",{className:"pt-2 text-gray-600 text-xs flex items-center justify-center"},"Location: ",t.location.coordinates.latitude,"\xb0 N,"," ",t.location.coordinates.longitude,"\xb0 W")),s.a.createElement("div",{className:"text-center"},s.a.createElement(p.a,{onClick:()=>e.goBack()},"Go Back")))}h.getInitialProps=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(1e3);case 2:return e.next=4,fetch("https://randomuser.me/api/");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",{user:a.results[0]});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=4.4956aca2.chunk.js.map