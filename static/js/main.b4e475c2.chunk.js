(this.webpackJsonpiss4=this.webpackJsonpiss4||[]).push([[0],{27:function(e,t,c){},58:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),n=c.n(s),i=c(25),r=c.n(i),j=(c(58),c(9)),l=c(87),d=c(88),h=c(52),o=c(89),b=c(15),O=c(6),m=c(90),u=c(17),x=c.n(u),p=c(32);var v=function(){return Object(a.jsxs)("div",{className:"text-center margin-top margin-bottom",children:[Object(a.jsx)(p.a,{animation:"grow",variant:"light",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(a.jsx)(p.a,{animation:"grow",variant:"light",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(a.jsx)(p.a,{animation:"grow",variant:"light",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})]})},f=c(49),C=c.n(f),g=new Date,N=Object({NODE_ENV:"production",PUBLIC_URL:"/iss4",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APIKEY:"9d05ce6e21991600d98e5945c00379bc",REACT_APP_APIPKEY:"7e2bff76f1dc639652508d49739b83a6d31873a4",REACT_APP_URL:"https://gateway.marvel.com:443/v1/public/",REACT_APP_URL_CHARS:"https://gateway.marvel.com:443/v1/public/characters/",REACT_APP_URL_COMICS:"https://gateway.marvel.com:443/v1/public/comics/",REACT_APP_URL_EVENTS:"https://gateway.marvel.com:443/v1/public/events/"}),y=N.REACT_APP_APIKEY,T=N.REACT_APP_APIPKEY,S=g.getTime();function E(){var e=C()(S+T+y);return"?ts="+S+"&apikey="+y+"&hash="+e}c(27);var P=function(){var e=Object(O.f)().search.replace("?id=",""),t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(!1),l=Object(j.a)(r,2),d=l[0],h=l[1];return Object(s.useEffect)((function(){x.a.get("https://gateway.marvel.com:443/v1/public/characters/"+e+E()).then((function(e){i(e.data.data.results[0]),h(!0)})).catch((function(e){console.log(e)}))}),[e]),d?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"profileCard",children:[Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsx)(m.a.Img,{className:"profilePic",variant:"left",src:"".concat(n.thumbnail.path,".").concat(n.thumbnail.extension)})}),Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{className:"text-center",children:n.name}),Object(a.jsx)(m.a.Text,{children:n.description})]})})]}),Object(a.jsxs)("div",{className:"profileCard",children:[Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{children:"Series"}),n.series.items.map((function(e,t){return Object(a.jsx)(m.a.Text,{children:e.name},e.name+t)}))]})}),Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{children:"Comics"}),n.comics.items.map((function(e,t){return Object(a.jsx)(m.a.Text,{children:e.name},e.name+t)}))]})})]})]}):Object(a.jsx)(v,{})},_=c(20),k=c(21),w=c(24),A=c(23),R=(c(83),c.p+"static/media/MarvelLogo.41df6f0e.png"),B=function(e){Object(w.a)(c,e);var t=Object(A.a)(c);function c(){return Object(_.a)(this,c),t.apply(this,arguments)}return Object(k.a)(c,[{key:"render",value:function(){return Object(a.jsx)("header",{children:Object(a.jsx)("img",{className:"logo",src:R,alt:R})})}}]),c}(n.a.Component),I=function(e){Object(w.a)(c,e);var t=Object(A.a)(c);function c(){return Object(_.a)(this,c),t.apply(this,arguments)}return Object(k.a)(c,[{key:"render",value:function(){return Object(a.jsx)(m.a,{id:"cardPos",bg:"dark",className:" text-center",children:Object(a.jsx)(m.a.Footer,{children:Object(a.jsx)("a",{className:"linkies",href:"http://marvel.com",children:"Data provided by Marvel. \xa9 2020 MARVEL"})})})}}]),c}(n.a.Component),L=function(){var e=Object(O.f)().search.replace("?id=",""),t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(!1),l=Object(j.a)(r,2),d=l[0],h=l[1];return Object(s.useEffect)((function(){x.a.get("https://gateway.marvel.com:443/v1/public/comics/"+e+E()).then((function(e){i(e.data.data.results[0]),h(!0)})).catch((function(e){console.log(e)}))}),[e]),d?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"profileCard",children:[Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsx)(m.a.Img,{variant:"top",src:"".concat(n.thumbnail.path,".").concat(n.thumbnail.extension)})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{children:n.title}),Object(a.jsxs)(m.a.Text,{children:["Issue# ",n.issueNumber]}),Object(a.jsx)(m.a.Text,{children:n.description})]})}),Object(a.jsx)(m.a,{children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{children:"Creators"}),n.creators.items.map((function(e,t){return Object(a.jsx)(m.a.Text,{children:e.name},e.name+t)}))]})})]})]}),Object(a.jsx)("div",{className:"profileCard",children:Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{children:"Characters"}),n.characters.items.map((function(e,t){return Object(a.jsx)(m.a.Text,{children:e.name},e.name+t)}))]})})})]}):Object(a.jsx)(v,{})},V=function(){var e=Object(O.f)().search.replace("?id=",""),t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(!1),l=Object(j.a)(r,2),d=l[0],h=l[1];return Object(s.useEffect)((function(){x.a.get("https://gateway.marvel.com:443/v1/public/events/"+e+E()).then((function(e){i(e.data.data.results[0]),h(!0)})).catch((function(e){console.log(e)}))}),[e]),d?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"profileCard",children:[Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsx)(m.a.Img,{className:"profilePic",variant:"left",src:"".concat(n.thumbnail.path,".").concat(n.thumbnail.extension)})}),Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{className:"text-center",children:n.title}),Object(a.jsx)(m.a.Text,{children:n.description})]})})]}),Object(a.jsxs)("div",{className:"profileCard",children:[Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{children:"Series"}),n.series.items.map((function(e,t){return Object(a.jsx)(m.a.Text,{children:e.name},e.name+t)}))]})}),Object(a.jsx)(m.a,{className:"card-width-25",children:Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)(m.a.Title,{children:"Comics"}),n.comics.items.map((function(e,t){return Object(a.jsx)(m.a.Text,{children:e.name},e.name+t)}))]})})]})]}):Object(a.jsx)(v,{})},D=function(e){Object(w.a)(c,e);var t=Object(A.a)(c);function c(){return Object(_.a)(this,c),t.apply(this,arguments)}return Object(k.a)(c,[{key:"render",value:function(){var e=this.props.card,t=e.id,c=e.name,s=e.title,n=e.thumbnail;return Object(a.jsx)(b.b,{onClick:this.props.handleCardClick,className:"card-width-15",to:s?e.comics?"/iss4/eve?id="+t:"/iss4/com?id="+t:"/iss4/char?id="+t,children:Object(a.jsxs)(m.a,{variant:"warning",border:"none",className:"text-center bg-transparent",children:[Object(a.jsx)(m.a.Img,{variant:"top",src:"".concat(n.path,".").concat(n.extension)}),Object(a.jsx)(m.a.Body,{children:Object(a.jsx)(m.a.Title,{children:c||s})})]})})}}]),c}(n.a.Component),F=function(e){var t=e.ctype,c=e.searchValue,n=e.handleCardClick,i=c,r=Object(s.useState)([]),l=Object(j.a)(r,2),d=l[0],h=l[1],o=Object(s.useState)(!1),b=Object(j.a)(o,2),O=b[0],m=b[1],u=Object(s.useState)(!1),p=Object(j.a)(u,2),f=p[0],C=p[1],g=Object(s.useState)("No results found"),N=Object(j.a)(g,2),y=N[0],T=N[1];return Object(s.useEffect)((function(){x.a.get("https://gateway.marvel.com:443/v1/public/"+t+E(),{params:Object.assign("comics"===t?""!==i?{titleStartsWith:i}:"":""!==i?{nameStartsWith:i}:"")}).then((function(e){h(e.data.data.results),m(!0)})).catch((function(e){console.log(e),T("An unexpected error occured"),C(!0)}))}),[t,i]),O?d.length>0?Object(a.jsx)("div",{className:"resultGrid",children:d.map((function(e,t){return Object(a.jsx)(D,{card:e,handleCardClick:n},t)}))}):Object(a.jsx)("div",{className:"card custom-card",children:y}):f?Object(a.jsx)("div",{className:"card custom-card",children:y}):Object(a.jsx)(v,{})},K=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!1),r=Object(j.a)(i,2),m=r[0],u=r[1];function x(){n(document.getElementById("search").value)}function p(){u(!1)}return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(B,{}),Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(l.a,{bg:"dark",variant:"dark",id:"myNav",children:[Object(a.jsx)(l.a.Brand,{children:"Search"}),Object(a.jsx)(d.a,{action:"/",method:"get",autoComplete:"off",onSubmit:function(e){n(document.getElementById("search").value),u(!0),e.preventDefault()},children:Object(a.jsx)(h.a,{type:"text",id:"search",placeholder:"Search",className:"mr-sm-2"})}),Object(a.jsxs)(o.a,{className:"mr-auto",children:[Object(a.jsx)(b.b,{className:"linkies active",to:"/iss4/characters",id:"characters",onClick:x,children:"Characters"}),Object(a.jsx)(b.b,{className:"linkies",onClick:x,to:"/iss4/comics",id:"comics",children:"Comics"}),Object(a.jsx)(b.b,{className:"linkies",onClick:x,to:"/iss4/events?search="+c,id:"events",children:"Events"})]})]}),Object(a.jsxs)(O.c,{children:[Object(a.jsx)(O.a,{exact:!0,path:"/iss4/characters",children:Object(a.jsx)(F,{ctype:"characters",searchValue:c,handleCardClick:p})}),Object(a.jsx)(O.a,{exact:!0,path:"/iss4/comics",children:Object(a.jsx)(F,{ctype:"comics",searchValue:c,handleCardClick:p})}),Object(a.jsx)(O.a,{exact:!0,path:"/iss4/events",children:Object(a.jsx)(F,{ctype:"events",searchValue:c,handleCardClick:p})}),Object(a.jsx)(O.a,{path:"/iss4/char",children:!0===m?Object(a.jsx)(F,{ctype:"characters",searchValue:c,handleCardClick:p}):Object(a.jsx)(P,{})}),Object(a.jsx)(O.a,{path:"/iss4/com",children:!0===m?Object(a.jsx)(F,{ctype:"comics",searchValue:c,handleCardClick:p}):Object(a.jsx)(L,{})}),Object(a.jsx)(O.a,{path:"/iss4/eve",children:!0===m?Object(a.jsx)(F,{ctype:"events",searchValue:c,handleCardClick:p}):Object(a.jsx)(V,{})}),Object(a.jsx)(O.a,{exact:!0,path:"/iss4/",children:Object(a.jsx)(F,{ctype:"characters",searchValue:c,handleCardClick:p})})]})]}),Object(a.jsx)(I,{})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),U()}},[[85,1,2]]]);
//# sourceMappingURL=main.b4e475c2.chunk.js.map