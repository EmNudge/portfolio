(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var e=n("RHEb");return{page:e.default||e}}])},RHEb:function(e,t,n){"use strict";n.r(t);var a=n("kOwS"),r=n("dfwq"),c=n("doui"),s=n("q1tI"),o=n.n(s),i=n("SND3"),l=(n("XNVB"),function(e){var t=e.tags,n=e.addedTags,a=e.onChange,s=o.a.useState(""),i=Object(c.default)(s,2),l=i[0],u=i[1],d=o.a.useState(!1),m=Object(c.default)(d,2),p=m[0],f=m[1],g=o.a.useRef(),j=function(){return t.filter(function(e){return e.toUpperCase().includes(l.toUpperCase())&&!n.includes(e)})},v=function(){var e=g.current?g.current.clientWidth:600;return n.slice(0,e>550?3:2)},E=function(e){a([e].concat(Object(r.default)(n))),u("")},h=function(e){a(n.filter(function(t){return t!==e}))},b=function(e){g.current&&(g.current.contains(e.target)||f(!1))};return o.a.useEffect(function(){return console.log(g),document.addEventListener("mousedown",b,!1),document.addEventListener("touchstart",b,!1),function(){document.removeEventListener("mousedown",b,!1),document.removeEventListener("touchstart",b,!1)}},[]),o.a.createElement("div",{className:"search-container",ref:g,onClick:function(){return f(!0)}},o.a.createElement("label",{htmlFor:"search-box"},"Search"),o.a.createElement("div",{className:"input-row"},o.a.createElement("input",{id:"search-box",type:"text",placeholder:"Start typing...",value:l,onChange:function(e){return u(e.target.value)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){"Enter"===e.key&&j()[0]?E(j()[0]):"Backspace"!==e.key||l||h(n[n.length-1])},autoComplete:"off"}),o.a.createElement("div",{className:"added-tags"},v().map(function(e){return o.a.createElement("span",{key:e},o.a.createElement("span",null,e),o.a.createElement("span",{className:"remove-btn",onClick:function(){return h(e)}},o.a.createElement("span",null,"x")))}),function(){var e=n.length-v().length;return 0===e?o.a.createElement(o.a.Fragment,null):o.a.createElement("span",{className:"leftovers"},e)}())),o.a.createElement("div",{className:"tags-container"+(p?" open":"")},j().map(function(e){return o.a.createElement("div",{onClick:function(){return E(e)},key:e},e)})))}),u=n("b99T"),d=(n("XsEv"),function(e){var t=e.title,n=e.url,a=e.description,r=e.tags,c=e.image,s=e.onTagClick,i=e.animationDelay,l=e.selectedTags;return o.a.createElement("div",{className:"project-banner",style:{animationDelay:i}},o.a.createElement("img",{src:c,alt:"".concat(t," image")}),o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,t),o.a.createElement("a",{className:"normal",href:n},n),o.a.createElement("p",null,a)),o.a.createElement("div",{className:"tags"},r.map(function(e){return o.a.createElement("span",{onClick:function(){return s(e)},key:e,className:l.includes(e)?"selected":""},e)})))});t.default=function(){var e=o.a.useState([]),t=Object(c.default)(e,2),n=t[0],s=t[1],m=o.a.useState(1),p=Object(c.default)(m,2),f=p[0],g=p[1],j=function(e){n.includes(e)||s([].concat(Object(r.default)(n),[e]))};return o.a.createElement(i.a,{title:"Projects"},o.a.createElement(l,{tags:u.tags,addedTags:n,onChange:function(e){g(-1*f),s(e)}}),o.a.createElement("div",{className:"projects-container",key:f},(n.length?u.projects.filter(function(e){return n.every(function(t){return e.tags.includes(t)})}):u.projects).map(function(e,t){return o.a.createElement(d,Object(a.a)({animationDelay:".".concat(2*t,"s"),onTagClick:j,key:e.title,selectedTags:n},e))})))}},b99T:function(e,t,n){"use strict";e.exports={projects:[{image:"/static/projects/emnudge.png",isReady:!0,title:"Voice Over",url:"https://emnudge.com",description:"Voice acting and voice over portfolio",tags:["React.js","Gatsby.js","Scss"],index:0},{image:"/static/projects/kaff.png",isReady:!0,title:"KAFF",url:"https://kaffsoftware.com",description:"Games company website made with Vue.js and firebase",tags:["Vue.js","Firebase","Particles.js","anime.js","Scss"],index:1},{image:"/static/projects/kipperman.png",isReady:!0,title:"Portfolio",url:"https://kipperman.co",description:"Web development portfolio",tags:["React.js","Next.js","Scss","MDX","human-date"],index:2},{image:"/static/projects/pushover.png",isReady:!0,title:"Pushover",url:"https://github.com/EmNudge/pushover",description:"Discord bot built for team management",tags:["Discord.js","Firebase","Mongo DB","Node.js","node-cron"],index:3},{image:"/static/projects/styledlogs.png",isReady:!0,title:"Styled Logs",url:"https://github.com/EmNudge/Styled-Logs",description:"Console log library for styling console logs",tags:["Vanilla.js"],index:4}],tags:["React.js","Gatsby.js","Scss","Vue.js","Firebase","Particles.js","anime.js","Next.js","MDX","human-date","Discord.js","Mongo DB","Node.js","node-cron","Vanilla.js"]}},kOwS:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("UXZV"),r=n.n(a);function c(){return(c=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}},[["D85t",1,0,2]]]);