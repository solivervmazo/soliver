import{_ as c,B as f,j as g,k as h,e as s,o as n,c as o,a as t,f as a,F as b,r as $,n as y,t as v,h as u}from"./index-013fd965.js";const k={components:{Button:f,FormInput:g,FormTextarea:h}},w={class:"w-full md:w-1/2"},F={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},C=t("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),B={action:"#",class:"font-general-regular space-y-7"};function I(r,l,i,d,m,p){const e=s("FormInput"),_=s("FormTextarea"),x=s("Button");return n(),o("div",w,[t("div",F,[C,t("form",B,[a(e,{label:"Full Name",inputIdentifier:"name"}),a(e,{label:"Email",inputIdentifier:"email",inputType:"email"}),a(e,{label:"Subject",inputIdentifier:"subject"}),a(_,{label:"Message",textareaIdentifier:"message"}),t("div",null,[a(x,{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"})])])])])}const D=c(k,[["render",I]]),S={props:["contacts"]},j={class:"w-full md:w-2/2"},z={class:"text-left max-w-xl px-6"},T=t("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),M={class:"font-general-regular"},N=["data-feather"];function E(r,l,i,d,m,p){return n(),o("div",j,[t("div",z,[T,t("ul",M,[(n(!0),o(b,null,$(i.contacts,e=>(n(),o("li",{class:"flex",key:e.id},[t("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,N),t("a",{href:"#",class:y(["text-lg mb-4 text-ternary-dark dark:text-ternary-light",e.icon==="mail"||e.icon==="phone"?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},v(e.name),3)]))),128))])])])}const P=c(S,[["render",E]]),V={components:{ContactForm:D,ContactDetails:P},data:()=>({contacts:[{id:1,name:"Davao City, Davao del Sur Philippines, 8000",icon:"map-pin"},{id:2,name:"solivervmazo.jobs@gmail.com",icon:"mail"},{id:3,name:"github.com/solivervmazo",icon:"github"},{id:3,name:"linkedin.com/in/solivervmazo/",icon:"linkedin"}]}),mounted(){u.replace()},updated(){u.replace()},methods:{}},L={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function W(r,l,i,d,m,p){const e=s("ContactDetails");return n(),o("div",L,[a(e,{contacts:r.contacts},null,8,["contacts"])])}const A=c(V,[["render",W]]);export{A as default};