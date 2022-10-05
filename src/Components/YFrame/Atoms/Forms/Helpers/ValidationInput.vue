<script>
// import {ValidationProvider} from 'vee-validate';

import YInputBase from '../Inputs/InputBase.vue'

export default {

  extends: YInputBase,

  components: {
      // ValidationProvider,
      // translations,
    //VueI18n
  },

  props: {
    /**
     * The errortext when not enabled
     */
    errorText: {
      type: String,
      default: ''
    },

    rules: {
      type: String,
      default: ''
    },
  },

  computed: {
    hasRules() {
      return this.rules.length !== 0;
    },
  },

  methods: {
    getState(dirty, errors) {
      if (!dirty) {
        return;
      }

      if (errors.length === 0) {
        return 'success';
      }

      return "error"
    },
  }
}
</script>
