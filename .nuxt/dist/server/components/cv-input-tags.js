exports.ids = [3];
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


/***/ })

};;
//# sourceMappingURL=cv-input-tags.js.map