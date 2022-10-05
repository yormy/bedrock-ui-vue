<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <span>{{ description }}</span>
  </div>
</template>

<script>
export default {
  props: {

    /**
     * Title of the toast
     */
    title: {
      type: String,
      default: '',
    },

    /**
     * Description of the toast
     */
    description: {
      type: String,
      default: '',
    },
  }
}
</script>
