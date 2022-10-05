<template>
    <menu-item
        :badge-content="!item.badge ? '' : item.badge.content ? item.badge.content : ''"
        :badge-type="!item.badge ? '' : item.badge.type ? item.badge.type : ''"
        :href="item.href"
        :icon-class="item.icon"
        :is-active="item.isActive ? item.isActive : false"
        :is-disabled="item.isDisabled ? item.isDisabled : false"
        :is-hidden="item.isHidden ? item.isHidden : false"
        :label="item.title"
        :level="level"
        :show-external-icon="item.showExternalIcon ? item.showExternalIcon : false"
        :submenu-id="item.submenu ? item.submenu.id  : null"
        :tooltip-content="item.tooltip"
        @click.stop="onMenuClickHandler"
    >
        <slot></slot>

    </menu-item>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    inheritAttrs: false,

    components: {
        MenuItem,
    },

    props: {
        level: {
            type: String,
            required: true,
        },

        item: {
            type: Object,
            default: '',
        },
    },

    methods: {
        onMenuClickHandler() {
            if (this.item.submenu) {
                let submenu = document.querySelector('[data-menu="' + this.item.submenu.id + '"]');

                if (submenu) {
                    const currentlyOpen = submenu.classList.contains("open");
                    this.toggleContentBackground(currentlyOpen);
                } else {
                    submenu = document.querySelector('#SUBMENU-' + this.item.submenu.id);
                }

                if (submenu.classList.contains("open")) {
                    submenu.classList.remove("open");
                } else {
                    submenu.classList.add("open");
                }
            }
        },

        toggleContentBackground(currentlyOpen) {
            if (!currentlyOpen) {
                this.moveContentToBackground(true);
            } else {
                this.moveContentToBackground(false);
            }
        },

        moveContentToBackground(asBackground) {
            const workspace = document.querySelector(".y-menu-workspace");

            if (asBackground) {
                workspace.classList.add("background");
            } else {
                workspace.classList.remove("background");
            }
        }
    }
}
</script>
