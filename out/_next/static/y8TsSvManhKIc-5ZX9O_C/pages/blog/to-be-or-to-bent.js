(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/tz4":function(e,t,n){"use strict";t.__esModule=!0;var r=a(n("q1tI")),o=a(n("acCH"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},"2mcs":function(e,t,n){"use strict";var r=n("ohE5");e.exports=r},"2mql":function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,u=l&&l(Object);e.exports=function e(t,n,p){if("string"!==typeof n){if(u){var m=l(n);m&&m!==u&&e(t,m,p)}var f=i(n);s&&(f=f.concat(s(n)));for(var h=0;h<f.length;++h){var d=f[h];if(!r[d]&&!o[d]&&(!p||!p[d])){var y=c(n,d);try{a(t,d,y)}catch(b){}}}return t}return t}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n("Fobl");function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("q1tI")),a=s(n("/tz4")),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)({}),l=c.Provider,u=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(u,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=l(a),s=l(n("2mql")),c=n("Fobl");function l(e){return e&&e.__esModule?e:{default:e}}var u={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,c=e.children,l=e.components,p=void 0===l?{}:l,m=e.Layout,f=e.layoutProps,h=p[n+"."+t]||p[t]||u[t]||t;return m?((0,s.default)(this,m),i.default.createElement(m,r({components:p},f),i.default.createElement(h,a,c))):i.default.createElement(h,a,c)}}]),t}();t.default=(0,c.withMDXComponents)(p)},UAT2:function(e,t,n){"use strict";n.r(t);var r=n("4mXO"),o=n.n(r),a=n("pLtp"),i=n.n(a);function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,o={},a=i()(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(o.a){var s=o()(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=n("q1tI"),l=n.n(c),u=n("6qfE"),p=n("nOHt"),m=n("Ogzj"),f=n("5Mtd"),h=n("ZwJn"),d=n.n(h),y=(n("FkzK"),function(e){var t=e.title,n=e.children,r=Object(p.useRouter)(),o=d.a.find(function(e){return e.title===t}),a=o.publishedAt,i=o.readTime;return l.a.createElement("div",{className:"blog-page"},l.a.createElement(f.a,{title:t}),l.a.createElement(m.a,{currentRoute:r.route}),l.a.createElement("article",null,l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,t),l.a.createElement("div",{className:"meta"},a,l.a.createElement("span",{className:"break"},"\u25cf"),i," min read")),l.a.createElement("main",null,n),l.a.createElement("hr",null),l.a.createElement("footer",null,"Questions? Comments? I don't have a built in comments system for a number of reasons, but feel free to shoot me an email at\xa0",l.a.createElement("a",{href:"mailto:contact@kipperman.co"},"contact@kipperman.co"),"!")))});n.d(t,"meta",function(){return b});var b={published:!0,publishedAt:"2019-07-18",title:"To Be Or To Ben't - The Nonsense of Words",summary:"A wannabe linguist's take on words"};t.default=function(e){var t=e.components,n=s(e,["components"]);return l.a.createElement(u.MDXTag,{name:"wrapper",Layout:function(e){var t=e.children;return l.a.createElement(y,{title:b.title},t)},layoutProps:n,components:t},l.a.createElement(u.MDXTag,{name:"blockquote",components:t},l.a.createElement(u.MDXTag,{name:"p",components:t,parentName:"blockquote"},"To be or to ben't? That is the question. Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And, by opposing, end them?"),l.a.createElement("br",null)," - Shakespeare"),l.a.createElement(u.MDXTag,{name:"p",components:t},"The more perspicacious of you might have noticed I took the liberty of slightly altering the first sentence of this famous quote from Shakespeare's Hamlet."),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},"While many might have thought the title of this article to be humorous, most probably also thought \"Ben't? That isn't a word!\""),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},'The cool part about this, is that these same people most likely knew exactly what I meant. It\'s written like a grammatical contraction. We know about contractions. We use words like "haven\'t" and "isn\'t" to mean the words "cannot" and "is not" respectively. We know contractions shorten and/or group words togethor. We know contractions like these are a grouping of one word plus the word "not".'),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},"We assume the word \"ben't\" is a contraction of \"be not\". We're dealing with Shakespear here, so it's probably fine to reverse it - \"not be\". It's valid enough, I'd say. Why is most people's first instinct to reject it?"),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},'Critics might retort with "Well, you can\'t just make up words!" which is rather amusing, because we make up words all the time. In fact, the very word "critic" was made up by Shakespear.'),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},l.a.createElement(u.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2014/04/blog63.jpg",alt:"Grammarly's writeup on Shakespeare's words"}}),l.a.createElement(u.MDXTag,{name:"br",components:t,parentName:"p"}),l.a.createElement("a",{href:"https://www.grammarly.com/blog/15-words-invented-by-shakespeare/",className:"image-label"},"Grammarly's writeup on Shakespeare's words")),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},'People will often point to the dictionary when trying to verify the authenticity of words. "Prophesize", a word I grew up hearing a lot, is not an actual word. The "grammatically correct" term is "prophesy". Looking at most dictionaries and resources, online or physical, will tell you the same. But it just feels so... wrong. ',l.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.merriam-webster.com/dictionary/prophesize"}},"Miriam Webster")," actually happens to have an entry, but mentions people quoting wrongly translated bible/testament verses."),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},'As a software engineer, I encounter "wrong words" all the time. The lingo commonly used by programmers has become known as ',l.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.merriam-webster.com/dictionary/computerese"}},"computerse"),'. Complex algorithmic problems often call for the creation of new words. While these new words do a great job at describing specific attributes of a situation, they are often never added to the dictionary until they gain use outside of the tech field. One such word I come into contact with fairly often is "',l.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wiktionary.org/wiki/performant"}},"performant"),'".'),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},"It isn't a real word, but it gets used a lot among developers concerned with their application's performance. They might say that one technology is much easier to use, but is far less performant. They mean to say that it performs worse. The word is simple and communicates its intent effectively. What more could we want from a word?"),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},l.a.createElement(u.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"https://i.imgur.com/k78WCwW.jpg",alt:"discord use of performant"}})),l.a.createElement("div",{className:"image-label"},"Use of performant amongst web developers"),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},'There are still people (my previous self included) that would have rejected the word "performant". They would claim that it\'s not a word. Not a ',l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"p"},"real"),' word, anyway. Well, to them I say "what defines a ',l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"p"},"real"),' word?"'),l.a.createElement("br",null),l.a.createElement(u.MDXTag,{name:"p",components:t},"The dictionary editors? Who gives them that power? Are you aware of how these editors make their decisions? Yes, it's in somewhat of a ",l.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.merriam-webster.com/help/faq-words-into-dictionary"}},"democratic fashion"),", but they're never opposed to the general public making new ones. In fact, they often ",l.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.ted.com/talks/erin_mckean_go_ahead_make_up_new_words"}},"encourage it"),"."))}},ZwJn:function(e,t,n){"use strict";var r=[{published:!0,publishedAt:"July 17th, 2019",title:"To Be Or To Ben't - The Nonsense of Words",summary:"A wannabe linguist's take on words",path:"/blog/to-be-or-to-bent",index:0,readTime:2}];console.log(r),e.exports=r},acCH:function(e,t,n){"use strict";t.__esModule=!0;var r=n("q1tI"),o=(i(r),i(n("17x9"))),a=i(n("fZtv"));i(n("2mcs"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=1073741823;t.default=function(e,t){var n,i,p="__create-react-context-"+(0,a.default)()+"__",m=function(e){function n(){var t,r;s(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=c(this,e.call.apply(e,[this].concat(a))),r.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,r){e=n,t.forEach(function(t){return t(e,r)})}}}(r.props.value),c(r,t)}return l(n,e),n.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(i=r)?0!==a||1/a===1/i:a!==a&&i!==i)?o=0:(o="function"===typeof t?t(n,r):u,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,i},n.prototype.render=function(){return this.props.children},n}(r.Component);m.childContextTypes=((n={})[p]=o.default.object.isRequired,n);var f=function(t){function n(){var e,r;s(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=r=c(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},c(r,e)}return l(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?u:t},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?u:e},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return f.contextTypes=((i={})[p]=o.default.object,i),{Provider:m,Consumer:f}},e.exports=t.default},fZtv:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n("yLpj"))},ohE5:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},ynqN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/to-be-or-to-bent",function(){var e=n("UAT2");return{page:e.default||e}}])}},[["ynqN",1,0,2]]]);