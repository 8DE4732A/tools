/*! For license information please see 4549.3ea8093b.chunk.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4549],{14549:(e,t,r)=>{"use strict";r.d(t,{A:()=>De});var n=r(68102),o=r(22687),i=r(49257),a=r(76634),l=r(22716),s=r(35012),u=r(87365),c=r(98057),p=r(30010),f=r(4175);function d(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{(0,f.YR)(t,"element",((t,r,n)=>{const o=n;let i;if(e.allowedElements?i=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(i=e.disallowedElements.includes(t.tagName)),!i&&e.allowElement&&"number"===typeof r&&(i=!e.allowElement(t,r,o)),i&&"number"===typeof r)return e.unwrapDisallowed&&t.children?o.children.splice(r,1,...t.children):o.children.splice(r,1),r}))}}var h=r(642),m=r(97686),g=r(19540);const y={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var v=r(60444),w=r(52951);const b=r(5003),E=["http","https","mailto","tel"];function x(e){const t=(e||"").trim(),r=t.charAt(0);if("#"===r||"/"===r)return t;const n=t.indexOf(":");if(-1===n)return t;let o=-1;for(;++o<E.length;){const e=E[o];if(n===e.length&&t.slice(0,e.length).toLowerCase()===e)return t}return o=t.indexOf("?"),-1!==o&&n>o?t:(o=t.indexOf("#"),-1!==o&&n>o?t:"javascript:void(0)")}const N={}.hasOwnProperty,A=new Set(["table","thead","tbody","tfoot","tr"]);function k(e,t){const r=[];let n,o=-1;for(;++o<t.children.length;)n=t.children[o],"element"===n.type?r.push(S(e,n,o,t)):"text"===n.type?"element"===t.type&&A.has(t.tagName)&&(0,m.m)(n)||r.push(n.value):"raw"!==n.type||e.options.skipHtml||r.push(n.value);return r}function S(e,t,r,n){const i=e.options,a=void 0===i.transformLinkUri?x:i.transformLinkUri,l=e.schema,s=t.tagName,u={};let c,f=l;if("html"===l.space&&"svg"===s&&(f=p.JW,e.schema=f),t.properties)for(c in t.properties)N.call(t.properties,c)&&O(u,c,t.properties[c],e);"ol"!==s&&"ul"!==s||e.listDepth++;const d=k(e,t);"ol"!==s&&"ul"!==s||e.listDepth--,e.schema=l;const m=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},g=i.components&&N.call(i.components,s)?i.components[s]:s,y="string"===typeof g||g===o.Fragment;if(!h.isValidElementType(g))throw new TypeError("Component for name `".concat(s,"` not defined or is not renderable"));if(u.key=r,"a"===s&&i.linkTarget&&(u.target="function"===typeof i.linkTarget?i.linkTarget(String(u.href||""),t.children,"string"===typeof u.title?u.title:null):i.linkTarget),"a"===s&&a&&(u.href=a(String(u.href||""),t.children,"string"===typeof u.title?u.title:null)),y||"code"!==s||"element"!==n.type||"pre"===n.tagName||(u.inline=!0),y||"h1"!==s&&"h2"!==s&&"h3"!==s&&"h4"!==s&&"h5"!==s&&"h6"!==s||(u.level=Number.parseInt(s.charAt(1),10)),"img"===s&&i.transformImageUri&&(u.src=i.transformImageUri(String(u.src||""),String(u.alt||""),"string"===typeof u.title?u.title:null)),!y&&"li"===s&&"element"===n.type){const e=function(e){let t=-1;for(;++t<e.children.length;){const r=e.children[t];if("element"===r.type&&"input"===r.tagName)return r}return null}(t);u.checked=e&&e.properties?Boolean(e.properties.checked):null,u.index=C(n,t),u.ordered="ol"===n.tagName}var v;return y||"ol"!==s&&"ul"!==s||(u.ordered="ol"===s,u.depth=e.listDepth),"td"!==s&&"th"!==s||(u.align&&(u.style||(u.style={}),u.style.textAlign=u.align,delete u.align),y||(u.isHeader="th"===s)),y||"tr"!==s||"element"!==n.type||(u.isHeader=Boolean("thead"===n.tagName)),i.sourcePos&&(u["data-sourcepos"]=[(v=m).start.line,":",v.start.column,"-",v.end.line,":",v.end.column].map(String).join("")),!y&&i.rawSourcePos&&(u.sourcePosition=t.position),!y&&i.includeElementIndex&&(u.index=C(n,t),u.siblingCount=C(n)),y||(u.node=t),d.length>0?o.createElement(g,u,d):o.createElement(g,u)}function C(e,t){let r=-1,n=0;for(;++r<e.children.length&&e.children[r]!==t;)"element"===e.children[r].type&&n++;return n}function O(e,t,r,n){const o=(0,g.I)(n.schema,t);let i=r;null!==i&&void 0!==i&&i===i&&(Array.isArray(i)&&(i=o.commaSeparated?(0,w.A)(i):(0,v.A)(i)),"style"===o.property&&"string"===typeof i&&(i=function(e){const t={};try{b(e,r)}catch{}return t;function r(e,r){const n="-ms-"===e.slice(0,4)?"ms-".concat(e.slice(4)):e;t[n.replace(/-([a-z])/g,I)]=r}}(i)),o.space&&o.property?e[N.call(y,o.property)?y[o.property]:o.property]=i:o.attribute&&(e[o.attribute]=i))}function I(e,t){return t.toUpperCase()}const T={}.hasOwnProperty,P={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function L(e){for(const o in P)if(T.call(P,o)&&T.call(e,o)){const e=P[o];console.warn("[react-markdown] Warning: please ".concat(e.to?"use `".concat(e.to,"` instead of"):"remove"," `").concat(o,"` (see <").concat("https://github.com/remarkjs/react-markdown/blob/main/changelog.md","#").concat(e.id,"> for more info)")),delete P[o]}const t=(0,l.l)().use(s.A).use(e.remarkPlugins||[]).use(u.A,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(d,e),r=new a.T;"string"===typeof e.children?r.value=e.children:void 0!==e.children&&null!==e.children&&console.warn("[react-markdown] Warning: please pass a string as `children` (not: `".concat(e.children,"`)"));const n=t.runSync(t.parse(r),r);if("root"!==n.type)throw new TypeError("Expected a `root` node");let i=o.createElement(o.Fragment,{},k({options:e,schema:p.qy,listDepth:0},n));return e.className&&(i=o.createElement("div",{className:e.className},i)),i}L.propTypes={children:c.string,className:c.string,allowElement:c.func,allowedElements:c.arrayOf(c.string),disallowedElements:c.arrayOf(c.string),unwrapDisallowed:c.bool,remarkPlugins:c.arrayOf(c.oneOfType([c.object,c.func,c.arrayOf(c.oneOfType([c.bool,c.string,c.object,c.func,c.arrayOf(c.any)]))])),rehypePlugins:c.arrayOf(c.oneOfType([c.object,c.func,c.arrayOf(c.oneOfType([c.bool,c.string,c.object,c.func,c.arrayOf(c.any)]))])),sourcePos:c.bool,rawSourcePos:c.bool,skipHtml:c.bool,includeElementIndex:c.bool,transformLinkUri:c.oneOfType([c.func,c.bool]),linkTarget:c.oneOfType([c.func,c.string]),transformImageUri:c.func,components:c.object};var R=r(51851),j=r(19912),$=r(49841),H=r.n($);function M(e){if(!e)return null;var t=e;return t.dataset.code&&t.classList.contains("copied")?t:t.parentElement?M(t.parentElement):null}function _(e){var t=e=>{var t=M(e.target);t&&(t.classList.add("active"),H()(t.dataset.code,(function(){setTimeout((()=>{t.classList.remove("active")}),2e3)})))};(0,o.useEffect)((()=>{var r,n;return null==(r=e.current)||r.removeEventListener("click",t,!1),null==(n=e.current)||n.addEventListener("click",t,!1),()=>{var r;null==(r=e.current)||r.removeEventListener("click",t,!1)}}),[e])}var B=r(51623),F=["prefixCls","className","source","style","disableCopy","skipHtml","onScroll","onMouseOver","pluginsFilter","rehypeRewrite","wrapperElement","warpperElement"];const z=o.forwardRef(((e,t)=>{var{prefixCls:r="wmde-markdown wmde-markdown-color",className:a,source:l,style:s,disableCopy:u=!1,skipHtml:c=!0,onScroll:p,onMouseOver:f,pluginsFilter:d,wrapperElement:h={},warpperElement:m={}}=e,g=(0,i.A)(e,F),y=o.useRef(null);(0,o.useImperativeHandle)(t,(()=>(0,n.A)({},e,{mdp:y})),[y,e]);var v=(r||"")+" "+(a||"");_(y);var w=[...g.rehypePlugins||[]],b={allowElement:(e,t,r)=>g.allowElement?g.allowElement(e,t,r):/^[A-Za-z0-9]+$/.test(e.tagName)};c&&w.push(j.A);var E=[...g.remarkPlugins||[],R.A],x=(0,n.A)({},m,h);return(0,B.jsx)("div",(0,n.A)({ref:y,onScroll:p,onMouseOver:f},x,{className:v,style:s,children:(0,B.jsx)(L,(0,n.A)({},b,g,{skipHtml:c,rehypePlugins:d?d("rehype",w):w,remarkPlugins:d?d("remark",E):E,children:l||""}))}))}));var D=r(2289);const U="\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",q="A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",Q=new RegExp("^[^"+q+"]*["+U+"]"),W=new RegExp("^[^"+U+"]*["+q+"]");var Y=r(2500),Z=r(57733);function J(e){const t=function(e){const t=String(e||"");return Q.test(t)?"rtl":W.test(t)?"ltr":"neutral"}(e);return"neutral"===t?void 0:t}function V(e){const t="element"===e.type&&e.properties&&"string"===typeof e.properties.dir?e.properties.dir.toLowerCase():void 0;return"auto"===t||"ltr"===t||"rtl"===t?t:void 0}var X=r(69997),G=r(67696);const K=(0,G.A)("operator",{unknown:function(e){throw new Error("Unknown operator `"+e.operator+"`")},invalid:function(e,t,r){return(0,X.i)(t,r.property)},handlers:{"=":function(e,t,r){return Boolean((0,X.i)(t,r.property)&&t.properties&&ee(t.properties[r.property],r)===e.value)},"~=":function(e,t,r){const n=t.properties&&t.properties[r.property];return!r.commaSeparated&&n&&"object"===typeof n&&e.value&&n.includes(e.value)||(0,X.i)(t,r.property)&&ee(n,r)===e.value},"|=":function(e,t,r){const n=ee(t.properties&&t.properties[r.property],r);return Boolean((0,X.i)(t,r.property)&&e.value&&(n===e.value||n.slice(0,e.value.length)===e.value&&"-"===n.charAt(e.value.length)))},"^=":function(e,t,r){return Boolean((0,X.i)(t,r.property)&&t.properties&&e.value&&ee(t.properties[r.property],r).slice(0,e.value.length)===e.value)},"$=":function(e,t,r){return Boolean((0,X.i)(t,r.property)&&t.properties&&e.value&&ee(t.properties[r.property],r).slice(-e.value.length)===e.value)},"*=":function(e,t,r){return Boolean((0,X.i)(t,r.property)&&t.properties&&e.value&&ee(t.properties[r.property],r).includes(e.value))}}});function ee(e,t){return"boolean"===typeof e?t.attribute:Array.isArray(e)?(t.commaSeparated?w.A:v.A)(e):String(e)}function te(e,t){return function(r,n){let o=ne(r,"tag");const i=ne(null===n||void 0===n?"*":n,"range"),a=[];let l=-1;for(;++l<i.length;){const r=i[l].toLowerCase();if(!t&&"*"===r)continue;let n=-1;const s=[];for(;++n<o.length;)if(e(o[n].toLowerCase(),r)){if(!t)return o[n];a.push(o[n])}else s.push(o[n]);o=s}return t?a:void 0}}te((function(e,t){return"*"===t||e===t||e.includes(t+"-")}),!0);const re=te((function(e,t){const r=e.split("-"),n=t.split("-");let o=0,i=0;if("*"!==n[i]&&r[o]!==n[i])return!1;for(o++,i++;i<n.length;)if("*"!==n[i]){if(!r[o])return!1;if(r[o]!==n[i]){if(1===r[o].length)return!1;o++}else o++,i++}else i++;return!0}),!0);te((function(e,t){let r=t;for(;;){if("*"===r||e===r)return!0;let t=r.lastIndexOf("-");if(t<0)return!1;"-"===r.charAt(t-2)&&(t-=2),r=r.slice(0,t)}}),!1);function ne(e,t){const r=e&&"string"===typeof e?[e]:e;if(!r||"object"!==typeof r||!("length"in r))throw new Error("Invalid "+t+" `"+r+"`, expected non-empty string");return r}const oe=new Set([9,10,12,13,32]),ie="0".charCodeAt(0),ae="9".charCodeAt(0);var le=r(43585);function se(e){return function(e){const t=e[0],r=e[1]-1;if(r<0&&t<=0)return le.falseFunc;if(-1===t)return e=>e<=r;if(0===t)return e=>e===r;if(1===t)return r<0?le.trueFunc:e=>e>=r;const n=Math.abs(t),o=(r%n+n)%n;return t>1?e=>e>=r&&e%n===o:e=>e<=r&&e%n===o}(function(e){if("even"===(e=e.trim().toLowerCase()))return[2,0];if("odd"===e)return[2,1];let t=0,r=0,n=i(),o=a();if(t<e.length&&"n"===e.charAt(t)&&(t++,r=n*(null!==o&&void 0!==o?o:1),l(),t<e.length?(n=i(),l(),o=a()):n=o=0),null===o||t<e.length)throw new Error("n-th rule couldn't be parsed ('".concat(e,"')"));return[r,n*o];function i(){return"-"===e.charAt(t)?(t++,-1):("+"===e.charAt(t)&&t++,1)}function a(){const r=t;let n=0;for(;t<e.length&&e.charCodeAt(t)>=ie&&e.charCodeAt(t)<=ae;)n=10*n+(e.charCodeAt(t)-ie),t++;return t===r?null:n}function l(){for(;t<e.length&&oe.has(e.charCodeAt(t));)t++}}(e))}const ue=se.default||se,ce=(0,G.A)("name",{unknown:function(e){if(e.name)throw new Error("Unknown pseudo-selector `"+e.name+"`");throw new Error("Unexpected pseudo-element or empty pseudo-class")},invalid:function(){throw new Error("Invalid pseudo-selector")},handlers:{any:de,"any-link":function(e,t){return("a"===t.tagName||"area"===t.tagName||"link"===t.tagName)&&(0,X.i)(t,"href")},blank:function(e,t){return!ge(t,(function(e){return"element"===e.type||"text"===e.type&&!(0,m.m)(e)}))},checked:function(e,t){if("input"===t.tagName||"menuitem"===t.tagName)return Boolean(t.properties&&("checkbox"===t.properties.type||"radio"===t.properties.type)&&(0,X.i)(t,"checked"));if("option"===t.tagName)return(0,X.i)(t,"selected");return!1},dir:function(e,t,r,n,o){return o.direction===e.value},disabled:fe,empty:function(e,t){return!ge(t,(function(e){return"element"===e.type||"text"===e.type}))},enabled:function(e,t){return!fe(e,t)},"first-child":function(e,t,r,n,o){return ye(o,e),0===o.elementIndex},"first-of-type":function(e,t,r,n,o){return ye(o,e),0===o.typeIndex},has:function(e,t,r,n,o){const i={...o,found:!1,shallow:!1,one:!0,scopeElements:[t],results:[],rootQuery:Ee(e.value)};return xe(i,{type:"root",children:t.children}),i.results.length>0},lang:function(e,t,r,n,o){return""!==o.language&&void 0!==o.language&&re(o.language,(0,w.q)(e.value)).length>0},"last-child":function(e,t,r,n,o){return ye(o,e),Boolean(o.elementCount&&o.elementIndex===o.elementCount-1)},"last-of-type":function(e,t,r,n,o){return ye(o,e),"number"===typeof o.typeIndex&&"number"===typeof o.typeCount&&o.typeIndex===o.typeCount-1},matches:de,not:function(e,t,r,n,o){return!de(e,t,r,n,o)},"nth-child":function(e,t,r,n,o){const i=ve(e);return ye(o,e),"number"===typeof o.elementIndex&&i(o.elementIndex)},"nth-last-child":function(e,t,r,n,o){const i=ve(e);return ye(o,e),Boolean("number"===typeof o.elementCount&&"number"===typeof o.elementIndex&&i(o.elementCount-o.elementIndex-1))},"nth-of-type":function(e,t,r,n,o){const i=ve(e);return ye(o,e),"number"===typeof o.typeIndex&&i(o.typeIndex)},"nth-last-of-type":function(e,t,r,n,o){const i=ve(e);return ye(o,e),"number"===typeof o.typeCount&&"number"===typeof o.typeIndex&&i(o.typeCount-1-o.typeIndex)},"only-child":function(e,t,r,n,o){return ye(o,e),1===o.elementCount},"only-of-type":function(e,t,r,n,o){return ye(o,e),1===o.typeCount},optional:function(e,t){return!me(e,t)},"read-only":function(e,t,r,n,o){return!he(e,t,r,n,o)},"read-write":he,required:me,root:function(e,t,r,n,o){return Boolean((!n||"root"===n.type)&&o.schema&&("html"===o.schema.space||"svg"===o.schema.space)&&("html"===t.tagName||"svg"===t.tagName))},scope:function(e,t,r,n,o){return o.scopeElements.includes(t)}}});function pe(e,t,r,n,o){const i=e.pseudos;let a=-1;for(;++a<i.length;)if(!ce(i[a],t,r,n,o))return!1;return!0}function fe(e,t){return("button"===t.tagName||"input"===t.tagName||"select"===t.tagName||"textarea"===t.tagName||"optgroup"===t.tagName||"option"===t.tagName||"menuitem"===t.tagName||"fieldset"===t.tagName)&&(0,X.i)(t,"disabled")}function de(e,t,r,n,o){const i={...o,found:!1,shallow:!1,one:!0,scopeElements:[t],results:[],rootQuery:Ee(e.value)};return xe(i,t),i.results[0]===t}function he(e,t,r,n,o){return"input"===t.tagName||"textarea"===t.tagName?!(0,X.i)(t,"readOnly")&&!(0,X.i)(t,"disabled"):Boolean(o.editableOrEditingHost)}function me(e,t){return("input"===t.tagName||"textarea"===t.tagName||"select"===t.tagName)&&(0,X.i)(t,"required")}function ge(e,t){const r=e.children;let n=-1;for(;++n<r.length;)if(t(r[n]))return!0;return!1}function ye(e,t){if(e.shallow)throw new Error("Cannot use `:"+t.name+"` without parent")}function ve(e){let t=e._cachedFn;return t||(t=ue(e.value),e._cachedFn=t),t}function we(e,t,r,n,o){return Boolean((!e.tagName||function(e,t){return"*"===e.tagName||e.tagName===t.tagName}(e,t))&&(!e.classNames||function(e,t){const r=t.properties.className||[];let n=-1;if(e.classNames)for(;++n<e.classNames.length;)if(!r.includes(e.classNames[n]))return!1;return!0}(e,t))&&(!e.id||function(e,t){return Boolean(t.properties&&t.properties.id===e.id)}(e,t))&&(!e.attrs||function(e,t,r){const n=e.attrs;let o=-1;for(;++o<n.length;)if(!K(n[o],t,(0,g.I)(r,n[o].name)))return!1;return!0}(e,t,o.schema))&&(!e.pseudos||pe(e,t,r,n,o)))}pe.needsIndex=["any","first-child","first-of-type","last-child","last-of-type","matches","not","nth-child","nth-last-child","nth-of-type","nth-last-of-type","only-child","only-of-type"];const be=[];function Ee(e){return null===e?{type:"selectors",selectors:[]}:"ruleSet"===e.type?{type:"selectors",selectors:[e]}:e}function xe(e,t){t&&Ne(e,[],t,void 0,void 0)}function Ne(e,t,r,n,o){let i={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};const a=function(e,t){const r=e.schema,n=e.language,o=e.direction,i=e.editableOrEditingHost;let a;if("element"===t.type&&t.properties){const n=t.properties.xmlLang||t.properties.lang,o=t.properties.type||"text",i=V(t);void 0!==n&&null!==n&&(e.language=String(n)),r&&"html"===r.space?("true"===t.properties.contentEditable&&(e.editableOrEditingHost=!0),"svg"===t.tagName&&(e.schema=p.JW),"rtl"===i?a=i:"ltr"===i||"auto"!==i&&"html"===t.tagName||"auto"!==i&&"input"===t.tagName&&"tel"===o?a="ltr":"auto"!==i&&"bdi"!==t.tagName||("textarea"===t.tagName?a=J((0,Y.d)(t)):"input"!==t.tagName||"email"!==o&&"search"!==o&&"tel"!==o&&"text"!==o?(0,f.YR)(t,(function(e){return"text"===e.type?(a=J(e.value),a?Z.dc:void 0):e===t||"element"!==e.type||"bdi"!==e.tagName&&"script"!==e.tagName&&"style"!==e.tagName&&"textare"!==e.tagName&&!V(e)?void 0:Z._Z})):a=t.properties.value?J(t.properties.value):"ltr"),a&&(e.direction=a)):e.editableOrEditingHost&&(e.editableOrEditingHost=!1)}return function(){e.schema=r,e.language=n,e.direction=o,e.editableOrEditingHost=i}}(e,r);return"element"===r.type&&(i=function(e,t,r,n,o){const i={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};let a=-1;for(;++a<t.length;){const l=t[a];if(e.one&&e.found)break;if(e.shallow&&l.rule.rule)throw new Error("Expected selector without nesting");if(we(l.rule,r,n,o,e)){const t=l.rule.rule;if(t){const e={type:"ruleSet",rule:t};ke(i,"+"===t.nestingOperator?"adjacentSibling":"~"===t.nestingOperator?"generalSibling":">"===t.nestingOperator?"directChild":"descendant",e)}else e.found=!0,e.results.includes(r)||e.results.push(r)}null===l.rule.nestingOperator?ke(i,"descendant",l):"~"===l.rule.nestingOperator&&ke(i,"generalSibling",l)}return i}(e,Ae(t,e.rootQuery.selectors),r,n,o)),!("children"in r)||e.shallow||e.one&&e.found||function(e,t,r){const n=Ae(t.descendant,t.directChild);let o,i=-1;const a={count:0,types:new Map},l={count:0,types:new Map};for(;++i<r.children.length;)Se(a,r.children[i]);i=-1;for(;++i<r.children.length;){const t=r.children[i],s="element"===t.type?t.tagName.toUpperCase():void 0;if(e.elementIndex=l.count,e.typeIndex=s&&l.types.get(s)||0,e.elementCount=a.count,e.typeCount=s?a.types.get(s):0,"children"in t){const t=Ne(e,Ae(n,o),r.children[i],i,r);o=Ae(t.generalSibling,t.adjacentSibling)}if(e.one&&e.found)break;Se(l,r.children[i])}}(e,i,r),a(),i}function Ae(e,t){return e&&t&&e.length>0&&t.length>0?[...e,...t]:e&&e.length>0?e:t&&t.length>0?t:be}function ke(e,t,r){const n=e[t];n?n.push(r):e[t]=[r]}function Se(e,t){if("element"===t.type){const r=t.tagName.toUpperCase(),n=(e.types.get(r)||0)+1;e.count++,e.types.set(r,n)}}const Ce=new(r(52825).u);function Oe(e){if("string"!==typeof e)throw new TypeError("Expected `string` as selector, not `"+e+"`");return Ce.parse(e)}function Ie(e,t,r){return{rootQuery:Ee(Oe(e)),results:[],scopeElements:t?"root"===t.type?t.children:[t]:[],one:!1,shallow:!1,found:!1,schema:"svg"===r?p.JW:p.qy,language:void 0,direction:"ltr",editableOrEditingHost:!1,typeIndex:void 0,elementIndex:void 0,typeCount:void 0,elementCount:void 0}}Ce.registerAttrEqualityMods("~","|","^","$","*"),Ce.registerSelectorPseudos("any","matches","not","has"),Ce.registerNestingOperators(">","+","~");const Te=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((t=>{"text"===t.type?e+=t.value:"element"===t.type&&t.children&&Array.isArray(t.children)&&(e+=Te(t.children))})),e},Pe=e=>{const{selector:t,rewrite:r}=e||{};return e=>{if(r&&"function"===typeof r)if(t&&"string"===typeof t){const n=function(e,t,r){const n=Ie(e,t,r);return xe(n,t||void 0),n.results}(t,e);n&&n.length>0&&(0,f.YR)(e,n,((e,t,n)=>{r(e,t,n)}))}else(0,f.YR)(e,((e,t,n)=>{r(e,t,n)}))}},Le=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,n=arguments.length>1?arguments[1]:void 0;for(;n<e.length;)if(n++,t){const r=e[n];if(r&&r.value&&""!==r.value.replace(/(\n|\s)/g,"")||e[n]&&"element"===e[n].type)return r.tagName===t?r:void 0}else{const t=e[n];if(!t||"element"===t.type)return;if("text"===t.type&&""!==t.value.replace(/(\n|\s)/g,""))return;if(t.type&&/^(comment|raw)$/gi.test(t.type)){if(t.value&&!/^rehype:/.test(t.value.replace(/^(\s+)?<!--(.*?)-->/,"$2")||""))return;if(r){if(Le(e,n,"pre",r))return;return t.value=(t.value||"").replace(/^(\n|\s)+/,""),t}return t.value=(t.value||"").replace(/^(\n|\s)+/,""),t}}},Re=e=>{let{value:t=""}=e;const r=function(){return((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/([^?=&]+)(=([^&]*))/g)||[]).reduce(((e,t)=>(e[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),e)),{})}(t.replace(/^<!--(.*?)-->/,"$1").replace(/^rehype:/,""));return Object.keys(r).forEach((e=>{"true"===r[e]&&(r[e]=!0),"false"===r[e]&&(r[e]=!1),"string"!==typeof r[e]||/^0/.test(r[e])||isNaN(+r[e])||(r[e]=+r[e])})),r},je=(e,t,r)=>"string"===r?{...e,"data-config":JSON.stringify({...t,rehyp:!0})}:"attr"===r?{...e,...t}:{...e,"data-config":{...t,rehyp:!0}},$e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{properties:t="data",codeBlockParames:r=!0}=e;return e=>{(0,f.YR)(e,"element",((e,n,o)=>{if(r&&"pre"===e.tagName&&e&&Array.isArray(e.children)&&o&&Array.isArray(o.children)&&o.children.length>1){const r=e.children[0];if(r&&"code"===r.tagName&&"number"===typeof n){const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;for(;t>-1;){if(t--,!e[t])return;if(e[t]&&e[t].value&&""!==e[t].value.replace(/(\n|\s)/g,"")||"text"!==e[t].type){if(!/^rehype:/.test(e[t].value)||"comment"!==e[t].type)return;return e[t]}}}(o.children,n);if(i){const n=Re(i);Object.keys(n).length>0&&(e.properties={...e.properties,"data-type":"rehyp"},r.properties=je(r.properties,n,t))}}}if(/^(em|strong|b|a|i|p|pre|kbd|blockquote|h(1|2|3|4|5|6)|code|table|img|del|ul|ol)$/.test(e.tagName)&&o&&Array.isArray(o.children)&&"number"===typeof n){const i=Le(o.children,n,"",r);if(i){const r=Re(i);Object.keys(r).length>0&&(e.properties=je(e.properties,r,t))}}}))}};var He=function(e){return void 0===e&&(e={}),e=>{(0,f.YR)(e,(e=>{"element"===e.type&&"code"===e.tagName&&e.data&&e.data.meta&&(e.properties=(0,n.A)({},e.properties,{"data-meta":String(e.data.meta)}))}))}},Me=r(25408),_e=r(236),Be=r(54465),Fe={type:"element",tagName:"svg",properties:{className:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",ariaHidden:"true"},children:[{type:"element",tagName:"path",children:[],properties:{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"}}]};var ze=[Me.A,_e.A,Be.A];const De=o.forwardRef(((e,t)=>{var r,o,i,a=[He,[D.Ay,{ignoreMissing:!0}],...ze,[Pe,{rewrite:(o=null!=(r=e.disableCopy)&&r,i=e.rehypeRewrite,(e,t,r)=>{if("element"===e.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var a=e.children&&e.children[0];a&&a.properties&&"true"===a.properties.ariaHidden&&(a.properties=(0,n.A)({class:"anchor"},a.properties),a.children=[Fe])}if("element"===e.type&&"pre"===e.tagName&&!o){var l=Te(e.children);e.children.push((void 0===(s=l)&&(s=""),{type:"element",tagName:"div",properties:{class:"copied","data-code":s},children:[{type:"element",tagName:"svg",properties:{className:"octicon-copy",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"},children:[]},{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"},children:[]}]},{type:"element",tagName:"svg",properties:{className:"octicon-check",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"},children:[]}]}]}))}var s;i&&i(e,t,r)})}],[$e,{properties:"attr"}],...e.rehypePlugins||[]];return(0,B.jsx)(z,(0,n.A)({},e,{rehypePlugins:a,ref:t}))}))},43585:e=>{e.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}},52825:(e,t,r)=>{"use strict";var n=r(56928),o=r(68025),i=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];this.pseudos[o]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];delete this.pseudos[o]}return this},e.prototype.registerNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];this.pseudos[o]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];delete this.pseudos[o]}return this},e.prototype.registerNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];this.ruleNestingOperators[o]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];delete this.ruleNestingOperators[o]}return this},e.prototype.registerAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];this.attrEqualityMods[o]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var o=n[r];delete this.attrEqualityMods[o]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(e){return n.parseCssSelector(e,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(e){return o.renderEntity(e).trim()},e}();t.u=i},56928:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(89844);t.parseCssSelector=function(e,t,r,o,i,a){var l=e.length,s="";function u(r,o){var i="";for(t++,s=e.charAt(t);t<l;){if(s===r)return t++,i;if("\\"===s){t++;var a=void 0;if((s=e.charAt(t))===r)i+=r;else if(void 0!==(a=o[s]))i+=a;else{if(n.isHex(s)){var u=s;for(t++,s=e.charAt(t);n.isHex(s);)u+=s,t++,s=e.charAt(t);" "===s&&(t++,s=e.charAt(t)),i+=String.fromCharCode(parseInt(u,16));continue}i+=s}}else i+=s;t++,s=e.charAt(t)}return i}function c(){var r="";for(s=e.charAt(t);t<l;){if(n.isIdent(s))r+=s;else{if("\\"!==s)return r;if(++t>=l)throw Error("Expected symbol but end of file reached.");if(s=e.charAt(t),n.identSpecialChars[s])r+=s;else{if(n.isHex(s)){var o=s;for(t++,s=e.charAt(t);n.isHex(s);)o+=s,t++,s=e.charAt(t);" "===s&&(t++,s=e.charAt(t)),r+=String.fromCharCode(parseInt(o,16));continue}r+=s}}t++,s=e.charAt(t)}return r}function p(){s=e.charAt(t);for(var r=!1;" "===s||"\t"===s||"\n"===s||"\r"===s||"\f"===s;)r=!0,t++,s=e.charAt(t);return r}function f(){var r=d();if(!r)return null;var n=r;for(s=e.charAt(t);","===s;){if(t++,p(),"selectors"!==n.type&&(n={type:"selectors",selectors:[r]}),!(r=d()))throw Error('Rule expected after ",".');n.selectors.push(r)}return n}function d(){p();var r={type:"ruleSet"},n=h();if(!n)return null;for(var o=r;n&&(n.type="rule",o.rule=n,o=n,p(),s=e.charAt(t),!(t>=l||","===s||")"===s));)if(i[s]){var a=s;if(t++,p(),!(n=h()))throw Error('Rule expected after "'+a+'".');n.nestingOperator=a}else(n=h())&&(n.nestingOperator=null);return r}function h(){for(var i=null;t<l;)if("*"===(s=e.charAt(t)))t++,(i=i||{}).tagName="*";else if(n.isIdentStart(s)||"\\"===s)(i=i||{}).tagName=c();else if("."===s)t++,((i=i||{}).classNames=i.classNames||[]).push(c());else if("#"===s)t++,(i=i||{}).id=c();else if("["===s){t++,p();var d={name:c()};if(p(),"]"===s)t++;else{var h="";if(o[s]&&(h=s,t++,s=e.charAt(t)),t>=l)throw Error('Expected "=" but end of file reached.');if("="!==s)throw Error('Expected "=" but "'+s+'" found.');d.operator=h+"=",t++,p();var m="";if(d.valueType="string",'"'===s)m=u('"',n.doubleQuotesEscapeChars);else if("'"===s)m=u("'",n.singleQuoteEscapeChars);else if(a&&"$"===s)t++,m=c(),d.valueType="substitute";else{for(;t<l&&"]"!==s;)m+=s,t++,s=e.charAt(t);m=m.trim()}if(p(),t>=l)throw Error('Expected "]" but end of file reached.');if("]"!==s)throw Error('Expected "]" but "'+s+'" found.');t++,d.value=m}((i=i||{}).attrs=i.attrs||[]).push(d)}else{if(":"!==s)break;t++;var g=c(),y={name:g};if("("===s){t++;var v="";if(p(),"selector"===r[g])y.valueType="selector",v=f();else{if(y.valueType=r[g]||"string",'"'===s)v=u('"',n.doubleQuotesEscapeChars);else if("'"===s)v=u("'",n.singleQuoteEscapeChars);else if(a&&"$"===s)t++,v=c(),y.valueType="substitute";else{for(;t<l&&")"!==s;)v+=s,t++,s=e.charAt(t);v=v.trim()}p()}if(t>=l)throw Error('Expected ")" but end of file reached.');if(")"!==s)throw Error('Expected ")" but "'+s+'" found.');t++,y.value=v}((i=i||{}).pseudos=i.pseudos||[]).push(y)}return i}return function(){var r=f();if(t<l)throw Error('Rule expected but "'+e.charAt(t)+'" found.');return r}()}},68025:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(89844);t.renderEntity=function e(t){var r="";switch(t.type){case"ruleSet":for(var o=t.rule,i=[];o;)o.nestingOperator&&i.push(o.nestingOperator),i.push(e(o)),o=o.rule;r=i.join(" ");break;case"selectors":r=t.selectors.map(e).join(", ");break;case"rule":t.tagName&&(r="*"===t.tagName?"*":n.escapeIdentifier(t.tagName)),t.id&&(r+="#"+n.escapeIdentifier(t.id)),t.classNames&&(r+=t.classNames.map((function(e){return"."+n.escapeIdentifier(e)})).join("")),t.attrs&&(r+=t.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+n.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+n.escapeIdentifier(e.name)+e.operator+n.escapeStr(e.value)+"]":"["+n.escapeIdentifier(e.name)+"]"})).join("")),t.pseudos&&(r+=t.pseudos.map((function(t){return t.valueType?"selector"===t.valueType?":"+n.escapeIdentifier(t.name)+"("+e(t.value)+")":"substitute"===t.valueType?":"+n.escapeIdentifier(t.name)+"($"+t.value+")":"numeric"===t.valueType?":"+n.escapeIdentifier(t.name)+"("+t.value+")":":"+n.escapeIdentifier(t.name)+"("+n.escapeIdentifier(t.value)+")":":"+n.escapeIdentifier(t.name)})).join(""));break;default:throw Error('Unknown entity type: "'+t.type+'".')}return r}},89844:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},t.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},t.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},t.escapeIdentifier=function(e){for(var r=e.length,n="",o=0;o<r;){var i=e.charAt(o);if(t.identSpecialChars[i])n+="\\"+i;else if("_"===i||"-"===i||i>="A"&&i<="Z"||i>="a"&&i<="z"||0!==o&&i>="0"&&i<="9")n+=i;else{var a=i.charCodeAt(0);if(55296===(63488&a)){var l=e.charCodeAt(o++);if(55296!==(64512&a)||56320!==(64512&l))throw Error("UCS-2(decode): illegal sequence");a=((1023&a)<<10)+(1023&l)+65536}n+="\\"+a.toString(16)+" "}o++}return n},t.escapeStr=function(e){for(var r,n=e.length,o="",i=0;i<n;){var a=e.charAt(i);'"'===a?a='\\"':"\\"===a?a="\\\\":void 0!==(r=t.strReplacementsRev[a])&&(a=r),o+=a,i++}return'"'+o+'"'},t.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},t.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},t.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},t.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}},36543:e=>{var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,n=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,s=/^\s+|\s+$/g,u="";function c(e){return e?e.replace(s,u):u}e.exports=function(e,s){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];s=s||{};var p=1,f=1;function d(e){var t=e.match(r);t&&(p+=t.length);var n=e.lastIndexOf("\n");f=~n?e.length-n:f+e.length}function h(){var e={line:p,column:f};return function(t){return t.position=new m(e),w(),t}}function m(e){this.start=e,this.end={line:p,column:f},this.source=s.source}m.prototype.content=e;var g=[];function y(t){var r=new Error(s.source+":"+p+":"+f+": "+t);if(r.reason=t,r.filename=s.source,r.line=p,r.column=f,r.source=e,!s.silent)throw r;g.push(r)}function v(t){var r=t.exec(e);if(r){var n=r[0];return d(n),e=e.slice(n.length),r}}function w(){v(n)}function b(e){var t;for(e=e||[];t=E();)!1!==t&&e.push(t);return e}function E(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var r=2;u!=e.charAt(r)&&("*"!=e.charAt(r)||"/"!=e.charAt(r+1));)++r;if(r+=2,u===e.charAt(r-1))return y("End of comment missing");var n=e.slice(2,r-2);return f+=2,d(n),e=e.slice(r),f+=2,t({type:"comment",comment:n})}}function x(){var e=h(),r=v(o);if(r){if(E(),!v(i))return y("property missing ':'");var n=v(a),s=e({type:"declaration",property:c(r[0].replace(t,u)),value:n?c(n[0].replace(t,u)):u});return v(l),s}}return w(),function(){var e,t=[];for(b(t);e=x();)!1!==e&&(t.push(e),b(t));return t}()}},86469:(e,t,r)=>{"use strict";var n=r(6102);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},98057:(e,t,r)=>{e.exports=r(86469)()},6102:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},55838:(e,t)=>{"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case l:case a:case f:case d:return e;default:switch(e=e&&e.$$typeof){case c:case u:case p:case m:case h:case s:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference"),t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=l,t.StrictMode=a,t.Suspense=f,t.SuspenseList=d,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return y(e)===u},t.isContextProvider=function(e){return y(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return y(e)===p},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===m},t.isMemo=function(e){return y(e)===h},t.isPortal=function(e){return y(e)===o},t.isProfiler=function(e){return y(e)===l},t.isStrictMode=function(e){return y(e)===a},t.isSuspense=function(e){return y(e)===f},t.isSuspenseList=function(e){return y(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===a||e===f||e===d||e===g||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===r||void 0!==e.getModuleId)},t.typeOf=y},642:(e,t,r)=>{"use strict";e.exports=r(55838)},5003:(e,t,r)=>{var n=r(36543);function o(e,t){var r,o=null;if(!e||"string"!==typeof e)return o;for(var i,a,l=n(e),s="function"===typeof t,u=0,c=l.length;u<c;u++)i=(r=l[u]).property,a=r.value,s?t(i,a,r):a&&(o||(o={}),o[i]=a);return o}e.exports=o,e.exports.default=o}}]);
//# sourceMappingURL=4549.3ea8093b.chunk.js.map