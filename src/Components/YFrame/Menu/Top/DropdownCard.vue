<template>
    <div class="dropdown--container">
        <slot name="trigger"></slot>

        <div  class="dropdown--card">
            <div class="menucard--container">
                <div class="menucard-topnav">
                    <div class="menucard-container">
                        <div class="banner">
                            <div class="menutitle">
                                <div class="title">{{ title }} </div>
                                <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
                            </div>
                        </div>

                        <slot name="content"></slot>

                        <div class="footer">
                            <slot name="footer"></slot>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },

    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },

        subtitle: {
            type: String,
            default: '',
        },
    }
}
</script>
