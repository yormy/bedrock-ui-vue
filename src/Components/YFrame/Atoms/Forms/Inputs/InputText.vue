<template>
  <div>
    <ValidationProvider
        v-slot="{ dirty, valid, invalid, errors }"
        :name="label"
        :rules="rules"
        :ref="validationRef"
    >
      <div class="y-input">

        <y-input-label
            :field-id="fieldId"
            :hide-label="hideLabel"
            :is-required="isRequired || hasRequiredRule"
            :label="label"
            :label-help-description="labelHelpDescription"
            :label-help-text="labelHelpText"
            :modal-close-text="modalCloseText"
            :modal-sizing="modalSizing"
        >
          <template v-slot:action>
                        <span v-if="isPassword">
                            <span
                              :class="state.isPassword ? 'icon-password-hide' : 'icon-password-show'"
                              class="icon clickable"
                              @click="onPasswordRevealHandler"></span>
                        </span>
          </template>
        </y-input-label>


        <div :class="appendPrepostFix(getState(dirty,errors))" class="flex ">
          <div v-show="prefix" :class="mPrepostFix(getState(dirty,errors))" @click="clickAppend()">
            <span v-html="getAppend()"></span>
          </div>
          <input :id="fieldId" :ref="fieldRef"
                 v-model="state.value"
                 :class="prepostFix(getState(dirty,errors))"
                 :name="fieldName"
                 :placeholder="placeholder"
                 :type="fieldType"
                 class="y-input-field"
                 @change="onChange($event)"
                 @keyup="onKeyUp($event)"
                 @keyup.enter="onEnter($event)"
                 @keyup.esc="onEsc($event)"
          >
          <span v-if="postfix" :class="mPrepostFix(getState(dirty,errors))" @click="clickAppend()">
                    <span v-html="getAppend()"></span>
                </span>

        </div>
        <div class="y-input-help">
            <p v-if="showHint(dirty, invalid, errors)" class="help is-info">{{ hintText }}</p>
          <p v-if="hasErrors(dirty, invalid)" class="is-error">{{ mergeErrors(errors) }}</p>
          <p v-if="dirty && valid && validText && hasRules" class="is-success">{{ validText }}</p>
        </div>
      </div>

    </ValidationProvider>

  </div>
</template>


<script>
import ValidationInput from '../Helpers/ValidationInput.vue';
import YModalInfo from '../../Alerts/Modals/ModalInfo.vue';
import YInputLabel from './InputLabel.vue'

/**
 * Text Input
 *
 *
 * Options:
 *
 * Events:
 * Requires:
 * - vee-validate : for frontend validation
 * - vue-i18n : for displaying translated error messages
 *
 * ** todo **
 * - translatable overrrides
 */
export default {
    extends: ValidationInput,
    inheritAttrs: false,

    components: {
        YModalInfo,
        YInputLabel
    },

    props: {
        /**
         * v-Model Value
         */
        value: {
            type: String,
            default: '',
        },

        /**
         * Password functionality: hide typed in field, allow reveal icon
         */
        isPassword: {
            type: Boolean,
            default: false,
        },

        /**
         * Option to set reference to the input
         */
        fieldRef: {
            type: String,
            required: false,
        },

        /**
         * Option to set reference to the validation provider, to trigger validations
         */
        validationRef: {
            type: String,
            required: false,
        },

        /**
         * Placeholder
         */
        placeholder: {
            type: String,
            default: '',
        },

        /**
         * Frontend validation rules
         */
        rules: {
            type: String,
            default: '',
            required: false,
        },


        // ---------- PREFIX POSTFIX ----------

        /**
         * The html to show in the prefix box
         */
        prefix: {
            type: String,
            required: false,
        },

        /**
         * The html to show in the prefix box when the box has been toggled
         */
        prefixClicked: {
            type: String,
            required: false,
        },

        /**
         * The html to show in the postfix box
         */
        postfix: {
            type: String,
            required: false,
        },

        /**
         * The html to show in the postfix box when the box has been toggled
         */
        postfixClicked: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            state: {
                value: this.value,
                isPassword: this.isPassword,
                clickedAppend: false,
            }
        };
    },

    watch: {
        value() {
            this.state.value = this.value;
        }
    },

    computed: {
        hasRequiredRule() {
            if (!this.rules) {
                return false;
            }

            const lowercase = this.rules.toLowerCase();
            const allRules = lowercase.split('|');
            return allRules.includes('required');
        },

        hasRules() {
            return this.rules.length !== 0;
        },

        fieldType() {
            //if (!this.state.clickedAppend && this.isPassword) {
            if (this.state.isPassword) {
                return 'password'
            }
            return 'text';
        },
    },

  methods: {
    onPasswordRevealHandler() {
      this.state.isPassword = !this.state.isPassword;
    },

      showHint(dirty, invalid, errors) {
          if (dirty || this.isDisabled) {
              return false;
          }

          const apiFieldErrors = this.getApiFieldErrors();
          if (apiFieldErrors || this.hasValidationErrors(errors)) {
              return false;
          }

          return true;
    },

    //------ PRE and POST fix
    getAppend() {
      this.$emit("onAppendClicked", this.state.value);
      if (this.prefix) {
        if (this.state.clickedAppend && this.prefixClicked) {
          return this.prefixClicked;
        }
        return this.prefix;
      }
      if (this.postfix) {
        if (this.state.clickedAppend && this.postfixClicked) {
          return this.postfixClicked;
        }
        return this.postfix;
      }

      return '';
    },

    clickAppend() {
      if (this.isDisabled) {
        return;
      }
      this.state.clickedAppend = !this.state.clickedAppend;
    },

    appendPrepostFix(state = '') {
      return 'input-with-append ';// + this.prepostFix(state);
    },

    mPrepostFix(state = '') {
      return 'y-input-append ' + this.prepostFix(state);
    },

    prepostFix(state = '') {
      let classDisabled = '';
      if (this.isDdisabled) {
        classDisabled = 'is-disabled'
      }

      if (this.prefix) {
        return 'prefix ' + state + classDisabled;
      }

      if (this.postfix) {
        return 'postfix ' + state + classDisabled;
      }
      return '';
    },

    getState(dirty, errors) {
      if (!dirty || this.rules.length === 0) {
        return;
      }

      if (errors.length === 0) {
        return 'is-success';
      }

      return "is-error"
    },
  }
}
</script>
