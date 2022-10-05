<template>
    <header class="y-menu-top">
        <top-left></top-left>
        <top-right></top-right>
    </header>

</template>


<script>
import TopRight from "./Top/TopRight.vue";
import TopLeft from "./Top/TopLeft.vue";

export default {
    components: {
        TopLeft,
        TopRight,
    },
}
</script>
