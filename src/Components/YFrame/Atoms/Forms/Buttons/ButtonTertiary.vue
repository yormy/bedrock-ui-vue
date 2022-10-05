<template>
  <y-button
    type="tertiary"
    v-bind="{...$props, ...$attrs}"
    v-on="$listeners"
  >
  </y-button>
</template>

<script>
import YButton from './Button.vue'

export default {
  inheritAttrs: false,

  components: {
    YButton
  },

  methods: {
    dummy() {
      // this is needed for storyboard click catcher, otherwise compile error cannot find onClick
      this.$emit('onClick');
    }
  }
}
</script>
