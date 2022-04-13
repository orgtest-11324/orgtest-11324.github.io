"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{1128:function(e,t,n){n.d(t,{Z:function(){return O}});var i=n(5893),r=n(7573),o=n(2469),a=n(7745),l=(0,a.zo)("form",{height:"36px",display:"flex",gap:"$1",input:{borderRadius:"6px",borderColor:"$btn-border",width:"100%",height:"36px",paddingX:"$2"},button:{width:"36px",height:"36px"}});function d(e){return(0,i.jsxs)(l,{action:"/search/",children:[(0,i.jsx)("input",{type:"text",name:"keyword"}),(0,i.jsx)(r.zx,{content:"icon",children:(0,i.jsx)(o._Ve,{})})]})}var s=n(8347);var c=function(e){var t=e.social;return"undefined"===typeof t?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)("div",{"data-id":"socialButtons",children:t.map((function(e){var t=e.identifier,n=e.name,r=e.url;return(0,i.jsx)(s.Z,{identifier:t,title:n,href:r},t)}))})},h=n(1664),g=(0,a.zo)("header",{width:"100%",color:"$fg-default",paddingTop:"$3",paddingBottom:"$1",display:"flex",variants:{responsive:{1:{gap:"1ch",alignItems:"center",textAlign:"center",flexDirection:"column"},2:{gap:"2ch",textAlign:"start",alignItems:"flex-start",flexDirection:"row"}}}}),u=(0,a.zo)("div",{flex:"none",width:"96px",height:"96px",borderRadius:"29px",overflow:"hidden","& > img":{width:"100%",height:"100%"}}),f=(0,a.zo)("div",{flex:"auto",display:"flex",flexDirection:"column",minHeight:"96px",paddingY:"$1",overflow:"hidden","& > h1":{flex:"none",marginBottom:"$2",fontSize:"$6",fontWeight:"700"},"& > p":{flex:"auto",fontSize:"$2"},"& > div":{flex:"none"}});function p(e){var t,n=e.config;return(0,i.jsxs)(g,{responsive:{"@initial":"1","@bp1":"2"},children:[(0,i.jsx)(u,{children:(null===(t=n.avatar)||void 0===t?void 0:t.enabled)&&(0,i.jsx)("img",{src:"/".concat(n.avatar.src),alt:"avatar",width:"64"})}),(0,i.jsxs)(f,{children:[(0,i.jsx)("h1",{children:(0,i.jsx)(h.default,{href:"/",children:(0,i.jsx)("a",{children:n.title||""})})}),(0,i.jsx)("p",{children:n.subtitle}),(0,i.jsx)(c,{social:n.social})]})]})}var b=(0,a.jG)("light",{colors:{},shadows:{},space:{},fonts:{}}),x=(0,a.jG)("dark",{colors:{"fg-default":"#c9d1d9","canvas-default":"#0d1117","border-default":"#303643","btn-text":"#c9d1d9","btn-bg":"#21262d","btn-border":"rgba(240,246,252,0.1)","btn-hover-bg":" #30363d","btn-hover-border":"#8b949e"},shadows:{"btn-shadow":"0 0 transparent","btn-inset-shadow":"0 0 transparent"},space:{},fonts:{}}),m=n(9008),v=n(7294);function j(e,t){window.localStorage.setItem(e,t)}function y(e){var t=(0,v.useState)(e.light),n=t[0],i=t[1],r=(0,v.useState)("light"),o=r[0],a=r[1];(0,v.useLayoutEffect)((function(){switch(e.default){case"light":l("light");break;case"dark":l("dark");break;case"system":l(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");break;default:var t=(n="theme",window.localStorage.getItem(n));null===t?j("theme","light"):l(t)}var n}),[]);var l=function(t){i("light"===t?e.light:e.dark),a(t),j("theme",t)};return{theme:n,themeString:o,changeTheme:l,toggleTheme:function(){var t=n===e.light?"dark":"light";l(t)}}}var w=(0,a.zo)("div",{minHeight:"100vh",height:"fit-content",color:"$fg-default",background:"$canvas-default",transition:"background 0.25s ease, color 0.30s ease"}),$=(0,a.zo)("div",{margin:"auto",padding:"$3",maxWidth:"70ch",position:"relative"}),k=(0,a.zo)($,{}),S=(0,a.zo)($,{}),z=(0,a.zo)("div",{position:"absolute",top:"2ch",right:"2ch"});var O=function(e){var t=e.children,n=e.config,a=y({default:n.theme,light:b,dark:x}),l=a.theme,s=a.themeString,c=a.toggleTheme;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.default,{children:[(0,i.jsx)("title",{children:n.title}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),n.subtitle&&(0,i.jsx)("meta",{name:"description",content:n.subtitle}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:n.baseurl}),(0,i.jsx)("meta",{property:"og:title",content:n.title}),n.avatar.enabled&&(0,i.jsx)("meta",{property:"og:image",content:n.avatar.src}),n.subtitle&&(0,i.jsx)("meta",{property:"og:description",content:n.subtitle}),(0,i.jsx)("meta",{property:"og:site_name",content:n.title}),(0,i.jsx)("meta",{property:"og:locale",content:n.locale.languageCode}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)(w,{className:l,children:[(0,i.jsxs)(k,{children:[(0,i.jsx)(p,{config:n}),"auto"===n.theme&&(0,i.jsx)(z,{children:(0,i.jsx)(r.zx,{content:"icon",onClick:c,"aria-label":"Use dark mode","aria-pressed":"light"!==s,children:"light"===s?(0,i.jsx)(o.NWY,{}):(0,i.jsx)(o.kLh,{})})})]}),(0,i.jsxs)(S,{children:[(0,i.jsx)(d,{}),t]})]})]})}},7573:function(e,t,n){n.d(t,{AN:function(){return p},d2:function(){return h},zx:function(){return c},__:function(){return s}});var i=n(5893),r=n(7745),o=n(1664);n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}var d=(0,r.zo)("a",{display:"inline-block",padding:"0 7px",fontSize:"$1",fontWeight:"500",lineHeight:"18px",whiteSpace:"nowrap",borderRadius:"2em",backgroundColor:"$btn-bg",color:"$btn-text",border:"1px solid transparent",borderColor:"$btn-border",boxShadow:"$btn-shadow, $btn-inset-shadow","&:hover":{backgroundColor:"$btn-hover-bg",borderColor:"$btn-hover-border"}});var s=function(e){return(0,i.jsx)(o.default,{href:e.href,passHref:!0,children:(0,i.jsx)(d,l({},e))})},c=(0,r.zo)("button",{position:"relative",display:"inline-block",fontSize:"$3",fontWeight:"600",lineHeight:"20px",whiteSpace:"nowrap",verticalAlign:"middle",cursor:"pointer",userSelect:"none",border:"1px solid",borderRadius:"6px",appearance:"none",backgroundColor:"$btn-bg",color:"$btn-text",borderColor:"$btn-border",boxShadow:"$btn-shadow, $btn-inset-shadow","&:hover":{backgroundColor:"$btn-hover-bg",borderColor:"$btn-hover-border"},"& svg":{display:"inline-block",verticalAlign:"middle"},variants:{content:{text:{height:"32px"},icon:{width:"32px",height:"32px"},icontext:{padding:"5px 16px","& svg":{marginRight:"8px"}}}}}),h=(0,r.zo)("article",{lineHeight:"1.75",padding:"3em 1em",fontFamily:"$pretendard",color:"$fg-default","h1,h2,h3,h4,h5,h6":{margin:".3em 0 .1em"},"p,ul,ol":{marginBottom:".2em"},h1:{fontSize:"$8",fontWeight:"600"},h2:{fontSize:"$7",fontWeight:"500"},h3:{fontSize:"$6",fontWeight:"500"},h4:{fontSize:"$5",fontWeight:"500"},h5:{fontSize:"$4",fontWeight:"500"},h6:{fontSize:"$3",fontWeight:"500"},p:{display:"inline-block",fontSize:"$3",fontWeight:"400"},a:{color:"hsl(210 100% 66.1%)","&:hover":{textDecorationLine:"underline"}},strong:{fontWeight:"600"},em:{fontStyle:"italic"},del:{},br:{},ul:{listStyleType:"disc",listStylePosition:"inside"},"ul ul":{listStyleType:"circle",paddingInlineStart:"em"},"ul ul ul":{listStyleType:"square"},ol:{listStyleType:"unset",listStylePosition:"inside"},"ol ol":{listStyleType:"unset"},li:{padding:"auto"},hr:{margin:"1em 0"},blockquote:{display:"block",margin:".5em 0",padding:"0.2em 0.8em",borderLeft:"5px solid gray","&>*":{margin:"0"}},code:{display:"inline",padding:"0.2em 0.4em",fontSize:"85%",color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto","&>*":{margin:"0"}},pre:{margin:".5em 0",code:{height:"fit-content",padding:".5em 1em",fontSize:"100%"},"*":{display:"block"}},img:{display:"block",width:"100%",borderRadius:"5px",margin:".5em 0"}});function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){g(e,t,n[t])}))}return e}var f=(0,r.zo)("a",{display:"inline-flex",alignItems:"center",padding:"2px",fontSize:"$fontSizes$1",color:"$btn-text","&>svg":{display:"inline-block",verticalAlign:"middle"},"& + &":{marginLeft:"$1"}});function p(e){return(0,i.jsx)(o.default,{href:e.href,passHref:!0,children:(0,i.jsx)(f,u({},e))})}},8347:function(e,t,n){n.d(t,{p:function(){return c},Z:function(){return f}});var i=n(5893),r=n(7745),o=n(1664),a=n(7294),l=(0,r.zo)("li",{marginBottom:"$2",border:"1px solid $border-default",borderRadius:"6px",backgroundColor:"$btn-bg",color:"$btn-text",a:{display:"block",paddingX:"$3",paddingY:"$2"}});function d(e){return(0,i.jsx)(l,{children:(0,i.jsx)(o.default,{href:"/p/".concat(e.post.slug),children:(0,i.jsxs)("a",{children:[e.post.title,(0,i.jsx)("br",{}),e.post.date]})})})}var s=(0,r.zo)("ul",{marginY:"$3"});d.displayName="PostList.Item";var c=Object.assign(s,{Item:d}),h=n(7573),g=n(2469);function u(e){var t=e.identifier;switch(t){case"discord":return(0,i.jsx)(g.dsO,{width:"20",height:"20"});case"github":return(0,i.jsx)(g.wGg,{width:"20",height:"20"});case"instagram":return(0,i.jsx)(g.a5v,{width:"20",height:"20"});case"linkedin":return(0,i.jsx)(g.ipJ,{width:"20",height:"20"});case"notion":return(0,i.jsx)(g.oDT,{width:"20",height:"20"});case"twitter":return(0,i.jsx)(g.S3E,{width:"20",height:"20"});default:return(0,i.jsx)(i.Fragment,{children:t})}}function f(e){return(0,a.useMemo)((function(){return(0,i.jsx)(h.AN,{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(u,{identifier:e.identifier})})}),[e])}}}]);