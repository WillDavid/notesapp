(this.webpackJsonpnotesapp=this.webpackJsonpnotesapp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(6),c=n.n(o),r=(n(13),n(7)),s=n(2),i=(n(14),n.p+"static/media/lampada.4ca41fbb.svg"),l=n(0);function d(e){var t=e.handleToggleDarkMode;return Object(l.jsxs)("div",{className:"headerStyle",children:[Object(l.jsx)("h2",{children:"Me Anota"}),Object(l.jsxs)("button",{onClick:function(){return t((function(e){return!e}))},className:"buttonDarkMode",children:[Object(l.jsx)("img",{src:i}),Object(l.jsx)("spam",{children:"Modo Escuro"})]})]})}n(16);function u(e){var t=e.handleAddNote,n=Object(a.useState)(""),o=Object(s.a)(n,2),c=o[0],r=o[1],i=Object(a.useState)(0),d=Object(s.a)(i,2);d[0],d[1];return Object(l.jsxs)("div",{className:"addNote new",children:[Object(l.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Digite uma nota...",className:"note-textarea new",onChange:function(e){140-e.target.value.length>=0&&r(e.target.value)},value:c}),Object(l.jsxs)("div",{className:"note-footer",children:[Object(l.jsxs)("small",{children:[140-c.length," Caracteres Restantes"]}),Object(l.jsx)("button",{className:"saveButton",onClick:function(){c.trim().length>0?(t(c),r("")):console.log("Digite alguma coisa")},children:"Salvar"})]})]})}n(17);var h=n.p+"static/media/trash.4cfa926f.svg";function f(e){var t=e.id,n=e.text,a=e.date,o=e.hour,c=e.handleDeleteNote,r={backgroundColor:e.color};return Object(l.jsxs)("div",{className:"note",style:r,children:[Object(l.jsx)("span",{children:n}),Object(l.jsxs)("div",{className:"note-footer",children:[Object(l.jsxs)("small",{children:[a," - ",o]}),Object(l.jsx)("img",{className:"delete-icon",src:h,onClick:function(){return c(t)}})]})]})}n(18);function j(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote;return Object(l.jsxs)("div",{className:"notes-list",children:[Object(l.jsx)(u,{handleAddNote:n}),t.map((function(e){return Object(l.jsx)(f,{id:e.id,text:e.text,date:e.date,hour:e.hour,color:e.color,handleDeleteNote:a})})).reverse()]})}var b=n(8),g=(n(19),n.p+"static/media/searchIcon.1273aebc.svg");function v(e){var t=e.handleSearchNote;return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("img",{src:g,className:"searchIcon"}),Object(l.jsx)("input",{type:"text",placeholder:"Digite para procurar...",onChange:function(e){return t(e.target.value)}})]})}function p(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),u=i[0],h=i[1],f=Object(a.useState)(!1),g=Object(s.a)(f,2),p=g[0],O=g[1];function m(){var e=Math.floor(4*Math.random()+0);return 1==e?"#f6c2d9":2==e?"#fff69b":3==e?"#a1c8e9":4==e?"#e4dae2":"#bcdfc9"}return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data")),t=JSON.parse(localStorage.getItem("darkMode"));e&&o(e),t&&O(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n)),localStorage.setItem("darkMode",JSON.stringify(p))}),[n,p]),Object(l.jsx)("div",{className:"".concat(p&&"dark-mode"),children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(d,{handleToggleDarkMode:O}),Object(l.jsx)(v,{handleSearchNote:h}),Object(l.jsx)(j,{notes:n.filter((function(e){return e.text.toLowerCase().includes(u)})),handleAddNote:function(e){var t=new Date,a={id:Object(b.a)(),text:e,date:t.toLocaleDateString(),hour:t.toLocaleTimeString("pt-BR"),color:m()},c=[].concat(Object(r.a)(n),[a]);o(c)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));o(t)}})]})})}var O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notesapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/notesapp","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(t,e)}))}}()}],[[20,1,2]]]);
//# sourceMappingURL=main.f26deb44.chunk.js.map