<template>
  <div>
    <input :id="id" :checked="checked" class="y-modal-info-state" type="checkbox"/>
    <div :class="styling" class="y-modal-info">
      <label :for="id" class="modal__close">X</label>
      <div :class="size" class="modal__inner">
        <div>
          <div class="title">
            <span class="icon icon-info"></span>
            {{ title }}
          </div>

          <div class="body">
            <slot></slot>
          </div>

          <div class="button-row">
            <button class="y-btn y-btn-tertiary y-btn-small click-passthrough">{{
                prop.closeText
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

/**
 * Show a plain info modal, this can be a info, success or anything message. No user interaction possible, just close
 *
 * The modal can be displayed by connecting the modal id (prop) with css label [label class="btn" for="the-modal-id"]CSS[/label]
 * or set the checked state in the properties
 *
 * Clicking anywhere on the screen removed the modal again, no need to click the close button, that is just fake
 *
 * Cases:
 *  - help text
 */
export default {
  inheritAttrs: false,

  props: {
    /**
     * The ID of the modal so it can be popped with a label
     */
    id: {
      type: String,
      default: '1',
      required: true,
    },

    checked: {
      type: Boolean,
      default: false,
    },

    /**
     * The title of the dialog, displayed in the header
     */
    title: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The styling o the modal is-info , is-success, is-warning, is-danger
     */
    styling: {
      type: String,
      default: 'is-info'
    },

    /**
     * The size of the modal
     */
    size: {
      type: String,
      default: 'is-small'
    },

    /**
     * The text of the close button
     */
    closeText: {
      type: String,
      default: '',
    },

    /**
     * The classes of the close button
     */
    closeStyle: {
      type: String,
      default: 'y-btn y-btn-tertiary y-btn-small'
    }
  },

  data() {
    return {
      prop: {
        value: this.value,
        closeText: this.closeText
      }
    };
  },

  created() {
    this.setDefaults();
  },

  methods: {
    setDefaults() {
      if (this.prop.closeText === '') {
        this.prop.closeText = this.$t('action.close');
      }
    },
  }
}
</script>
