(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/tz4":function(e,t,a){"use strict";t.__esModule=!0;var n=r(a("q1tI")),o=r(a("acCH"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=n.default.createContext||o.default,e.exports=t.default},"2mcs":function(e,t,a){"use strict";var n=a("ohE5");e.exports=n},"2mql":function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,s=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=l&&l(Object);e.exports=function e(t,a,p){if("string"!==typeof a){if(m){var u=l(a);u&&u!==m&&e(t,u,p)}var h=s(a);i&&(h=h.concat(i(a)));for(var d=0;d<h.length;++d){var f=h[d];if(!n[f]&&!o[f]&&(!p||!p[f])){var g=c(a,f);try{r(t,f,g)}catch(w){}}}return t}return t}},"4mXO":function(e,t,a){e.exports=a("7TPF")},"6qfE":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(n).default}});var o=a("Fobl");function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},"7TPF":function(e,t,a){a("AUvm"),e.exports=a("WEpk").Object.getOwnPropertySymbols},Fobl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=i(a("q1tI")),r=i(a("/tz4")),s=i(a("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.default)({}),l=c.Provider,m=c.Consumer;t.withMDXComponents=function(e){return function(t){var a=t.components,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["components"]);return o.default.createElement(m,null,function(t){return o.default.createElement(e,n({components:a||t},r))})}};var p=function(e){var t=e.components,a=e.children;return o.default.createElement(l,{value:t},a)};p.propTypes={components:s.default.object.isRequired,children:s.default.element.isRequired},t.default=p},RSLW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a("q1tI"),s=l(r),i=l(a("2mql")),c=a("Fobl");function l(e){return e&&e.__esModule?e:{default:e}}var m={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.parentName,o=e.props,r=void 0===o?{}:o,c=e.children,l=e.components,p=void 0===l?{}:l,u=e.Layout,h=e.layoutProps,d=p[a+"."+t]||p[t]||m[t]||t;return u?((0,i.default)(this,u),s.default.createElement(u,n({components:p},h),s.default.createElement(d,r,c))):s.default.createElement(d,r,c)}}]),t}();t.default=(0,c.withMDXComponents)(p)},UAT2:function(e,t,a){"use strict";a.r(t);var n=a("4mXO"),o=a.n(n),r=a("pLtp"),s=a.n(r);function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,o={},r=s()(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(o.a){var i=o()(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=a("q1tI"),l=a.n(c),m=a("6qfE"),p=a("nOHt"),u=a("Ogzj"),h=a("5Mtd"),d=a("ZwJn"),f=a.n(d),g=(a("FkzK"),function(e){var t=e.title,a=e.children,n=Object(p.useRouter)(),o=f.a.find(function(e){return e.title===t}),r=o.publishedAt,s=o.readTime;return l.a.createElement("div",{className:"blog-page"},l.a.createElement(h.a,{title:t}),l.a.createElement(u.a,{currentRoute:n.route}),l.a.createElement("article",null,l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,t),l.a.createElement("div",{className:"meta"},r,l.a.createElement("span",{className:"break"},"\u25cf"),s," min read")),l.a.createElement("main",null,a),l.a.createElement("hr",null),l.a.createElement("footer",null,"Questions? Comments? I don't have a built in comments system for a number of reasons, but feel free to shoot me an email at\xa0",l.a.createElement("a",{href:"mailto:contact@kipperman.co"},"contact@kipperman.co"),"!")))});a.d(t,"meta",function(){return w});var w={published:!0,publishedAt:"2019-07-22",title:"To Be Or To Ben't - The Nonsense of Words",summary:"A wannabe linguist's take on words"};t.default=function(e){var t=e.components,a=i(e,["components"]);return l.a.createElement(m.MDXTag,{name:"wrapper",Layout:function(e){var t=e.children;return l.a.createElement(g,{title:w.title},t)},layoutProps:a,components:t},l.a.createElement(m.MDXTag,{name:"blockquote",components:t},l.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"blockquote"},"To be or to ben't? That is the question. Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And, by opposing, end them?"),l.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"blockquote"},"-"," Shakespeare")),l.a.createElement(m.MDXTag,{name:"p",components:t},"The more perspicacious of you might have noticed I took the liberty of slightly altering the first sentence of this famous quote from Shakespeare's Hamlet."),l.a.createElement(m.MDXTag,{name:"p",components:t},"While many might have thought the title of this article to be humorous, most probably also thought \"Ben't? That isn't a word!\""),l.a.createElement(m.MDXTag,{name:"h2",components:t},"Fake Words"),l.a.createElement(m.MDXTag,{name:"p",components:t},'The cool part about this, is that these same people most likely knew exactly what I meant. It\'s written like a grammatical contraction. We know about contractions. We use words like "haven\'t" and "isn\'t" to mean the words "cannot" and "is not" respectively. We know contractions shorten and/or group words together. We know contractions like these are a grouping of one word plus the word "not".'),l.a.createElement(m.MDXTag,{name:"p",components:t},"We assume the word \"ben't\" is a contraction of \"be not\". We're dealing with Shakespeare here, so it's probably fine to reverse it - \"not be\". It's valid enough, I'd say. Why is most people's first instinct to reject it?"),l.a.createElement(m.MDXTag,{name:"p",components:t},'Critics might retort with "Well, you can\'t just make up words!" which is rather amusing, because we make up words all the time. In fact, the very word "critic" was made up by Shakespeare.'),l.a.createElement(m.MDXTag,{name:"p",components:t},l.a.createElement(m.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2014/04/blog63.jpg",alt:"Grammarly's writeup on Shakespeare's words"}}),l.a.createElement(m.MDXTag,{name:"br",components:t,parentName:"p"}),l.a.createElement("a",{href:"https://www.grammarly.com/blog/15-words-invented-by-shakespeare/",className:"image-label"},"Grammarly's writeup on Shakespeare's words")),l.a.createElement(m.MDXTag,{name:"p",components:t},'People will often point to the dictionary when trying to verify the authenticity of words. "Prophesize", a word I grew up hearing a lot, is not an actual word. The "grammatically correct" term is "prophesy". Looking at most dictionaries and resources, online or physical, will tell you the same. But it just feels so... wrong. ',l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.merriam-webster.com/dictionary/prophesize"}},"Miriam Webster")," actually happens to have an entry, but mentions people quoting wrongly translated bible/testament verses."),l.a.createElement(m.MDXTag,{name:"p",components:t},'As a software engineer, I encounter "wrong words" all the time. The lingo commonly used by programmers has become known as ',l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.merriam-webster.com/dictionary/computerese"}},"computerse"),'. Complex algorithmic problems often call for the creation of new words. While these new words do a great job at describing specific attributes of a situation, they are often never added to the dictionary until they gain use outside of the tech field. One such word I come into contact with fairly often is "',l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wiktionary.org/wiki/performant"}},"performant"),'".'),l.a.createElement(m.MDXTag,{name:"p",components:t},"It isn't a real word, but it gets used a lot among developers concerned with their application's performance. They might say that one technology is much easier to use, but is far less performant. They mean to say that it performs worse. The word is simple and communicates its intent effectively. What more could we want from a word?"),l.a.createElement(m.MDXTag,{name:"p",components:t},l.a.createElement(m.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"https://i.imgur.com/k78WCwW.jpg",alt:"discord use of performant"}}),l.a.createElement("a",{className:"image-label"},"Use of performant amongst web developers")),l.a.createElement(m.MDXTag,{name:"p",components:t},'There are still people (my previous self included) that would have rejected the word "performant". They would claim that it\'s not a word. Not a ',l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"real"),' word, anyway. Well, to them I say "what defines a ',l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"real"),' word?"'),l.a.createElement(m.MDXTag,{name:"p",components:t},"The dictionary editors? Who gives them that power? Are you aware of how these editors make their decisions? Yes, it's in somewhat of a ",l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.merriam-webster.com/help/faq-words-into-dictionary"}},"democratic fashion"),", but they're never opposed to the general public making new ones. In fact, they often ",l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.ted.com/talks/erin_mckean_go_ahead_make_up_new_words"}},"encourage it"),"."),l.a.createElement(m.MDXTag,{name:"p",components:t},"So the people who make words don't mind when people make words. These people tend to model which words they consider ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"real")," based off of what the general public seems to consider real. All critics of fake words are doing is preventing the ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"creation")," of new words."),l.a.createElement(m.MDXTag,{name:"h2",components:t},"Grammer Nazi"),l.a.createElement(m.MDXTag,{name:"p",components:t},"Many don't like the word and perhaps rightfully so, but it does a good job at describing many people's attitude towards the white knights of Grammar. And yes, I know I spelled it \"Grammer\". That misspell is done on purpose. It's just my little jab at the title."),l.a.createElement(m.MDXTag,{name:"p",components:t},'It\'s something I was once guilty of. I was one of those "grammar Nazis". I would fight for the proper use of words and grammatical sentences. I like to think I was pretty good at it, too. I knew my grammar really well all throughout primary school. I was in this mindset up until taking linguistics in college.'),l.a.createElement(m.MDXTag,{name:"p",components:t},"Linguistics is a subject that not only breaks down language as a whole, it does a good job of reframing language as a concept. It explains grammar in a bit of a different way. My experience in linguistics was with breaking down language using understandability."),l.a.createElement(m.MDXTag,{name:"p",components:t},"In linguistics, we discussed ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"prescriptive")," and ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"descriptive")," grammar. Prescriptive grammar, containing the ",l.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"pre"),"fix ",l.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"pre"),", discusses how grammar ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"should")," be, while descriptive grammar discusses how grammar currently is. Grammar Nazis are prescriptive grammarians."),l.a.createElement(m.MDXTag,{name:"p",components:t},"Just about anything that discusses culturistic attributes prescriptively doesn't age well. Describing how people ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"should")," act or how speech ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"should")," be can even be perceived as racist in proper contexts. One of the more famous cases of this is probably surrounding African ",l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/African-American_Vernacular_English"}},"American English (AAE)"),"."),l.a.createElement(m.MDXTag,{name:"p",components:t},l.a.createElement(m.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"https://present5.com/docs//african_american_english_-_yamanova_images/african_american_english_-_yamanova_12.jpg",alt:"African American English examples"}}),l.a.createElement("a",{href:"https://pubs.asha.org/doi/10.1044/cds15.2.33",className:"image-label"},"African American English examples")),l.a.createElement(m.MDXTag,{name:"p",components:t},"Describing a language, vernacular, or accent as inferior is looked down upon with the utmost disgust within academia. ",l.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Inferior")," itself is a word that's most difficult to describe. Think about it. What does the word even mean? Worse? In what way? Dignification? Who ascribes meaning to the word dignification? Usually the person using it."),l.a.createElement(m.MDXTag,{name:"p",components:t},'There is, however, some truth in the fight for "proper" grammar. The one way a system of communication can be described as "inferior" or "worse" is if it does a bad job at the very thing it was designed for.'),l.a.createElement(m.MDXTag,{name:"h2",components:t},"Inferior Language"),l.a.createElement(m.MDXTag,{name:"blockquote",components:t},l.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"blockquote"},"All I know is I wrote every single word to",l.a.createElement(m.MDXTag,{name:"br",components:t,parentName:"p"}),"Everything I ever murdered",l.a.createElement(m.MDXTag,{name:"br",components:t,parentName:"p"}),"Time to separate the sheep from goats (yeah)",l.a.createElement(m.MDXTag,{name:"br",components:t,parentName:"p"}),"And I got no faith in your writers, I don't believe in ghosts"),l.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"blockquote"},"-"," Eminem on Fall (Kamikaze Album)")),l.a.createElement(m.MDXTag,{name:"p",components:t},'Wordplay, a staple of hiphop and jokes in general, comes many times from the "bugs" of language. A language bug, as I like to call it, is a time when a language allows for multiple interpretations of the same phrase. People like to abuse these bugs for wordplay, where the multiple interpretations can lead to humorous outcomes.'),l.a.createElement(m.MDXTag,{name:"p",components:t},"However, these bugs can often lead to misinterpretations. A language feature that leads to ",l.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"mis"),"misinterpretations can perhaps rightfully be interpreted as inferior."),l.a.createElement(m.MDXTag,{name:"p",components:t},"Yiddish, a language spoken by Hasidic Jews, is one of the many tactics employed to keep Hasidic Jews separated from their non-Jewish neighbors. Even though their language creates a barrier, it accomplishes its goal. If a language's job is to be difficult, its difficulty is a good thing."),l.a.createElement(m.MDXTag,{name:"p",components:t},"An example of a criticized language bug would be the infamous ",l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.grammarly.com/blog/3-things-you-must-know-about-double-negatives/"}},"double negative"),'. One saying that they "aren\'t no criminal" might also be indicting themselves among people not familiar with double negatives.'),l.a.createElement(m.MDXTag,{name:"p",components:t},'These double negatives can further complicate things when written down. While the phrase "there isn\'t no food in the fridge" might have a clear meaning when spoken aloud, its definition is ambiguous when typed up.'),l.a.createElement(m.MDXTag,{name:"p",components:t},"This isn't to say that the use of double negatives makes a language or dialect inferior. It's that if a language which is built to be understood contains attributes that lead to its misinterpretation, those attribute would be considered flaws."),l.a.createElement(m.MDXTag,{name:"p",components:t},"It should be noted that if all the speakers of a specific language understand sentences with these features with no difficulty, regardless of how odd it looks, these features would not be considered language bugs, just oddities."),l.a.createElement(m.MDXTag,{name:"h2",components:t},"Controlling Language"),l.a.createElement(m.MDXTag,{name:"p",components:t},"So we probably shouldn't be pedantic about words which have obvious meanings and contribute to the wealth of descriptiveness of a given language, but what about language bugs? What about ",l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Serial_comma"}},"Oxford commas"),"?"),l.a.createElement(m.MDXTag,{name:"p",components:t},"Well even if a language bug rears its head every once in a while, linguists have found it extremely difficult or impossible to control the common vernacular. Have you ever had to correct a toddler who keeps making the same grammar mistake? Linguists have actually found this similarly difficult."),l.a.createElement(m.MDXTag,{name:"p",components:t},"So we're stuck with a language filled with mistakes with nothing to do, but add on more to the mess? Well, yes, in a way. When one adds on to a system without removing just as often, it tends to get pretty bloated."),l.a.createElement(m.MDXTag,{name:"p",components:t},"In software engineering, due to ",l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Backward_compatibility"}},"backwards compatibility"),", a similar problem usually arises. In language, the backwards compatibility would probably surround people being able to understand writings from our recent past. As long as we still consider them English, the words they employ will stay with us."),l.a.createElement(m.MDXTag,{name:"p",components:t},"So what do software engineers do? They learn from their mistakes, abandon ship, and create an entirely new technology to supersede the current one. After a while, it becomes much easier to do a full re-write than to correct the mistakes of the current iteration."),l.a.createElement(m.MDXTag,{name:"p",components:t},'English, a language with root words taken from various disconnected languages, encompasses a mess of grammar and vocabulary. The best step to correct these "problems" would probably be a new language. I elect ',l.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Esperanto"}},"Esperanto"),". It's really interesting and easy to learn. I advise anyone to at least check it out."),l.a.createElement(m.MDXTag,{name:"h2",components:t},"What To Do"),l.a.createElement(m.MDXTag,{name:"p",components:t},"Well, do we truly take on ",l.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"another")," language? Is that our goal? I honestly don't think it's very practical. Not without some serious government intervention into our public school systems, that is."),l.a.createElement(m.MDXTag,{name:"p",components:t},"As for me, I'll continue to make grammar \"mistakes\" that I think make sense to me. You might notice a lot of grammatical quirks in my articles, such as how I almost never put commas inside the parentheses. Most of these quirks are quite intentional. We create the system we're told to follow. Why not push forward a bit and be the example people end up learning from?"),l.a.createElement(m.MDXTag,{name:"p",components:t},"If some quirk of our language seems odd to you, change how you write. People may think it a bit unusual at first, but do it enough and it'll catch on. If it makes enough sense, it'll be here to stay and you can be a grammatical trend setter."),l.a.createElement(m.MDXTag,{name:"p",components:t},"Who knows? The future is so futury."))}},ZwJn:function(e,t,a){"use strict";e.exports=[{published:!0,publishedAt:"July 21st, 2019",title:"To Be Or To Ben't - The Nonsense of Words",summary:"A wannabe linguist's take on words",path:"/blog/to-be-or-to-bent",index:0,readTime:6}]},acCH:function(e,t,a){"use strict";t.__esModule=!0;var n=a("q1tI"),o=(s(n),s(a("17x9"))),r=s(a("fZtv"));s(a("2mcs"));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=1073741823;t.default=function(e,t){var a,s,p="__create-react-context-"+(0,r.default)()+"__",u=function(e){function a(){var t,n;i(this,a);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return t=n=c(this,e.call.apply(e,[this].concat(r))),n.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(a,n){e=a,t.forEach(function(t){return t(e,n)})}}}(n.props.value),c(n,t)}return l(a,e),a.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},a.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var a=this.props.value,n=e.value,o=void 0;((r=a)===(s=n)?0!==r||1/r===1/s:r!==r&&s!==s)?o=0:(o="function"===typeof t?t(a,n):m,0!==(o|=0)&&this.emitter.set(e.value,o))}var r,s},a.prototype.render=function(){return this.props.children},a}(n.Component);u.childContextTypes=((a={})[p]=o.default.object.isRequired,a);var h=function(t){function a(){var e,n;i(this,a);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=n=c(this,t.call.apply(t,[this].concat(r))),n.state={value:n.getValue()},n.onUpdate=function(e,t){0!==((0|n.observedBits)&t)&&n.setState({value:n.getValue()})},c(n,e)}return l(a,t),a.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?m:t},a.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?m:e},a.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},a.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},a.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},a}(n.Component);return h.contextTypes=((s={})[p]=o.default.object,s),{Provider:u,Consumer:h}},e.exports=t.default},fZtv:function(e,t,a){"use strict";(function(t){var a="__global_unique_id__";e.exports=function(){return t[a]=(t[a]||0)+1}}).call(this,a("yLpj"))},ohE5:function(e,t,a){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},ynqN:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/to-be-or-to-bent",function(){var e=a("UAT2");return{page:e.default||e}}])}},[["ynqN",1,0,2]]]);