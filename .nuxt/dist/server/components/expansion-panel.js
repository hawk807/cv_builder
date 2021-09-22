exports.ids = [6];
exports.modules = {

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.0e3e933.svg";

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


/***/ })

};;
//# sourceMappingURL=expansion-panel.js.map