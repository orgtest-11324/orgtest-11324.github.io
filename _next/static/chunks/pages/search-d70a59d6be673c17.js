(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{755:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(4566)}])},4566:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return l},default:function(){return d}});var r=t(5893),u=t(7294),s=t(9008),i=t(1163),c=t(5360),o=t(1336),f=t.n(o),a=t(8019),l=!0;function d(n){var e=n.config,t=n.post,o=n.indexing,l=(0,i.useRouter)(),d=(0,u.useState)(""),_=d[0],h=d[1],p=(0,u.useState)([]),x=p[0],g=p[1],v=f().Index.load(JSON.parse(o));return(0,u.useLayoutEffect)((function(){if(l.isReady){var n=l.query.keyword||"";h(n)}}),[l]),(0,u.useEffect)((function(){if(""!==_.trim()){var n=v.search(_);console.log({post:t,index:v,result:n});var e=n.map((function(n){return n.ref})),r=t.filter((function(n){return e.includes(n.slug)}));console.log(r),g(r)}}),[_]),(0,r.jsxs)(c.Z,{config:e,children:[(0,r.jsx)(s.default,{children:(0,r.jsxs)("title",{children:["search:",_]})}),(0,r.jsxs)("h3",{children:["\uac80\uc0c9\uacb0\uacfc: ",x.length,"\uac74"]}),(0,r.jsx)(a.p,{children:x.map((function(n){return(0,r.jsx)(a.p.Item,{post:n},n.slug)}))})]})}}},function(n){n.O(0,[409,803,360,774,888,179],(function(){return e=755,n(n.s=e);var e}));var e=n.O();_N_E=e}]);