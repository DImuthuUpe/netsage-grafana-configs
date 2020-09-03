(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(73)),o={id:"regression",title:"Regression Testing",sidebar_label:"Regression Testing"},i={unversionedId:"regression",id:"regression",isDocsHomePage:!1,title:"Regression Testing",description:"Regression Testing",source:"@site/docs/05_REGRESSION.md",slug:"/regression",permalink:"/netsage-grafana-configs/docs/regression",editUrl:"https://github.com/netsage-project/netsage-grafana-configs/edit/1.6.0/docs/05_REGRESSION.md",version:"current",sidebar_label:"Regression Testing",sidebar:"someSidebar",previous:{title:"Wizzy",permalink:"/netsage-grafana-configs/docs/wizzy"},next:{title:"Docusaurus",permalink:"/netsage-grafana-configs/docs/documentation"}},c=[{value:"Install Cypress",id:"install-cypress",children:[]},{value:"Setup Dashboard",id:"setup-dashboard",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"Travis",id:"travis",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"regression-testing"},"Regression Testing"),Object(s.b)("h2",{id:"install-cypress"},"Install Cypress"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn install \n")),Object(s.b)("p",null,"or "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install \n")),Object(s.b)("p",null,"After which the binary should be install in node_modules/.bin/"),Object(s.b)("h2",{id:"setup-dashboard"},"Setup Dashboard"),Object(s.b)("p",null,"You will need the dashboard to be up and running.  please bring it up via ",Object(s.b)("inlineCode",{parentName:"p"},"`docker-compose up -d `")," and import the dashboards and datasources with wizzy"),Object(s.b)("h2",{id:"running-tests"},"Running Tests"),Object(s.b)("p",null,"The regression tests extracts the credentials from environment variables so you should run it with the following set:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'CYPRESS_GRAFANA_USER="CHANGE_ME" CYPRESS_GRAFANA_PASSWORD="CHANGEME" ./node_modules/.bin/cypress open\n')),Object(s.b)("p",null,"Every test should start with issuing the ",Object(s.b)("inlineCode",{parentName:"p"},"`cy.login()`")," command follow by a typical test."),Object(s.b)("p",null,"Please see this working ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/netsage-project/netsage-grafana-configs/blob/master/cypress/integration/dashboards/flow-analysis.spec.js"}),"example")),Object(s.b)("p",null,"If you fail to do so, the environment_validation check will let you know."),Object(s.b)("h2",{id:"travis"},"Travis"),Object(s.b)("p",null,"To run the regression on travis please create a custom build and paste in the content of travis-regression.yaml."),Object(s.b)("p",null,"In the future, we'll have a regular cron that will execute these tests on a regular basis. "))}u.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(o,".").concat(d)]||p[d]||b[d]||s;return n?a.a.createElement(g,i(i({ref:t},l),{},{components:n})):a.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);