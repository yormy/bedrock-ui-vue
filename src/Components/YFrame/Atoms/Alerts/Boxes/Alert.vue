<template>
  <div>
    <div v-if="title || message" :class="styleClass" class="y-alert" role="alert">
      <div v-if="title || icon" class="flex header">
          <div v-if="icon" class="mr-2">
              <y-purified-html :value="icon"></y-purified-html>
          </div>
          <y-purified-html :value="title"></y-purified-html>
      </div>
      <div class="description">
        <y-purified-html :value="message"></y-purified-html>
      </div>
    </div>
  </div>
</template>


<script>
import YPurifiedHtml from '../../Display/PurifiedHtml.vue';

/**
 * Show an alertbox
 *
 * Cases:
 *  - error messages, success messages
 */
export default {
  inheritAttrs: false,

  components: {
    YPurifiedHtml,
  },

  props: {
    /**
     * The title of the alert, displayed in the header
     */
    title: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The message of the alert, displayed in the header
     */
    message: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The html icon display
     */
    icon: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The general styling of the box and where to place the header
     */
    alertBorder: {
      type: String,
      default: 'left with-header'
    },

    /**
     * The styling o the modal is-info , is-success, is-warning, is-danger
     */
    styling: {
      type: String,
      default: 'is-danger'
    }
  },

  computed: {
    styleClass() {
      return this.alertBorder + ' ' + this.styling;
    }
  }
}
</script>
