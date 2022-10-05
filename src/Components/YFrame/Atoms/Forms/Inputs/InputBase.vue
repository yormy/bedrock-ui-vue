<script>
import {isEmpty} from 'bedrock-core-vue'

export default {
    props: {
        /**
         * The ID of the field, needs to be unique on the page
         */
        fieldId: {
            type: String,
            default: '1',
            required: true,
    },

    /**
     * The name of the field for passing to requests
     */
    fieldName: {
      type: String,
      default: '',
      required: true,
    },

    /**
     * v-Model Value
     */
    value: {
      type: String,
      default: '',
    },

    /**
     * The label of the input
     */
    label: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The helptext that appears next to the label of the input
     */
    labelHelpText: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The text that is displayed below the field to give indication what to fill out
     */
    hintText: {
      type: String,
      default: '',
      required: false,
    },


    /**
     * The text that is displayed in the help section when the input is validated against the rules and is valid.
     * When no rule, then this text is never displayed
     */
    validText: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The helptext in the modal when the helptext is clicked
     */
    labelHelpDescription: {
      type: String,
      default: '',
      required: false,
    },

    // ========== STATE ==========
    isLoading: {
      type: Boolean,
      default: false,
    },

    /**
     * Disable the input, prevent clicking and change colors
     */
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * allowed input number | string
     */
    isRequired: {
        type: Boolean,
        default: false,
    },

    // ========== MODAL ==========

    /**
     * The size of the help modal
     */
    modalSizing: {
      type: String,
      default: 'is-small'
    },

    /**
     * The text to show to close the info modal. Default is the translation of action.close
     */
    modalCloseText: {
      type: String,
      default: ''
    },

    // ==========
    /**
     * hide the label
     */
    hideLabel: {
      type: Boolean,
      required: false,
      default: false,
    },

    // ========== ERROR SETTINGS ==========

    /**
     * Object with api errors to display
     *
     * Example
     *
     * {
     *   "errors": {
     *     "firstname": [
     *       "Error from api passed in"
     *     ]
     *   }
     * }
     */
    apiErrors: {
      type: Object,
      required: false,
    },

    /**
     * Text to show on an error state. This will overwrite all other error messages
     */
    errorText: {
      type: String,
      required: false,
      default: '',
    }

  },

  computed: {
    apiError() {
      if (!this.apiErrors || !this.apiErrors.errors) {
        return '';
      }

        if (this.apiErrors.errors[this.fieldname]) {
            return this.apiErrors.errors[this.fieldname][0];
        }

        return '';

    },
  },

    methods: {
        hasValidationErrors(errors) {
            return errors.length !== 0
        },

        hasErrors(dirty, invalid) {
            const apiFieldErrors = this.getApiFieldErrors();
            if (apiFieldErrors && apiFieldErrors.length > 0) {
                return true;
            }

            //if (undefined === dirty && undefined === invalid) {
            if (undefined === invalid) {
                return false;
            }

            return invalid && this.hasRules;
        },

        getApiFieldErrors() {
            if (isEmpty(this.apiErrors)) {
                return;
            }

            const fieldErrors = this.apiErrors.errors[this.fieldName];
            if (!fieldErrors) {
                return;
            }

            return fieldErrors;
        },

        mergeErrors(frontend) {
            if (this.errorText) {
                return this.errorText;
            }

            let allErrors = [];
            const apiFieldErrors = this.getApiFieldErrors();
            if (apiFieldErrors && apiFieldErrors.length > 0) {
                allErrors = allErrors.concat(apiFieldErrors);
            }

            if (undefined !== frontend && frontend && frontend.length > 0) {
                allErrors = allErrors.concat(frontend);
            }

            return allErrors.join(', ');
        },

        clearApiError() {
            if (this.apiErrors && this.apiErrors.errors) {
                // eslint-disable-next-line vue/no-mutating-props
                this.apiErrors.errors[this.fieldName] = null;
            }
        },

        onChange() {
            this.$emit("input", this.state.value);
        },

        onKeyUp() {
            this.$emit("input", this.state.value);
            this.$emit('onKeyUp', this.state.value);
        },

        onEnter() {
            this.$emit('onEnter', this.state.value);
        },

        onEsc() {
            this.$emit('onEsc', this.state.value);
        },
    }

}
</script>
