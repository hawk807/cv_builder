(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(t,e,n){t.exports=n.p+"img/sprite.0e3e933.svg"},333:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(23),n(48),n(32),n(49);var r=n(75),o=n(19),c=(n(33),n(54),n(55),n(334),n(337),n(14),n(231),n(24),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(27),n(42),n(36),n(31),n(94)),l={jobTitle:"Test Job",name:"Ameer",lastName:"Hamza",email:"test@example.com",location:"location 1,Country 1",phoneNumber:"+92 332 123456",aboutme:"My name is AmeerHamza, for testing purpose and volume data I'm going to copy paste a specific strig again and again. Here we go, This is test about me. This is test about me. This is test about me. This is test about me. This is test about me.",jobSkills:["PHP","Node","Python","Javascript"],softSkills:["Leadership","Team building","motivational Speaker"],languages:[{lang:"English",level:"80%"},{lang:"Urdu",level:"100%"}],linkedin:"https://www.linkedin.com/test-user",twitter:"https://www.twitter.com/test-user",github:"https://www.github.com/test-user",website:"https://test.com",education:[{title:"bachelor Education",location:"Test University, City, Country",from:new Date(2015,9,1),to:new Date(2019,4,1),current:!1,summary:"Bachelor education"}],work:[{title:"Full stack developer",location:"locatio of company",from:new Date(2019,1,1),to:new Date(2021,1,1),current:!0,summary:"This is a test description of test job"}],projects:[{title:"Project 1",location:"city, country",from:new Date(2019,1,1),to:new Date(2020,1,1),current:!0,summary:"This is test description of project"}],displayEducation:!0,displayProjects:!0,activeColor:"#5B21B6"},_={jobTitle:"",name:"",lastName:"",email:"",location:"",phoneNumber:"",aboutme:"",jobSkills:[],softSkills:[],languages:[],linkedin:"",twitter:"",github:"",website:"",education:[{title:"",location:"",from:new Date,to:new Date,current:!0,summary:""}],work:[{title:"",location:"",from:new Date,to:new Date,current:!0,summary:""}],projects:[{title:"",location:"",from:new Date,to:new Date,current:!0,summary:""}],displayEducation:!0,displayProjects:!0,activeColor:"#5B21B6"};function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(c.d)({formSettings:m({},l),isLoading:!0});function d(t){return!t||Object.keys(t).length<1||Object.keys(t).every((function(e){return""===t[e]||t[e].length<1}))}function h(){var t=Object(c.g)();return m(m({},Object(c.f)(f)),{},{setUpCvSettings:function(){var e=localStorage.getItem("cvSettings-es")||"{}",n=localStorage.getItem("cvSettings-en")||"{}",r=d(JSON.parse(e)),o=d(JSON.parse(n));r&&o&&(f.formSettings=m({},l)),t.app.i18n.locale.includes("es")&&!r&&(f.formSettings=m(m({},_),JSON.parse(e))),t.app.i18n.locale.includes("en")&&!o&&(f.formSettings=m(m({},_),JSON.parse(n))),t.app.i18n.locale.includes("es")&&r&&!o&&(f.formSettings=m(m({},_),JSON.parse(n)),localStorage.setItem("cvSettings-es",JSON.stringify(f.formSettings))),t.app.i18n.locale.includes("en")&&o&&!r&&(f.formSettings=m(m({},_),JSON.parse(e)),localStorage.setItem("cvSettings-en",JSON.stringify(f.formSettings))),f.isLoading=!1},addSkill:function(t){if("languages"===t.skillType){if(""===t.skill.lang.trim())return;var e=t.skill;f.formSettings.languages.findIndex((function(t){return t.lang===e.lang}))<0&&(f.formSettings.languages=Object(r.a)(new Set([].concat(Object(r.a)(f.formSettings.languages),[{lang:t.skill.lang,level:"".concat(t.skill.level,"%")}]))))}else{if(""===t.skill.trim())return;f.formSettings[t.skillType]=Object(r.a)(new Set([].concat(Object(r.a)(f.formSettings[t.skillType]),[t.skill])))}},removeSkill:function(t){"languages"===t.skillType?f.formSettings[t.skillType]=Object(r.a)(f.formSettings[t.skillType].filter((function(e){return e.lang!==t.skill.lang}))):f.formSettings[t.skillType]=Object(r.a)(f.formSettings[t.skillType].filter((function(e){return e!==t.skill})))},addEntry:function(t){f.formSettings[t.sectionName].push({title:"",location:"",from:new Date,to:new Date,current:!1,summary:""})},removeEntry:function(t){f.formSettings[t.sectionName]=f.formSettings[t.sectionName].filter((function(e){return e.title!==t.entry.title}))},uploadCV:function(t){var e=new FileReader;e.onload=function(t){var data=JSON.parse(t.target.result);f.formSettings=m(m({},_),data.formSettings)},e.readAsText(t.target.files[0])},resetForm:function(){f.formSettings=_,localStorage.removeItem("cvSettings-es"),localStorage.removeItem("cvSettings-en")},changeDisplaySection:function(t){var e="display".concat(t.sectionName.slice(0,1).toUpperCase()).concat(t.sectionName.slice(1));f.formSettings[e]=t.status}})}},344:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("1e896421",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n(344)},350:function(t,e,n){var r=n(92)(!1);r.push([t.i,'p[data-v-578a659e]{line-height:1.625}.cv[data-v-578a659e]{display:flex;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);font-size:.875rem;font-weight:400;width:21cm;height:29.69cm;min-width:21cm;min-height:29.69cm;max-width:21cm;max-height:29.69cm;margin:0;align-self:center;word-break:break-word;transform:scale(.4);overflow-y:hidden}@media screen and (min-width:425px){.cv[data-v-578a659e]{transform:scale(.5)}}@media screen and (min-width:768px){.cv[data-v-578a659e]{transform:scale(.9)}}@media screen and (min-width:1024px){.cv[data-v-578a659e]{transform:scale(.52)}}@media screen and (min-width:1400px){.cv[data-v-578a659e]{transform:scale(.75)}}.cv__side[data-v-578a659e]{padding:2.5rem 1.5rem;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--bg-opacity:1}.cv__name[data-v-578a659e]{font-size:1.875rem;text-transform:uppercase;font-weight:700;line-height:2rem;margin-bottom:.75rem;letter-spacing:.025em;color:var(--primary)}.cv__job-title[data-v-578a659e]{font-size:1.25rem;text-transform:uppercase}.cv__section[data-v-578a659e]{margin-top:1.5rem}.cv__section--main[data-v-578a659e]{margin-top:0;font-size:.875rem}.cv__section-title[data-v-578a659e]{font-size:1.125rem;text-transform:uppercase;margin-bottom:.5rem;font-weight:700;letter-spacing:.025em}.cv__section-title--sm[data-v-578a659e]{font-size:.875rem}.cv__section-title--main[data-v-578a659e]{color:var(--primary)}.cv__icon-wrapper[data-v-578a659e]{display:flex;flex-direction:row;font-weight:300;align-items:center}.cv__icon-wrapper+.cv__icon-wrapper[data-v-578a659e]{margin-top:5px}.cv__icon[data-v-578a659e]{display:flex;margin-right:.25rem;fill:currentColor;border-radius:.25rem;width:1.25rem;height:1.25rem;min-width:1.25rem;align-items:center}.cv__tags[data-v-578a659e]{display:flex;flex-wrap:wrap}.cv__tag[data-v-578a659e]{padding:.25rem .5rem;border-radius:.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:.75rem;margin:.5rem .2rem .25rem;background-color:var(--primary)}.cv__list[data-v-578a659e]{font-weight:300;margin-top:.25rem;list-style:none;padding:0;margin:0}.cv__list li[data-v-578a659e]{padding-left:1em;text-indent:-1em}.cv__list li[data-v-578a659e]:first-child{margin-top:.25rem}.cv__list li[data-v-578a659e]:before{content:"\\2022";padding-right:.2em;color:var(--primary)}.cv__bar[data-v-578a659e]{list-style:none;padding:0;margin:0}.cv__bar li[data-v-578a659e]{display:flex;flex-direction:column}.cv__bar li+li[data-v-578a659e]{margin-top:.75rem}.cv__bar-level[data-v-578a659e]{border-radius:9999px;margin-right:.5rem;position:relative;height:.5rem}.cv__bar-level--in[data-v-578a659e]{position:absolute;display:inline-block;background-color:var(--primary)}.cv__main[data-v-578a659e]{padding:2.5rem 2rem}.cv__event-elem+.cv__event-elem[data-v-578a659e]{margin-top:1.5rem}.cv__bar[data-v-578a659e]{margin-top:1.25rem;margin-bottom:1.25rem;--border-opacity:1;border-color:#f7fafc;border-color:rgba(247,250,252,var(--border-opacity));border-width:2px}.blur[data-v-578a659e]{filter:blur(5px)}',""]),t.exports=r},354:function(t,e,n){"use strict";n.r(e);n(248),n(44),n(45),n(67),n(334),n(31);var r=n(2),o=n(94),c=n(333),l=n(356),_=n.n(l),v=r.default.extend({name:"CvPreview",components:{draggable:_.a},setup:function(){var t=Object(c.a)(),e=t.formSettings,n=t.isLoading,r=(Object(o.g)(),Object(o.a)((function(){return"tel:".concat(e.value.phoneNumber)}))),l=Object(o.a)((function(){return"mailto:".concat(e.value.email)})),_=Object(o.a)((function(){return f(e.value.work)})),v=Object(o.a)((function(){return f(e.value.education)})),m=Object(o.a)((function(){return f(e.value.projects)}));function f(t){return t.map((function(t){return t.summaryArr=t.summary.split("\n").map((function(line){return"-"===line[0]&&(line=line.slice(1).trim()),line})),t})).sort((function(a,b){return new Date(b.from).getTime()-new Date(a.from).getTime()}))}return{formSettings:e,isLoading:n,phoneNumberHref:r,emailHref:l,work:_,education:v,projects:m,formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short"})}}}}),m=(n(349),n(65)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"font-normal relative flex justify-center w-full bg-white",attrs:{id:"cv"}},[r("div",{class:["cv","bg-white",{blur:t.isLoading}],attrs:{tabindex:"0","aria-label":"CV preview"}},[r("div",{staticClass:"cv__side w-1/3"},[r("draggable",{attrs:{group:"people"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.myArray,callback:function(e){t.myArray=e},expression:"myArray"}},[r("h2",{staticClass:"cv__name"},[t._v("\n          "+t._s(t.formSettings.name)+" "+t._s(t.formSettings.lastName)+"\n        ")]),t._v(" "),r("h3",{staticClass:"cv__job-title"},[t._v(t._s(t.formSettings.jobTitle))]),t._v(" "),r("section",{staticClass:"cv__section"},[r("h4",{staticClass:"cv__section-title"},[t._v("Contact")]),t._v(" "),r("div",{staticClass:"flex flex-col"},[t.formSettings.phoneNumber?r("div",{staticClass:"cv__icon-wrapper"},[r("svg",{staticClass:"cv__icon"},[r("use",{attrs:{href:n(331)+"#phone"}})]),t._v(" "),r("a",{attrs:{href:t.phoneNumberHref,rel:"noopener"}},[t._v(t._s(t.formSettings.phoneNumber))])]):t._e(),t._v(" "),t.formSettings.email?r("div",{staticClass:"cv__icon-wrapper"},[r("svg",{staticClass:"cv__icon"},[r("use",{attrs:{href:n(331)+"#email"}})]),t._v(" "),r("a",{attrs:{href:t.emailHref,rel:"noopener"}},[t._v(t._s(t.formSettings.email))])]):t._e(),t._v(" "),t.formSettings.location?r("div",{staticClass:"cv__icon-wrapper"},[r("svg",{staticClass:"cv__icon"},[r("use",{attrs:{href:n(331)+"#location"}})]),t._v(" "),r("span",{attrs:{tabindex:"0"}},[t._v(t._s(t.formSettings.location))])]):t._e()])]),t._v(" "),r("section",{staticClass:"cv__section"},[r("h4",{staticClass:"cv__section-title"},[t._v("Professional Skills")]),t._v(" "),r("ul",{staticClass:"cv__tags"},t._l(t.formSettings.jobSkills,(function(e){return r("li",{key:"preview"+e,staticClass:"cv__tag"},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),t._v(" "),r("section",{staticClass:"cv__section"},[r("h4",{staticClass:"cv__section-title"},[t._v("Soft Skills}")]),t._v(" "),r("ul",{staticClass:"cv__list"},t._l(t.formSettings.softSkills,(function(e){return r("li",{key:"preview"+e},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),t._v(" "),r("section",{staticClass:"cv__section"},[r("h4",{staticClass:"cv__section-title"},[t._v("Languages")]),t._v(" "),r("ul",{staticClass:"cv__bar"},t._l(t.formSettings.languages,(function(e){return r("li",{key:"preview"+e.lang},[t._v("\n              "+t._s(e.lang)+"\n              "),r("div",{staticClass:"cv__bar-level bg-gray-300",style:{width:"100%"}},[r("span",{staticClass:"cv__bar-level cv__bar-level--in",style:{width:e.level}})])])})),0)]),t._v(" "),r("section",{staticClass:"cv__section"},[r("h4",{staticClass:"cv__section-title"},[t._v("SOCIAL")]),t._v(" "),r("div",{staticClass:"flex flex-col"},[t.formSettings.linkedin?r("div",{staticClass:"cv__icon-wrapper"},[r("svg",{staticClass:"cv__icon"},[r("use",{attrs:{href:n(331)+"#linkedin-color"}})]),t._v(" "),r("a",{attrs:{target:"_blank",rel:"noopener",href:"https:linkedin.com/in/"+t.formSettings.linkedin}},[t._v(t._s("linkedin.com/in/"+t.formSettings.linkedin))])]):t._e(),t._v(" "),t.formSettings.twitter?r("div",{staticClass:"cv__icon-wrapper"},[r("svg",{staticClass:"cv__icon"},[r("use",{attrs:{href:n(331)+"#twitter-color"}})]),t._v(" "),r("a",{attrs:{target:"_blank",rel:"noopener",href:"https:twitter.com/"+t.formSettings.twitter}},[t._v(t._s("twitter.com/"+t.formSettings.twitter))])]):t._e(),t._v(" "),t.formSettings.github?r("div",{staticClass:"cv__icon-wrapper"},[r("svg",{staticClass:"cv__icon"},[r("use",{attrs:{href:n(331)+"#github-color"}})]),t._v(" "),r("a",{attrs:{target:"_blank",rel:"noopener",href:"https:github.com/"+t.formSettings.github}},[t._v(t._s("github.com/"+t.formSettings.github))])]):t._e(),t._v(" "),t.formSettings.website?r("div",{staticClass:"cv__icon-wrapper"},[r("svg",{staticClass:"cv__icon"},[r("use",{attrs:{href:n(331)+"#website"}})]),t._v(" "),r("a",{attrs:{target:"_blank",rel:"noopener",href:t.formSettings.website}},[t._v(t._s(t.formSettings.website))])]):t._e()])])])],1),t._v(" "),r("div",{staticClass:"cv__main w-2/3"},[r("draggable",{attrs:{group:"people"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.myArray,callback:function(e){t.myArray=e},expression:"myArray"}},[r("section",{staticClass:"cv__section cv__section--main w-full"},[r("hr",{staticClass:"cv__bar"}),t._v(" "),r("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            About Me\n          ")]),t._v(" "),r("p",{staticClass:"font-light"},[t._v(t._s(t.formSettings.aboutme))]),t._v(" "),r("hr",{staticClass:"cv__bar"})]),t._v(" "),r("section",{staticClass:"cv__section cv__section--main w-full"},[r("hr",{staticClass:"cv__bar"}),t._v(" "),r("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            Experience\n          ")]),t._v(" "),r("ul",{staticClass:"cv__event mt-3"},t._l(t.work,(function(e){return r("li",{key:e.title,staticClass:"cv__event-elem"},[r("h5",{staticClass:"cv__section-title cv__section-title--sm"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),r("div",[r("span",[t._v(t._s(e.location)+" | ")]),t._v(" "),r("span",[t._v("\n                  "+t._s(t.formatDate(e.from))+" -\n                  "),e.current?[t._v("Current")]:[t._v(t._s(t.formatDate(e.to)))]],2)]),t._v(" "),e.summaryArr.length>1?r("ul",{staticClass:"cv__list"},t._l(e.summaryArr,(function(line,e){return r("li",{key:e},[t._v("\n                  "+t._s(line)+"\n                ")])})),0):r("p",{staticClass:"font-light"},[t._v("\n                "+t._s(e.summaryArr[0])+"\n              ")])])})),0),t._v(" "),r("hr",{staticClass:"cv__bar"})]),t._v(" "),t.formSettings.displayEducation?r("section",{staticClass:"cv__section cv__section--main w-full"},[r("hr",{staticClass:"cv__bar"}),t._v(" "),r("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            Education\n          ")]),t._v(" "),r("ul",{staticClass:"cv__event mt-3"},t._l(t.education,(function(e){return r("li",{key:e.title,staticClass:"cv__event-elem"},[r("h5",{staticClass:"cv__section-title cv__section-title--sm"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),r("div",[r("span",[t._v(t._s(e.location)+" | ")]),t._v(" "),r("span",[t._v("\n                  "+t._s(t.formatDate(e.from))+" -\n                  "),e.current?[t._v("Current")]:[t._v(t._s(t.formatDate(e.to)))]],2)]),t._v(" "),e.summaryArr.length>1?r("ul",{staticClass:"cv__list"},t._l(e.summaryArr,(function(line,e){return r("li",{key:e},[t._v("\n                  "+t._s(line)+"\n                ")])})),0):r("p",{staticClass:"font-light"},[t._v("\n                "+t._s(e.summaryArr[0])+"\n              ")])])})),0),t._v(" "),r("hr",{staticClass:"cv__bar"})]):t._e(),t._v(" "),t.formSettings.displayProjects?r("section",{staticClass:"cv__section cv__section--main w-full"},[r("hr",{staticClass:"cv__bar"}),t._v(" "),r("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            Projects\n          ")]),t._v(" "),r("ul",{staticClass:"cv__event mt-3"},t._l(t.projects,(function(e){return r("li",{key:e.title,staticClass:"cv__event-elem"},[r("h5",{staticClass:"cv__section-title cv__section-title--sm"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),r("div",[r("span",[t._v(t._s(e.location)+" | ")]),t._v(" "),r("span",[t._v("\n                  "+t._s(t.formatDate(e.from))+" -\n                  "),e.current?[t._v(t._s(t.Current))]:[t._v(t._s(t.formatDate(e.to)))]],2)]),t._v(" "),e.summaryArr.length>1?r("ul",{staticClass:"cv__list"},t._l(e.summaryArr,(function(line,e){return r("li",{key:e},[t._v("\n                  "+t._s(line)+"\n                ")])})),0):r("p",{staticClass:"font-light"},[t._v("\n                "+t._s(e.summaryArr[0])+"\n              ")])])})),0),t._v(" "),r("hr",{staticClass:"cv__bar"})]):t._e()])],1)])])}),[],!1,null,"578a659e",null);e.default=component.exports}}]);