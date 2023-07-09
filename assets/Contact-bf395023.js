import{_ as l,B as f,h as g,i as h,e as n,o,c as s,a as t,f as a,F as y,r as $,n as b,t as k,g as _}from"./index-ae280f17.js";const C={components:{Button:f,FormInput:g,FormTextarea:h}},F={class:"w-full md:w-1/2"},w={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},v=t("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),B={action:"#",class:"font-general-regular space-y-7"};function I(r,d,i,m,p,u){const e=n("FormInput"),c=n("FormTextarea"),x=n("Button");return o(),s("div",F,[t("div",w,[v,t("form",B,[a(e,{label:"Full Name",inputIdentifier:"name"}),a(e,{label:"Email",inputIdentifier:"email",inputType:"email"}),a(e,{label:"Subject",inputIdentifier:"subject"}),a(c,{label:"Message",textareaIdentifier:"message"}),t("div",null,[a(x,{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"})])])])])}const D=l(C,[["render",I]]),S={props:["contacts"]},T={class:"w-full md:w-1/2"},M={class:"text-left max-w-xl px-6"},N=t("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),Y={class:"font-general-regular"},j=["data-feather"];function E(r,d,i,m,p,u){return o(),s("div",T,[t("div",M,[N,t("ul",Y,[(o(!0),s(y,null,$(i.contacts,e=>(o(),s("li",{class:"flex",key:e.id},[t("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,j),t("a",{href:"#",class:b(["text-lg mb-4 text-ternary-dark dark:text-ternary-light",e.icon==="mail"||e.icon==="phone"?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},k(e.name),3)]))),128))])])])}const V=l(S,[["render",E]]),z={components:{ContactForm:D,ContactDetails:V},data:()=>({contacts:[{id:1,name:"Your Address, Your City, Your Country",icon:"map-pin"},{id:2,name:"email@domain.com",icon:"mail"},{id:3,name:"555 8888 888",icon:"phone"}]}),mounted(){_.replace()},updated(){_.replace()},methods:{}},A={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function L(r,d,i,m,p,u){const e=n("ContactForm"),c=n("ContactDetails");return o(),s("div",A,[a(e),a(c,{contacts:r.contacts},null,8,["contacts"])])}const W=l(z,[["render",L]]);export{W as default};
