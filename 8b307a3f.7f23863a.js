(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),r=(n(0),n(155)),i={id:"docker",title:"Docker Dev Guide",sidebar_label:"Docker Dev Guide"},c={id:"docker",title:"Docker Dev Guide",description:"## 1. Setting Up Your Environment ",source:"@site/docs/02_DOCKER.md",permalink:"/netsage-grafana-configs/docs/docker",editUrl:"https://github.com/netsage-project/netsage-grafana-configs/edit/1.4.0/docs/02_DOCKER.md",sidebar_label:"Docker Dev Guide",sidebar:"someSidebar",previous:{title:"Developer Guide",permalink:"/netsage-grafana-configs/docs/develop"},next:{title:"Plugin Submodules",permalink:"/netsage-grafana-configs/docs/plugin_submodules"}},l=[{value:"1. Setting Up Your Environment",id:"1-setting-up-your-environment",children:[]},{value:"2. Starting docker container for the First Time",id:"2-starting-docker-container-for-the-first-time",children:[]},{value:"3. Using the docker container",id:"3-using-the-docker-container",children:[{value:"1. Scripted Entry",id:"1-scripted-entry",children:[]},{value:"2. Manually entering the container:",id:"2-manually-entering-the-container",children:[]}]},{value:"4. Making Changes",id:"4-making-changes",children:[{value:"1. Editing the Source Code in Git and Exporting to Grafana",id:"1-editing-the-source-code-in-git-and-exporting-to-grafana",children:[]},{value:"2. Editing the Source Code in Grafana and Importing to Git",id:"2-editing-the-source-code-in-grafana-and-importing-to-git",children:[]}]},{value:"5. Advanced Docker Usage and Notes",id:"5-advanced-docker-usage-and-notes",children:[]},{value:"6. Building Image Locally",id:"6-building-image-locally",children:[]}],d={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-setting-up-your-environment"},"1. Setting Up Your Environment"),Object(r.b)("p",null,"Prepare your development system with the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Docker by following this ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"guide")),Object(r.b)("li",{parentName:"ol"},"Clone this repository using the command(s) below:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/netsage-project/netsage-grafana-configs\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Change your working directory to the git repository you just cloned:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd netsage-grafana-configs\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Pull down the submodules found in the plug-ins directory:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git submodule update --init\n")),Object(r.b)("h2",{id:"2-starting-docker-container-for-the-first-time"},"2. Starting docker container for the First Time"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Start the container")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up -d dashboard\n")),Object(r.b)("p",null,"If you need to, you can view the logs by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose logs -f \n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"-f")," allows you to follow the logs, or omit ",Object(r.b)("inlineCode",{parentName:"p"},"-f")," to simply see the current state."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Configure the datasource")),Object(r.b)("p",null,"You are now ready to configure your data source via the Grafana web interface. Go to http://localhost:3000/grafana/admin/ in your browser."),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Login with the default username ",Object(r.b)("inlineCode",{parentName:"li"},"admin")," and password ",Object(r.b)("inlineCode",{parentName:"li"},"admin")),Object(r.b)("li",{parentName:"ol"},'Change the password or hit "skip" if prompted to change password'),Object(r.b)("li",{parentName:"ol"},'Click on "Data Sources" in the Configuration menu on the left hand side'),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("em",{parentName:"li"},"netsage")," in the list of datasources"),Object(r.b)("li",{parentName:"ol"},"Enter the username and password in the ",Object(r.b)("inlineCode",{parentName:"li"},"User")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Password")," fields ",Object(r.b)("strong",{parentName:"li"},"NOTE:")," This is different from your grafana credentials"),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Save and Test"),". It should provide imediate feedback if things are working or not.")),Object(r.b)("p",null,"Assuming it worked, you can now navigate to the dashboards at http://localhost:3000/grafana and see data."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"/app")," directory is a shared directory between the VM and host system. It is the top-level of the source tree and any changes made to the files on the host system will also happen in the VM and vice-versa. "),Object(r.b)("li",{parentName:"ul"},"If you want to stop the container simply run ",Object(r.b)("inlineCode",{parentName:"li"},"docker-compose stop")),Object(r.b)("li",{parentName:"ul"},"If you want to startup the container again: ",Object(r.b)("inlineCode",{parentName:"li"},"docker-compose up -d ")),Object(r.b)("li",{parentName:"ul"},"If you want to stop the container and erase the current state you can run: ",Object(r.b)("inlineCode",{parentName:"li"},"docker-compose up -d; docker-compose rm "))),Object(r.b)("h2",{id:"3-using-the-docker-container"},"3. Using the docker container"),Object(r.b)("p",null,"To use the docker container, you can use either Method 1 (Scripted Entry) or Method 2 (Manual Entry) as mentioned below."),Object(r.b)("h3",{id:"1-scripted-entry"},"1. Scripted Entry"),Object(r.b)("p",null,"Enter the container by running the following command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"./scripts/docker_enter.sh netsage/dashboard")," on Linux / MacOS"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"./scripts/docker_enter.PS1 netsage/dashboard")," on Windows (requires powershell)")),Object(r.b)("h3",{id:"2-manually-entering-the-container"},"2. Manually entering the container:"),Object(r.b)("p",null,"Find the container id by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker ps -a \n")),Object(r.b)("p",null,"Sample output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker exec -it 08bba311b08d bash\n")),Object(r.b)("p",null,'CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                    NAMES\n08bba311b08d        netsage/dashboard:1.4.0   "/run.sh /bin/sh -c \u2026"   19 minutes ago      Up 19 minutes       0.0.0.0:3000->3000/tcp   netsage-grafana-configs_dashboard_1'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\nYou'll need the container ID which is the first column listed.\n\nSince we want a terminal inside the container we'll simply invoke the bash command on the container ID:\n\n```sh\ndocker exec -it 08bba311b08d bash\n")),Object(r.b)("p",null,"This is essentially the same work that is being done by ",Object(r.b)("inlineCode",{parentName:"p"},"docker_enter.sh"),".  We're essentially looking for a container named 'dashboard', finding the ID and attempting to run bash to drop into a shell."),Object(r.b)("h2",{id:"4-making-changes"},"4. Making Changes"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you haven't already you should make a new feature branch by running: ",Object(r.b)("inlineCode",{parentName:"em"},"git checkout -b feature/new_awesome_widget"),". You can use the tools found ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/tj/git-extras/blob/master/Commands.md#git-featurerefactorbugchore"}),"here")," which provide some shortcuts, such as ",Object(r.b)("inlineCode",{parentName:"em"},"git feature new_awesome_widget"))),Object(r.b)("p",null,"There are two ways you can make changes"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"By editing the files in git directly and exporting them to your local instance"),Object(r.b)("li",{parentName:"ol"},"By editing the configuration through Grafana and importing them into git.")),Object(r.b)("h3",{id:"1-editing-the-source-code-in-git-and-exporting-to-grafana"},"1. Editing the Source Code in Git and Exporting to Grafana"),Object(r.b)("p",null,"When you make a change to one or more of the json files under ",Object(r.b)("inlineCode",{parentName:"p"},"dashboards")," directly (for example : bandwidth-dashboard.json), you can copy it to the local grafana instance by running either ",Object(r.b)("inlineCode",{parentName:"p"},"wizzy export dashboard bandwidth-dashboard")," if you changed a single dashboard or ",Object(r.b)("inlineCode",{parentName:"p"},"wizzy export dashboards")," if you changed one or more dashboards. This command is to be run once you enter the docker container from the ",Object(r.b)("inlineCode",{parentName:"p"},"/app")," folder."),Object(r.b)("h3",{id:"2-editing-the-source-code-in-grafana-and-importing-to-git"},"2. Editing the Source Code in Grafana and Importing to Git"),Object(r.b)("p",null,"If you use grafana to edit the dashbaord(s), for example : bandwidth-dashboard, you can copy the changes back to git by running either ",Object(r.b)("inlineCode",{parentName:"p"},"wizzy import dashboard bandwidth-dashboard")," if you changed a single dashboard or ",Object(r.b)("inlineCode",{parentName:"p"},"wizzy import dashboards")," if you changed one or more dashboards. This command is to be run once you enter the docker container from the ",Object(r.b)("inlineCode",{parentName:"p"},"/app")," folder."),Object(r.b)("p",null,"Then, you would be able to see the changes when you run a ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," command where you have cloned the ",Object(r.b)("inlineCode",{parentName:"p"},"netsage-grafana-configs")," directory."),Object(r.b)("p",null,"You can find more info on using wizzy ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"04_WIZZY.md"}),"here")),Object(r.b)("h2",{id:"5-advanced-docker-usage-and-notes"},"5. Advanced Docker Usage and Notes"),Object(r.b)("p",null,"Every merge into a main release branch (ie. 1.4.0, 1.3.0, etc) commit will build a new image and replace the previous tag on docker hub. You should not have to worry about this on a day to day basis, but if someone made an architectural change, you may pull an updated version by doing the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose stop; docker-compose rm \ndocker-compose pull dashboard\n")),Object(r.b)("p",null,"If you want to pull a specific tag of the dashboard, you find all the current published tags: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/netsage/dashboard/tags"}),"here")),Object(r.b)("p",null,"Please note, that if you want to use a different version you also need to change the docker-compose.yml file to point to the correct version."),Object(r.b)("h2",{id:"6-building-image-locally"},"6. Building Image Locally"),Object(r.b)("p",null,"If you are making upgrades to grafana it's a good idea to test the changes locally."),Object(r.b)("p",null,"Notes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"docker/setup_dashboard-docker.sh")," is used to install the grafana plugins as well as the relevant wizzy version."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"docker/Dockerfile")," pins the docker version and installs any OS level packages that you would like to be available.")),Object(r.b)("p",null,"To build a new image locally, you'll be replacing the current tag with the new version built locally. In order to do so, simply run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"docker-compose build \n")),Object(r.b)("p",null,"Please keep in mind that this will replace the upstream tag. This means that when I build a new image, it will name it ",Object(r.b)("inlineCode",{parentName:"p"},"netsage/dashboard:1.4.0"),". Once you are done testing, simply do a pull again by running the following command and it will reset back to the version from docker hub. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose pull dashboard\n")))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),b=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=b(n),p=a,h=s["".concat(i,".").concat(p)]||s[p]||u[p]||r;return n?o.a.createElement(h,c({ref:t},d,{components:n})):o.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);