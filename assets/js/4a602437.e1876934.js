"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[396],{8888:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=n(5893),t=n(1151);const o={sidebar_position:3,description:"Publish Move Modules"},l="Txs - Publish",d={id:"Tools/txs/publish",title:"Txs - Publish",description:"Publish Move Modules",source:"@site/docs/Tools/txs/publish.md",sourceDirName:"Tools/txs",slug:"/Tools/txs/publish",permalink:"/Tools/txs/publish",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/Tools/txs/publish.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Publish Move Modules"},sidebar:"tutorialSidebar",previous:{title:"Txs - Generate Transaction",permalink:"/Tools/txs/generate-transaction"},next:{title:"Txs - Transfer",permalink:"/Tools/txs/transfer"}},r={},a=[{value:"Description",id:"description",level:2},{value:"Publishing Smart Contracts",id:"publishing-smart-contracts",level:3},{value:"Compiling",id:"compiling",level:4},{value:"Named Addresses",id:"named-addresses",level:4},{value:"Publish a Smart Contract",id:"publish-a-smart-contract",level:3}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"txs---publish",children:"Txs - Publish"}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"txs"}),' tool is instrumental in sending Package Publish transactions, enabling developers to deploy their smart contracts on the Libra blockchain. An example Move package, used in internal "smoke tests", can be found under ',(0,i.jsx)(s.code,{children:"./tests/fixtures/test_publish"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"publishing-smart-contracts",children:"Publishing Smart Contracts"}),"\n",(0,i.jsx)(s.h4,{id:"compiling",children:"Compiling"}),"\n",(0,i.jsxs)(s.p,{children:["Before publishing, it is advised to test and compile the code. However, the ",(0,i.jsx)(s.code,{children:"txs publish"})," command will automatically compile the package as part of the submission process, making pre-compilation optional but recommended for ensuring smooth deployment."]}),"\n",(0,i.jsxs)(s.p,{children:["To compile you can use the ",(0,i.jsx)(s.code,{children:"libra move"})," tool with the command ",(0,i.jsx)(s.code,{children:"libra move compile --package-dir ../../tools/txs/tests/fixtures/test_publish"})]}),"\n",(0,i.jsx)(s.h4,{id:"named-addresses",children:"Named Addresses"}),"\n",(0,i.jsx)(s.p,{children:"When deploying a module, the address in the module must match the address of the account (signer) performing the publication. There are two approaches to handle addresses in your Move package:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Hard-coding the Address"}),":\nYou can specify the address directly in the ",(0,i.jsx)(s.code,{children:"Move.toml"})," file. For example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-toml",children:"[package]\nname = 'test_publish'\nversion = '1.0.0'\n\n[addresses]\nthis_address='0000000000000000000000000000000069a385e1744e33fbb24a42ecbd1603e3'\n"})}),"\n",(0,i.jsx)(s.p,{children:"And in your Move contract:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-move",children:"module this_address::message {\n    // Your code here\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Setting the Name at Publishing"}),":\nIf you prefer not to hard-code the address, you can use the ",(0,i.jsx)(s.code,{children:"--named-addresses"})," CLI argument to dynamically set the address at the time of publishing. The argument takes pairs of strings: an alias (key) and an address (value)."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:'txs publish --package-dir ./path/to/Move/code --named-addresses "this_address=0x1234"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"publish-a-smart-contract",children:"Publish a Smart Contract"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Function"}),": Deploys smart contracts (Move modules and scripts) onto the Libra blockchain."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Syntax"}),": ",(0,i.jsx)(s.code,{children:"libra txs publish --dev|--package-dir <PACKAGE_DIR>|--output-dir <OUTPUT_DIR> | --skip-fetch-latest-git-deps|--bytecode-version <BYTECODE_VERSION>"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Parameters"}),":.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--dev"})," (optional): Enables dev mode, which uses all dev-addresses and dev-dependencies. Dev mode allows for changing dependencies and addresses to the preset [dev-addresses] and [dev-dependencies] fields.  This works both inside and out of tests for using preset values. Currently, it also additionally pulls in all test compilation artifacts"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--package-dir <PACKAGE_DIR>"}),": Path to a move package (the folder with a Move.toml file)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--output-dir <OUTPUT_DIR>"})," (optional): Path to save the compiled move package. Defaults to ",(0,i.jsx)(s.code,{children:"<package_dir>/build"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--skip-fetch-latest-git-deps"})," (optional): Skip pulling the latest git dependencies.If you don't have a network connection, the compiler may fail due to no ability to pull git dependencies. This will allow overriding this for local development."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--bytecode-version <BYTECODE_VERSION>"})," (optional): Specify the version of the bytecode the compiler is going to emit"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Examples"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Publishing a Module:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"libra txs publish --module /path/to/module\n"})}),"\n","This command publishes a module located at ",(0,i.jsx)(s.code,{children:"/path/to/module"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>l});var i=n(7294);const t={},o=i.createContext(t);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);