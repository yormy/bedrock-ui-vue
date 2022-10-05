<template>
    <div class="top-menu-left">
        <brand brand-name="translation cappie">
            <template v-slot:logo>
<!--                <img alt="Bordered avatar" class="avatar-img" src="../bavatar.jpg">-->
            </template>
        </brand>

        <menu-toggle></menu-toggle>

        <button class="menu-top-button dropdown-button" type="button">
            <i class="icon icon-notification"></i>
            <label>Emails</label>
        </button>


        <dropdown-card subtitle= "subtitle" title =" emails">
            <template v-slot:trigger>
                <button aria-expanded="false" class="dropdown-button" type="button">
                    <span class="icon icon-notification"></span>
                    <span class="topbar-badge is-warning"> 1</span>
                </button>
            </template>

            <template v-slot:content>
                <div class="content">
                    <div class="menu-item">
                        <div class="icon"> <i class="icon icon-profile"></i></div>
                        <div class="menutitle"> Profile</div>
                    </div>
                    <div class="menu-item">
                        <div class="icon"><i class="icon icon-settings"></i></div>
                        <div class="menutitle">
                            <div class="mainTitle">Account information</div>
                            <div class="subtitle"> Account information</div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="item"><i class="icon icon-logout"></i> Logout</div>
            </template>

        </dropdown-card>

        <div class="y-menu-top--item is-danger">
            Danger item
        </div>

        <dark-toggle></dark-toggle>
</div>
</template>


<script>
import Brand from './Brand.vue'
import MenuToggle from './MenuToggle.vue'
import DarkToggle from './DarkToggle.vue'
import DropdownCard from './DropdownCard.vue'

export default {
    inheritAttrs: false,

    components: {
        Brand,
        MenuToggle,
        DarkToggle,
        DropdownCard
    },
}
</script>
