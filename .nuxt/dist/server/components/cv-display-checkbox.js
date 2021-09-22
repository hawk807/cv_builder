exports.ids = [1];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=cv-display-checkbox.js.map