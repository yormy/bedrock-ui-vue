<template>
    <span class="y-menu-left-hover">
        <span>
            <span v-if="content" class="y-menu-left-hover--content"  style="">
                <p>{{ content }}</p>
            </span>
            <slot></slot>
        </span>
    </span>
</template>


<script>
export default {
    inheritAttrs: false,

    props: {
        content: {
            type: String,
            default: '',
        },

    }
}
</script>
