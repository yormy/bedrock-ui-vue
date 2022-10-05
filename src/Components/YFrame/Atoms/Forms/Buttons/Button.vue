<template>
    <span>
        <button :class="styleClass"
                class="y-btn"
                v-on="$listeners"
        >
            <span v-if="isLoading" class="fa icon-loading fa-spin"></span>
            <span v-if="!isLoading && icon" :class="icon"></span>
            {{ label }}<span v-if="isExternalLink"
                             class="ml-1 icon icon-link-external icon-extra-small"></span>
        </button>
        <span v-if="savedState" class="icon solid icon-checked-circle is-success"></span>
    </span>
</template>


<script>
/**
 * Button
 *
 * Features:
 * - different styling and sizes
 * - loading and disabled state
 * - show external link icon when set
 *
 * Events:
 * - onClick: when the button is clicked
 *
 * todo
 * specials
 * button ajac response ?
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
     * The icon on the button
     */
    icon: {
      type: String,
      default: '',
    },

    /**
     * The type
     */
    type: {
      type: String,
      default: 'primary',
    },

    /**
     * The sizing
     */
    sizing: {
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

    /**
     * Whether the page is loading, disable button and show spinner
     */
    isLoading: {
      type: Boolean,
      default: false,
    },

    /**
     * adds the icon of an external link
     */
    isExternalLink: {
      type: Boolean,
      default: false,
    },

    /**
     * adds the green check icon when the page is confirmed
     */
    isSaved: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      state: {
        isSaved: this.isSaved,
      }
    };
  },

  computed: {
    savedState() {
      const that = this;
      if (this.state.isSaved) {
        window.setTimeout(() => {
          that.state.isSaved = false;
        }, 5000);
      }
      return this.state.isSaved;
    },

    styleClass() {
      let styling = '';
      if (this.type) {
        styling = "y-btn-" + this.type;
      }

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
}
</script>
