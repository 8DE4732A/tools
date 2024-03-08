(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7415],{67415:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r={};n.r(r),n.d(r,{json:()=>O,val:()=>p});var a=n(69383),i=n(49944),o=n.n(i),s=n(93505),c=n(90147),l=n(10720),O='{\n  "app_mode": "development",\n  "paths": {\n    "data": "/home/git/grafana"\n  },\n  "server": {\n    "protocol": "http",\n    "http_port": "9999",\n    "enforce_domain": true\n  }\n}',p="# possible values : production, development\napp_mode = development\n\n[paths]\n# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\ndata = /home/git/grafana\n\n[server]\n# Protocol (http or https)\nprotocol = http\n\n# The http port  to use\nhttp_port = 9999\n\n# Redirect to correct domain if host header does not match domain\n# Prevents DNS rebinding attacks\nenforce_domain = true",f=n(51623);function u(){return(0,f.jsx)(a.Aw,{sample:r,leftProps:{title:"JSON",extensions:[(0,l.json)()],onLeftInput:e=>o().stringify(JSON.parse(e))},rightProps:{title:"INI",extensions:[s.Tg.define(c.o)],onRightInput:e=>JSON.stringify(o().parse(e),null,2)}})}},49944:(e,t,n)=>{var r=n(75721);const{hasOwnProperty:a}=Object.prototype,i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"===typeof t&&(t={section:t}),t.align=!0===t.align,t.newline=!0===t.newline,t.sort=!0===t.sort,t.whitespace=!0===t.whitespace||!0===t.align,t.platform=t.platform||"undefined"!==typeof r&&r.platform,t.bracketedArray=!1!==t.bracketedArray;const n="win32"===t.platform?"\r\n":"\n",a=t.whitespace?" = ":"=",s=[],c=t.sort?Object.keys(e).sort():Object.keys(e);let O=0;t.align&&(O=l(c.filter((t=>null===e[t]||Array.isArray(e[t])||"object"!==typeof e[t])).map((t=>Array.isArray(e[t])?"".concat(t,"[]"):t)).concat([""]).reduce(((e,t)=>l(e).length>=l(t).length?e:t))).length);let p="";const f=t.bracketedArray?"[]":"";for(const r of c){const t=e[r];if(t&&Array.isArray(t))for(const e of t)p+=l("".concat(r).concat(f)).padEnd(O," ")+a+l(e)+n;else t&&"object"===typeof t?s.push(r):p+=l(r).padEnd(O," ")+a+l(t)+n}t.section&&p.length&&(p="["+l(t.section)+"]"+(t.newline?n+n:n)+p);for(const r of s){const a=o(r,".").join("\\."),s=(t.section?t.section+".":"")+a,c=i(e[r],{...t,section:s});p.length&&c.length&&(p+=n),p+=c}return p};function o(e,t){var n=0,r=0,a=0,i=[];do{if(-1!==(a=e.indexOf(t,n))){if(n=a+t.length,a>0&&"\\"===e[a-1])continue;i.push(e.slice(r,a)),r=a+t.length}}while(-1!==a);return i.push(e.slice(r)),i}const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.bracketedArray=!1!==t.bracketedArray;const n=Object.create(null);let r=n,i=null;const s=/^\[([^\]]*)\]\s*$|^([^=]+)(=(.*))?$/i,c=e.split(/[\r\n]+/g),l={};for(const o of c){if(!o||o.match(/^\s*[;#]/)||o.match(/^\s*$/))continue;const e=o.match(s);if(!e)continue;if(void 0!==e[1]){if(i=O(e[1]),"__proto__"===i){r=Object.create(null);continue}r=n[i]=n[i]||Object.create(null);continue}const c=O(e[2]);let p;t.bracketedArray?p=c.length>2&&"[]"===c.slice(-2):(l[c]=((null===l||void 0===l?void 0:l[c])||0)+1,p=l[c]>1);const f=p?c.slice(0,-2):c;if("__proto__"===f)continue;const u=!e[3]||O(e[4]),h="true"===u||"false"===u||"null"===u?JSON.parse(u):u;p&&(a.call(r,f)?Array.isArray(r[f])||(r[f]=[r[f]]):r[f]=[]),Array.isArray(r[f])?r[f].push(h):r[f]=h}const p=[];for(const O of Object.keys(n)){if(!a.call(n,O)||"object"!==typeof n[O]||Array.isArray(n[O]))continue;const e=o(O,".");r=n;const t=e.pop(),i=t.replace(/\\\./g,".");for(const n of e)"__proto__"!==n&&(a.call(r,n)&&"object"===typeof r[n]||(r[n]=Object.create(null)),r=r[n]);r===n&&i===t||(r[i]=n[O],p.push(O))}for(const a of p)delete n[a];return n},c=e=>e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'"),l=e=>"string"!==typeof e||e.match(/[=\r\n]/)||e.match(/^\[/)||e.length>1&&c(e)||e!==e.trim()?JSON.stringify(e):e.split(";").join("\\;").split("#").join("\\#"),O=e=>{if(e=(e||"").trim(),!c(e)){let t=!1,n="";for(let r=0,a=e.length;r<a;r++){const a=e.charAt(r);if(t)-1!=="\\;#".indexOf(a)?n+=a:n+="\\"+a,t=!1;else{if(-1!==";#".indexOf(a))break;"\\"===a?t=!0:n+=a}}return t&&(n+="\\"),n.trim()}"'"===e.charAt(0)&&(e=e.slice(1,-1));try{e=JSON.parse(e)}catch{}return e};e.exports={parse:s,decode:s,stringify:i,encode:i,safe:l,unsafe:O}},10720:(e,t,n)=>{"use strict";n.r(t),n.d(t,{json:()=>O,jsonLanguage:()=>l,jsonParseLinter:()=>c});var r=n(50149),a=n(36595);const i=(0,a.pn)({String:a._A.string,Number:a._A.number,"True False":a._A.bool,PropertyName:a._A.propertyName,Null:a._A.null,",":a._A.separator,"[ ]":a._A.squareBracket,"{ }":a._A.brace}),o=r.U1.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"\u26a0 JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[i],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0});var s=n(93505);const c=()=>e=>{try{JSON.parse(e.state.doc.toString())}catch(t){if(!(t instanceof SyntaxError))throw t;const n=function(e,t){let n;return(n=e.message.match(/at position (\d+)/))?Math.min(+n[1],t.length):(n=e.message.match(/at line (\d+) column (\d+)/))?Math.min(t.line(+n[1]).from+ +n[2]-1,t.length):0}(t,e.state.doc);return[{from:n,message:t.message,severity:"error",to:n}]}return[]};const l=s.bj.define({name:"json",parser:o.configure({props:[s.Oh.add({Object:(0,s.mz)({except:/^\s*\}/}),Array:(0,s.mz)({except:/^\s*\]/})}),s.b_.add({"Object Array":s.yd})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function O(){return new s.Yy(l)}},90147:(e,t,n)=>{"use strict";n.d(t,{o:()=>a});var r=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");const a={name:"yaml",token:function(e,t){var n=e.peek(),a=t.escaped;if(t.escaped=!1,"#"==n&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(t.literal&&e.indentation()>t.keyCol)return e.skipToEnd(),"string";if(t.literal&&(t.literal=!1),e.sol()){if(t.keyCol=0,t.pair=!1,t.pairStart=!1,e.match("---"))return"def";if(e.match("..."))return"def";if(e.match(/^\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==n?t.inlinePairs++:"}"==n?t.inlinePairs--:"["==n?t.inlineList++:t.inlineList--,"meta";if(t.inlineList>0&&!a&&","==n)return e.next(),"meta";if(t.inlinePairs>0&&!a&&","==n)return t.keyCol=0,t.pair=!1,t.pairStart=!1,e.next(),"meta";if(t.pairStart){if(e.match(/^\s*(\||\>)\s*/))return t.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable";if(0==t.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(t.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(r))return"keyword"}return!t.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(t.pair=!0,t.keyCol=e.indentation(),"atom"):t.pair&&e.match(/^:\s*/)?(t.pairStart=!0,"meta"):(t.pairStart=!1,t.escaped="\\"==n,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=7415.469ad4d4.chunk.js.map