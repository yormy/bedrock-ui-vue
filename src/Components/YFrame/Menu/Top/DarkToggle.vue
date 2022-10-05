<template>
    <label class="y-toggle-dark" for="darkModeToggler">
        <input id="darkModeToggler" v-model="darkState" checked class="hidden checkbox-input"
               type="checkbox" @change="onDarkToggleHandler">
        <span class="is-off"><span class="icon icon-darkmode"></span></span>
        <span class="is-on"><span class="icon icon-lightmode"></span></span>
    </label>
</template>

<script>
export default {
    data() {
        return {
            darkState: false,
        }
    },

    methods: {
        onDarkToggleHandler() {
            const body = document.body;

            if (body.classList.contains("dark")) {
                body.classList.remove("dark")
            } else {
                body.classList.add("dark");
            }
        }
    }
}
</script>
