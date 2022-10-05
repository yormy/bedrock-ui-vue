<template>
    <y-alert-text
        class="is-danger"
        v-bind="{...$props, ...$attrs}"
        v-on="$listeners"
    >
    </y-alert-text>
</template>


<script>
import YAlertText from './AlertText.vue'

export default {
    components: {
        YAlertText,
    },
}
</script>
