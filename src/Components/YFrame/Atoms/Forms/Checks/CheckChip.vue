<template>
  <div>
    <y-modal-info :id="'modal-above-' + checkboxId"
                  :size="aboveModalSizing"
                  :title="aboveModalTitle"
                  styling="is-info"
    >
      {{ aboveModalDescription }}
    </y-modal-info>

    <y-modal-info :id="'modal-below-' + checkboxId"
                  :size="belowModalSizing"
                  :title="belowModalTitle"
                  styling="is-info"
    >
      {{ belowModalDescription }}
    </y-modal-info>

    <div class="y-checkable">
      <div class="flex flex-col">

        <label :for="'modal-above-' + checkboxId" class="flex btn">
          <div class="flex y-chip--help">
            <div class="text">
              {{ aboveTitle }}
            </div>
            <div v-if="aboveModalDescription" class="icon icon-help icon-extra-small"></div>
          </div>
        </label>

        <input :id="checkboxId" v-model="prop.value"
               class="checkbox-input"
               type="checkbox"
               @change="onChange($event)"
        >
        <label :for="checkboxId">
                <span class="is-on">
                    <slot name="is-on"></slot>
                </span>
          <span class="is-off">
                    <slot name="is-off"></slot>
                </span>
        </label>

        <label :for="'modal-below-' + checkboxId" class="flex btn">
          <div class="flex y-chip--help below">
            <div class="text">
              {{ belowTitle }}
            </div>
            <div v-if="belowModalDescription" class="icon icon-help icon-extra-small"></div>
          </div>
        </label>

      </div>
    </div>

  </div>
</template>


<script>

import YModalInfo from '../../Alerts/Modals/ModalInfo.vue';

/**
 * Checkbox in the form of a button
 *
 * Showing 1 of 2 states based on the checkbox being checked or not
 *
 * Options:
 * - add a text above or below a button for extra clarity
 * - show a modal to explain in more detail when the help text is clicked
 *
 * Events:
 * - onIsOn: when turning into the ON stated
 * - onIsOff: when turning into the OFF stated
 */
export default {
  inheritAttrs: false,

  components: {
    YModalInfo
  },

  props: {
    /**
     * The ID of the checkbox, needs to be unique on the page
     */
    checkboxId: {
      type: String,
      default: '1'
    },

    /**
     * v-Model Value
     */
    value: {
      type: Boolean,
      default: false,
    },

    /**
     * The text of the modal close button
     */
    modalCloseText: {
      type: String,
      default: ''
    },

    /**
     * The helptext that appears above the button
     */
    aboveTitle: {
      type: String,
      default: ''
    },

    /**
     * The title of the modal that appears in the modal when the label above is clicked
     */
    aboveModalTitle: {
      type: String,
      default: ''
    },

    /**
     * The helptext that appears in the modal when the label above is clicked
     */
    aboveModalDescription: {
      type: String,
      default: ''
    },

    /**
     * The size of the above modal
     */
    aboveModalSizing: {
      type: String,
      default: 'is-small'
    },


    /**
     * The helptext that appears below the button
     */
    belowTitle: {
      type: String,
      default: ''
    },

    /**
     * The title of the modal that appears in the modal when the label below is clicked
     */
    belowModalTitle: {
      type: String,
      default: ''
    },

    /**
     * The helptext that appears in the modal when the label below is clicked
     */
    belowModalDescription: {
      type: String,
      default: ''
    },

    /**
     * The size of the below modal
     */
    belowModalSizing: {
      type: String,
      default: 'is-small'
    },
  },

  data() {
    return {
      prop: {
        value: this.value,
      }
    };
  },

  methods: {
    onChange() {
      this.$emit("input", this.prop.value);

      if (this.prop.value) {
        this.$emit('onIsOn');
      } else {
        this.$emit('onIsOff');
      }

    }
  }
}
</script>
