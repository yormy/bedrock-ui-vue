<template>
    <span>
        <y-top></y-top>
        <y-left
            :menu-footer="menuFooter"
            :menu-header="menuHeader"
            :menu-items="menuItems"
            :menu-shown="menuShown"
            :menu-type="menuType"

        ></y-left>
        <y-pull></y-pull>

        <workspace :menu-type="menuType">
                <slot></slot>
        </workspace>

    </span>
</template>


<script>
import YLeft from './Left/Left.vue';
import YTop from './Top.vue';
import YPull from './Pull.vue';
import Workspace from './Workspace.vue';

export default {
    inheritAttrs: false,

    components: {
        YLeft,
        YTop,
        YPull,
        Workspace,
    },

    props: {
        menuType: {
            type: String,
            default: 'menu-icon-only',
        },

        /**
         * Show or hide the menu initially
         */
        menuShown: {
            type: Boolean,
        },

        menuItems: {
            type: Array,
            required: true,
        },

        menuFooter: {
            type: Object,
            required: false,
        },

        menuHeader: {
            type: Object,
            required: false,
        },
    }
}
</script>
