import{_ as c,o as s,c as a,a as e,t as r,F as n,r as l,j as h,n as x,e as g,f as _}from"./index-49e38d95.js";const k={props:["singleProjectHeader"]},y={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},P={class:"flex"},v={class:"flex items-center mr-10"},I=e("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),q={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},$={class:"flex items-center"},H=e("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),w={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function S(o,d,i,u,m,p){return s(),a("div",null,[e("p",y,r(i.singleProjectHeader.singleProjectTitle),1),e("div",P,[e("div",v,[I,e("span",q,r(i.singleProjectHeader.singleProjectDate),1)]),e("div",$,[H,e("span",w,r(i.singleProjectHeader.singleProjectTag),1)])])])}const L=c(k,[["render",S]]),D={props:["projectImages"]},U={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},T=["src"];function C(o,d,i,u,m,p){return s(),a("div",U,[(s(!0),a(n,null,l(i.projectImages,t=>(s(),a("div",{class:"mb-10 sm:mb-0",key:t.id},[e("img",{src:t.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,T)]))),128))])}const M=c(D,[["render",C]]),N={props:["projectInfo"],mounted(){h.replace()},updated(){h.replace()}},A={class:"block sm:flex gap-0 sm:gap-10 mt-14"},F={class:"w-full sm:w-1/3 text-left"},K={class:"mb-7"},R={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},W={class:"leading-loose"},B={class:"mb-7"},G={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},V={class:"font-general-regular text-primary-dark dark:text-ternary-light"},J={class:"mb-7"},O={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},z={class:"font-general-regular text-primary-dark dark:text-ternary-light"},E={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},Q={class:"flex items-center gap-3 mt-5"},X=["href"],Y=["data-feather"],Z={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},ee={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function te(o,d,i,u,m,p){return s(),a("div",A,[e("div",F,[e("div",K,[e("p",R,r(i.projectInfo.clientHeading),1),e("ul",W,[(s(!0),a(n,null,l(i.projectInfo.companyInfos,t=>(s(),a("li",{key:t,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[e("span",null,r(t.title)+": ",1),e("a",{href:"#",class:x(t.title=="Website"||t.title=="Phone"?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},r(t.details),3)]))),128))])]),e("div",B,[e("p",G,r(i.projectInfo.objectivesHeading),1),e("p",V,r(i.projectInfo.objectivesDetails),1)]),e("div",J,[e("p",O,r(i.projectInfo.technologies[0].title),1),e("p",z,r(i.projectInfo.technologies[0].techs.join(", ")),1)]),e("div",null,[e("p",E,r(i.projectInfo.socialSharingsHeading),1),e("div",Q,[(s(!0),a(n,null,l(i.projectInfo.socialSharings,t=>(s(),a("a",{key:t.id,href:t.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[e("i",{"data-feather":t.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,Y)],8,X))),128))])])]),e("div",Z,[e("p",ee,r(i.projectInfo.projectDetailsHeading),1),(s(!0),a(n,null,l(i.projectInfo.projectDetails,t=>(s(),a("p",{key:t.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},r(t.details),1))),128))])])}const ie=c(N,[["render",te]]),se={props:["relatedProject"]},ae={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},re={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},oe={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},ne=["src","alt"];function le(o,d,i,u,m,p){return s(),a("div",ae,[e("p",re,r(i.relatedProject.relatedProjectsHeading),1),e("div",oe,[(s(!0),a(n,null,l(i.relatedProject.relatedProjects,t=>(s(),a("div",{key:t.id},[e("img",{src:t.img,class:"rounded-xl cursor-pointer",alt:t.title},null,8,ne)]))),128))])])}const ce=c(se,[["render",le]]),de={name:"Projects",components:{ProjectHeader:L,ProjectGallery:M,ProjectInfo:ie,ProjectRelatedProjects:ce},data:()=>({singleProjectHeader:{singleProjectTitle:"Project Management UI",singleProjectDate:"Jul 26, 2021",singleProjectTag:"UI / Frontend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:require("../assets/images/ui-project-1.jpg")},{id:2,title:"Kabul Project Management UI",img:require("../assets/images/web-project-2.jpg")},{id:3,title:"Kabul Project Management UI",img:require("../assets/images/mobile-project-2.jpg")}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],objectivesHeading:"Objective",objectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Twitter",icon:"twitter",url:"https://twitter.com/realstoman"},{id:2,name:"Instagram",icon:"instagram",url:"https://instagram.com/realstoman"},{id:3,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:5,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/c/StomanStudio"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:require("../assets/images/mobile-project-1.jpg")},{id:2,title:"Web Application",img:require("../assets/images/web-project-1.jpg")},{id:3,title:"UI Design",img:require("../assets/images/ui-project-2.jpg")},{id:4,title:"Kabul Mobile App UI",img:require("../assets/images/mobile-project-2.jpg")}]}}),mounted(){h.replace()},updated(){h.replace()},methods:{}},ue={class:"container mx-auto mt-10 sm:mt-20"};function me(o,d,i,u,m,p){const t=g("ProjectHeader"),f=g("ProjectGallery"),j=g("ProjectInfo"),b=g("ProjectRelatedProjects");return s(),a("div",ue,[_(t,{singleProjectHeader:o.singleProjectHeader},null,8,["singleProjectHeader"]),_(f,{projectImages:o.projectImages},null,8,["projectImages"]),_(j,{projectInfo:o.projectInfo},null,8,["projectInfo"]),_(b,{relatedProject:o.relatedProject},null,8,["relatedProject"])])}const ge=c(de,[["render",me]]);export{ge as default};
