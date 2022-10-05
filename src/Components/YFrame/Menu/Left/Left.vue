<template>
        <!--menu-stacked | menu-wide | hidden | menu-icon-only-->
        <aside id="menuLeftId" :class="menuClasses" class="y-menu-left menu-sticky"
               @click="closeMenuClickHandler">
            <div class="menu-items">

                <menu-header
                    :tagline="menuHeader.tagline"
                    :username="menuHeader.username"
                >
                    <template v-if="menuHeader.avatar_url" v-slot:avatar>
                        <img :src="menuHeader.avatar_url" alt="Bordered avatar" class="avatar-img">
                    </template>
                </menu-header>

                <div v-for="item in menuItems" :key="item.title">
                    <menu-item-container :item="item" level="root"></menu-item-container>
                </div>

                <!-- prevent from scrolling beneath the footer-->
                <br><br>

                <div v-if="menuFooter" class="">
                    <div class="y-menu-left-footer">
                        <span class="uppercase">{{ menuFooter.copyright }}</span>
                        <nav v-if="menuFooter.links">
                            <div v-for="(link, index) in menuFooter.links" :key="link.title">
                                <span v-if="index !== 0" class="divider">|</span>
                                <a :href="link.href">{{ link.title }}</a>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>

            <div v-for="item in menuItems" :key="item.title">
                <div v-if="item.submenu">
                    <menu-sub :menu="item.submenu" :menu-id="item.submenu.id"></menu-sub>
                </div>
            </div>

        </aside>
</template>

<script>
import MenuItemContainer from './Components/MenuItemContainer.vue';
import MenuHeader from "./Components/MenuHeader.vue";
import MenuSub from "./MenuSub.vue";

/**
 */
export default {
    inheritAttrs: false,

    components: {
        MenuSub,
        MenuHeader,
        MenuItemContainer
    },

    props: {
        // <!--menu-stacked | menu-wide | hidden | menu-icon-only-->
        /**
         * Type of menu
         *
         * - menu-stacked
         * - menu-wide
         * - hidden
         * - menu-icon-only
         */
        menuType: {
            type: String,
            default: 'menu-icon-only',
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

        /**
         * Initial shown or hidden menu
         */
        menuShown: {
            type: Boolean,
            default: true,
        }
    },

    computed: {
        menuClasses() {
            let classNames = this.menuType
            if (!this.menuShown) {
                classNames += ' menu-hidden';
            }


            return classNames;
        }
    },

    methods: {
        closeMenuClickHandler() {
            const workspace = document.querySelector(".y-menu-workspace");
            workspace.classList.remove("background");

            const collection = document.getElementsByClassName("open");
            for (let i = 0; i < collection.length; i++) {
                collection[i].classList.remove("open");
            }
        },
    }
}
</script>
