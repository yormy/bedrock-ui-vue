<template>
  <div :class="isDisabled? ' disabled' : ''" class="y-btn-dropdown">
    <button :class="styleClass" class="y-btn y-btn-secondary">
      {{ label }}
      <span class="ml-1 icon icon-menu-item-expand"></span>
    </button>
    <div class="dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
/**
 * Button Dropdown
 *
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
     * The styling: is-info , is-success, is-warning, is-danger
     */
    styling: {
      type: String,
      default: '',
    },

    /**
     * The size
     */
    sizing: {
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
      if (this.type) {
        styling = "y-btn-" + this.type;
      }

      if (this.isDisabled) {
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
