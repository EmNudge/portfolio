(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var e=n("RHEb");return{page:e.default||e}}])},RHEb:function(e,t,n){"use strict";n.r(t);var a=n("kOwS"),r=n("dfwq"),s=n("doui"),c=n("q1tI"),i=n.n(c),o=n("SND3"),l=(n("XNVB"),function(e){var t=e.tags,n=e.addedTags,a=e.onChange,c=i.a.useState(""),o=Object(s.default)(c,2),l=o[0],u=o[1],d=i.a.useState(!1),m=Object(s.default)(d,2),p=m[0],f=m[1],g=i.a.useRef(),j=function(){return t.filter(function(e){return e.toUpperCase().includes(l.toUpperCase())&&!n.includes(e)})},y=function(){var e=g.current?g.current.clientWidth:600;return n.slice(0,e>550?3:2)},v=function(e){a([e].concat(Object(r.default)(n))),u("")},h=function(e){a(n.filter(function(t){return t!==e}))},E=function(e){g.current&&(g.current.contains(e.target)||f(!1))};return i.a.useEffect(function(){return console.log(g),document.addEventListener("mousedown",E,!1),document.addEventListener("touchstart",E,!1),function(){document.removeEventListener("mousedown",E,!1),document.removeEventListener("touchstart",E,!1)}},[]),i.a.createElement("div",{className:"search-container",ref:g,onClick:function(){return f(!0)}},i.a.createElement("label",{htmlFor:"search-box"},"Search"),i.a.createElement("div",{className:"input-row"},i.a.createElement("input",{id:"search-box",type:"text",placeholder:"Start typing...",value:l,onChange:function(e){return u(e.target.value)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){"Enter"===e.key&&j()[0]?v(j()[0]):"Backspace"!==e.key||l||h(n[n.length-1])},autoComplete:"off"}),i.a.createElement("div",{className:"added-tags"},y().map(function(e){return i.a.createElement("span",{key:e},i.a.createElement("span",null,e),i.a.createElement("span",{className:"remove-btn",onClick:function(){return h(e)}},i.a.createElement("span",null,"x")))}),function(){var e=n.length-y().length;return 0===e?i.a.createElement(i.a.Fragment,null):i.a.createElement("span",{className:"leftovers"},e)}())),i.a.createElement("div",{className:"tags-container"+(p?" open":"")},j().map(function(e){return i.a.createElement("div",{onClick:function(){return v(e)},key:e},e)})))}),u=n("b99T"),d=(n("XsEv"),function(e){var t=e.title,n=e.url,a=e.description,r=e.tags,s=e.image,c=e.onTagClick,o=e.animationDelay,l=e.selectedTags;return i.a.createElement("div",{className:"project-banner",style:{animationDelay:o}},i.a.createElement("img",{src:s,alt:"".concat(t," image")}),i.a.createElement("div",{className:"main"},i.a.createElement("h1",null,t),i.a.createElement("a",{className:"normal",href:n},n),i.a.createElement("p",null,a)),i.a.createElement("div",{className:"tags"},r.map(function(e){return i.a.createElement("span",{onClick:function(){return c(e)},key:e,className:l.includes(e)?"selected":""},e)})))});t.default=function(){var e=i.a.useState([]),t=Object(s.default)(e,2),n=t[0],c=t[1],m=i.a.useState(1),p=Object(s.default)(m,2),f=p[0],g=p[1],j=function(e){n.includes(e)||c([].concat(Object(r.default)(n),[e]))};return i.a.createElement(o.a,{title:"Projects"},i.a.createElement(l,{tags:u.tags,addedTags:n,onChange:function(e){g(-1*f),c(e)}}),i.a.createElement("div",{className:"projects-container",key:f},(n.length?u.projects.filter(function(e){return n.every(function(t){return e.tags.includes(t)})}):u.projects).map(function(e,t){return i.a.createElement(d,Object(a.a)({animationDelay:".".concat(2*t,"s"),onTagClick:j,key:e.title,selectedTags:n},e))})))}},b99T:function(e,t,n){"use strict";e.exports={projects:[{image:"/static/projects/emnudge.png",isReady:!0,title:"Voice Over",url:"https://emnudge.com",description:"Voice acting and voice over portfolio",tags:["React.js","Gatsby.js","Scss"],index:0},{image:"/static/projects/kaff.png",isReady:!0,title:"KAFF",url:"https://kaffsoftware.com",description:"Games company website made with Vue.js and firebase",tags:["Vue.js","Firebase","Particles.js","anime.js","Scss"],index:1},{image:"/static/projects/styledlogs.png",isReady:!0,title:"Keyframed Audioplayer",url:"http://keyframed-audioplayer.netlify.com",description:"Web component audioplayer with keyframeable attributes",tags:["Stencil.js","Typescript"],index:2},{image:"/static/projects/kipperman.png",isReady:!0,title:"Portfolio",url:"https://kipperman.co",description:"Web development portfolio",tags:["React.js","Next.js","Scss","MDX","human-date"],index:3},{image:"/static/projects/pushover.png",isReady:!0,title:"Pushover",url:"https://github.com/EmNudge/pushover",description:"Discord bot built for team management",tags:["Discord.js","Firebase","Mongo DB","Node.js","node-cron"],index:4},{image:"/static/projects/styledlogs.png",isReady:!0,title:"Styled Logs",url:"https://github.com/EmNudge/Styled-Logs",description:"Console log library for styling console logs",tags:["Vanilla.js"],index:5}],tags:["React.js","Gatsby.js","Scss","Vue.js","Firebase","Particles.js","anime.js","Stencil.js","Typescript","Next.js","MDX","human-date","Discord.js","Mongo DB","Node.js","node-cron","Vanilla.js"]}},kOwS:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("UXZV"),r=n.n(a);function s(){return(s=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}},[["D85t",0,1,2]]]);