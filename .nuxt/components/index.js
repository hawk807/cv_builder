export const CvDisplayCheckbox = () => import('../..\\components\\CvDisplayCheckbox.vue' /* webpackChunkName: "components/cv-display-checkbox" */).then(c => wrapFunctional(c.default || c))
export const CvDynamicSection = () => import('../..\\components\\CvDynamicSection.vue' /* webpackChunkName: "components/cv-dynamic-section" */).then(c => wrapFunctional(c.default || c))
export const CvInputTags = () => import('../..\\components\\CvInputTags.vue' /* webpackChunkName: "components/cv-input-tags" */).then(c => wrapFunctional(c.default || c))
export const CvPreview = () => import('../..\\components\\CvPreview.vue' /* webpackChunkName: "components/cv-preview" */).then(c => wrapFunctional(c.default || c))
export const CvSettings = () => import('../..\\components\\CvSettings.vue' /* webpackChunkName: "components/cv-settings" */).then(c => wrapFunctional(c.default || c))
export const ExpansionPanel = () => import('../..\\components\\ExpansionPanel.vue' /* webpackChunkName: "components/expansion-panel" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
