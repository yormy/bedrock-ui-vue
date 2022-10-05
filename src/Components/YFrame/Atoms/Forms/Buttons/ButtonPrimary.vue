<template>
  <y-button
    type="primary"
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
}
</script>
