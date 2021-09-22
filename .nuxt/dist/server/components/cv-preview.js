exports.ids = [4];
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

/***/ })

};;
//# sourceMappingURL=cv-preview.js.map