exports.ids = [2,6];
exports.modules = {

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.0e3e933.svg";

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCvState; });

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(34);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(37);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(9);

// CONCATENATED MODULE: ./data/example-cv-settings.ts
const cvSettingTemplate = {
  jobTitle: 'Test Job',
  name: 'Ameer',
  lastName: 'Hamza',
  email: 'test@example.com',
  location: 'location 1,Country 1',
  phoneNumber: '+92 332 123456',
  aboutme: "My name is AmeerHamza, for testing purpose and volume data I'm going to copy paste a specific strig again and again. Here we go, This is test about me. This is test about me. This is test about me. This is test about me. This is test about me.",
  jobSkills: ['PHP', 'Node', 'Python', 'Javascript'],
  softSkills: ['Leadership', 'Team building', 'motivational Speaker'],
  languages: [{
    lang: 'English',
    level: '80%'
  }, {
    lang: 'Urdu',
    level: '100%'
  }],
  linkedin: 'https://www.linkedin.com/test-user',
  twitter: 'https://www.twitter.com/test-user',
  github: 'https://www.github.com/test-user',
  website: 'https://test.com',
  education: [{
    title: 'bachelor Education',
    location: 'Test University, City, Country',
    from: new Date(2015, 9, 1),
    to: new Date(2019, 4, 1),
    current: false,
    summary: 'Bachelor education'
  }],
  work: [{
    title: 'Full stack developer',
    location: 'locatio of company',
    from: new Date(2019, 1, 1),
    to: new Date(2021, 1, 1),
    current: true,
    summary: 'This is a test description of test job'
  }],
  projects: [{
    title: 'Project 1',
    location: 'city, country',
    from: new Date(2019, 1, 1),
    to: new Date(2020, 1, 1),
    current: true,
    summary: 'This is test description of project'
  }],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#5B21B6'
};
const cvSettingsEmptyTemplate = {
  jobTitle: '',
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  languages: [],
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [{
    title: '',
    location: '',
    from: new Date(),
    to: new Date(),
    current: true,
    summary: ''
  }],
  work: [{
    title: '',
    location: '',
    from: new Date(),
    to: new Date(),
    current: true,
    summary: ''
  }],
  projects: [{
    title: '',
    location: '',
    from: new Date(),
    to: new Date(),
    current: true,
    summary: ''
  }],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#5B21B6'
};
// CONCATENATED MODULE: ./data/useCvState.ts


















const state = Object(runtime["d" /* reactive */])({
  formSettings: { ...cvSettingTemplate
  },
  isLoading: true
});

function isCvSettingsFromLocalStorageEmpty(item) {
  if (!item || Object.keys(item).length < 1) return true;
  return Object.keys(item).every(key => item[key] === '' || item[key].length < 1);
}

function useCvState() {
  const context = Object(runtime["g" /* useContext */])();

  function setUpCvSettings() {
    const cvEs = localStorage.getItem('cvSettings-es') || '{}';
    const cvEn = localStorage.getItem('cvSettings-en') || '{}';
    const isCvEsEmpty = isCvSettingsFromLocalStorageEmpty(JSON.parse(cvEs));
    const isCvEnEmpty = isCvSettingsFromLocalStorageEmpty(JSON.parse(cvEn));

    if (isCvEsEmpty && isCvEnEmpty) {
      state.formSettings = { ...cvSettingTemplate
      };
    }

    if (context.app.i18n.locale.includes('es') && !isCvEsEmpty) {
      state.formSettings = { ...cvSettingsEmptyTemplate,
        ...JSON.parse(cvEs)
      };
    }

    if (context.app.i18n.locale.includes('en') && !isCvEnEmpty) {
      state.formSettings = { ...cvSettingsEmptyTemplate,
        ...JSON.parse(cvEn)
      };
    }

    if (context.app.i18n.locale.includes('es') && isCvEsEmpty && !isCvEnEmpty) {
      state.formSettings = { ...cvSettingsEmptyTemplate,
        ...JSON.parse(cvEn)
      };
      localStorage.setItem('cvSettings-es', JSON.stringify(state.formSettings));
    }

    if (context.app.i18n.locale.includes('en') && isCvEnEmpty && !isCvEsEmpty) {
      state.formSettings = { ...cvSettingsEmptyTemplate,
        ...JSON.parse(cvEs)
      };
      localStorage.setItem('cvSettings-en', JSON.stringify(state.formSettings));
    }

    state.isLoading = false;
  }

  function addSkill(e) {
    if (e.skillType === 'languages') {
      if (e.skill.lang.trim() === '') return;
      const newLang = e.skill;
      const newLangIdx = state.formSettings.languages.findIndex(lang => lang.lang === newLang.lang);

      if (newLangIdx < 0) {
        state.formSettings.languages = [...new Set([...state.formSettings.languages, {
          lang: e.skill.lang,
          level: `${e.skill.level}%`
        }])];
      }
    } else {
      if (e.skill.trim() === '') return;
      state.formSettings[e.skillType] = [...new Set([...state.formSettings[e.skillType], e.skill])];
    }
  }

  function removeSkill(e) {
    if (e.skillType === 'languages') {
      state.formSettings[e.skillType] = [...state.formSettings[e.skillType].filter(skill => skill.lang !== e.skill.lang)];
    } else {
      state.formSettings[e.skillType] = [...state.formSettings[e.skillType].filter(skill => skill !== e.skill)];
    }
  }

  function addEntry(e) {
    state.formSettings[e.sectionName].push({
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: false,
      summary: ''
    });
  }

  function removeEntry(e) {
    state.formSettings[e.sectionName] = state.formSettings[e.sectionName].filter(entry => entry.title !== e.entry.title);
  }

  function uploadCV(e) {
    const fr = new FileReader();

    fr.onload = e => {
      const data = JSON.parse(e.target.result);
      state.formSettings = { ...cvSettingsEmptyTemplate,
        ...data.formSettings
      };
    };

    fr.readAsText(e.target.files[0]);
  }

  function resetForm() {
    state.formSettings = cvSettingsEmptyTemplate;
    localStorage.removeItem('cvSettings-es');
    localStorage.removeItem('cvSettings-en');
  }

  function changeDisplaySection(e) {
    const propName = `display${e.sectionName.slice(0, 1).toUpperCase()}${e.sectionName.slice(1)}`;
    state.formSettings[propName] = e.status;
  }

  return { ...Object(runtime["f" /* toRefs */])(state),
    setUpCvSettings,
    addSkill,
    removeSkill,
    addEntry,
    removeEntry,
    uploadCV,
    resetForm,
    changeDisplaySection
  };
}

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExpansionPanel.vue?vue&type=template&id=2799feac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"expansion-panel"},[_vm._ssrNode("<div class=\"expansion-panel__header\" data-v-2799feac>","</div>",[_vm._ssrNode("<div class=\"expansion-panel__title\" data-v-2799feac>","</div>",[_vm._t("title",function(){return [_vm._v("Título")]}),_vm._ssrNode(" <button"+(_vm._ssrAttr("id",("expansionPanel" + _vm.panelName)))+" type=\"button\""+(_vm._ssrAttr("aria-label",("Expansion panel " + _vm.panelName)))+(_vm._ssrAttr("aria-expanded",("" + _vm.isOpen)))+(_vm._ssrAttr("aria-controls",_vm.panelName))+" data-v-2799feac><svg"+(_vm._ssrClass(null,[
            'expansion-panel__arrow',
            { 'expansion-panel__arrow--open': _vm.isOpen } ]))+" data-v-2799feac><use"+(_vm._ssrAttr("href",__webpack_require__(70) + "#panel-arrow"))+" data-v-2799feac></use></svg></button>")],2),_vm._ssrNode(" "),_vm._t("action-button")],2),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"expand"},on:{"enter":_vm.enter,"after-enter":_vm.afterEnter,"leave":_vm.leave}},[(_vm.isOpen)?_vm._t("content",function(){return [_vm._v("Contenido")]},{"id":_vm.panelName,"role":"region","ariaLabelledby":("expansionPanel" + _vm.panelName)}):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ExpansionPanel.vue?vue&type=template&id=2799feac&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExpansionPanel.vue?vue&type=script&lang=ts&

/* harmony default export */ var ExpansionPanelvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'ExpansionPanel',
  props: {
    panelName: {
      type: String,
      default: () => ''
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    togglePanel() {
      this.isOpen = !this.isOpen;
    },

    enter(element) {
      element.style.height = 'auto';
      const height = getComputedStyle(element).height;
      element.style.height = '0'; // eslint-disable-next-line no-unused-expressions

      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },

    afterEnter(element) {
      element.style.height = 'auto';
    },

    leave(element) {
      const height = getComputedStyle(element).height;
      element.style.height = height; // eslint-disable-next-line no-unused-expressions

      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = '0';
      });
    }

  }
}));
// CONCATENATED MODULE: ./components/ExpansionPanel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ExpansionPanelvue_type_script_lang_ts_ = (ExpansionPanelvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ExpansionPanel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ExpansionPanelvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2799feac",
  "c35203bc"
  
)

/* harmony default export */ var ExpansionPanel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("bc3b69a2", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("37de42d0", content, true, context)
};

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionPanel_vue_vue_type_style_index_0_id_2799feac_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionPanel_vue_vue_type_style_index_0_id_2799feac_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionPanel_vue_vue_type_style_index_0_id_2799feac_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionPanel_vue_vue_type_style_index_0_id_2799feac_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionPanel_vue_vue_type_style_index_0_id_2799feac_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-2799feac]{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}.expansion-panel[data-v-2799feac]{overflow:hidden;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--bg-opacity:1;position:relative;padding:.75rem 1.5rem}.expansion-panel .expansion-panel[data-v-2799feac]{padding:.25rem}.expansion-panel__header[data-v-2799feac]{flex-direction:row-reverse;margin-bottom:2.5rem}.expansion-panel__header[data-v-2799feac],.expansion-panel__title[data-v-2799feac]{display:flex;align-items:center;justify-content:space-between;width:100%}.expansion-panel__title[data-v-2799feac]{background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--bg-opacity:1;z-index:10;text-transform:capitalize}.expansion-panel__title[data-v-2799feac]:hover{cursor:pointer}.expansion-panel__panel[data-v-2799feac]{z-index:0}.expansion-panel__arrow[data-v-2799feac]{width:1.25rem;height:1.25rem;transform:rotate(0);transition:transform .25s ease-in-out}.expansion-panel__arrow--open[data-v-2799feac]{transform:rotate(180deg)}.expand-enter-active[data-v-2799feac],.expand-leave-active[data-v-2799feac]{transition:height .35s ease-in-out,opacity .35s ease-in-out;overflow:hidden}.expand-enter[data-v-2799feac],.expand-leave-to[data-v-2799feac]{height:0;opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvDynamicSection.vue?vue&type=template&id=00a85f98&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dynamic-section"},[_vm._ssrNode("<button type=\"button\" class=\"form__btn col-span-full\" data-v-00a85f98>"+_vm._ssrEscape("\n    Add "+_vm._s(_vm.sectionName)+"\n  ")+"</button> "),_vm._ssrNode("<ul class=\"col-span-full\" data-v-00a85f98>","</ul>",_vm._l((_vm.entries),function(entry,index){return _vm._ssrNode("<li data-v-00a85f98>","</li>",[_c('expansion-panel',{staticClass:"mb-3",attrs:{"panel-name":("" + (entry.title))},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('h3',{staticClass:"form__legend form__legend--small dynamic-section__title"},[_c('span',[_vm._v("\n              "+_vm._s(entry.title)+"\n            ")])])]},proxy:true},{key:"action-button",fn:function(){return [_c('button',{staticClass:"form__btn form__btn--delete mr-3",attrs:{"aria-label":("Remove " + (entry.title) + " " + _vm.sectionName + " from CV"),"type":"button"},on:{"click":function($event){$event.stopPropagation();return _vm.removeEntry({ sectionName: _vm.sectionName, entry: entry })}}},[_c('svg',{staticClass:"form__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#trash"}})])])]},proxy:true},{key:"content",fn:function(){return [_c('div',{staticClass:"dynamic-section"},[_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label",attrs:{"for":("entryTitle--" + (entry.title))}},[(_vm.sectionName === 'education')?[_vm._v("🎓")]:(_vm.sectionName === 'projects')?[_vm._v("✨")]:[_vm._v("💼")],_vm._v("\n                Title\n              ")],2),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(entry.title),expression:"entry.title"}],staticClass:"form__control",attrs:{"id":("entryTitle--" + (entry.title)),"type":"text"},domProps:{"value":(entry.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(entry, "title", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label",attrs:{"for":("entryLocation-" + (entry.title))}},[_vm._v("\n                📍 Location\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(entry.location),expression:"entry.location"}],staticClass:"form__control",attrs:{"id":("entryLocation-" + (entry.title)),"type":"text"},domProps:{"value":(entry.location)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(entry, "location", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label",attrs:{"for":("entryFrom-" + (entry.title))}},[_vm._v("\n                📆 from\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(entry.from),expression:"entry.from"}],staticClass:"form__control",attrs:{"id":("entryFrom-" + (entry.title)),"type":"date"},domProps:{"value":(entry.from)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(entry, "from", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label flex justify-between",attrs:{"for":("entryTo-" + (entry.title))}},[_vm._v("\n                📆 To\n                "),_c('label',{staticClass:"form__label flex items-center"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(entry.current),expression:"entry.current"}],staticClass:"form__control form__control--checkbox",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(entry.current)?_vm._i(entry.current,null)>-1:(entry.current)},on:{"change":function($event){var $$a=entry.current,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(entry, "current", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(entry, "current", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(entry, "current", $$c)}}}}),_vm._v("\n                  Current\n                ")])]),_vm._v(" "),(!entry.current)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(entry.to),expression:"entry.to"}],staticClass:"form__control",attrs:{"id":("entryTo-" + (entry.title)),"type":"date"},domProps:{"value":(entry.to)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(entry, "to", $event.target.value)}}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label",attrs:{"for":("entrySummary-" + (entry.title))}},[_vm._v("\n                📝 Summary\n              ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(entry.summary),expression:"entry.summary"}],staticClass:"form__control",attrs:{"id":("entrySummary-" + (entry.title)),"name":"entrySummary","cols":"30","rows":"10"},domProps:{"value":(entry.summary)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(entry, "summary", $event.target.value)}}})])])]},proxy:true}],null,true)})],1)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CvDynamicSection.vue?vue&type=template&id=00a85f98&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/ExpansionPanel.vue + 4 modules
var ExpansionPanel = __webpack_require__(72);

// EXTERNAL MODULE: ./data/useCvState.ts + 1 modules
var useCvState = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvDynamicSection.vue?vue&type=script&lang=ts&



/* harmony default export */ var CvDynamicSectionvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'CvDynamicEntry',
  components: {
    ExpansionPanel: ExpansionPanel["default"]
  },
  props: {
    sectionName: {
      type: String,
      default: 'Section name'
    },
    entries: {
      type: Array,
      default: () => {
        return [{
          title: '',
          location: '',
          from: new Date(),
          to: new Date(),
          current: false,
          summary: ''
        }];
      }
    }
  },

  setup() {
    const {
      addEntry,
      removeEntry
    } = Object(useCvState["a" /* useCvState */])();
    return {
      addEntry,
      removeEntry
    };
  }

}));
// CONCATENATED MODULE: ./components/CvDynamicSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CvDynamicSectionvue_type_script_lang_ts_ = (CvDynamicSectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CvDynamicSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CvDynamicSectionvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00a85f98",
  "21e33f56"
  
)

/* harmony default export */ var CvDynamicSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ExpansionPanel: __webpack_require__(72).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvDynamicSection_vue_vue_type_style_index_0_id_00a85f98_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvDynamicSection_vue_vue_type_style_index_0_id_00a85f98_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvDynamicSection_vue_vue_type_style_index_0_id_00a85f98_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvDynamicSection_vue_vue_type_style_index_0_id_00a85f98_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvDynamicSection_vue_vue_type_style_index_0_id_00a85f98_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dynamic-section[data-v-00a85f98]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-column-gap:.75rem;-moz-column-gap:.75rem;column-gap:.75rem;grid-row-gap:1rem;row-gap:1rem}.dynamic-section__title[data-v-00a85f98]{display:flex;align-items:center;flex-direction:row-reverse}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=cv-dynamic-section.js.map