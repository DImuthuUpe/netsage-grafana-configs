(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a(2),r=a(6),i=(a(0),a(73)),o={id:"develop",title:"Developer Guide",sidebar_label:"Developer Guide"},l={unversionedId:"develop",id:"develop",isDocsHomePage:!1,title:"Developer Guide",description:"Developing the NetSage Grafana Configuration",source:"@site/docs/01_DEVELOP.md",slug:"/develop",permalink:"/netsage-grafana-configs/docs/develop",editUrl:"https://github.com/netsage-project/netsage-grafana-configs/edit/1.6.0/docs/01_DEVELOP.md",version:"current",sidebar_label:"Developer Guide",sidebar:"someSidebar",next:{title:"Docker Dev Guide",permalink:"/netsage-grafana-configs/docs/docker"}},s=[{value:"Versioning",id:"versioning",children:[{value:"Types of Releases",id:"types-of-releases",children:[]},{value:"Numbering",id:"numbering",children:[]}]},{value:"Branching",id:"branching",children:[{value:"Basics",id:"basics",children:[]},{value:"Naming Conventions",id:"naming-conventions",children:[]},{value:"Making a Change",id:"making-a-change",children:[]},{value:"Handling Community Pull Requests",id:"handling-community-pull-requests",children:[]},{value:"When to Merge",id:"when-to-merge",children:[]},{value:"Example Workflow",id:"example-workflow",children:[]}]},{value:"Releasing",id:"releasing",children:[]},{value:"Grafana Plugins",id:"grafana-plugins",children:[]}],c={rightToc:s};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"developing-the-netsage-grafana-configuration"},"Developing the NetSage Grafana Configuration"),Object(i.b)("p",null,"This documents describes a number of practices related to developing the code in this repository. Specifically it covers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Versioning"),Object(i.b)("li",{parentName:"ul"},"Branching"),Object(i.b)("li",{parentName:"ul"},"Releasing")),Object(i.b)("h2",{id:"versioning"},"Versioning"),Object(i.b)("h3",{id:"types-of-releases"},"Types of Releases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Major Releases")," - These are drastic changes that fundamentally change the software and user-experience. These likely only happen every few years at most. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Minor Releases")," - These are releases that add major new functionality and can significantly change the user experience (hopefully for the better)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Patch Releases")," - These contain changes that improve the stability of the software and do not contain any new features.")),Object(i.b)("h3",{id:"numbering"},"Numbering"),Object(i.b)("p",null,"The NetSage version numbers are based on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://semver.org"}),"semantic versioning"),". Given the types of releases listed in the previous section, we need to capture the following information in our versioning scheme:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Major version")," - This indicates to which ",Object(i.b)("em",{parentName:"li"},"major release")," the software belongs. This will be a number starting at 1."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Minor version")," - This indicates to which ",Object(i.b)("em",{parentName:"li"},"minor feature enhancement release")," the software belongs. This will be a number starting at 0 for each new ",Object(i.b)("em",{parentName:"li"},"major version"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Patch version")," - This indicates to which ",Object(i.b)("em",{parentName:"li"},"bug fix release")," the software belongs. This will be a number starting at 0 for each new ",Object(i.b)("em",{parentName:"li"},"minor version"),". ")),Object(i.b)("h2",{id:"branching"},"Branching"),Object(i.b)("p",null,"The primary goal of the branching scheme is to facilitate development on multiple software versions simultaneously without adding too much overhead for developers. We aim to accomplish this goal with the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'A clearly defined branching strategy that cleanly separates code from different versions to prevent the accidental "leaking" of features and incompatible code'),Object(i.b)("li",{parentName:"ul"},"A set of tools for automating much of the process to reduce developer overhead and ensure the defined procedures are followed")),Object(i.b)("h3",{id:"basics"},"Basics"),Object(i.b)("p",null,"The following are the basic tenants of the branching strategy."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each release version currently under development has a dedicated branch named using the version number (e.g. 1.0.0, 1.0.1, 1.1.0). These branches will be referred to as ",Object(i.b)("strong",{parentName:"li"},"release branches"),"."),Object(i.b)("li",{parentName:"ul"},"Any changes that need to be made will be performed in a separate branch created from one of the release branches and named for the issue or feature being implemented (e.g. trello-1234). These will be referred to as ",Object(i.b)("strong",{parentName:"li"},"feature branches")),Object(i.b)("li",{parentName:"ul"},"When it is time for release, the release branch will be merged into master and any later release branches. Master will be tagged and the release branch will be closed. No further changes should be made to the closed release branch. A new release branch will be created for the next version and the process will repeat.")),Object(i.b)("h3",{id:"naming-conventions"},"Naming Conventions"),Object(i.b)("p",null,"The following naming conventions should be followed when naming ",Object(i.b)("strong",{parentName:"p"},"branches"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Release Branches")," - Named using the version they represent in the form of ",Object(i.b)("inlineCode",{parentName:"li"},"MAJOR.MINOR.PATCH"),". All three parts MUST be included. Examples: ",Object(i.b)("em",{parentName:"li"},"1.1.0"),", ",Object(i.b)("em",{parentName:"li"},"1.2.1"),", ",Object(i.b)("em",{parentName:"li"},"2.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Feature Branches")," - Feature branches should be named for the trello issue they represent. Examples: ",Object(i.b)("em",{parentName:"li"},"trello-1"),", ",Object(i.b)("em",{parentName:"li"},"trello-2"))),Object(i.b)("p",null,"The following naming conventions should be used when creating ",Object(i.b)("strong",{parentName:"p"},"tags")," on master:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Release Tags"),' - When a release branch is merged into master, the commit of the merger should be tagged with the letter "v" followed by the version number. The "v" is added to prevent conflicts that can occur when tags and branches have the same name in git. Examples: ',Object(i.b)("em",{parentName:"li"},"v1.1.0"),", ",Object(i.b)("em",{parentName:"li"},"v1.2.1"),", ",Object(i.b)("em",{parentName:"li"},"v2.0.0"))),Object(i.b)("h3",{id:"making-a-change"},"Making a Change"),Object(i.b)("p",null,"All of the above can seem like a lot, but in practice it shouldn't be too difficult for a developer making changes to the code. The following are generally the steps for making a change:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create an issue for the change you wish to make if it does not already exist."),Object(i.b)("li",{parentName:"ol"},"Identify the earliest release for which the change needs to be applied. This information should be in the issue. If it is not, you may want to consult with the development team. Alternatively, a good rule of thumb is to apply it to the latest open release branch since the team is generally less conservative about changes going into later releases. "),Object(i.b)("li",{parentName:"ol"},"Checkout the source code of the component that needs a change and create a new branch from the target version of the code. Examples commands are below where the target version is  X.Y.Z and trello ticket number is 1:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/netsage-project/netsage-grafana-configs\ncd netsage-grafana-configs\ngit fetch\ngit checkout X.Y.Z\ngit checkout -b trello-1\ngit push origin trello-1\n"))),Object(i.b)("li",{parentName:"ol"},"Make changes to your new branch"),Object(i.b)("li",{parentName:"ol"},"Check if the target version has had any changes since you began working on your change. If it has run ",Object(i.b)("inlineCode",{parentName:"li"},"git merge X.Y.Z")," on your feature branch. This helps avoid conflicts at pull request time. "),Object(i.b)("li",{parentName:"ol"},"Submit a pull request to merge your change back into the target version.")),Object(i.b)("p",null,"From there your pull requests can be reviewed by the development team and merged back into the code."),Object(i.b)("h3",{id:"handling-community-pull-requests"},"Handling Community Pull Requests"),Object(i.b)("p",null,"It is unreasonable to assume a community member that is not part of the day-to-day development team submitting a pull request will have intimate knowledge of our branching strategy or which version their change applies. The good news is that they do not have to have that knowledge and GitHub provides tools to get changes directed in the right place. "),Object(i.b)("p",null,"It seems likely that most pull requests from the community at large will be based off of master since that will be the latest released code. It also seems likely that pull requests may try to merge into master, which we never want. Luckily GitHub allows maintainers of the project to change the target branch of a pull request by selecting ",Object(i.b)("strong",{parentName:"p"},"Edit")," next the pull request title and then selecting the target branch from the pulldown. If the change will not merge into the desired branch, the reviewer should share that feedback with the community member."),Object(i.b)("p",null,"In summary, community generated pull requests should be merged in the same as any other pull requests, but the reviewer may need to pay extra attention to the target branch and adjust it accordingly on behalf of the submitter."),Object(i.b)("h3",{id:"when-to-merge"},"When to Merge"),Object(i.b)("p",null,"The process clearly defines that a branch is merged into both master and future release branches at release time. It is also highly recommended that future release branches periodically merge in changes from earlier open release branches to help catch conflicts early. Failure to do so can lead to surprises at release time including source code conflicts or bugs. No timetable is explicitly defined, but in general it seems good practice to never go more than a week without merging in changes from earlier releases while both are under active development."),Object(i.b)("h3",{id:"example-workflow"},"Example Workflow"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/wiki/netsage-project/netsage-grafana-configs/images/NetSage_Branch_Strategy.png",alt:"Example Branching Workflow"}))),Object(i.b)("p",null,"The diagram above shows an example of the life-cycle of the various branches. Starting from the top of the diagram you'll see we begin with two branches: the ",Object(i.b)("em",{parentName:"p"},"master")," branch and the ",Object(i.b)("em",{parentName:"p"},"1.1.0")," release branch. We also want to create a ",Object(i.b)("em",{parentName:"p"},"1.2.0")," release branch so the next major release can be developed in parallel. This branch is created from the most recent release branch, ",Object(i.b)("em",{parentName:"p"},"1.1.0"),", as shown by the black-dotted line at the top going between the two branches. "),Object(i.b)("p",null,"Next, an issue is identified that we want to go in versions 1.1.0 and later of the software. A feature branch is created called ",Object(i.b)("em",{parentName:"p"},"trello-1")," from the ",Object(i.b)("em",{parentName:"p"},"1.1.0")," branch since it is the lowest version we want to have the feature. The solid blue lines in the diagram shows the life-cycle with the first blue arrow being the branch creation, the second being a commit in the trello-1 branch with the change desired and the final blue arrow being a merge back into the ",Object(i.b)("em",{parentName:"p"},"1.1.0")," branch. At that point, the ",Object(i.b)("em",{parentName:"p"},"trello-1")," branch is closed and no further changes are made to the branch. This process is followed by three dotted blue lines representing merges of this change to other branches. For now we will just look at the first of these lines. This first dotted blue line is a merge of the change into the 1.2.0 branch since we want this fix in that version as well. It is not strictly required for the merger to happen at this point, but it is highly recommended as doing this often will help identify any potential conflicts early in the development process. Speaking of the ",Object(i.b)("em",{parentName:"p"},"1.2.0")," branch, let's look at what was happening over there while we worked on trello-1"),Object(i.b)("p",null,"Simultaneous to the creation of the ",Object(i.b)("em",{parentName:"p"},"trello-1")," branch, a second issue that we only want in version 1.2.0 is identified. A feature branch called ",Object(i.b)("em",{parentName:"p"},"trello-2")," is created. The solid red lines follow the lifecycle of this branch with the first being the creation of the branch from 1.2.0 and the second being a commit to the issue branch. With the issue now resolved we want to merge back into the ",Object(i.b)("em",{parentName:"p"},"1.2.0")," release branch...but there have been some changes to that branch since we originally created trello-2! In order for there to be a clean merge we first need to merge the latest changes from the ",Object(i.b)("em",{parentName:"p"},"1.2.0")," branch into ",Object(i.b)("em",{parentName:"p"},"trello-2")," as shown by the dotted blue line. When that is completed, we can cleanly do the reverse direction and merge ",Object(i.b)("em",{parentName:"p"},"trello-2")," back into ",Object(i.b)("em",{parentName:"p"},"1.2.0")),Object(i.b)("p",null,"Back on branch ",Object(i.b)("em",{parentName:"p"},"1.1.0"),", we decide we are now ready for release. First we merge our changes into ",Object(i.b)("em",{parentName:"p"},"master")," and create a tag called ",Object(i.b)("em",{parentName:"p"},"v1.1.0"),". We then create a new branch called ",Object(i.b)("em",{parentName:"p"},"1.1.1")," to hold changes for the next minor revision. The ",Object(i.b)("em",{parentName:"p"},"1.1.0")," branch is then closed and no further changes are committed to that branch."),Object(i.b)("p",null,"The life-cycle for ",Object(i.b)("em",{parentName:"p"},"1.1.1")," is very similar to that of its a predecessor. Another issue is identified and spun into a branch called ",Object(i.b)("em",{parentName:"p"},"trello-3")," and then merged back in to the ",Object(i.b)("em",{parentName:"p"},"1.1.1")," release branch. When 1.1.1 is ready for release, it is merged into master, tagged ",Object(i.b)("em",{parentName:"p"},"v1.1.1"),", and merged into ",Object(i.b)("em",{parentName:"p"},"1.2.0"),". At that point 1.1.1 is considered closed as well."),Object(i.b)("p",null,"Finally it is identified that we are ready to release ",Object(i.b)("em",{parentName:"p"},"1.2.0"),". As such it is merged into master and tagged. Not shown is the fact that ",Object(i.b)("em",{parentName:"p"},"1.2.1")," and ",Object(i.b)("em",{parentName:"p"},"1.3.0")," release branches are created so the process can continue."),Object(i.b)("h2",{id:"releasing"},"Releasing"),Object(i.b)("p",null,"A script is provided to do all the branching functions releated to a release. It is probably easiest to run the scripts from the VM environment described in the Vagrantfile provided with this repo. To initialize that environment run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd /path/to/repo/netsage-grafana-configs\nvagrant up\nvagrant ssh\n")),Object(i.b)("p",null,"The last command will log you into the VM. You should then add your git credentials to the VM such as adding your keys or creating a ",Object(i.b)("inlineCode",{parentName:"p"},"~/.netrc")," file."),Object(i.b)("p",null,"When you are ready for a final release run the following replacing 1.0.0 with the version you are releasing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"/vagrant/scripts/release 1.0.0\n")),Object(i.b)("p",null,"The script will walk through all the repositories and do the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Checkout a clean copy of the target version branch from git"),Object(i.b)("li",{parentName:"ol"},"Merges the branch forward to next patch (e.g. 1.0.1) and minor (e.g. 1.1.0) release. It will create these branches if they do not already exist."),Object(i.b)("li",{parentName:"ol"},"Merges the version branch into master"),Object(i.b)("li",{parentName:"ol"},"Tags master with vVERSION (e.g. v1.0.0)"),Object(i.b)("li",{parentName:"ol"},"Closes the version branch. This adds a file to the version branch that says no changes should be committed. This is used by some of the scripts in case you accidentally try to release a closed branch.")),Object(i.b)("h2",{id:"grafana-plugins"},"Grafana Plugins"),Object(i.b)("p",null,"First add a new submodule to the plugins directory, Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git submodule add https://github.com/netsage-project/Netsage-Slope_graph.git plugins/Netsage-Slope_graph\n")),Object(i.b)("p",null,"Open the Vagrantfile and create a new section similar to the following and add it to the setup_dashboard.sh"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"#Install navigation\n# HACK: for some reason this fails to install unless it's moved to a different location.\ncp -r  Netsage-Slope_graph /tmp/\npushd . \ncd /tmp/Netsage-Slope_graph/\nmake install\npopd\n### End plugin source code installs ###\n")))}h.isMDXComponent=!0},73:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),h=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=h(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=h(a),p=n,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);