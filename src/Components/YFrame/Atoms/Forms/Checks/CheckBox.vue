<template>
  <div>
      <y-modal-info
          :id="'modal-' + fieldId"
          :size="modalSizing"
          :styling="modalStyling"
          :title="modalTitle"
      >
          {{ modalDescription }}
      </y-modal-info>

      <ValidationProvider
          v-slot="{ dirty, valid, invalid, errors }"
          :name="label"
          :rules="rules"
      >

          <label :class="styleClass(dirty, invalid)" class="y-checkbox--normal">
        <div class="checkbox">
          <input
            :id="fieldId"
            v-model="state.value"
            class="checkbox-input"
            name="dasffd"
            type="checkbox"
            @change="onChange($event)"

          >
          <svg class="mark" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
        </div>
        <div class="select-none">
          <label :for="fieldId" class="flex checkbox--label">
            <y-purified-html :value="label"></y-purified-html>
            <label v-if="modalDescription" :for="'modal-' + fieldId"
                   class="icon icon-help icon-small ml-1"></label>
          </label>
          <div class="checkbox--help">
            <y-purified-html :value="description"></y-purified-html>
          </div>
          <div v-if="hasErrors(dirty, invalid)" class="checkbox--validation">
            <p class="error">{{ mergeErrors(errors) }}</p>
          </div>
        </div>
      </label>

    </ValidationProvider>

  </div>
</template>


<script>
import YPurifiedHtml from '../../Display/PurifiedHtml.vue';
import YModalInfo from '../../Alerts/Modals/ModalInfo.vue';
import ValidationInput from '../Validation/ValidationInput.vue';

/**
 * Checkbox
 *
 * Features:
 * - basic html in label and description (links, bold, icons)
 * - modal for more detailed information
 * - colorable checkmark
 *
 * Events:
 * - onIsOn: when turning into the ON stated
 * - onIsOff: when turning into the OFF stated
 */
export default {
  extends: ValidationInput,

  inheritAttrs: false,

  components: {
    YPurifiedHtml,
    YModalInfo

  },

  props: {

    /**
     * v-Model Value
     */
    value: {
      type: Boolean,
      default: false,
    },

    /**
     * The label for this checkbox, with basic html bold, strong, links, list
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * The description for this checkbox, with basic html bold, strong, links, list
     */
    description: {
      type: String,
      default: '',
    },


    /**
     * Styling of the checkmark (is-info, is-success, is-warning, is-danger)
     */
    styling: {
      type: String,
      default: '',
    },

    // ---------- MODAL ----------
    /**
     * The text of the modal close button
     */
    modalCloseText: {
      type: String,
      default: ''
    },

    /**
     * The title of the modal when help is clicked
     */
    modalTitle: {
      type: String,
      default: ''
    },

    /**
     * The helptext inside the modal
     */
    modalDescription: {
      type: String,
      default: ''
    },

    /**
     * The size of the modal
     */
    modalSizing: {
      type: String,
      default: 'is-small'
    },

    /**
     * The style of the modal
     */
    modalStyling: {
      type: String,
      default: 'is-info'
    },

  },

  data() {
    return {
      state: {
        value: this.value,
      }
    };
  },

  methods: {
    styleClass(dirty, invalid) {
      if (this.hasErrors(dirty, invalid)) {
        return "is-error";
      }
      return this.styling;
    },

    onChange() {
      this.$emit("input", this.state.value);

      if (this.state.value) {
        this.$emit('onIsOn');
      } else {
        this.$emit('onIsOff');
      }
    },
  }
}
</script>
