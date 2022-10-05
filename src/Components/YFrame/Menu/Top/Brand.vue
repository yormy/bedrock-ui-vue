<template>
    <span class="brand">
        <a href="#">
            <slot name="logo"></slot>
            {{brandName}}
        </a>
    </span>
</template>
<script>
export default {
    props: {
        brandName: {
            type: String,
            default: '',
        },
    }
}
</script>
