<template>
    <div class="menu-item">
        <div v-if="iconClass" class="icon"> <span :class="iconClass"></span></div>
        <div class="menutitle">
            <div class="mainTitle">{{ label }}</div>
            <div v-if="description" class="subtitle"> {{ description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
            required: true,
        },

        description: {
            type: String,
            default: '',
            required: false,
        },

        iconClass: {
            type: String,
            default: '',
            required: false,
        }
    }
}
</script>
