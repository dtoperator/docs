"use strict";(self.webpackChunkdto_documentation=self.webpackChunkdto_documentation||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:1},c="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"A DTO is a telecom operator on the blockchain that allows you to get your own number or get a pool of numbers with a readable prefix.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/dtoperator/docs/tree/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"DTO Deployments",permalink:"/docs/dto-deployments"}},s={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A DTO is a telecom operator on the blockchain that allows you to get your own number or get a pool of numbers with a readable prefix."),(0,a.kt)("p",null,'Top-level prefixes such as "dto" belong to a smart contract called Registrar, which controls the creation of number ranges and obtaining a number in the right range with the right prefix, such as "eth". '),(0,a.kt)("p",null,"The number allows you to communicate and use it as a vcard, and will be a full alias wallet address in any supported network."),(0,a.kt)("p",null,'To get your unique number, you just need to specify the set of digits you like and make a payment in the amount set by the registrar of the prefix, for example 0.1 ETH for the prefix "dto" per year. The number can be any length from 1 to 10 digits.'),(0,a.kt)("p",null,"Number is an NFT token, the ERC-721 standard on the Ethereum blockchain. Your NFT ID is your number with the prefix ID used in the Registrar smart contract."),(0,a.kt)("p",null,"The PublicStorage contract is used to store the data belonging to the number. It stores information about all specified wallets in other networks. We can also specify our real phone number, avatar and social networks."))}f.isMDXComponent=!0}}]);