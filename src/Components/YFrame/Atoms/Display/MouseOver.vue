<template>
    <span class="y-btn-dropdown">
        <span>{{ label }}</span>
        <div class="dropdown-content">
            <slot></slot>
        </div>
    </span>
</template>


<script>


import DOMPurify from 'dompurify';

/**
 * Display text after hovering
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
  },

  data() {
    return {
      prop: {
        value: this.value,
      }
    };
  },

  computed: {
    purifiedHtml() {
      return DOMPurify.sanitize(this.value, {
        ALLOWED_TAGS: this.allowedTags,
        ALLOWED_ATTR: this.allowedAttributes
      });
    }
  }
}
</script>
