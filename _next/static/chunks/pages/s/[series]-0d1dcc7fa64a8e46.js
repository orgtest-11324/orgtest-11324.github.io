(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{2256:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/s/[series]",function(){return r(2817)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},l=r(6273),c=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),i=a.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,h=i.as,p=e.children,g=e.replace,b=e.shallow,m=e.scroll,v=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,x=o(s.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],S=a.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);a.default.useEffect((function(){var e=w&&r&&l.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,o=u[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,w,v,r,n]);var k={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:a}))}(e,n,d,h,g,b,m,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var $="undefined"!==typeof v?v:n&&n.locale,C=n&&n.isLocaleDomain&&l.getDomainLocale(h,$,n&&n.locales,n&&n.domainLocales);k.href=C||l.addBasePath(l.addLocale(h,$,n&&n.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(t?t.current:null),2),g=p[0],b=p[1],m=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),s.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:r}))}),[n,g,r,d]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&b(t.current)}),[t]),[m,d]};var i=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},4373:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(5893),o=r(8025),i=r(2469),a=r(5281),l=r(1664),c=r(7294),s=(0,a.zo)("a",{display:"inline-flex",alignItems:"center",padding:"2px",fontSize:"$fontSizes$1",color:"$btn-text","&>svg":{width:"24px",height:"24px"}});function u(e){var t=e.identifier;switch(t){case"discord":return(0,n.jsx)(i.dsO,{});case"github":return(0,n.jsx)(i.wGg,{});case"instagram":return(0,n.jsx)(i.a5v,{});case"linkedin":return(0,n.jsx)(i.ipJ,{});case"notion":return(0,n.jsx)(i.oDT,{});case"twitter":return(0,n.jsx)(i.S3E,{});default:return(0,n.jsx)(n.Fragment,{children:t})}}var f=function(e){return(0,c.useMemo)((function(){return(0,n.jsx)(l.default,{href:e.href,passHref:!0,children:(0,n.jsx)(s,{title:e.title,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u,{identifier:e.identifier})})})}),[e])};var d=function(e){var t=e.social;return"undefined"===typeof t?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)("div",{"data-id":"socialButtons",children:t.map((function(e){var t=e.identifier,r=e.name,o=e.url;return(0,n.jsx)(f,{identifier:t,title:r,href:o},t)}))})},h=(0,a.jG)("light",{colors:{},shadows:{},space:{},fonts:{}}),p=(0,a.jG)("dark",{colors:{"fg-default":"#c9d1d9","canvas-default":"#0d1117","border-default":"#303643","btn-text":"#c9d1d9","btn-bg":"#21262d","btn-border":"rgba(240,246,252,0.1)","btn-hover-bg":" #30363d","btn-hover-border":"#8b949e"},shadows:{"btn-shadow":"0 0 transparent","btn-inset-shadow":"0 0 transparent"},space:{},fonts:{}}),g=r(9008);function b(e,t){window.localStorage.setItem(e,t)}function m(e){var t=(0,c.useState)(e.light),r=t[0],n=t[1],o=(0,c.useState)("light"),i=o[0],a=o[1];(0,c.useLayoutEffect)((function(){switch(e.default){case"light":l("light");break;case"dark":l("dark");break;case"system":l(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");break;default:var t=(r="theme",window.localStorage.getItem(r));null===t?b("theme","light"):l(t)}var r}),[]);var l=function(t){n("light"===t?e.light:e.dark),a(t),b("theme",t)};return{theme:r,themeString:i,changeTheme:l,toggleTheme:function(){var t=r===e.light?"dark":"light";l(t)}}}var v=(0,a.zo)("div",{color:"$fg-default",background:"$canvas-default",transition:"background 0.25s ease, color 0.30s ease",minHeight:"100vh",height:"fit-content"}),y=(0,a.zo)("div",{margin:"auto",maxWidth:"70ch"}),x=(0,a.zo)(y,{}),j=(0,a.zo)(y,{minHeight:"100vh"});var w=function(e){var t,r=e.children,a=e.config,l=m({default:a.theme,light:h,dark:p}),c=l.theme,s=l.themeString,u=l.toggleTheme;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g.default,{children:[(0,n.jsx)("title",{children:a.title}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),a.subtitle&&(0,n.jsx)("meta",{name:"description",content:a.subtitle}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:a.baseurl}),(0,n.jsx)("meta",{property:"og:title",content:a.title}),a.avatar.enabled&&(0,n.jsx)("meta",{property:"og:image",content:a.avatar.src}),a.subtitle&&(0,n.jsx)("meta",{property:"og:description",content:a.subtitle}),(0,n.jsx)("meta",{property:"og:site_name",content:a.title}),(0,n.jsx)("meta",{property:"og:locale",content:a.locale.languageCode}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)(v,{className:c,children:[(0,n.jsxs)(x,{children:[(0,n.jsx)("aside",{children:(null===(t=a.avatar)||void 0===t?void 0:t.enabled)&&(0,n.jsx)("img",{src:"/".concat(a.avatar.src),alt:"avatar",width:"64"})}),"auto"===a.theme&&(0,n.jsx)(o.zx,{content:"icon",onClick:u,children:"light"===s?(0,n.jsx)(i.NWY,{}):(0,n.jsx)(i.kLh,{})}),(0,n.jsx)("h1",{children:a.title||""}),(0,n.jsx)("p",{children:a.subtitle}),(0,n.jsx)(d,{social:a.social})]}),(0,n.jsx)(j,{children:r})]})]})}},8025:function(e,t,r){"use strict";r.d(t,{d2:function(){return f},zx:function(){return u},__:function(){return s}});var n=r(5893),o=r(5281),i=r(1664);r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}var c=(0,o.zo)("a",{display:"inline-block",padding:"0 7px",fontSize:"$1",fontWeight:"500",lineHeight:"18px",whiteSpace:"nowrap",borderRadius:"2em",backgroundColor:"$btn-bg",color:"$btn-text",border:"1px solid transparent",borderColor:"$btn-border",boxShadow:"$btn-shadow, $btn-inset-shadow","&:hover":{backgroundColor:"$btn-hover-bg",borderColor:"$btn-hover-border"}});var s=function(e){return(0,n.jsx)(i.default,{href:e.href,passHref:!0,children:(0,n.jsx)(c,l({},e))})},u=(0,o.zo)("button",{position:"relative",display:"inline-block",fontSize:"$3",fontWeight:"600",lineHeight:"20px",whiteSpace:"nowrap",verticalAlign:"middle",cursor:"pointer",userSelect:"none",border:"1px solid",borderRadius:"6px",appearance:"none",backgroundColor:"$btn-bg",color:"$btn-text",borderColor:"$btn-border",boxShadow:"$btn-shadow, $btn-inset-shadow","&:hover":{backgroundColor:"$btn-hover-bg",borderColor:"$btn-hover-border"},"& svg":{display:"inline-block",verticalAlign:"middle"},variants:{content:{text:{height:"32px"},icon:{width:"32px",height:"32px"},icontext:{padding:"5px 16px","& svg":{marginRight:"8px"}}}}}),f=(0,o.zo)("article",{lineHeight:"1.75",padding:"3em 1em",fontFamily:"$pretendard",color:"$fg-default","h1,h2,h3,h4,h5,h6":{margin:".3em 0 .1em"},"p,ul,ol":{marginBottom:".2em"},h1:{fontSize:"$8",fontWeight:"600"},h2:{fontSize:"$7",fontWeight:"500"},h3:{fontSize:"$6",fontWeight:"500"},h4:{fontSize:"$5",fontWeight:"500"},h5:{fontSize:"$4",fontWeight:"500"},h6:{fontSize:"$3",fontWeight:"500"},p:{display:"inline-block",fontSize:"$3",fontWeight:"400"},a:{color:"hsl(210 100% 66.1%)","&:hover":{textDecorationLine:"underline"}},strong:{},em:{},del:{},br:{},ul:{listStyleType:"disc",listStylePosition:"inside"},"ul ul":{listStyleType:"circle",paddingInlineStart:"em"},"ul ul ul":{listStyleType:"square"},ol:{listStyleType:"unset",listStylePosition:"inside"},"ol ol":{listStyleType:"unset"},li:{padding:"auto"},hr:{margin:"1em 0"},pre:{},blockquote:{display:"block",margin:".5em 0",padding:"0.2em 0.8em",borderLeft:"5px solid gray","&>*":{margin:"0"}},code:{display:"block",margin:".5em 0",padding:".5em 1em",borderRadius:"6px",color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto","&>*":{margin:"0"}},img:{display:"block",width:"100%",borderRadius:"5px",margin:".5em 0"}})},2817:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a},default:function(){return l}});var n=r(5893),o=r(4373),i=r(9008),a=!0;function l(e){var t=e.config,r=e.series;return(0,n.jsxs)(o.Z,{config:t,children:[(0,n.jsx)(i.default,{children:(0,n.jsxs)("title",{children:["series:",r]})}),"Series page"]})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[409,774,888,179],(function(){return t=2256,e(e.s=t);var t}));var t=e.O();_N_E=t}]);