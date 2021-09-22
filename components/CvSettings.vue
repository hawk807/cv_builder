<template>
  <div class="bg-gray-100 bg-opacity-100 shadow-lg font-bold z-10">
    <h2 class="text-2xl pt-8 px-6 pb-6 tracking-wide uppercase">
      CV Settings
    </h2>
    <form class="form mb-10" autocomplete="on">
      <!-- PERSONAL DETAILS -->
      <fieldset class="form__section">
        <expansion-panel :panel-name="PersonalDetails">
          <template v-slot:title>
            <legend class="form__legend">Personal Details</legend>
          </template>
          <template v-slot:content>
            <div class="grid grid-cols-2 gap-x-3 gap-y-10">
              <div class="form__group col-span-full">
                <label class="form__label" for="job-pos" >💼 Job Title</label>
                <input
                  id="job-pos"
                  v-model="formSettings.jobTitle"
                  class="form__control"
                  type="text"
                />
              </div>
              <div class="form__group">
                <label class="form__label" for="first-name">
                  👤 First name
                </label>
                <input
                  id="first-name"
                  v-model="formSettings.name"
                  class="form__control"
                  type="text"
                />
              </div>
              <div class="form__group">
                <label class="form__label" for="last-name">
                  👤 Last Name
                </label>
                <input
                  id="last-name"
                  v-model="formSettings.lastName"
                  class="form__control"
                  type="text"
                />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label" for="email">
                  ✉️ Email
                </label>
                <input
                  id="email"
                  v-model="formSettings.email"
                  class="form__control"
                  type="email"
                />
              </div>
              <div class="form__group">
                <label class="form__label" for="location">
                  📍 location
                </label>
                <input
                  id="location"
                  v-model="formSettings.location"
                  class="form__control"
                  type="text"
                />
              </div>
              <div class="form__group">
                <label class="form__label" for="phone">
                  📱 Phone Number
                </label>
                <input
                  id="phone"
                  v-model="formSettings.phoneNumber"
                  class="form__control"
                  type="tel"
                />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label" for="aboutme">
                  🌟 About Me
                </label>
                <textarea
                  id="aboutme"
                  v-model="formSettings.aboutme"
                  class="form__control"
                  name="aboutme"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- PERSONAL DETAILS -->
    

      <!-- SKILLS -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="skills">
          <template v-slot:title>
            <legend class="form__legend">Skills</legend>
          </template>
          <template v-slot:content>
            <div>
              <cv-input-tags
                tag-list-name="jobSkills"
                :tag-list-label='"🛠" + "Technical Skills"'
                :tag-list="formSettings.jobSkills"
                @addTag="addSkill($event)"
                @removeTag="removeSkill($event)"
              ></cv-input-tags>
              <cv-input-tags
                tag-list-name="softSkills"
                :tag-list-label='"🧸" + "Soft Skills"'
                :tag-list="formSettings.softSkills"
                @addTag="addSkill($event)"
                @removeTag="removeSkill($event)"
              ></cv-input-tags>
              <cv-input-tags
                tag-list-name="languages"
                :tag-list-label='"🌎" +"Languages"'
                :tag-list-lang="formSettings.languages"
                @addTag="addSkill($event)"
                @removeTag="removeSkill($event)"
              ></cv-input-tags>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- SKILLS -->

      <!-- SOCIAL -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="'Social'">
          <template v-slot:title>
            <legend class="form__legend">Social</legend>
          </template>
          <template v-slot:content>
            <div class="grid grid-cols-2 gap-x-3 gap-y-10">
              <div class="form__group col-span-full">
                <label class="form__label flex" for="linkedin">
                  <svg class="form__icon rounded mr-1">
                    <use href="@/assets/sprite.svg#linkedin"></use>
                  </svg>
                  Linkedin
                </label>
                <input
                  id="linkedin"
                  v-model="formSettings.linkedin"
                  class="form__control"
                  type="text"
                />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label flex" for="twitter">
                  <svg class="form__icon rounded mr-1">
                    <use href="@/assets/sprite.svg#twitter"></use>
                  </svg>
                  Twitter
                </label>
                <input
                  id="twitter"
                  v-model="formSettings.twitter"
                  class="form__control"
                  type="text"
                />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label flex" for="github">
                  <svg class="form__icon mr-1">
                    <use href="@/assets/sprite.svg#github"></use>
                  </svg>
                  GitHub
                </label>
                <input
                  id="github"
                  v-model="formSettings.github"
                  class="form__control"
                  type="text"
                />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label flex" for="website">
                  <svg class="form__icon mr-1">
                    <use href="@/assets/sprite.svg#website"></use>
                  </svg>
                  Website
                </label>
                <input
                  id="website"
                  v-model="formSettings.website"
                  class="form__control"
                  type="text"
                />
              </div>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- SOCIAL -->

      <!-- WORK EXPERIENCE -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="Experience">
          <template v-slot:title>
            <legend class="form__legend">Experience</legend>
          </template>
          <template v-slot:content>
            <cv-dynamic-section
              section-name="work"
              :entries="formSettings.work"
            ></cv-dynamic-section>
            {{ formSettings.work }}
          </template>
        </expansion-panel>
      </fieldset>
      <!-- WORK EXPERIENCE -->

      <!-- EDUCATION -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="education">
          <template v-slot:title>
            <legend class="form__legend">Education</legend>
          </template>
          <template v-slot:content>
            <div>
              <cv-display-checkbox
                class="form__display-checkbox"
                :display-section="formSettings.displayEducation"
                section-name="education"
              ></cv-display-checkbox>
              <cv-dynamic-section
                section-name="education"
                :entries="formSettings.education"
              ></cv-dynamic-section>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- EDUCATION -->

      <!-- PROJECTS -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="Projects">
          <template v-slot:title>
            <legend class="form__legend">Projects</legend>
          </template>
          <template v-slot:content>
            <div>
              <cv-display-checkbox
                class="form__display-checkbox"
                :display-section="formSettings.displayProjects"
                section-name="projects"
              ></cv-display-checkbox>
              <cv-dynamic-section
                section-name="projects"
                :entries="formSettings.projects"
              ></cv-dynamic-section>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- PROJECTS -->

      <!-- CTA -->
      <div class="form__section flex flex-col p-6 gap-3">
        <button
          type="button"
          class="form__btn flex flex-col justify-center"
          @click="downloadPdf"
        >
          <span>Download-cv-pdf</span>
        </button>
      </div>
      <!-- CTA -->
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {
  computed,
  onMounted,
  useContext,
  watch,
} from '@nuxtjs/composition-api';
import CvDynamicSection from '@/components/CvDynamicSection.vue';
import CvDisplayCheckbox from '@/components/CvDisplayCheckbox.vue';
import CvInputTags from '@/components/CvInputTags.vue';
import ExpansionPanel from '@/components/ExpansionPanel.vue';
import { useCvState } from '~/data/useCvState';

export default Vue.extend({
  name: 'CvSettings',
  components: {
    CvDynamicSection,
    CvDisplayCheckbox,
    CvInputTags,
    ExpansionPanel,
    },
  setup() {

    const { formSettings, uploadCV, resetForm, setUpCvSettings } = useCvState();
    const context = useContext();


    onMounted(setUpCvSettings);

    watch(
      () => formSettings.value,
      (newValue, oldValue) => {
        localStorage.setItem(
          `cvSettings`,
          JSON.stringify(newValue)
        );
      },
      { deep: true }
    );

    const formSettingsHref = computed(function getFormSettingsHref() {
      return `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify({ formSettings: formSettings.value })
      )}`;
    });
    
    function downloadPdf(): void {
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
      resetForm,
    };
  },
});
</script>
<style lang="postcss">
.form {
  @apply font-light;

  &__section {
    @apply mb-3;
  }

  &__legend {
    @apply text-lg font-normal font-bold tracking-wide;

    &--small {
      @apply text-sm;
    }
  }

  &__group {
    @apply flex flex-col px-1;
  }

  &__label {
    @apply mb-1 font-normal text-gray-600 text-sm;
    &:focus {
      @apply text-purple-700;
    }
  }

  &__control {
    @apply shadow rounded px-2 py-1 border border-transparent font-light w-full bg-white;
    transition: all 0.1s linear;
    outline: none;
    &:focus {
      @apply border;
      border-color: var(--primary);
    }

    &--checkbox {
      @apply mr-1;
      width: 1.25rem;
      height: 1.25rem;
      background: none;
      box-shadow: none;
    }
  }

  &__btn {
    margin: 0.5rem 0.2rem 0.25rem;
    color: #fff;
    background-color: var(--primary);
    @apply text-white p-2 rounded shadow font-light justify-center items-center text-center;
    transition: background-color 0.1s linear, color 0.1s linear;
    & + & {
      margin-top: 0.5rem;
    }

    &:hover {
      background-color: var(--primary-darker);
      cursor: pointer;
    }
    &--color-theme {
      background-color: #fff;
      &:hover {
        color: #fff;
      }
    }
    &--pink {
      color: var(--pink);
      &:hover {
        background-color: var(--pink);
      }
    }
    &--purple {
      color: var(--purple);
      &:hover {
        background-color: var(--purple);
      }
    }
    &--indigo {
      color: var(--indigo);
      &:hover {
        background-color: var(--indigo-darker);
      }
    }
    &--blue {
      color: var(--blue);
      &:hover {
        background-color: var(--blue-darker);
      }
    }
    &--green {
      color: var(--green);
      &:hover {
        background-color: var(--green-darker);
      }
    }
    &--black {
      color: var(--black);
      &:hover {
        background-color: var(--black-darker);
      }
    }

    &--tag {
      @apply flex gap-2 py-1;
      align-items: center;

      &:hover {
        @appy bg-purple-700;
      }
    }
    &--delete {
      @apply bg-red-400;
      &:hover {
        @apply bg-red-500;
      }
    }

    &--ghost {
      @apply bg-white text-gray-700;
      &:hover {
        @apply bg-gray-700 text-white;
      }
    }

    &--color-selected {
      background-color: var(--primary);
      color: #fff;
    }

    &--active {
      @apply bg-gray-700 text-white;
      box-shadow: none;
    }
  }

  &__icon {
    fill: #fff;
    width: 1.25rem;
    height: 1.25rem;
    &:hover {
      opacity: 0.6;
    }
  }

  &__display-checkbox {
    @apply mb-6;
  }
}
</style>
