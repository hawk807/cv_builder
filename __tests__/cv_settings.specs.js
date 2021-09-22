import { mount } from '@vue/test-utils'
import CvSettings from '../components/CvSettings.vue';

describe('CvSettings', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof CvSettings.downloadPdf).toBe('function')
    })
  })