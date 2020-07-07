(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(155)),s={id:"regression",title:"Regression Testing",sidebar_label:"Regression Testing"},o={id:"regression",isDocsHomePage:!1,title:"Regression Testing",description:"Regression Testing",source:"@site/docs/05_REGRESSION.md",permalink:"/netsage-grafana-configs/docs/regression",editUrl:"https://github.com/netsage-project/netsage-grafana-configs/edit/1.5.0/docs/05_REGRESSION.md",sidebar_label:"Regression Testing",sidebar:"someSidebar",previous:{title:"Wizzy",permalink:"/netsage-grafana-configs/docs/wizzy"},next:{title:"Docusaurus",permalink:"/netsage-grafana-configs/docs/documentation"}},c=[{value:"Install Cypress",id:"install-cypress",children:[]},{value:"Setup Dashboard",id:"setup-dashboard",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"Travis",id:"travis",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"regression-testing"},"Regression Testing"),Object(i.b)("h2",{id:"install-cypress"},"Install Cypress"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn install \n")),Object(i.b)("p",null,"or "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install \n")),Object(i.b)("p",null,"After which the binary should be install in node_modules/.bin/"),Object(i.b)("h2",{id:"setup-dashboard"},"Setup Dashboard"),Object(i.b)("p",null,"You will need the dashboard to be up and running.  please bring it up via ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d ")," and import the dashboards and datasources with wizzy"),Object(i.b)("h2",{id:"running-tests"},"Running Tests"),Object(i.b)("p",null,"The regression tests extracts the credentials from environment variables so you should run it with the following set:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'CYPRESS_GRAFANA_USER="CHANGE_ME" CYPRESS_GRAFANA_PASSWORD="CHANGEME" ./node_modules/.bin/cypress open\n')),Object(i.b)("p",null,"Every test should start with issuing the ",Object(i.b)("inlineCode",{parentName:"p"},"cy.login()")," command follow by a typical test."),Object(i.b)("p",null,"Please see this working ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../cypress/integration/integration/flow_analysis.js"}),"example")),Object(i.b)("p",null,"If you fail to do so, the environment_validation check will let you know."),Object(i.b)("h2",{id:"travis"},"Travis"),Object(i.b)("p",null,"To run the regression on travis please create a custom build and paste in the content of travis-regression.yaml."),Object(i.b)("p",null,"In the future, we'll have a regular cron that will execute these tests on a regular basis. "))}u.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(g,o(o({ref:t},l),{},{components:n})):a.a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);