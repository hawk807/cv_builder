(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{344:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("1e896421",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";r(344)},350:function(t,e,r){var n=r(92)(!1);n.push([t.i,'p[data-v-578a659e]{line-height:1.625}.cv[data-v-578a659e]{display:flex;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);font-size:.875rem;font-weight:400;width:21cm;height:29.69cm;min-width:21cm;min-height:29.69cm;max-width:21cm;max-height:29.69cm;margin:0;align-self:center;word-break:break-word;transform:scale(.4);overflow-y:hidden}@media screen and (min-width:425px){.cv[data-v-578a659e]{transform:scale(.5)}}@media screen and (min-width:768px){.cv[data-v-578a659e]{transform:scale(.9)}}@media screen and (min-width:1024px){.cv[data-v-578a659e]{transform:scale(.52)}}@media screen and (min-width:1400px){.cv[data-v-578a659e]{transform:scale(.75)}}.cv__side[data-v-578a659e]{padding:2.5rem 1.5rem;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--bg-opacity:1}.cv__name[data-v-578a659e]{font-size:1.875rem;text-transform:uppercase;font-weight:700;line-height:2rem;margin-bottom:.75rem;letter-spacing:.025em;color:var(--primary)}.cv__job-title[data-v-578a659e]{font-size:1.25rem;text-transform:uppercase}.cv__section[data-v-578a659e]{margin-top:1.5rem}.cv__section--main[data-v-578a659e]{margin-top:0;font-size:.875rem}.cv__section-title[data-v-578a659e]{font-size:1.125rem;text-transform:uppercase;margin-bottom:.5rem;font-weight:700;letter-spacing:.025em}.cv__section-title--sm[data-v-578a659e]{font-size:.875rem}.cv__section-title--main[data-v-578a659e]{color:var(--primary)}.cv__icon-wrapper[data-v-578a659e]{display:flex;flex-direction:row;font-weight:300;align-items:center}.cv__icon-wrapper+.cv__icon-wrapper[data-v-578a659e]{margin-top:5px}.cv__icon[data-v-578a659e]{display:flex;margin-right:.25rem;fill:currentColor;border-radius:.25rem;width:1.25rem;height:1.25rem;min-width:1.25rem;align-items:center}.cv__tags[data-v-578a659e]{display:flex;flex-wrap:wrap}.cv__tag[data-v-578a659e]{padding:.25rem .5rem;border-radius:.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:.75rem;margin:.5rem .2rem .25rem;background-color:var(--primary)}.cv__list[data-v-578a659e]{font-weight:300;margin-top:.25rem;list-style:none;padding:0;margin:0}.cv__list li[data-v-578a659e]{padding-left:1em;text-indent:-1em}.cv__list li[data-v-578a659e]:first-child{margin-top:.25rem}.cv__list li[data-v-578a659e]:before{content:"\\2022";padding-right:.2em;color:var(--primary)}.cv__bar[data-v-578a659e]{list-style:none;padding:0;margin:0}.cv__bar li[data-v-578a659e]{display:flex;flex-direction:column}.cv__bar li+li[data-v-578a659e]{margin-top:.75rem}.cv__bar-level[data-v-578a659e]{border-radius:9999px;margin-right:.5rem;position:relative;height:.5rem}.cv__bar-level--in[data-v-578a659e]{position:absolute;display:inline-block;background-color:var(--primary)}.cv__main[data-v-578a659e]{padding:2.5rem 2rem}.cv__event-elem+.cv__event-elem[data-v-578a659e]{margin-top:1.5rem}.cv__bar[data-v-578a659e]{margin-top:1.25rem;margin-bottom:1.25rem;--border-opacity:1;border-color:#f7fafc;border-color:rgba(247,250,252,var(--border-opacity));border-width:2px}.blur[data-v-578a659e]{filter:blur(5px)}',""]),t.exports=n},354:function(t,e,r){"use strict";r.r(e);r(248),r(44),r(45),r(67),r(334),r(31);var n=r(2),c=r(94),o=r(333),l=r(356),_=r.n(l),v=n.default.extend({name:"CvPreview",components:{draggable:_.a},setup:function(){var t=Object(o.a)(),e=t.formSettings,r=t.isLoading,n=(Object(c.g)(),Object(c.a)((function(){return"tel:".concat(e.value.phoneNumber)}))),l=Object(c.a)((function(){return"mailto:".concat(e.value.email)})),_=Object(c.a)((function(){return d(e.value.work)})),v=Object(c.a)((function(){return d(e.value.education)})),m=Object(c.a)((function(){return d(e.value.projects)}));function d(t){return t.map((function(t){return t.summaryArr=t.summary.split("\n").map((function(line){return"-"===line[0]&&(line=line.slice(1).trim()),line})),t})).sort((function(a,b){return new Date(b.from).getTime()-new Date(a.from).getTime()}))}return{formSettings:e,isLoading:r,phoneNumberHref:n,emailHref:l,work:_,education:v,projects:m,formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short"})}}}}),m=(r(349),r(65)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-normal relative flex justify-center w-full bg-white",attrs:{id:"cv"}},[n("div",{class:["cv","bg-white",{blur:t.isLoading}],attrs:{tabindex:"0","aria-label":"CV preview"}},[n("div",{staticClass:"cv__side w-1/3"},[n("draggable",{attrs:{group:"people"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.myArray,callback:function(e){t.myArray=e},expression:"myArray"}},[n("h2",{staticClass:"cv__name"},[t._v("\n          "+t._s(t.formSettings.name)+" "+t._s(t.formSettings.lastName)+"\n        ")]),t._v(" "),n("h3",{staticClass:"cv__job-title"},[t._v(t._s(t.formSettings.jobTitle))]),t._v(" "),n("section",{staticClass:"cv__section"},[n("h4",{staticClass:"cv__section-title"},[t._v("Contact")]),t._v(" "),n("div",{staticClass:"flex flex-col"},[t.formSettings.phoneNumber?n("div",{staticClass:"cv__icon-wrapper"},[n("svg",{staticClass:"cv__icon"},[n("use",{attrs:{href:r(331)+"#phone"}})]),t._v(" "),n("a",{attrs:{href:t.phoneNumberHref,rel:"noopener"}},[t._v(t._s(t.formSettings.phoneNumber))])]):t._e(),t._v(" "),t.formSettings.email?n("div",{staticClass:"cv__icon-wrapper"},[n("svg",{staticClass:"cv__icon"},[n("use",{attrs:{href:r(331)+"#email"}})]),t._v(" "),n("a",{attrs:{href:t.emailHref,rel:"noopener"}},[t._v(t._s(t.formSettings.email))])]):t._e(),t._v(" "),t.formSettings.location?n("div",{staticClass:"cv__icon-wrapper"},[n("svg",{staticClass:"cv__icon"},[n("use",{attrs:{href:r(331)+"#location"}})]),t._v(" "),n("span",{attrs:{tabindex:"0"}},[t._v(t._s(t.formSettings.location))])]):t._e()])]),t._v(" "),n("section",{staticClass:"cv__section"},[n("h4",{staticClass:"cv__section-title"},[t._v("Professional Skills")]),t._v(" "),n("ul",{staticClass:"cv__tags"},t._l(t.formSettings.jobSkills,(function(e){return n("li",{key:"preview"+e,staticClass:"cv__tag"},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),t._v(" "),n("section",{staticClass:"cv__section"},[n("h4",{staticClass:"cv__section-title"},[t._v("Soft Skills}")]),t._v(" "),n("ul",{staticClass:"cv__list"},t._l(t.formSettings.softSkills,(function(e){return n("li",{key:"preview"+e},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),t._v(" "),n("section",{staticClass:"cv__section"},[n("h4",{staticClass:"cv__section-title"},[t._v("Languages")]),t._v(" "),n("ul",{staticClass:"cv__bar"},t._l(t.formSettings.languages,(function(e){return n("li",{key:"preview"+e.lang},[t._v("\n              "+t._s(e.lang)+"\n              "),n("div",{staticClass:"cv__bar-level bg-gray-300",style:{width:"100%"}},[n("span",{staticClass:"cv__bar-level cv__bar-level--in",style:{width:e.level}})])])})),0)]),t._v(" "),n("section",{staticClass:"cv__section"},[n("h4",{staticClass:"cv__section-title"},[t._v("SOCIAL")]),t._v(" "),n("div",{staticClass:"flex flex-col"},[t.formSettings.linkedin?n("div",{staticClass:"cv__icon-wrapper"},[n("svg",{staticClass:"cv__icon"},[n("use",{attrs:{href:r(331)+"#linkedin-color"}})]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"noopener",href:"https:linkedin.com/in/"+t.formSettings.linkedin}},[t._v(t._s("linkedin.com/in/"+t.formSettings.linkedin))])]):t._e(),t._v(" "),t.formSettings.twitter?n("div",{staticClass:"cv__icon-wrapper"},[n("svg",{staticClass:"cv__icon"},[n("use",{attrs:{href:r(331)+"#twitter-color"}})]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"noopener",href:"https:twitter.com/"+t.formSettings.twitter}},[t._v(t._s("twitter.com/"+t.formSettings.twitter))])]):t._e(),t._v(" "),t.formSettings.github?n("div",{staticClass:"cv__icon-wrapper"},[n("svg",{staticClass:"cv__icon"},[n("use",{attrs:{href:r(331)+"#github-color"}})]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"noopener",href:"https:github.com/"+t.formSettings.github}},[t._v(t._s("github.com/"+t.formSettings.github))])]):t._e(),t._v(" "),t.formSettings.website?n("div",{staticClass:"cv__icon-wrapper"},[n("svg",{staticClass:"cv__icon"},[n("use",{attrs:{href:r(331)+"#website"}})]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"noopener",href:t.formSettings.website}},[t._v(t._s(t.formSettings.website))])]):t._e()])])])],1),t._v(" "),n("div",{staticClass:"cv__main w-2/3"},[n("draggable",{attrs:{group:"people"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.myArray,callback:function(e){t.myArray=e},expression:"myArray"}},[n("section",{staticClass:"cv__section cv__section--main w-full"},[n("hr",{staticClass:"cv__bar"}),t._v(" "),n("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            About Me\n          ")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v(t._s(t.formSettings.aboutme))]),t._v(" "),n("hr",{staticClass:"cv__bar"})]),t._v(" "),n("section",{staticClass:"cv__section cv__section--main w-full"},[n("hr",{staticClass:"cv__bar"}),t._v(" "),n("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            Experience\n          ")]),t._v(" "),n("ul",{staticClass:"cv__event mt-3"},t._l(t.work,(function(e){return n("li",{key:e.title,staticClass:"cv__event-elem"},[n("h5",{staticClass:"cv__section-title cv__section-title--sm"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("div",[n("span",[t._v(t._s(e.location)+" | ")]),t._v(" "),n("span",[t._v("\n                  "+t._s(t.formatDate(e.from))+" -\n                  "),e.current?[t._v("Current")]:[t._v(t._s(t.formatDate(e.to)))]],2)]),t._v(" "),e.summaryArr.length>1?n("ul",{staticClass:"cv__list"},t._l(e.summaryArr,(function(line,e){return n("li",{key:e},[t._v("\n                  "+t._s(line)+"\n                ")])})),0):n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(e.summaryArr[0])+"\n              ")])])})),0),t._v(" "),n("hr",{staticClass:"cv__bar"})]),t._v(" "),t.formSettings.displayEducation?n("section",{staticClass:"cv__section cv__section--main w-full"},[n("hr",{staticClass:"cv__bar"}),t._v(" "),n("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            Education\n          ")]),t._v(" "),n("ul",{staticClass:"cv__event mt-3"},t._l(t.education,(function(e){return n("li",{key:e.title,staticClass:"cv__event-elem"},[n("h5",{staticClass:"cv__section-title cv__section-title--sm"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("div",[n("span",[t._v(t._s(e.location)+" | ")]),t._v(" "),n("span",[t._v("\n                  "+t._s(t.formatDate(e.from))+" -\n                  "),e.current?[t._v("Current")]:[t._v(t._s(t.formatDate(e.to)))]],2)]),t._v(" "),e.summaryArr.length>1?n("ul",{staticClass:"cv__list"},t._l(e.summaryArr,(function(line,e){return n("li",{key:e},[t._v("\n                  "+t._s(line)+"\n                ")])})),0):n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(e.summaryArr[0])+"\n              ")])])})),0),t._v(" "),n("hr",{staticClass:"cv__bar"})]):t._e(),t._v(" "),t.formSettings.displayProjects?n("section",{staticClass:"cv__section cv__section--main w-full"},[n("hr",{staticClass:"cv__bar"}),t._v(" "),n("h4",{staticClass:"cv__section-title cv__section-title--main"},[t._v("\n            Projects\n          ")]),t._v(" "),n("ul",{staticClass:"cv__event mt-3"},t._l(t.projects,(function(e){return n("li",{key:e.title,staticClass:"cv__event-elem"},[n("h5",{staticClass:"cv__section-title cv__section-title--sm"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("div",[n("span",[t._v(t._s(e.location)+" | ")]),t._v(" "),n("span",[t._v("\n                  "+t._s(t.formatDate(e.from))+" -\n                  "),e.current?[t._v(t._s(t.Current))]:[t._v(t._s(t.formatDate(e.to)))]],2)]),t._v(" "),e.summaryArr.length>1?n("ul",{staticClass:"cv__list"},t._l(e.summaryArr,(function(line,e){return n("li",{key:e},[t._v("\n                  "+t._s(line)+"\n                ")])})),0):n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(e.summaryArr[0])+"\n              ")])])})),0),t._v(" "),n("hr",{staticClass:"cv__bar"})]):t._e()])],1)])])}),[],!1,null,"578a659e",null);e.default=component.exports},357:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("4b580c36",content,!0,{sourceMap:!1})},363:function(t,e,r){"use strict";r(357)},364:function(t,e,r){var n=r(92)(!1);n.push([t.i,"@media screen and (min-width:1024px){.main[data-v-6499f130]{display:flex;height:100%}.settings[data-v-6499f130]{overflow-y:auto;width:41.666667%}}",""]),t.exports=n},368:function(t,e,r){"use strict";r.r(e);var n=r(2),c=r(359),o=r(354),l=n.default.extend({name:"Index",components:{CvSettings:c.default,CvPreview:o.default},head:function(){return{title:"CV_Builder using NUXT.js",meta:[{hid:"description",name:"description",content:"This is a CV builder made in NUXT"},{hid:"author",name:"author",content:"AmeerHamza"}]}}}),_=(r(363),r(65)),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("cv-settings",{staticClass:"settings",attrs:{id:"settings"}}),t._v(" "),r("cv-preview")],1)}),[],!1,null,"6499f130",null);e.default=component.exports;installComponents(component,{CvSettings:r(359).default,CvPreview:r(354).default})}}]);