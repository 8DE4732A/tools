"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8785],{98785:(e,t,n)=>{function r(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,{asn1:()=>s});const i={keywords:r("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:r("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:r("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:r("current deprecated mandatory obsolete"),tags:r("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:r("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:r("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:r("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0};function s(e){var t,n=e.keywords||i.keywords,r=e.cmipVerbs||i.cmipVerbs,s=e.compareTypes||i.compareTypes,a=e.status||i.status,E=e.tags||i.tags,I=e.storage||i.storage,o=e.modifier||i.modifier,T=e.accessTypes||i.accessTypes,S=e.multiLineStrings||i.multiLineStrings,u=!1!==e.indentStatements,l=/[\|\^]/;function A(e,i){var u,A=e.next();if('"'==A||"'"==A)return i.tokenize=(u=A,function(e,t){for(var n,r=!1,i=!1;null!=(n=e.next());){if(n==u&&!r){var s=e.peek();s&&("b"!=(s=s.toLowerCase())&&"h"!=s&&"o"!=s||e.next()),i=!0;break}r=!r&&"\\"==n}return(i||!r&&!S)&&(t.tokenize=null),"string"}),i.tokenize(e,i);if(/[\[\]\(\){}:=,;]/.test(A))return t=A,"punctuation";if("-"==A&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(A))return e.eatWhile(/[\w\.]/),"number";if(l.test(A))return e.eatWhile(l),"operator";e.eatWhile(/[\w\-]/);var N=e.current();return n.propertyIsEnumerable(N)?"keyword":r.propertyIsEnumerable(N)?"variableName":s.propertyIsEnumerable(N)?"atom":a.propertyIsEnumerable(N)?"comment":E.propertyIsEnumerable(N)?"typeName":I.propertyIsEnumerable(N)||o.propertyIsEnumerable(N)||T.propertyIsEnumerable(N)?"modifier":"variableName"}function N(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function p(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new N(r,t,n,null,e.context)}function c(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{name:"asn1",startState:function(){return{tokenize:null,context:new N(-2,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var r=n.context;if(e.sol()&&(null==r.align&&(r.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;t=null;var i=(n.tokenize||A)(e,n);if("comment"==i)return i;if(null==r.align&&(r.align=!0),";"!=t&&":"!=t&&","!=t||"statement"!=r.type)if("{"==t)p(n,e.column(),"}");else if("["==t)p(n,e.column(),"]");else if("("==t)p(n,e.column(),")");else if("}"==t){for(;"statement"==r.type;)r=c(n);for("}"==r.type&&(r=c(n));"statement"==r.type;)r=c(n)}else t==r.type?c(n):u&&(("}"==r.type||"top"==r.type)&&";"!=t||"statement"==r.type&&"newstatement"==t)&&p(n,e.column(),"statement");else c(n);return n.startOfLine=!1,i},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"--"}}}}}}]);
//# sourceMappingURL=8785.6155b651.chunk.js.map