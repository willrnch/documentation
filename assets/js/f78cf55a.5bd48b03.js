"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[2486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4,sidebar_label:"Register",description:"Register a Validator on the OL Network"},i="Register",l={unversionedId:"validators/register",id:"validators/register",title:"Register",description:"Register a Validator on the OL Network",source:"@site/docs/validators/register.md",sourceDirName:"validators",slug:"/validators/register",permalink:"/documentation/validators/register",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/register.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Register",description:"Register a Validator on the OL Network"},sidebar:"tutorialSidebar",previous:{title:"Restore",permalink:"/documentation/validators/restore"},next:{title:"Hot Upgrades",permalink:"/documentation/validators/hot-upgrades"}},s={},d=[{value:"Quick start",id:"quick-start",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"register"},"Register"),(0,o.kt)("p",null,"Register a Validator on the OL Network"),(0,o.kt)("h1",{id:"welcome-validators"},"Welcome Validators"),(0,o.kt)("p",null,"This assumes you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"libra")," cli installed in your local $PATH."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# create account keys\nlibra wallet keygen\n\n# create the validator config files on your node\n# you will need to update vfn values to match validator values. see script below\n# you will also need to set the libra.yaml to point to testnet\nlibra config validator-init\n\n# a friend will onboard the account if it doesn't yet exist on chain. It is done by sending coins to an account\nlibra txs transfer --to-account <YOUR ADDRESS> --amount 1\n\n# send validator info\nlibra txs validator register\n\n# get vouches from existing validators (just ask)\nlibra txs validator vouch --vouch-for <YOUR ADDRESS>\n\n# submit a bid to be in the validator set\nlibra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <WHEN EXPIRES>\n\n")),(0,o.kt)("h1",{id:"get-keys"},"Get Keys"),(0,o.kt)("p",null,"If you don't already have an account, you'll need a mnemonic (seed), to generate all keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"libra wallet keygen\n")),(0,o.kt)("h1",{id:"initialize-validator-files"},"Initialize validator files"),(0,o.kt)("p",null,"Follow the prompts here. Your node needs to have keys generated using a mnemonic from step #1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"libra config validator-init\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"you will need to use this script to make vfn match validator values. "),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'cat << \'EOF\' > fix_vfn_values.sh\n#!/bin/bash\n\n# Extract the value from validator_network_public_key\nvalidator_key=$(sed -n \'s/^validator_network_public_key: "\\(.*\\)"/\\1/p\' ~/.libra/operator.yaml)\n\n# Use the extracted value to replace full_node_network_public_key\nsed -i "s/^full_node_network_public_key: .*/full_node_network_public_key: \\"$validator_key\\"/" ~/.libra/operator.yaml\n\n# File path\nfile="$HOME/.libra/operator.yaml"\n\n# Extract the host and port from validator_host\nhost=$(awk \'/^  host:/{print $0}\' "$file")\nport=$(awk \'/^  port:/{print $0}\' "$file")\n\n# Replace full_node_host: ~ with full_node_host: and add host and port\nsed -i "/^full_node_host: ~/c\\\\\nfull_node_host:\\\\n$host\\\\n$port" "$file"\nEOF\n\nchmod +x fix_vfn_values.sh\n./fix_vfn_values.sh\n\n'))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Point the libra.yaml to testnet"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"# sed the default_chain_id to testing\nsed -i 's/default_chain_id: mainnet/default_chain_id: testnet/g' ~/.libra/libra.yaml\nsed -i 's/chain_id: mainnet/chain_id: testnet/g' ~/.libra/libra.yaml\nsed -i 's/chain_name: mainnet/chain_name: testnet/g' ~/.libra/libra.yaml\n\n# use localhost as the upstream node\nsed -i 's/- url: \\\"http:\\/\\/.*\\\"/- url: \\\"http:\\/\\/127.0.0.1:8080\\/\\\"/g' ~/.libra/libra.yaml\n"))),(0,o.kt)("h1",{id:"get-the-account-on-chain"},"Get the account on chain"),(0,o.kt)("p",null,"Someone needs to create that account onchain first.\nAsk someone to deposit a coin to your accout from step #1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# friend sends one coin to your account which creates it\nlibra txs transfer -t <YOUR ACCOUNT> -a 1\n\n")),(0,o.kt)("h1",{id:"submit-configs-to-chain"},"Submit configs to chain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"libra txs validator register\n\n# optionally pass -f to the file where operator.yaml from step #2 above is located\nlibra txs validator register -f /path/to/foo/operator.yaml\n\n")),(0,o.kt)("h1",{id:"get-vouches"},"Get Vouches"),(0,o.kt)("p",null,"0L uses very light reputation games to keep the validator set trusted.\nJust ask an existing validator for a vouch. It doesn't cost you anything and it needs no stake."),(0,o.kt)("p",null,"Your friend will:\n",(0,o.kt)("inlineCode",{parentName:"p"},"libra txs validator vouch --vouch-for <YOUR ADDRESS>")),(0,o.kt)("h1",{id:"bid-to-be-in-the-validator-set"},"Bid to be in the validator set"),(0,o.kt)("p",null,"0L uses Proof-of-Fee for sybil resistance, instead of Proof-of-Stake. You don't need any stake to join, but you just need to be able to bid on how much you are willing to pay to be in the validator set. The cheapest bid proposed by validators will be actually what all validators pay (uniform price auction)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"libra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <WHEN EXPIRES>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Once your validator enters the set you will need to stop running as a fullnode and run as a validator. Change your node to point to the ",(0,o.kt)("inlineCode",{parentName:"p"},"validator.yaml"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"libra node --config-path ~/.libra/validator.yaml"))))}u.isMDXComponent=!0}}]);