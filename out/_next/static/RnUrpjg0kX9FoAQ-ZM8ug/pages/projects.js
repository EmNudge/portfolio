(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{D85t:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var e=a("RHEb");return{page:e.default||e}}])},RHEb:function(e,t,a){"use strict";a.r(t);var n=a("kOwS"),r=a("doui"),s=a("q1tI"),c=a.n(s),o=a("SND3"),i=a("dfwq"),l=(a("XNVB"),function(e){var t=e.tags,a=e.addedTags,n=e.onChange,s=c.a.useState(""),o=Object(r.default)(s,2),l=o[0],u=o[1],d=c.a.useState(!1),m=Object(r.default)(d,2),p=m[0],g=m[1],f=function(){return t.filter(function(e){return e.toUpperCase().includes(l.toUpperCase())&&!a.includes(e)})},j=function(e){n([e].concat(Object(i.default)(a))),u("")};return c.a.createElement("div",{className:"search-container"},c.a.createElement("label",{htmlFor:"search-box"},"Search"),c.a.createElement("div",{className:"input-row"},c.a.createElement("input",{id:"search-box",type:"text",placeholder:"Start typing...",value:l,onChange:function(e){return u(e.target.value)},onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},onKeyDown:function(e){13===e.keyCode&&j(f()[0])}}),c.a.createElement("div",{className:"added-tags"},a.map(function(e){return c.a.createElement("span",{key:e},c.a.createElement("span",null,e),c.a.createElement("span",{className:"remove-btn",onClick:function(){return function(e){n(a.filter(function(t){return t!==e}))}(e)}},c.a.createElement("span",null,"x")))}))),c.a.createElement("div",{className:"tags-container"+(p?" open":"")},f().map(function(e){return c.a.createElement("div",{onClick:function(){return j(e)},key:e},e)})))}),u=a("b99T"),d=a.n(u),m=(a("XsEv"),function(e){var t=e.title,a=e.url,n=e.description,r=e.tags,s=e.image,o=e.onTagClick;return c.a.createElement("div",{className:"project-banner"},c.a.createElement("img",{src:s,alt:"".concat(t," image")}),c.a.createElement("div",{className:"main"},c.a.createElement("h1",null,t),c.a.createElement("a",{className:"normal",href:a},a),c.a.createElement("p",null,n)),c.a.createElement("div",{className:"tags"},r.map(function(e){return c.a.createElement("span",{onClick:function(){return o(e)},key:e},e)})))}),p=d.a.projects,g=d.a.tags;t.default=function(){var e=c.a.useState([]),t=Object(r.default)(e,2),a=t[0],s=t[1];return console.log({projectMetas:p}),c.a.createElement(o.a,{title:"Projects"},c.a.createElement(l,{tags:g,addedTags:a,onChange:function(e){return s(e)}}),c.a.createElement("div",{className:"projects-container"},p.map(function(e){return c.a.createElement(m,Object(n.a)({key:e.title},e))})))}},b99T:function(e,t,a){"use strict";e.exports={projects:[{image:"/static/projects/emnudge.png",isReady:!0,title:"EmNudge",url:"https://emnudge.com",description:"Console log library for styling console logs",tags:["React.js","Gatsby.js","Scss"],index:0},{image:"/static/projects/kaff.png",isReady:!0,title:"KAFF",url:"https://kaffsoftware.com",description:"Games company website made with Vue.js and firebase",tags:["Vue.js","Firebase","Particles.js","anime.js","Scss"],index:1},{image:"/static/projects/pushover.png",isReady:!0,title:"Pushover",url:"https://github.com/EmNudge/pushover",description:"Discord bot built for team management",tags:["Discord.js","Firebase","Mongo DB","Node.js","node-cron"],index:2},{image:"/static/projects/styledlogs.png",isReady:!0,title:"Styled Logs",url:"https://github.com/EmNudge/Styled-Logs",description:"Console log library for styling console logs",tags:["Vanilla.js"],index:3}],tags:["React.js","Gatsby.js","Scss","Vue.js","Firebase","Particles.js","anime.js","Discord.js","Mongo DB","Node.js","node-cron","Vanilla.js"]}},kOwS:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a("UXZV"),r=a.n(n);function s(){return(s=r.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}}},[["D85t",1,0,2]]]);