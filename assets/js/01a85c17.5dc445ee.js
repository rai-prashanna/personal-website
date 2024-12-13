"use strict";(self.webpackChunkrai_prashanna_github_io=self.webpackChunkrai_prashanna_github_io||[]).push([[209],{5028:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>y,Ki:()=>k,kJ:()=>b,x:()=>l,e7:()=>u,J_:()=>f,Gx:()=>_});var n=a(6540),s=a(9532),i=a(6803),r=a(4848);function l(){var e;const t=(0,i.A)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}const o=n.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(o.Provider,{value:i,children:t})}function u(){const e=(0,n.useContext)(o);if(null===e)throw new s.dV("BlogPostProvider");return e}var m=a(6025),d=a(4586);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a})}:{}}function b(e){const{siteConfig:t}=(0,d.A)(),{withBaseUrl:a}=(0,m.hH)(),{metadata:{blogDescription:n,blogTitle:s,permalink:i}}=e,r=""+t.url+i;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:s,description:n,blogPost:e.items.map((e=>function(e,t,a){var n,s;const{assets:i,frontMatter:r,metadata:l}=e,{date:o,title:c,description:u,lastUpdatedAt:m}=l,d=null!=(n=i.image)?n:r.image,b=null!=(s=r.keywords)?s:[],f=""+t.url+l.permalink,x=m?g(m):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:c,name:c,description:u,datePublished:o},x?{dateModified:x}:{},h(l.authors),p(d,a,c),b?{keywords:b}:{})}(e.content,t,a)))}}function f(){var e,t;const a=l(),{assets:n,metadata:s}=u(),{siteConfig:i}=(0,d.A)(),{withBaseUrl:r}=(0,m.hH)(),{date:o,title:c,description:b,frontMatter:f,lastUpdatedAt:x}=s,j=null!=(e=n.image)?e:f.image,v=null!=(t=f.keywords)?t:[],N=x?g(x):void 0,C=""+i.url+s.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":C,mainEntityOfPage:C,url:C,headline:c,name:c,description:b,datePublished:o},N?{dateModified:N}:{},h(s.authors),p(j,r,c),v?{keywords:v}:{},{isPartOf:{"@type":"Blog","@id":""+i.url+a.blogBasePath,name:a.blogTitle}})}function x(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var v=a(5527),N=a(8774),C=a(1682),A=a(9169);function _(e){const{pathname:t}=(0,v.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,A.ys)(e.permalink,t))}(e,t)))),[e,t])}function k(e){const t=(0,C.$z)(e,(e=>""+new Date(e.date).getFullYear())),a=Object.entries(t);return a.reverse(),a}function y(e){let{items:t,ulClassName:a,liClassName:n,linkClassName:s,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:n,children:(0,r.jsx)(N.A,{isNavLink:!0,to:e.permalink,className:s,activeClassName:i,children:e.title})},e.permalink)))})}},9809:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(8587),s=a(6540),i=a(4164),r=a(3172),l=a(4581),o=a(1312),c=a(5028),u=a(6342),m=a(1928),d=a(4848);function g(e){let{year:t,yearGroupHeadingClassName:a,children:n}=e;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(m.A,{as:"h3",className:a,children:t}),n]})}function h(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:n}=e;if((0,u.p)().blog.sidebar.groupByYear){const e=(0,c.Ki)(t);return(0,d.jsx)(d.Fragment,{children:e.map((e=>{let[t,s]=e;return(0,d.jsx)(g,{year:t,yearGroupHeadingClassName:a,children:(0,d.jsx)(n,{items:s})},t)}))})}return(0,d.jsx)(n,{items:t})}const p=(0,s.memo)(h),b="sidebar_GnOS",f="sidebarItemTitle_aARK",x="sidebarItemList_a8Ne",j="sidebarItem_Otbb",v="sidebarItemLink_OBo2",N="sidebarItemLinkActive_guiV",C="yearGroupHeading_JJC_",A=e=>{let{items:t}=e;return(0,d.jsx)(c.OU,{items:t,ulClassName:(0,i.A)(x,"clean-list"),liClassName:j,linkClassName:v,linkActiveClassName:N})};function _(e){let{sidebar:t}=e;const a=(0,c.Gx)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,i.A)(b,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,i.A)(f,"margin-bottom--md"),children:t.title}),(0,d.jsx)(p,{items:a,ListComponent:A,yearGroupHeadingClassName:C})]})})}const k=(0,s.memo)(_);var y=a(5600);const P="yearGroupHeading_Tx8f",O=e=>{let{items:t}=e;return(0,d.jsx)(c.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,c.Gx)(t.items);return(0,d.jsx)(p,{items:a,ListComponent:O,yearGroupHeadingClassName:P})}function B(e){return(0,d.jsx)(y.GX,{component:w,props:e})}const G=(0,s.memo)(B);function U(e){let{sidebar:t}=e;const a=(0,l.l)();return null!=t&&t.items.length?"mobile"===a?(0,d.jsx)(G,{sidebar:t}):(0,d.jsx)(k,{sidebar:t}):null}const L=["sidebar","toc","children"];function T(e){const{sidebar:t,toc:a,children:s}=e,l=(0,n.A)(e,L),o=t&&t.items.length>0;return(0,d.jsx)(r.A,Object.assign({},l,{children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(U,{sidebar:t}),(0,d.jsx)("main",{className:(0,i.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:s}),a&&(0,d.jsx)("div",{className:"col col--2",children:a})]})})}))}},5487:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(6540);var n=a(4164),s=a(1312);const i=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(1213),l=a(7559),o=a(9809),c=a(8362),u=a(1928);const m={tag:"tag_tbrL"};var d=a(4848);function g(e){let{letterEntry:t}=e;return(0,d.jsxs)("article",{children:[(0,d.jsx)(u.A,{as:"h2",id:t.letter,children:t.letter}),(0,d.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,d.jsx)("li",{className:m.tag,children:(0,d.jsx)(c.A,Object.assign({},e))},e.permalink)))}),(0,d.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,d.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,d.jsx)(g,{letterEntry:e},e.letter)))})}var p=a(8954);function b(e){let{tags:t,sidebar:a}=e;const s=i();return(0,d.jsxs)(r.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,d.jsx)(r.be,{title:s}),(0,d.jsx)(p.A,{tag:"blog_tags_list"}),(0,d.jsxs)(o.A,{sidebar:a,children:[(0,d.jsx)(u.A,{as:"h1",children:s}),(0,d.jsx)(h,{tags:t})]})]})}},8362:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(4164),s=a(8774);const i={tag:"tag_QDqo",tagRegular:"tagRegular_RTiO",tagWithCount:"tagWithCount_mElv"};var r=a(4848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}}}]);