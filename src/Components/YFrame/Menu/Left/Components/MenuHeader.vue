<template>
    <div class="menu-header hidden">
        <a class="user-info" href="#">
            <slot name="avatar"></slot>
            <div class="usersection">
                <div class="username">{{ username }}</div>
                <div v-if="tagline" class="tagline">{{ tagline }}</div>
            </div>
        </a>
        <hr class="separator">
    </div>
</template>

<script>

export default {
    props: {
        username: {
            type: String,
            required: true,
        },

        tagline: {
            type: String,
            default: '',
        },
    }
}
</script>
