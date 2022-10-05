<template>
    <span>
        <div v-if="content" v-tippy='{
            placement : "top-end",
            arrow : false,
            animateFill: false,
            theme : "bedrock"}' :content="content"
        >
            <slot></slot>
        </div>
        <div v-else>
            <slot></slot>
        </div>

    </span>
</template>


<script>

/**
 * requires: vue-tippy
 */
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
