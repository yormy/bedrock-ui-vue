<template>
  <div v-html="purifiedHtml"></div>
</template>


<script>


import DOMPurify from 'dompurify';

/**
 * Display HTML after purification
 *
 * Cases
 * - When you need to render html use this instead of other options like {!! or v-html
 *
 * Required: npm install DOMPurify
 */
export default {

  inheritAttrs: false,

  props: {
    /**
     * The HTML string that needs to be purified and displayed
     */
    value: {
      type: String,
      default: '',
      required: true,
    },

    /**
     * The allowed tags to be displayed (default: b, i, strong, a , ul , ol, li ,'br')
     */
    allowedTags: {
      type: Array,
      default: () => [
        'b',
        'i', 'strong',
        'a',
        'ul', 'ol', 'li',
        'br'
      ],
    },

    /**
     * The allowed attributes to be displayed (default: nothing)
     */
    allowedAttributes: {
      type: Array,
      default: () => [
        'href',
        'target',
        'class'
      ],
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
