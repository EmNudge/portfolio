(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var e=n("RHEb");return{page:e.default||e}}])},RHEb:function(e,t,n){"use strict";n.r(t);var a=n("kOwS"),r=n("dfwq"),s=n("doui"),i=n("q1tI"),c=n.n(i),o=n("SND3"),l=(n("XNVB"),function(e){var t=e.tags,n=e.addedTags,a=e.onChange,i=c.a.useState(""),o=Object(s.default)(i,2),l=o[0],u=o[1],d=c.a.useState(!1),m=Object(s.default)(d,2),p=m[0],g=m[1],f=c.a.useRef(),y=function(){return t.filter(function(e){return e.toUpperCase().includes(l.toUpperCase())&&!n.includes(e)})},j=function(){var e=f.current?f.current.clientWidth:600;return n.slice(0,e>550?3:2)},h=function(e){a([e].concat(Object(r.default)(n))),u("")},v=function(e){a(n.filter(function(t){return t!==e}))},E=function(e){f.current&&(f.current.contains(e.target)||g(!1))};return c.a.useEffect(function(){return document.addEventListener("mousedown",E,!1),document.addEventListener("touchstart",E,!1),function(){document.removeEventListener("mousedown",E,!1),document.removeEventListener("touchstart",E,!1)}},[]),c.a.createElement("div",{className:"search-container",ref:f,onClick:function(){return g(!0)}},c.a.createElement("label",{htmlFor:"search-box"},"Search"),c.a.createElement("div",{className:"input-row"},c.a.createElement("input",{id:"search-box",type:"text",placeholder:"Start typing...",value:l,onChange:function(e){return u(e.target.value)},onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},onKeyDown:function(e){"Enter"===e.key&&y()[0]?h(y()[0]):"Backspace"!==e.key||l||v(n[n.length-1])},autoComplete:"off"}),c.a.createElement("div",{className:"added-tags"},j().map(function(e){return c.a.createElement("span",{key:e},c.a.createElement("span",null,e),c.a.createElement("span",{className:"remove-btn",onClick:function(){return v(e)}},c.a.createElement("span",null,"x")))}),function(){var e=n.length-j().length;return 0===e?c.a.createElement(c.a.Fragment,null):c.a.createElement("span",{className:"leftovers"},e)}())),c.a.createElement("div",{className:"tags-container"+(p?" open":"")},y().map(function(e){return c.a.createElement("div",{onClick:function(){return h(e)},key:e},e)})))}),u=n("b99T"),d=(n("XsEv"),function(e){var t=e.title,n=e.url,a=e.description,r=e.tags,s=e.image,i=e.onTagClick,o=e.animationDelay,l=e.selectedTags;return c.a.createElement("div",{className:"project-banner",style:{animationDelay:o}},c.a.createElement("img",{src:s,alt:"".concat(t," image")}),c.a.createElement("div",{className:"main"},c.a.createElement("h1",null,t),c.a.createElement("a",{className:"normal",href:n},n),c.a.createElement("p",null,a)),c.a.createElement("div",{className:"tags"},r.map(function(e){return c.a.createElement("span",{onClick:function(){return i(e)},key:e,className:l.includes(e)?"selected":""},e)})))});t.default=function(){var e=c.a.useState([]),t=Object(s.default)(e,2),n=t[0],i=t[1],m=c.a.useState(1),p=Object(s.default)(m,2),g=p[0],f=p[1],y=function(e){n.includes(e)||i([].concat(Object(r.default)(n),[e]))};return c.a.createElement(o.a,{title:"Projects"},c.a.createElement(l,{tags:u.tags,addedTags:n,onChange:function(e){f(-1*g),i(e)}}),c.a.createElement("div",{className:"projects-container",key:g},(n.length?u.projects.filter(function(e){return n.every(function(t){return e.tags.includes(t)})}):u.projects).map(function(e,t){return c.a.createElement(d,Object(a.a)({animationDelay:".".concat(2*t,"s"),onTagClick:y,key:e.title,selectedTags:n},e))})))}},b99T:function(e,t,n){"use strict";e.exports={projects:[{image:"/static/projects/emnudge.png",isReady:!0,title:"Voice Over",url:"https://emnudge.com",description:"Voice acting and voice over portfolio",tags:["React.js","Gatsby.js","Scss"],index:0},{image:"/static/projects/kaff.png",isReady:!0,title:"KAFF",url:"https://kaffsoftware.com",description:"Games company website made with Vue.js and firebase",tags:["Vue.js","Firebase","Particles.js","anime.js","Scss"],index:1},{image:"/static/projects/styledlogs.png",isReady:!0,title:"Keyframed Audioplayer",url:"http://keyframed-audioplayer.netlify.com",description:"Web component audioplayer with keyframeable attributes",tags:["Stencil.js","Typescript"],index:2},{image:"/static/projects/kipperman.png",isReady:!0,title:"Portfolio",url:"https://kipperman.co",description:"Web development portfolio",tags:["React.js","Next.js","Scss","MDX","human-date"],index:3},{image:"/static/projects/styledlogs.png",isReady:!0,title:"Minimal Templating Lang",url:"https://github.com/EmNudge/Minimal-Templating-Lang",description:"An extremely minimal zero-dependency templating language built with node",tags:["Node.js"],index:4},{image:"/static/projects/pushover.png",isReady:!0,title:"Pushover",url:"https://github.com/EmNudge/pushover",description:"Discord bot built for team management",tags:["Discord.js","Firebase","Typescript","Mongo DB","Node.js","node-cron"],index:5},{image:"/static/projects/styledlogs.png",isReady:!0,title:"Styled Logs",url:"https://github.com/EmNudge/Styled-Logs",description:"Console log library for styling console logs",tags:["Vanilla.js"],index:6}],tags:["React.js","Gatsby.js","Scss","Vue.js","Firebase","Particles.js","anime.js","Stencil.js","Typescript","Next.js","MDX","human-date","Node.js","Discord.js","Mongo DB","node-cron","Vanilla.js"]}},kOwS:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("UXZV"),r=n.n(a);function s(){return(s=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}},[["D85t",1,0,2]]]);