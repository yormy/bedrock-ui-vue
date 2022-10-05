<template>
<span>
    <y-modal-info
      v-if="labelHelpDescription"
      :id="'modal-input-help-' + fieldId"
      :size="modalSizing"
      :title="label"
      styling="is-info"
    >
        {{ labelHelpDescription }}
    </y-modal-info>

    <div :style="containerStyle" class="flex justify-between">
        <div class="flex">
            <span v-if="!hideLabel" class="label">
                {{ label }}
            </span>
            <span v-if="isRequired" class="ml-1 is-danger">*</span>
        </div>

        <div class="label-help">
            <label v-if="labelHelpText || labelHelpDescription"
                   :for="'modal-input-help-' + fieldId">
                {{ labelHelpText }}
                <span v-if="labelHelpDescription" class="icon icon-info clickable"></span>
            </label>

            <slot name="action"></slot>
        </div>


    </div>

</span>
</template>

<script>
import YModalInfo from '../../Alerts/Modals/ModalInfo.vue';

export default {
  components: {
    YModalInfo
  },

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
     * The helptext in the modal when the helptext is clicked
     */
    labelHelpDescription: {
      type: String,
      default: '',
      required: false,
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

    totalWidth: {
      type: Number,
      default: 0,
    },

    /**
     * allowed input number | string
     */
    isRequired: {
        type: Boolean,
        default: false,
    },

  },

  computed: {
    containerStyle() {
      if (this.totalWidth > 0) {
        return 'width:' + this.totalWidth + 'px;'
      }
      return '';
    }
  }

}
</script>
