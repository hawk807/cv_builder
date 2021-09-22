exports.ids = [9,1,2,3,4,5,6];
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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0665fc58", content, true, context)
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvDisplayCheckbox.vue?vue&type=template&id=c65ebe72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__display-checkbox checkbox"},[_vm._ssrNode("<label class=\"checkbox__label\" data-v-c65ebe72><input type=\"checkbox\""+(_vm._ssrAttr("checked",_vm.displaySection))+" class=\"checkbox__input\" data-v-c65ebe72> <span class=\"checkbox__text\" data-v-c65ebe72> Display section on CV </span></label>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CvDisplayCheckbox.vue?vue&type=template&id=c65ebe72&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./data/useCvState.ts + 1 modules
var useCvState = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvDisplayCheckbox.vue?vue&type=script&lang=ts&


/* harmony default export */ var CvDisplayCheckboxvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    sectionName: {
      type: String,
      default: ''
    },
    displaySection: {
      type: Boolean,
      default: true
    }
  },

  setup() {
    const {
      changeDisplaySection
    } = Object(useCvState["a" /* useCvState */])();
    return {
      changeDisplaySection
    };
  }

}));
// CONCATENATED MODULE: ./components/CvDisplayCheckbox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CvDisplayCheckboxvue_type_script_lang_ts_ = (CvDisplayCheckboxvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CvDisplayCheckbox.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CvDisplayCheckboxvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c65ebe72",
  "2c1043a5"
  
)

/* harmony default export */ var CvDisplayCheckbox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvInputTags.vue?vue&type=template&id=0eaf9fd2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form__group mb-10"},[_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.tagListName))+" class=\"form__label\" data-v-0eaf9fd2>"+_vm._ssrEscape(_vm._s(_vm.tagListLabel))+"</label> <div class=\"flex gap-3\" data-v-0eaf9fd2>"+((_vm.tagListName === 'languages')?("<div class=\"grid grid-cols-2 gap-3\" data-v-0eaf9fd2><input id=\"languages\" type=\"text\" placeholder=\"Spanish\""+(_vm._ssrAttr("value",(_vm.tagInputLang.lang)))+" class=\"form__control mt-2 mb-1\" data-v-0eaf9fd2> <div class=\"flex relative\" data-v-0eaf9fd2><input id=\"level\" type=\"number\" min=\"0\" max=\"100\" step=\"10\" placeholder=\"80\""+(_vm._ssrAttr("value",(_vm.tagInputLang.level)))+" class=\"form__control mt-2 mb-1\" data-v-0eaf9fd2> <span class=\"percentage top-1 mt-2 mb-1\" data-v-0eaf9fd2>%</span></div></div> <button type=\"button\""+(_vm._ssrAttr("disabled",_vm.tagInputLangEmpty))+(_vm._ssrAttr("aria-disabled",_vm.tagInputLangEmpty))+" aria-live=\"assertive\" class=\"form__btn\" data-v-0eaf9fd2>\n        Add\n      </button>"):("<input"+(_vm._ssrAttr("id",_vm.tagListName))+" type=\"text\""+(_vm._ssrAttr("value",(_vm.tagInput)))+" class=\"form__control mt-2 mb-1\" data-v-0eaf9fd2> <button type=\"button\""+(_vm._ssrAttr("disabled",_vm.tagInputEmpty))+(_vm._ssrAttr("aria-disabled",_vm.tagInputEmpty))+" aria-live=\"assertive\" class=\"form__btn\" data-v-0eaf9fd2>\n        Add\n      </button>"))+"</div> <ul class=\"tags\" data-v-0eaf9fd2>"+((_vm.tagListName !== 'languages')?((_vm._ssrList((_vm.tagList),function(tag){return ("<li class=\"form__btn form__btn--tag\" data-v-0eaf9fd2>"+_vm._ssrEscape("\n        "+_vm._s(tag)+"\n        ")+"<button type=\"button\" data-v-0eaf9fd2><svg class=\"form__icon\" data-v-0eaf9fd2><use"+(_vm._ssrAttr("href",__webpack_require__(70) + "#close"))+" data-v-0eaf9fd2></use></svg></button></li>")}))):((_vm._ssrList((_vm.tagListLang),function(tag){return ("<li class=\"form__btn form__btn--tag\" data-v-0eaf9fd2>"+_vm._ssrEscape("\n        "+_vm._s(tag.lang)+": "+_vm._s(tag.level)+"\n        ")+"<button type=\"button\" data-v-0eaf9fd2><svg class=\"form__icon\" data-v-0eaf9fd2><use"+(_vm._ssrAttr("href",__webpack_require__(70) + "#close"))+" data-v-0eaf9fd2></use></svg></button></li>")}))))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CvInputTags.vue?vue&type=template&id=0eaf9fd2&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(9);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./data/useCvState.ts + 1 modules
var useCvState = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvInputTags.vue?vue&type=script&lang=ts&



/* harmony default export */ var CvInputTagsvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'CvInputTags',
  props: {
    tagListName: {
      type: String,
      default: ''
    },
    tagList: {
      type: Array,
      default: () => ['']
    },
    tagListLang: {
      type: Array,
      default: () => [{
        lang: '',
        level: ''
      }]
    },
    tagListLabel: {
      type: String,
      default: ''
    }
  },

  setup() {
    const state = Object(runtime["d" /* reactive */])({
      tagInput: '',
      tagInputLang: {
        lang: '',
        level: ''
      }
    });
    const {
      addSkill,
      removeSkill
    } = Object(useCvState["a" /* useCvState */])();
    const tagInputLangEmpty = Object(runtime["a" /* computed */])(function getTagInputLangEmpty() {
      return state.tagInputLang.lang === '' || state.tagInputLang.level === '';
    });
    const tagInputEmpty = Object(runtime["a" /* computed */])(function getTagInputEmpty() {
      return state.tagInput === '';
    });

    function cleanInput() {
      state.tagInput = '';
      state.tagInputLang = {
        lang: '',
        level: ''
      };
    }

    return { ...Object(runtime["f" /* toRefs */])(state),
      tagInputLangEmpty,
      tagInputEmpty,
      cleanInput,
      addSkill,
      removeSkill
    };
  }

}));
// CONCATENATED MODULE: ./components/CvInputTags.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CvInputTagsvue_type_script_lang_ts_ = (CvInputTagsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CvInputTags.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CvInputTagsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0eaf9fd2",
  "c1d3f1fa"
  
)

/* harmony default export */ var CvInputTags = __webpack_exports__["default"] = (component.exports);

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


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvInputTags_vue_vue_type_style_index_0_id_0eaf9fd2_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvInputTags_vue_vue_type_style_index_0_id_0eaf9fd2_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvInputTags_vue_vue_type_style_index_0_id_0eaf9fd2_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvInputTags_vue_vue_type_style_index_0_id_0eaf9fd2_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvInputTags_vue_vue_type_style_index_0_id_0eaf9fd2_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tags[data-v-0eaf9fd2]{display:flex;flex-wrap:wrap;grid-gap:.75rem;gap:.75rem;margin-top:.75rem;font-size:.75rem;justify-content:flex-start;width:100%}.percentage[data-v-0eaf9fd2]{position:absolute;top:.5rem;right:25%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("339490a2", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("1e896421", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvSettings_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvSettings_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvSettings_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvSettings_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvSettings_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form{font-weight:300}.form__section{margin-bottom:.75rem}.form__legend{font-size:1.125rem;font-weight:400;font-weight:700;letter-spacing:.025em}.form__legend--small{font-size:.875rem}.form__group{display:flex;flex-direction:column;padding-left:.25rem;padding-right:.25rem}.form__label{margin-bottom:.25rem;font-weight:400;--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));font-size:.875rem}.form__label:focus{--text-opacity:1;color:#6b46c1;color:rgba(107,70,193,var(--text-opacity))}.form__control{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.25rem;padding:.25rem .5rem;border-width:1px;border-color:transparent;font-weight:300;width:100%;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));transition:all .1s linear;outline:none}.form__control:focus{border-width:1px;border-color:var(--primary)}.form__control--checkbox{margin-right:.25rem;width:1.25rem;height:1.25rem;background:none;box-shadow:none}.form__btn{margin:.5rem .2rem .25rem;color:#fff;background-color:var(--primary);--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));padding:.5rem;border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);font-weight:300;justify-content:center;align-items:center;text-align:center;transition:background-color .1s linear,color .1s linear}.form__btn+.form__btn{margin-top:.5rem}.form__btn:hover{background-color:var(--primary-darker);cursor:pointer}.form__btn--color-theme{background-color:#fff}.form__btn--color-theme:hover{color:#fff}.form__btn--pink{color:var(--pink)}.form__btn--pink:hover{background-color:var(--pink)}.form__btn--purple{color:var(--purple)}.form__btn--purple:hover{background-color:var(--purple)}.form__btn--indigo{color:var(--indigo)}.form__btn--indigo:hover{background-color:var(--indigo-darker)}.form__btn--blue{color:var(--blue)}.form__btn--blue:hover{background-color:var(--blue-darker)}.form__btn--green{color:var(--green)}.form__btn--green:hover{background-color:var(--green-darker)}.form__btn--black{color:var(--black)}.form__btn--black:hover{background-color:var(--black-darker)}.form__btn--tag{display:flex;grid-gap:.5rem;gap:.5rem;padding-top:.25rem;padding-bottom:.25rem;align-items:center}.form__btn--tag:hover{@appy bg-purple-700}.form__btn--delete{--bg-opacity:1;background-color:#fc8181;background-color:rgba(252,129,129,var(--bg-opacity))}.form__btn--delete:hover{--bg-opacity:1;background-color:#f56565;background-color:rgba(245,101,101,var(--bg-opacity))}.form__btn--ghost{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.form__btn--ghost:hover{--bg-opacity:1;background-color:#4a5568;background-color:rgba(74,85,104,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.form__btn--color-selected{background-color:var(--primary);color:#fff}.form__btn--active{--bg-opacity:1;background-color:#4a5568;background-color:rgba(74,85,104,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));box-shadow:none}.form__icon{fill:#fff;width:1.25rem;height:1.25rem}.form__icon:hover{opacity:.6}.form__display-checkbox{margin-bottom:1.5rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvPreview_vue_vue_type_style_index_0_id_578a659e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvPreview_vue_vue_type_style_index_0_id_578a659e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvPreview_vue_vue_type_style_index_0_id_578a659e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvPreview_vue_vue_type_style_index_0_id_578a659e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CvPreview_vue_vue_type_style_index_0_id_578a659e_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p[data-v-578a659e]{line-height:1.625}.cv[data-v-578a659e]{display:flex;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);font-size:.875rem;font-weight:400;width:21cm;height:29.69cm;min-width:21cm;min-height:29.69cm;max-width:21cm;max-height:29.69cm;margin:0;align-self:center;word-break:break-word;transform:scale(.4);overflow-y:hidden}@media screen and (min-width:425px){.cv[data-v-578a659e]{transform:scale(.5)}}@media screen and (min-width:768px){.cv[data-v-578a659e]{transform:scale(.9)}}@media screen and (min-width:1024px){.cv[data-v-578a659e]{transform:scale(.52)}}@media screen and (min-width:1400px){.cv[data-v-578a659e]{transform:scale(.75)}}.cv__side[data-v-578a659e]{padding:2.5rem 1.5rem;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--bg-opacity:1}.cv__name[data-v-578a659e]{font-size:1.875rem;text-transform:uppercase;font-weight:700;line-height:2rem;margin-bottom:.75rem;letter-spacing:.025em;color:var(--primary)}.cv__job-title[data-v-578a659e]{font-size:1.25rem;text-transform:uppercase}.cv__section[data-v-578a659e]{margin-top:1.5rem}.cv__section--main[data-v-578a659e]{margin-top:0;font-size:.875rem}.cv__section-title[data-v-578a659e]{font-size:1.125rem;text-transform:uppercase;margin-bottom:.5rem;font-weight:700;letter-spacing:.025em}.cv__section-title--sm[data-v-578a659e]{font-size:.875rem}.cv__section-title--main[data-v-578a659e]{color:var(--primary)}.cv__icon-wrapper[data-v-578a659e]{display:flex;flex-direction:row;font-weight:300;align-items:center}.cv__icon-wrapper+.cv__icon-wrapper[data-v-578a659e]{margin-top:5px}.cv__icon[data-v-578a659e]{display:flex;margin-right:.25rem;fill:currentColor;border-radius:.25rem;width:1.25rem;height:1.25rem;min-width:1.25rem;align-items:center}.cv__tags[data-v-578a659e]{display:flex;flex-wrap:wrap}.cv__tag[data-v-578a659e]{padding:.25rem .5rem;border-radius:.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-size:.75rem;margin:.5rem .2rem .25rem;background-color:var(--primary)}.cv__list[data-v-578a659e]{font-weight:300;margin-top:.25rem;list-style:none;padding:0;margin:0}.cv__list li[data-v-578a659e]{padding-left:1em;text-indent:-1em}.cv__list li[data-v-578a659e]:first-child{margin-top:.25rem}.cv__list li[data-v-578a659e]:before{content:\"\\2022\";padding-right:.2em;color:var(--primary)}.cv__bar[data-v-578a659e]{list-style:none;padding:0;margin:0}.cv__bar li[data-v-578a659e]{display:flex;flex-direction:column}.cv__bar li+li[data-v-578a659e]{margin-top:.75rem}.cv__bar-level[data-v-578a659e]{border-radius:9999px;margin-right:.5rem;position:relative;height:.5rem}.cv__bar-level--in[data-v-578a659e]{position:absolute;display:inline-block;background-color:var(--primary)}.cv__main[data-v-578a659e]{padding:2.5rem 2rem}.cv__event-elem+.cv__event-elem[data-v-578a659e]{margin-top:1.5rem}.cv__bar[data-v-578a659e]{margin-top:1.25rem;margin-bottom:1.25rem;--border-opacity:1;border-color:#f7fafc;border-color:rgba(247,250,252,var(--border-opacity));border-width:2px}.blur[data-v-578a659e]{filter:blur(5px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvSettings.vue?vue&type=template&id=5b6e03d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-gray-100 bg-opacity-100 shadow-lg font-bold z-10"},[_vm._ssrNode("<h2 class=\"text-2xl pt-8 px-6 pb-6 tracking-wide uppercase\">\n    CV Settings\n  </h2> "),_vm._ssrNode("<form autocomplete=\"on\" class=\"form mb-10\">","</form>",[_vm._ssrNode("<fieldset class=\"form__section\">","</fieldset>",[_c('expansion-panel',{attrs:{"panel-name":_vm.PersonalDetails},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('legend',{staticClass:"form__legend"},[_vm._v("Personal Details")])]},proxy:true},{key:"content",fn:function(){return [_c('div',{staticClass:"grid grid-cols-2 gap-x-3 gap-y-10"},[_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label",attrs:{"for":"job-pos"}},[_vm._v("💼 Job Title")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.jobTitle),expression:"formSettings.jobTitle"}],staticClass:"form__control",attrs:{"id":"job-pos","type":"text"},domProps:{"value":(_vm.formSettings.jobTitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "jobTitle", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group"},[_c('label',{staticClass:"form__label",attrs:{"for":"first-name"}},[_vm._v("\n                👤 First name\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.name),expression:"formSettings.name"}],staticClass:"form__control",attrs:{"id":"first-name","type":"text"},domProps:{"value":(_vm.formSettings.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "name", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group"},[_c('label',{staticClass:"form__label",attrs:{"for":"last-name"}},[_vm._v("\n                👤 Last Name\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.lastName),expression:"formSettings.lastName"}],staticClass:"form__control",attrs:{"id":"last-name","type":"text"},domProps:{"value":(_vm.formSettings.lastName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "lastName", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label",attrs:{"for":"email"}},[_vm._v("\n                ✉️ Email\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.email),expression:"formSettings.email"}],staticClass:"form__control",attrs:{"id":"email","type":"email"},domProps:{"value":(_vm.formSettings.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "email", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group"},[_c('label',{staticClass:"form__label",attrs:{"for":"location"}},[_vm._v("\n                📍 location\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.location),expression:"formSettings.location"}],staticClass:"form__control",attrs:{"id":"location","type":"text"},domProps:{"value":(_vm.formSettings.location)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "location", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group"},[_c('label',{staticClass:"form__label",attrs:{"for":"phone"}},[_vm._v("\n                📱 Phone Number\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.phoneNumber),expression:"formSettings.phoneNumber"}],staticClass:"form__control",attrs:{"id":"phone","type":"tel"},domProps:{"value":(_vm.formSettings.phoneNumber)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "phoneNumber", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label",attrs:{"for":"aboutme"}},[_vm._v("\n                🌟 About Me\n              ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.aboutme),expression:"formSettings.aboutme"}],staticClass:"form__control",attrs:{"id":"aboutme","name":"aboutme","cols":"30","rows":"10"},domProps:{"value":(_vm.formSettings.aboutme)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "aboutme", $event.target.value)}}})])])]},proxy:true}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<fieldset class=\"form__section grid gap-3\">","</fieldset>",[_c('expansion-panel',{attrs:{"panel-name":_vm.skills},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('legend',{staticClass:"form__legend"},[_vm._v("Skills")])]},proxy:true},{key:"content",fn:function(){return [_c('div',[_c('cv-input-tags',{attrs:{"tag-list-name":"jobSkills","tag-list-label":"🛠" + "Technical Skills","tag-list":_vm.formSettings.jobSkills},on:{"addTag":function($event){return _vm.addSkill($event)},"removeTag":function($event){return _vm.removeSkill($event)}}}),_vm._v(" "),_c('cv-input-tags',{attrs:{"tag-list-name":"softSkills","tag-list-label":"🧸" + "Soft Skills","tag-list":_vm.formSettings.softSkills},on:{"addTag":function($event){return _vm.addSkill($event)},"removeTag":function($event){return _vm.removeSkill($event)}}}),_vm._v(" "),_c('cv-input-tags',{attrs:{"tag-list-name":"languages","tag-list-label":"🌎" +"Languages","tag-list-lang":_vm.formSettings.languages},on:{"addTag":function($event){return _vm.addSkill($event)},"removeTag":function($event){return _vm.removeSkill($event)}}})],1)]},proxy:true}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<fieldset class=\"form__section grid gap-3\">","</fieldset>",[_c('expansion-panel',{attrs:{"panel-name":'Social'},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('legend',{staticClass:"form__legend"},[_vm._v("Social")])]},proxy:true},{key:"content",fn:function(){return [_c('div',{staticClass:"grid grid-cols-2 gap-x-3 gap-y-10"},[_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label flex",attrs:{"for":"linkedin"}},[_c('svg',{staticClass:"form__icon rounded mr-1"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#linkedin"}})]),_vm._v("\n                Linkedin\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.linkedin),expression:"formSettings.linkedin"}],staticClass:"form__control",attrs:{"id":"linkedin","type":"text"},domProps:{"value":(_vm.formSettings.linkedin)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "linkedin", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label flex",attrs:{"for":"twitter"}},[_c('svg',{staticClass:"form__icon rounded mr-1"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#twitter"}})]),_vm._v("\n                Twitter\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.twitter),expression:"formSettings.twitter"}],staticClass:"form__control",attrs:{"id":"twitter","type":"text"},domProps:{"value":(_vm.formSettings.twitter)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "twitter", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label flex",attrs:{"for":"github"}},[_c('svg',{staticClass:"form__icon mr-1"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#github"}})]),_vm._v("\n                GitHub\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.github),expression:"formSettings.github"}],staticClass:"form__control",attrs:{"id":"github","type":"text"},domProps:{"value":(_vm.formSettings.github)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "github", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form__group col-span-full"},[_c('label',{staticClass:"form__label flex",attrs:{"for":"website"}},[_c('svg',{staticClass:"form__icon mr-1"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#website"}})]),_vm._v("\n                Website\n              ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formSettings.website),expression:"formSettings.website"}],staticClass:"form__control",attrs:{"id":"website","type":"text"},domProps:{"value":(_vm.formSettings.website)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formSettings, "website", $event.target.value)}}})])])]},proxy:true}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<fieldset class=\"form__section grid gap-3\">","</fieldset>",[_c('expansion-panel',{attrs:{"panel-name":_vm.Experience},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('legend',{staticClass:"form__legend"},[_vm._v("Experience")])]},proxy:true},{key:"content",fn:function(){return [_c('cv-dynamic-section',{attrs:{"section-name":"work","entries":_vm.formSettings.work}}),_vm._v("\n          "+_vm._s(_vm.formSettings.work)+"\n        ")]},proxy:true}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<fieldset class=\"form__section grid gap-3\">","</fieldset>",[_c('expansion-panel',{attrs:{"panel-name":_vm.education},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('legend',{staticClass:"form__legend"},[_vm._v("Education")])]},proxy:true},{key:"content",fn:function(){return [_c('div',[_c('cv-display-checkbox',{staticClass:"form__display-checkbox",attrs:{"display-section":_vm.formSettings.displayEducation,"section-name":"education"}}),_vm._v(" "),_c('cv-dynamic-section',{attrs:{"section-name":"education","entries":_vm.formSettings.education}})],1)]},proxy:true}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<fieldset class=\"form__section grid gap-3\">","</fieldset>",[_c('expansion-panel',{attrs:{"panel-name":_vm.Projects},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('legend',{staticClass:"form__legend"},[_vm._v("Projects")])]},proxy:true},{key:"content",fn:function(){return [_c('div',[_c('cv-display-checkbox',{staticClass:"form__display-checkbox",attrs:{"display-section":_vm.formSettings.displayProjects,"section-name":"projects"}}),_vm._v(" "),_c('cv-dynamic-section',{attrs:{"section-name":"projects","entries":_vm.formSettings.projects}})],1)]},proxy:true}])})],1),_vm._ssrNode(" <div class=\"form__section flex flex-col p-6 gap-3\"><button type=\"button\" class=\"form__btn flex flex-col justify-center\"><span>Download-cv-pdf</span></button></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CvSettings.vue?vue&type=template&id=5b6e03d0&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(9);

// EXTERNAL MODULE: ./components/CvDynamicSection.vue + 4 modules
var CvDynamicSection = __webpack_require__(78);

// EXTERNAL MODULE: ./components/CvDisplayCheckbox.vue + 4 modules
var CvDisplayCheckbox = __webpack_require__(79);

// EXTERNAL MODULE: ./components/CvInputTags.vue + 4 modules
var CvInputTags = __webpack_require__(80);

// EXTERNAL MODULE: ./components/ExpansionPanel.vue + 4 modules
var ExpansionPanel = __webpack_require__(72);

// EXTERNAL MODULE: ./data/useCvState.ts + 1 modules
var useCvState = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvSettings.vue?vue&type=script&lang=ts&







/* harmony default export */ var CvSettingsvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'CvSettings',
  components: {
    CvDynamicSection: CvDynamicSection["default"],
    CvDisplayCheckbox: CvDisplayCheckbox["default"],
    CvInputTags: CvInputTags["default"],
    ExpansionPanel: ExpansionPanel["default"]
  },

  setup() {
    const {
      formSettings,
      uploadCV,
      resetForm,
      setUpCvSettings
    } = Object(useCvState["a" /* useCvState */])();
    const context = Object(runtime["g" /* useContext */])();
    Object(runtime["c" /* onMounted */])(setUpCvSettings);
    Object(runtime["h" /* watch */])(() => formSettings.value, (newValue, oldValue) => {
      localStorage.setItem(`cvSettings`, JSON.stringify(newValue));
    }, {
      deep: true
    });
    const formSettingsHref = Object(runtime["a" /* computed */])(function getFormSettingsHref() {
      return `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify({
        formSettings: formSettings.value
      }))}`;
    });

    function downloadPdf() {
      const oldTitle = document.title;
      document.title = `CV_${formSettings.value.name}_${formSettings.value.lastName}`;
      window.print();
      document.title = oldTitle;
    }

    return {
      downloadPdf,
      formSettings,
      formSettingsHref,
      uploadCV,
      resetForm
    };
  }

}));
// CONCATENATED MODULE: ./components/CvSettings.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CvSettingsvue_type_script_lang_ts_ = (CvSettingsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CvSettings.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CvSettingsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3e242553"
  
)

/* harmony default export */ var CvSettings = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ExpansionPanel: __webpack_require__(72).default,CvInputTags: __webpack_require__(80).default,CvDynamicSection: __webpack_require__(78).default,CvDisplayCheckbox: __webpack_require__(79).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvPreview.vue?vue&type=template&id=578a659e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-normal relative flex justify-center w-full bg-white",attrs:{"id":"cv"}},[_vm._ssrNode("<div tabindex=\"0\" aria-label=\"CV preview\""+(_vm._ssrClass(null,['cv', 'bg-white', { blur: _vm.isLoading }]))+" data-v-578a659e>","</div>",[_vm._ssrNode("<div class=\"cv__side w-1/3\" data-v-578a659e>","</div>",[_c('draggable',{attrs:{"group":"people"},on:{"start":function($event){_vm.drag=true},"end":function($event){_vm.drag=false}},model:{value:(_vm.myArray),callback:function ($$v) {_vm.myArray=$$v},expression:"myArray"}},[_c('h2',{staticClass:"cv__name"},[_vm._v("\n          "+_vm._s(_vm.formSettings.name)+" "+_vm._s(_vm.formSettings.lastName)+"\n        ")]),_vm._v(" "),_c('h3',{staticClass:"cv__job-title"},[_vm._v(_vm._s(_vm.formSettings.jobTitle))]),_vm._v(" "),_c('section',{staticClass:"cv__section"},[_c('h4',{staticClass:"cv__section-title"},[_vm._v("Contact")]),_vm._v(" "),_c('div',{staticClass:"flex flex-col"},[(_vm.formSettings.phoneNumber)?_c('div',{staticClass:"cv__icon-wrapper"},[_c('svg',{staticClass:"cv__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#phone"}})]),_vm._v(" "),_c('a',{attrs:{"href":_vm.phoneNumberHref,"rel":"noopener"}},[_vm._v(_vm._s(_vm.formSettings.phoneNumber))])]):_vm._e(),_vm._v(" "),(_vm.formSettings.email)?_c('div',{staticClass:"cv__icon-wrapper"},[_c('svg',{staticClass:"cv__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#email"}})]),_vm._v(" "),_c('a',{attrs:{"href":_vm.emailHref,"rel":"noopener"}},[_vm._v(_vm._s(_vm.formSettings.email))])]):_vm._e(),_vm._v(" "),(_vm.formSettings.location)?_c('div',{staticClass:"cv__icon-wrapper"},[_c('svg',{staticClass:"cv__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#location"}})]),_vm._v(" "),_c('span',{attrs:{"tabindex":"0"}},[_vm._v(_vm._s(_vm.formSettings.location))])]):_vm._e()])]),_vm._v(" "),_c('section',{staticClass:"cv__section"},[_c('h4',{staticClass:"cv__section-title"},[_vm._v("Professional Skills")]),_vm._v(" "),_c('ul',{staticClass:"cv__tags"},_vm._l((_vm.formSettings.jobSkills),function(skill){return _c('li',{key:("preview" + skill),staticClass:"cv__tag"},[_vm._v("\n              "+_vm._s(skill)+"\n            ")])}),0)]),_vm._v(" "),_c('section',{staticClass:"cv__section"},[_c('h4',{staticClass:"cv__section-title"},[_vm._v("Soft Skills}")]),_vm._v(" "),_c('ul',{staticClass:"cv__list"},_vm._l((_vm.formSettings.softSkills),function(skill){return _c('li',{key:("preview" + skill)},[_vm._v("\n              "+_vm._s(skill)+"\n            ")])}),0)]),_vm._v(" "),_c('section',{staticClass:"cv__section"},[_c('h4',{staticClass:"cv__section-title"},[_vm._v("Languages")]),_vm._v(" "),_c('ul',{staticClass:"cv__bar"},_vm._l((_vm.formSettings.languages),function(lang){return _c('li',{key:("preview" + (lang.lang))},[_vm._v("\n              "+_vm._s(lang.lang)+"\n              "),_c('div',{staticClass:"cv__bar-level bg-gray-300",style:({ width: '100%' })},[_c('span',{staticClass:"cv__bar-level cv__bar-level--in",style:({ width: lang.level })})])])}),0)]),_vm._v(" "),_c('section',{staticClass:"cv__section"},[_c('h4',{staticClass:"cv__section-title"},[_vm._v("SOCIAL")]),_vm._v(" "),_c('div',{staticClass:"flex flex-col"},[(_vm.formSettings.linkedin)?_c('div',{staticClass:"cv__icon-wrapper"},[_c('svg',{staticClass:"cv__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#linkedin-color"}})]),_vm._v(" "),_c('a',{attrs:{"target":"_blank","rel":"noopener","href":("https:linkedin.com/in/" + (_vm.formSettings.linkedin))}},[_vm._v(_vm._s(("linkedin.com/in/" + (_vm.formSettings.linkedin))))])]):_vm._e(),_vm._v(" "),(_vm.formSettings.twitter)?_c('div',{staticClass:"cv__icon-wrapper"},[_c('svg',{staticClass:"cv__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#twitter-color"}})]),_vm._v(" "),_c('a',{attrs:{"target":"_blank","rel":"noopener","href":("https:twitter.com/" + (_vm.formSettings.twitter))}},[_vm._v(_vm._s(("twitter.com/" + (_vm.formSettings.twitter))))])]):_vm._e(),_vm._v(" "),(_vm.formSettings.github)?_c('div',{staticClass:"cv__icon-wrapper"},[_c('svg',{staticClass:"cv__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#github-color"}})]),_vm._v(" "),_c('a',{attrs:{"target":"_blank","rel":"noopener","href":("https:github.com/" + (_vm.formSettings.github))}},[_vm._v(_vm._s(("github.com/" + (_vm.formSettings.github))))])]):_vm._e(),_vm._v(" "),(_vm.formSettings.website)?_c('div',{staticClass:"cv__icon-wrapper"},[_c('svg',{staticClass:"cv__icon"},[_c('use',{attrs:{"href":__webpack_require__(70) + "#website"}})]),_vm._v(" "),_c('a',{attrs:{"target":"_blank","rel":"noopener","href":_vm.formSettings.website}},[_vm._v(_vm._s(_vm.formSettings.website))])]):_vm._e()])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cv__main w-2/3\" data-v-578a659e>","</div>",[_c('draggable',{attrs:{"group":"people"},on:{"start":function($event){_vm.drag=true},"end":function($event){_vm.drag=false}},model:{value:(_vm.myArray),callback:function ($$v) {_vm.myArray=$$v},expression:"myArray"}},[_c('section',{staticClass:"cv__section cv__section--main w-full"},[_c('hr',{staticClass:"cv__bar"}),_vm._v(" "),_c('h4',{staticClass:"cv__section-title cv__section-title--main"},[_vm._v("\n            About Me\n          ")]),_vm._v(" "),_c('p',{staticClass:"font-light"},[_vm._v(_vm._s(_vm.formSettings.aboutme))]),_vm._v(" "),_c('hr',{staticClass:"cv__bar"})]),_vm._v(" "),_c('section',{staticClass:"cv__section cv__section--main w-full"},[_c('hr',{staticClass:"cv__bar"}),_vm._v(" "),_c('h4',{staticClass:"cv__section-title cv__section-title--main"},[_vm._v("\n            Experience\n          ")]),_vm._v(" "),_c('ul',{staticClass:"cv__event mt-3"},_vm._l((_vm.work),function(job){return _c('li',{key:job.title,staticClass:"cv__event-elem"},[_c('h5',{staticClass:"cv__section-title cv__section-title--sm"},[_vm._v("\n                "+_vm._s(job.title)+"\n              ")]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(job.location)+" | ")]),_vm._v(" "),_c('span',[_vm._v("\n                  "+_vm._s(_vm.formatDate(job.from))+" -\n                  "),(job.current)?[_vm._v("Current")]:[_vm._v(_vm._s(_vm.formatDate(job.to)))]],2)]),_vm._v(" "),(job.summaryArr.length > 1)?_c('ul',{staticClass:"cv__list"},_vm._l((job.summaryArr),function(line,index){return _c('li',{key:index},[_vm._v("\n                  "+_vm._s(line)+"\n                ")])}),0):_c('p',{staticClass:"font-light"},[_vm._v("\n                "+_vm._s(job.summaryArr[0])+"\n              ")])])}),0),_vm._v(" "),_c('hr',{staticClass:"cv__bar"})]),_vm._v(" "),(_vm.formSettings.displayEducation)?_c('section',{staticClass:"cv__section cv__section--main w-full"},[_c('hr',{staticClass:"cv__bar"}),_vm._v(" "),_c('h4',{staticClass:"cv__section-title cv__section-title--main"},[_vm._v("\n            Education\n          ")]),_vm._v(" "),_c('ul',{staticClass:"cv__event mt-3"},_vm._l((_vm.education),function(edu){return _c('li',{key:edu.title,staticClass:"cv__event-elem"},[_c('h5',{staticClass:"cv__section-title cv__section-title--sm"},[_vm._v("\n                "+_vm._s(edu.title)+"\n              ")]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(edu.location)+" | ")]),_vm._v(" "),_c('span',[_vm._v("\n                  "+_vm._s(_vm.formatDate(edu.from))+" -\n                  "),(edu.current)?[_vm._v("Current")]:[_vm._v(_vm._s(_vm.formatDate(edu.to)))]],2)]),_vm._v(" "),(edu.summaryArr.length > 1)?_c('ul',{staticClass:"cv__list"},_vm._l((edu.summaryArr),function(line,index){return _c('li',{key:index},[_vm._v("\n                  "+_vm._s(line)+"\n                ")])}),0):_c('p',{staticClass:"font-light"},[_vm._v("\n                "+_vm._s(edu.summaryArr[0])+"\n              ")])])}),0),_vm._v(" "),_c('hr',{staticClass:"cv__bar"})]):_vm._e(),_vm._v(" "),(_vm.formSettings.displayProjects)?_c('section',{staticClass:"cv__section cv__section--main w-full"},[_c('hr',{staticClass:"cv__bar"}),_vm._v(" "),_c('h4',{staticClass:"cv__section-title cv__section-title--main"},[_vm._v("\n            Projects\n          ")]),_vm._v(" "),_c('ul',{staticClass:"cv__event mt-3"},_vm._l((_vm.projects),function(project){return _c('li',{key:project.title,staticClass:"cv__event-elem"},[_c('h5',{staticClass:"cv__section-title cv__section-title--sm"},[_vm._v("\n                "+_vm._s(project.title)+"\n              ")]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(project.location)+" | ")]),_vm._v(" "),_c('span',[_vm._v("\n                  "+_vm._s(_vm.formatDate(project.from))+" -\n                  "),(project.current)?[_vm._v(_vm._s(_vm.Current))]:[_vm._v(_vm._s(_vm.formatDate(project.to)))]],2)]),_vm._v(" "),(project.summaryArr.length > 1)?_c('ul',{staticClass:"cv__list"},_vm._l((project.summaryArr),function(line,index){return _c('li',{key:index},[_vm._v("\n                  "+_vm._s(line)+"\n                ")])}),0):_c('p',{staticClass:"font-light"},[_vm._v("\n                "+_vm._s(project.summaryArr[0])+"\n              ")])])}),0),_vm._v(" "),_c('hr',{staticClass:"cv__bar"})]):_vm._e()])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CvPreview.vue?vue&type=template&id=578a659e&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(9);

// EXTERNAL MODULE: ./data/useCvState.ts + 1 modules
var useCvState = __webpack_require__(71);

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(68);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CvPreview.vue?vue&type=script&lang=ts&




/* harmony default export */ var CvPreviewvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'CvPreview',
  components: {
    draggable: external_vuedraggable_default.a
  },

  setup() {
    const {
      formSettings,
      isLoading
    } = Object(useCvState["a" /* useCvState */])();
    const context = Object(runtime["g" /* useContext */])();
    const phoneNumberHref = Object(runtime["a" /* computed */])(function getPhoneNumberHref() {
      return `tel:${formSettings.value.phoneNumber}`;
    });
    const emailHref = Object(runtime["a" /* computed */])(function getEmailHref() {
      return `mailto:${formSettings.value.email}`;
    });
    const work = Object(runtime["a" /* computed */])(function getWork() {
      return orderEvents(formSettings.value.work);
    });
    const education = Object(runtime["a" /* computed */])(function getEducation() {
      return orderEvents(formSettings.value.education);
    });
    const projects = Object(runtime["a" /* computed */])(function getProjects() {
      return orderEvents(formSettings.value.projects);
    });

    function orderEvents(arr) {
      return arr.map(event => {
        event.summaryArr = getSummaryLines(event.summary);
        return event;
      }).sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime());
    }

    function getSummaryLines(summary) {
      const lines = summary.split('\n').map(line => {
        if (line[0] === '-') {
          line = line.slice(1).trim();
        }

        return line;
      });
      return lines;
    }

    function formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'short'
      };
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString('en', options);
    }

    return {
      formSettings,
      isLoading,
      phoneNumberHref,
      emailHref,
      work,
      education,
      projects,
      formatDate
    };
  }

}));
// CONCATENATED MODULE: ./components/CvPreview.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CvPreviewvue_type_script_lang_ts_ = (CvPreviewvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CvPreview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CvPreviewvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "578a659e",
  "69a08f48"
  
)

/* harmony default export */ var CvPreview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("4b580c36", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6499f130_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6499f130_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6499f130_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6499f130_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6499f130_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (min-width:1024px){.main[data-v-6499f130]{display:flex;height:100%}.settings[data-v-6499f130]{overflow-y:auto;width:41.666667%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6499f130&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('cv-settings',{staticClass:"settings",attrs:{"id":"settings"}}),_vm._ssrNode(" "),_c('cv-preview')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6499f130&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/CvSettings.vue + 4 modules
var CvSettings = __webpack_require__(91);

// EXTERNAL MODULE: ./components/CvPreview.vue + 4 modules
var CvPreview = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=ts&



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'Index',
  components: {
    CvSettings: CvSettings["default"],
    CvPreview: CvPreview["default"]
  },

  head() {
    return {
      title: 'CV_Builder using NUXT.js',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'This is a CV builder made in NUXT'
      }, {
        hid: 'author',
        name: 'author',
        content: 'AmeerHamza'
      }]
    };
  }

}));
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pagesvue_type_script_lang_ts_ = (lib_vue_loader_options_pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6499f130",
  "aab90d1e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CvSettings: __webpack_require__(91).default,CvPreview: __webpack_require__(92).default})


/***/ })

};;
//# sourceMappingURL=index.js.map