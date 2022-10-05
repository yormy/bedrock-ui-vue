<template>
    <span v-if="!isHidden" v-on="$listeners">

        <a :class="menuItemClasses" :data-target="dataTarget" :data-toggle="dataToggle" :href="href"
           class="link">
<!--            <menu-tooltip :content="tooltipContent">-->
                <div class="menu-element">
                    <i v-if="iconClass" :class="iconClass"></i>
                    <span v-if="label" class="item-title">{{ label }}</span>
                </div>
            <!--            </menu-tooltip>-->

            <i v-if="showExternalIcon" class="icon icon-link-external icon-extra-small"></i>
            <span v-if="badgeContent" :class="badgeType" class="sidebar-badge">{{
                    badgeContent
                }}</span>
            <span v-if="hasSubmenu" class="collapse-indicator icon icon-menu-item-expand"></span>
        </a>

        <div :id="'SUBMENU-' + submenuId" class="collapse">
            <slot></slot>
        </div>
    </span>
</template>

<script>
/**
 * Left root item menu
 *
 * Shows the menu icon and handles the actions of the click
 *
 */
// import MenuTooltip from "./MenuTooltip.vue";

export default {
    inheritAttrs: false,

    components: {
        // MenuTooltip,
    },

    props: {
        /**
         * The text of the menu item
         */
        label: {
            type: String,
            default: '',
        },

        /**
         * The link to be opened on click
         */
        href: {
            type: String,
            default: '#no-link',
        },

        /**
         * The subitem-id menu that needs to be openend on click
         */
        submenuId : {
            type: String,
        },

        /**
         * The color of the badge (is-info , is-success, is-warning, is-danger
         */
        badgeType: {
            type: String,
            default: 'is-success',
        },

        /**
         * The actual content of the badge, usually a number of new items or action items
         */
        badgeContent: {
            type: String,
            default: '',
        },

        /**
         * The class of the icon to be displayed in front of the menu item
         */
        iconClass : {
            type: String,
            default: '',
        },

        /**
         * When disabled the menu item is there but grayed and not clickable
         */
        isDisabled : {
            type: Boolean,
            default: false
        },

        /**
         * Hide the item, not visible anymore
         */
        isHidden : {
            type: Boolean,
            default: false
        },

        /**
         * Show the external link icon
         */
        showExternalIcon : {
            type: Boolean,
            default: false
        },

        /**
         * The content of the tooltip to display
         */
        tooltipContent : {
            type: String,
            default: ''
        },

        /**
         * Color in an active state
         */
        isActive : {
            type: Boolean,
            default: false
        },

        level : {
            type: String,
            default: 'root'
        },

        showExpandableIcon: {
            type: Boolean,
            default: false
        },
    },

    computed: {
        hasSubmenu() {
            if (this.submenuId) {
                return true;
            }
            return false;
        },

        dataTarget() {
            if (this.level === 'root') {
                return '[data-menu=' + this.submenuId + ']';
            }

            return '#' + this.submenuId;
        },

        dataToggle() {
            if (this.level === 'root') {
                return 'tooltip-menu';
            }

            return 'collapse';
        },

        menuItemClasses() {
            let classNames = ''

            if (this.isDisabled) {
                classNames += ' is-disabled';
            }

            if (this.isActive) {
                classNames += ' is-active';
            }

            if (this.level) {
                classNames += ' ' + this.level;
            }

            return classNames;
        }
    }
}
</script>
