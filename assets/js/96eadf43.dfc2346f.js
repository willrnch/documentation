"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[5989],{6526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(5893),o=t(1151);const r={sidebar_label:"Deploy",sidebar_position:2,description:"Deploy Move smart contracts on 0L Network"},i="Deploy a Hello OL Contract",l={id:"developers/deploy",title:"Deploy a Hello OL Contract",description:"Deploy Move smart contracts on 0L Network",source:"@site/docs/developers/deploy.md",sourceDirName:"developers",slug:"/developers/deploy",permalink:"/developers/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/developers/deploy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Deploy",sidebar_position:2,description:"Deploy Move smart contracts on 0L Network"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/developers/getting-started"}},a={},c=[{value:"High Level Steps",id:"high-level-steps",level:4},{value:"1. Write the Contract and Tests",id:"1-write-the-contract-and-tests",level:3},{value:"Directory Structure",id:"directory-structure",level:5},{value:"hello_0L.move",id:"hello_0lmove",level:5},{value:"hello_0L_test.move",id:"hello_0l_testmove",level:5},{value:"2. Create a TOML file",id:"2-create-a-toml-file",level:3},{value:"Move.toml",id:"movetoml",level:5},{value:"3. Compile",id:"3-compile",level:3},{value:"Output",id:"output",level:5},{value:"4. Test",id:"4-test",level:3},{value:"Output",id:"output-1",level:5},{value:"5. Publish",id:"5-publish",level:3},{value:"Output",id:"output-2",level:5},{value:"6. Interact",id:"6-interact",level:3},{value:"Interacting with functions",id:"interacting-with-functions",level:4},{value:"Interacting with view functions",id:"interacting-with-view-functions",level:4}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-a-hello-ol-contract",children:"Deploy a Hello OL Contract"}),"\n",(0,s.jsx)(n.h4,{id:"high-level-steps",children:"High Level Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Write the Contract and Tests"}),"\n",(0,s.jsx)(n.li,{children:"Create a TOML file"}),"\n",(0,s.jsx)(n.li,{children:"Compile"}),"\n",(0,s.jsx)(n.li,{children:"Test"}),"\n",(0,s.jsx)(n.li,{children:"Publish"}),"\n",(0,s.jsx)(n.li,{children:"Interact"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1-write-the-contract-and-tests",children:"1. Write the Contract and Tests"}),"\n",(0,s.jsx)(n.p,{children:"Create the Hello OL smart contract"}),"\n",(0,s.jsx)(n.h5,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"hello_0L\n    |\n    \u251c\u2500\u2500 Move.toml\n    \u2514\u2500\u2500 sources\n        \u2514\u2500\u2500 hello_0L.move\n        \u2514\u2500\u2500 hello_0L_test.move\n"})}),"\n",(0,s.jsx)(n.h5,{id:"hello_0lmove",children:"hello_0L.move"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'module hello_0L::message {\n    use std::error;\n    use std::signer;\n    use std::string;\n    use diem_framework::account;\n    use diem_framework::event;\n\n//:!:>resource\n    struct MessageHolder has key {\n        message: string::String,\n        message_change_events: event::EventHandle<MessageChangeEvent>,\n    }\n//<:!:resource\n\n    struct MessageChangeEvent has drop, store {\n        from_message: string::String,\n        to_message: string::String,\n    }\n\n    /// There is no message present\n    const ENO_MESSAGE: u64 = 0;\n\n    #[view]\n    public fun get_message(addr: address): string::String acquires MessageHolder {\n        assert!(exists<MessageHolder>(addr), error::not_found(ENO_MESSAGE));\n        borrow_global<MessageHolder>(addr).message\n    }\n\n    public entry fun set_message(account: signer, message: string::String)\n    acquires MessageHolder {\n        let account_addr = signer::address_of(&account);\n        if (!exists<MessageHolder>(account_addr)) {\n            move_to(&account, MessageHolder {\n                message,\n                message_change_events: account::new_event_handle<MessageChangeEvent>(&account),\n            })\n        } else {\n            let old_message_holder = borrow_global_mut<MessageHolder>(account_addr);\n            let from_message = old_message_holder.message;\n            event::emit_event(&mut old_message_holder.message_change_events, MessageChangeEvent {\n                from_message,\n                to_message: copy message,\n            });\n            old_message_holder.message = message;\n        }\n    }\n\n    #[test(account = @0x1)]\n    public entry fun sender_can_set_message(account: signer) acquires MessageHolder {\n        let addr = signer::address_of(&account);\n        diem_framework::account::create_account_for_test(addr);\n        set_message(account,  string::utf8(b"Hello, Blockchain"));\n\n        assert!(\n          get_message(addr) == string::utf8(b"Hello, Blockchain"),\n          ENO_MESSAGE\n        );\n    }\n'})}),"\n",(0,s.jsx)(n.h5,{id:"hello_0l_testmove",children:"hello_0L_test.move"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'#[test_only]\nmodule hello_0L::message_tests {\n    use std::signer;\n    use std::unit_test;\n    use std::vector;\n    use std::string;\n\n    use hello_0L::message;\n\n    fun get_account(): signer {\n        vector::pop_back(&mut unit_test::create_signers_for_testing(1))\n    }\n\n    #[test]\n    public entry fun sender_can_set_message() {\n        let account = get_account();\n        let addr = signer::address_of(&account);\n        diem_framework::account::create_account_for_test(addr);\n        message::set_message(account,  string::utf8(b"Hello, Blockchain"));\n\n        assert!(\n          message::get_message(addr) == string::utf8(b"Hello, Blockchain"),\n          0\n        );\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-create-a-toml-file",children:"2. Create a TOML file"}),"\n",(0,s.jsx)(n.h5,{id:"movetoml",children:"Move.toml"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Named addresses:"}),"\nYour module needs to be deployed at an address. You can hard-code the address in the Move.toml file. Or you can have the address variable (e.g. ",(0,s.jsx)(n.code,{children:"hello_0L"}),"), defined at publishing time. In either case the address MUST MATCH THE ADDRESS OF THE SIGNER that is publishing."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[package]\nname = 'message'\nversion = '1.0.0'\n\n# [addresses]\n# hello_0L = \"_\"\n\n[dependencies.DiemFramework]\ngit = 'https://github.com/0LNetworkCommunity/diem.git'\nrev = 'release'\nsubdir = 'diem-move/framework/diem-framework'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-compile",children:"3. Compile"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'libra move compile --package-dir path/to/your/hello_0L_contract\n\n#Example\nlibra move compile --package-dir ~/hello_0L --named-addresses "hello_0L=0xd1281de242839fc939745996882c5fc2" \n'})}),"\n",(0,s.jsx)(n.h5,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Compiling, may take a little while to download git dependencies...\nUPDATING GIT DEPENDENCY https://github.com/0LNetworkCommunity/diem.git\nINCLUDING DEPENDENCY DiemFramework\nINCLUDING DEPENDENCY DiemStdlib\nINCLUDING DEPENDENCY MoveStdlib\nBUILDING test_publish\npackage size 819 bytes\ntransaction success  \xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7 \u2713\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-test",children:"4. Test"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'libra move test --package-dir path/to/your/hello_0L_contract\n\n# Example\nlibra move test --package-dir ~/hello_0L --named-addresses "hello_0L=0xd1281de242839fc939745996882c5fc2"\n'})}),"\n",(0,s.jsx)(n.h5,{id:"output-1",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"INCLUDING DEPENDENCY DiemFramework\nINCLUDING DEPENDENCY DiemStdlib\nINCLUDING DEPENDENCY MoveStdlib\nBUILDING message\nRunning Move unit tests\n[ PASS    ] 0xd1281de242839fc939745996882c5fc2::message_tests::sender_can_set_message\n[ PASS    ] 0xd1281de242839fc939745996882c5fc2::message::sender_can_set_message\nTest result: OK. Total tests: 2; passed: 2; failed: 0\n"})}),"\n",(0,s.jsx)(n.h3,{id:"5-publish",children:"5. Publish"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"txs publish"})," will compile the package before submitting.\nYou should test and compile the code before running, but it is not necessary for publishing."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'libra txs publish --package-dir path/to/your/hello_0L_contract  \n\n#Example\nlibra txs publish --package-dir ~/hello_0L --named-addresses "hello_0L=0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93" \n'})}),"\n",(0,s.jsx)(n.h5,{id:"output-2",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Compiling, may take a little while to download git dependencies...\nUPDATING GIT DEPENDENCY https://github.com/0LNetworkCommunity/diem.git\nINCLUDING DEPENDENCY DiemFramework\nINCLUDING DEPENDENCY DiemStdlib\nINCLUDING DEPENDENCY MoveStdlib\nBUILDING message\npackage size 1136 bytes\ntransaction success  \xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7 \u2713\n"})}),"\n",(0,s.jsx)(n.h3,{id:"6-interact",children:"6. Interact"}),"\n",(0,s.jsx)(n.h4,{id:"interacting-with-functions",children:"Interacting with functions"}),"\n",(0,s.jsxs)(n.p,{children:["You can interact with your new smart contract with the ",(0,s.jsx)(n.code,{children:"generate_transaction"})," subcommand of the ",(0,s.jsx)(n.code,{children:"txs"})," tool"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"libra txs generate-transaction --function-id address::module::function\n\n# Example\nlibra txs generate-transaction --function-id 0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93::message::set_message --args 'b\"hello\"'\n"})}),"\n",(0,s.jsx)(n.h4,{id:"interacting-with-view-functions",children:"Interacting with view functions"}),"\n",(0,s.jsxs)(n.p,{children:["To view the changes you have made use the ",(0,s.jsx)(n.code,{children:"resource"})," subcommand of the ",(0,s.jsx)(n.code,{children:"query"})," tool"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"libra query resource --account <ACC> --resource-path-string address::module::struct\n\n# Example\nlibra query resource --account 0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93 --resource-path-string 0xc208c09ecb52d626ef037c2011ba2d7b18f999eee5be54ac8161627613500c93::message::MessageHolder\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Be sure to check out Move code examples for various types of Smart Contracts ",(0,s.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/diem/tree/release/diem-move/move-examples",children:"here"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);