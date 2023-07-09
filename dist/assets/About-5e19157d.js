import{_ as h,o as n,c,a as s,F as b,r as A,t as o,d as y,b as _,e as f,f as m,g as x,h as p}from"./index-efab3889.js";const v="/soliver/assets/profile-54d8c3e6.jpeg",k={setup(){return{bios:[{id:1,bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"}]}}},C={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},$=s("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[s("img",{src:v,class:"rounded-xl w-96",alt:""})],-1),D={class:"w-full sm:w-3/4 text-left"};function S(t,e,i,r,l,d){return n(),c("div",C,[$,s("div",D,[(n(!0),c(b,null,A(r.bios,a=>(n(),c("p",{key:a.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},o(a.bio),1))),128))])])}const F=h(k,[["render",S]]);var w=y({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=this.duration*1e3,this.remaining=this.duration*1e3,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let i=e.split("."),r=i[0],l=i.length>1?this.decimalSeparator+i[1]:"",d=!isNaN(parseFloat(this.separator));if(this.separator&&!d)for(;t.test(r);)r=r.replace(t,"$1"+this.separator+"$2");return r+l}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=this.duration*1e3,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout(()=>{this.$emit("finished")},1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function L(t,e,i,r,l,d){return n(),_("span",null,o(t.displayedAmount),1)}w.render=L;var M=(()=>{const t=w;return t.install=e=>{e.component("Vue3Autocounter",t)},t})();const T=M,U={components:{counter:T},data:()=>({experienceTitle:"Years of experience",githubTitle:"Stars on GitHub",feedbackTitle:"Positive feedback",projectsTitle:"Projects completed"})},R={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},P={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},N={class:"mb-20 sm:mb-0"},q={class:"block text-md text-ternary-dark dark:text-ternary-light"},B={class:"mb-20 sm:mb-0"},Q={class:"block text-md text-ternary-dark dark:text-ternary-light"},G={class:"mb-20 sm:mb-0"},V={class:"block text-md text-ternary-dark dark:text-ternary-light"},H={class:"mb-20 sm:mb-0"},E={class:"block text-md text-ternary-dark dark:text-ternary-light"};function J(t,e,i,r,l,d){const a=f("counter");return n(),c("div",R,[s("div",P,[s("div",N,[m(a,{ref:"counter",startAmount:0,endAmount:12,duration:1,autoinit:!0,onFinished:e[0]||(e[0]=u=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,512),s("span",q,o(t.experienceTitle),1)]),s("div",B,[m(a,{ref:"counter",startAmount:0,endAmount:20,duration:1,suffix:"k+",autoinit:!0,onFinished:e[1]||(e[1]=u=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),s("span",Q,o(t.githubTitle),1)]),s("div",G,[m(a,{ref:"counter",startAmount:0,endAmount:92,duration:1,suffix:"%",autoinit:!0,onFinished:e[2]||(e[2]=u=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),s("span",V,o(t.feedbackTitle),1)]),s("div",H,[m(a,{ref:"counter",startAmount:0,endAmount:77,duration:1,autoinit:!0,onFinished:e[3]||(e[3]=u=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),s("span",E,o(t.projectsTitle),1)])])])}const W=h(U,[["render",J]]),Y={props:["cert"]},j=["href"],X={key:0,class:"absolute left-0 top-0 h-16 w-16"},z=s("div",{class:"bg-gradient-to-r from-green-400 to-blue-500 absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]"}," Featured ",-1),K=[z],I=["src","alt"],Z={class:"text-center px-4 py-6"},O={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},tt={class:"font-general-medium text-sm text-ternary-dark dark:text-ternary-light"};function et(t,e,i,r,l,d){return n(),c("a",{href:i.cert.credential,target:"_blank",class:"relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},[i.cert.featured?(n(),c("div",X,K)):x("",!0),s("div",null,[s("img",{src:i.cert.img,alt:i.cert.img,class:"rounded-t-xl border-none"},null,8,I)]),s("div",Z,[s("p",O,o(i.cert.title),1),s("span",tt,o(i.cert.org),1)])],8,j)}const st=h(Y,[["render",et]]),g={featured:[{id:1,title:"Python for Everybody Specialization",credential:"https://www.coursera.org/account/accomplishments/specialization/certificate/74TB8VE8HFQ9",img:new URL("/soliver/assets/74TB8VE8HFQ9-9ef1b1b5.png",self.location).href,org:"Coursera | University of Michigan",featured:!0,skills:["Python","JSON","XML","DBMS"]}],courses:[{id:1,title:"SQL for Data Science",credential:"https://www.coursera.org/account/accomplishments/certificate/RPHXLFSDMY5Q",img:new URL("/soliver/assets/RPHXLFSDMY5Q-56106d56.png",self.location).href,org:"Coursera | University of California, Davis",featured:!1,skills:["Data Science"]},{id:2,title:"Foundations: Data, Data, Everywhere",credential:"https://www.coursera.org/account/accomplishments/certificate/WQTCNGESCJE6",img:new URL("/soliver/assets/WQTCNGESCJE6-ca623b36.png",self.location).href,org:"Coursera | Google Career Certificates",featured:!1,skills:["Data Analysis"]},{id:3,title:"Ask Questions to Make Data-Driven Decisions",credential:"https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",img:new URL("/soliver/assets/4PACMBRHMSD4-b88b4d67.png",self.location).href,org:"Coursera | Google Career Certificates",featured:!1,skills:["Data Analysis"]},{id:4,title:"Prepare Data for Exploration",credential:"https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",img:new URL("/soliver/assets/4PACMBRHMSD4-b88b4d67.png",self.location).href,org:"Coursera | Google Career Certificates",featured:!1,skills:["Data Analysis"]},{id:5,title:"Process Data from Dirty to Clean",credential:"https://www.coursera.org/account/accomplishments/certificate/VSMTAGTWLBN3",img:new URL("/soliver/assets/VSMTAGTWLBN3-9d08e1ae.png",self.location).href,org:"Coursera | Google Career Certificates",featured:!1,skills:["Data Analysis"]},{id:6,title:"Analyze Data to Answer Questions",credential:"https://www.coursera.org/account/accomplishments/certificate/7BUJPD6TJL3Q",img:new URL("/soliver/assets/7BUJPD6TJL3Q-2345b2a1.png",self.location).href,org:"Coursera | Google Career Certificates",featured:!1,skills:["Google BigQuery","Data Analysis","Google Sheets","SQL"]},{id:7,title:"Share Data Through the Art of Visualization",credential:"https://www.coursera.org/account/accomplishments/certificate/FL94MR4L6JZY",img:new URL("/soliver/assets/FL94MR4L6JZY-2a8848a7.png",self.location).href,org:"Coursera | Google Career Certificates",featured:!1,skills:[""]},{id:8,title:"Programming for Everybody (Getting Started with Python)",credential:"https://www.coursera.org/account/accomplishments/certificate/AN5QQMNDFDKM",img:new URL("/soliver/assets/AN5QQMNDFDKM-0a489995.png",self.location).href,org:"Coursera | University of Michigan",featured:!1,skills:[""]},{id:9,title:"Python Data Structures",credential:"https://www.coursera.org/account/accomplishments/certificate/WW9AXFF2J87L",img:new URL("/soliver/assets/WW9AXFF2J87L-58912b8e.png",self.location).href,org:"Coursera | University of Michigan",featured:!1,skills:[""]},{id:10,title:"Using Python to Access Web Data",credential:"https://www.coursera.org/account/accomplishments/certificate/VRHW6YK5CAR9",img:new URL("/soliver/assets/VRHW6YK5CAR9-bdad5994.png",self.location).href,org:"Coursera | University of Michigan",featured:!1,skills:[""]},{id:11,title:"Using Databases with Python",credential:"https://www.coursera.org/account/accomplishments/certificate/D5V2D4PUP35R",img:new URL("/soliver/assets/D5V2D4PUP35R-09b8d57c.png",self.location).href,org:"Coursera | University of Michigan",featured:!1,skills:[""]}]},it={components:{AboutCertSingle:st},data:()=>({certsHeading:"Certificates",certificates:g.featured.reverse().splice(0,4).concat(g.courses.reverse().splice(0,4))})},rt={class:"mt-10 sm:mt-20"},at={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},nt={class:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function ot(t,e,i,r,l,d){const a=f("AboutCertSingle");return n(),c("div",rt,[s("p",at,o(t.certsHeading),1),s("div",nt,[(n(!0),c(b,null,A(t.certificates,u=>(n(),_(a,{key:u.id,cert:u},null,8,["cert"]))),128))])])}const ct=h(it,[["render",ot]]),ut={name:"About",components:{AboutMe:F,AboutCounter:W,AboutCerts:ct},data:()=>({}),mounted(){p.replace()},updated(){p.replace()},methods:{}},lt={class:"container mx-auto"},dt={class:"container mx-auto"};function mt(t,e,i,r,l,d){const a=f("AboutMe"),u=f("AboutCerts");return n(),c("div",null,[s("div",lt,[m(a)]),s("div",dt,[m(u)])])}const ft=h(ut,[["render",mt]]);export{ft as default};