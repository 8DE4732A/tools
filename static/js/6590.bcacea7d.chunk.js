"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6590],{86590:(e,n,s)=>{s.r(n),s.d(n,{default:()=>u});var a=s(22687),t=s(69383),r=s(63316),i=s.n(r),l=s(10720),c=s(93505),d=s(53572),o=s(51623),h='# This is a TOML document.\n\ntitle = "TOML Example"\n\n[owner]\nname = "Tom Preston-Werner"\ndob = 1979-05-27T07:32:00-08:00 # First class dates\n\n[database]\nserver = "192.168.1.1"\nports = [ 8000, 8001, 8002 ]\nconnection_max = 5000\nenabled = true\n\n[servers]\n\n  # Indentation (tabs and/or spaces) is allowed but not required\n  [servers.alpha]\n  ip = "10.0.0.1"\n  dc = "eqdc10"\n\n  [servers.beta]\n  ip = "10.0.0.2"\n  dc = "eqdc10"\n\n[clients]\ndata = [ ["gamma", "delta"], [1, 2] ]\n\n# Line breaks are OK when inside arrays\nhosts = [\n  "alpha",\n  "omega"\n]';function u(e){var[n,s]=(0,a.useState)(),[r,u]=(0,a.useState)(),[x,p]=(0,a.useState)();return(0,a.useEffect)((()=>{try{var e=i().parse(n||"");u(""),p(JSON.stringify(e,null,2))}catch(s){s instanceof Error&&u(s.message)}}),[n]),(0,o.jsxs)(t.mO,{children:[(0,o.jsx)(t._Y,{title:"TOML",extra:(0,o.jsxs)(a.Fragment,{children:[n&&(0,o.jsx)(t.i8,{value:n}),(0,o.jsx)(t.$n,{onClick:()=>s(h),children:"Sample"})]}),children:(0,o.jsx)(t.BY,{height:"calc(100vh - 87px)",extensions:[c.Tg.define(d.toml)],value:n,onChange:e=>s(e)})}),(0,o.jsx)(t._Y,{title:"Result JSON",extra:x&&(0,o.jsx)(t.i8,{value:x}),children:(0,o.jsx)(t.BY,{height:"calc(100vh - 87px)",extensions:[(0,l.json)()],readOnly:!0,value:x})}),r&&(0,o.jsx)(t.x$,{children:r})]})}}}]);
//# sourceMappingURL=6590.bcacea7d.chunk.js.map