<template>
  <div class="main">
    <cv-settings id="settings" class="settings"></cv-settings>
    <cv-preview></cv-preview>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CvSettings from '@/components/CvSettings.vue';
import CvPreview from '@/components/CvPreview.vue';

export default Vue.extend({
  name: 'Index',
  components: { CvSettings, CvPreview },
  head() {
    return {
      title: 'CV_Builder using NUXT.js',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is a CV builder made in NUXT',
        },
        {
          hid: 'author',
          name: 'author',
          content: 'AmeerHamza',
        }
      ],
    };
  },
});
</script>
<style lang="postcss" scoped>
@media screen and (min-width: 1024px) {
  .main {
    @apply flex h-full;
  }
  .settings {
    @apply overflow-y-auto w-5/12;
  }
}
</style>
