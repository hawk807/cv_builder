(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{331:function(e,t,n){e.exports=n.p+"img/sprite.0e3e933.svg"},338:function(e,t,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("bc3b69a2",content,!0,{sourceMap:!1})},339:function(e,t,n){"use strict";n.r(t);var o=n(2).default.extend({name:"ExpansionPanel",props:{panelName:{type:String,default:function(){return""}}},data:function(){return{isOpen:!1}},methods:{togglePanel:function(){this.isOpen=!this.isOpen},enter:function(element){element.style.height="auto";var e=getComputedStyle(element).height;element.style.height="0",getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=e}))},afterEnter:function(element){element.style.height="auto"},leave:function(element){var e=getComputedStyle(element).height;element.style.height=e,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height="0"}))}}}),r=(n(340),n(65)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"expansion-panel"},[o("div",{staticClass:"expansion-panel__header",on:{click:function(t){return t.preventDefault(),e.togglePanel.apply(null,arguments)}}},[o("div",{staticClass:"expansion-panel__title"},[e._t("title",(function(){return[e._v("Título")]})),e._v(" "),o("button",{attrs:{id:"expansionPanel"+e.panelName,type:"button","aria-label":"Expansion panel "+e.panelName,"aria-expanded":""+e.isOpen,"aria-controls":e.panelName},on:{click:function(t){return t.stopPropagation(),e.togglePanel.apply(null,arguments)}}},[o("svg",{class:["expansion-panel__arrow",{"expansion-panel__arrow--open":e.isOpen}]},[o("use",{attrs:{href:n(331)+"#panel-arrow"}})])])],2),e._v(" "),e._t("action-button")],2),e._v(" "),o("transition",{attrs:{name:"expand"},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave}},[e.isOpen?e._t("content",(function(){return[e._v("Contenido")]}),{id:e.panelName,role:"region",ariaLabelledby:"expansionPanel"+e.panelName}):e._e()],2)],1)}),[],!1,null,"2799feac",null);t.default=component.exports},340:function(e,t,n){"use strict";n(338)},341:function(e,t,n){var o=n(92)(!1);o.push([e.i,"*[data-v-2799feac]{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}.expansion-panel[data-v-2799feac]{overflow:hidden;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--bg-opacity:1;position:relative;padding:.75rem 1.5rem}.expansion-panel .expansion-panel[data-v-2799feac]{padding:.25rem}.expansion-panel__header[data-v-2799feac]{flex-direction:row-reverse;margin-bottom:2.5rem}.expansion-panel__header[data-v-2799feac],.expansion-panel__title[data-v-2799feac]{display:flex;align-items:center;justify-content:space-between;width:100%}.expansion-panel__title[data-v-2799feac]{background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--bg-opacity:1;z-index:10;text-transform:capitalize}.expansion-panel__title[data-v-2799feac]:hover{cursor:pointer}.expansion-panel__panel[data-v-2799feac]{z-index:0}.expansion-panel__arrow[data-v-2799feac]{width:1.25rem;height:1.25rem;transform:rotate(0);transition:transform .25s ease-in-out}.expansion-panel__arrow--open[data-v-2799feac]{transform:rotate(180deg)}.expand-enter-active[data-v-2799feac],.expand-leave-active[data-v-2799feac]{transition:height .35s ease-in-out,opacity .35s ease-in-out;overflow:hidden}.expand-enter[data-v-2799feac],.expand-leave-to[data-v-2799feac]{height:0;opacity:0}",""]),e.exports=o}}]);