<template>
  <button :class="styleClass" class='y-btn y-btn-banner y-btn-primary' @click="onClickHandler">
    {{ label }}
    <div class="ribbon">{{ ribbon }}</div>
  </button>
</template>


<script>
/**
 * Button with Banner
 *
 *
 * Events:
 * - onClick: when the button is clicked
 */
export default {
  inheritAttrs: false,

  props: {
    /**
     * The label for this button
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * The label for this button
     */
    ribbon: {
      type: String,
      default: '',
    },

    /**
     * The styling: is-info , is-success, is-warning, is-danger
     */
    styling: {
      type: String,
      default: '',
    },

    /**
     * Whether disabled or not
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    styleClass() {
      let styling = '';

      if (this.isDisabled || this.isLoading) {
        styling += ' disabled';
      }

      if (this.sizeClass) {
        styling += ' ' + this.sizeClass;
      }

      if (this.styling) {
        styling += ' ' + this.styling;
      }

      return styling;
    },

    sizeClass() {
      if (!this.sizing) {
        return '';
      }
      return "y-btn-" + this.sizing
    }
  },

  methods: {
    onClickHandler() {
      this.$emit('onClick');
    }
  }
}
</script>
