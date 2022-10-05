<template>
  <div id="SideSheet">
    <input :id="id" :checked="checked" class="y-modal-info-state" type="checkbox"/>
    <div :class="styling" class="y-modal-info">
      <label :for="id" class="modal__close">X</label>
      <div class="modal__side">
        <div>
          <div class="title">
            <span class="icon icon-info"></span>
            {{ title }} {{ checked }}
          </div>

          <div class="body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import myMixin from '../../Mixins/Keyboard.js';

/**
 * Show a modal to the side of the screen
 * Cases:
 *  - help text
 *
 *  **todo**
 *  no close on backdrop
 *  no close on esc
 */
export default {
  inheritAttrs: false,
  mixins: [myMixin],

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

  },

  mounted() {
    this.useKeyboard('#SideSheet');
  },

  methods: {
    onEsc() {
      this.checked = false;
      document.getElementById(this.id).checked = false;
    },
  }
}
</script>
