<template>
<div class="top-menu-right">

    <dropdown-card subtitle= "subtitle" title =" new menu">
        <template v-slot:trigger>
            <button aria-expanded="false" class="dropdown-button" type="button">
                <span class="icon icon-notification"></span>
                <span class="topbar-badge is-warning"> 1</span>
            </button>
        </template>

        <template v-slot:content>
            <div class="content">
                <dropdown-card-menu-item
                    description="your details"
                    icon-class="icon icon-profile"
                    label="Profileeeee"
                >
                </dropdown-card-menu-item>

                <dropdown-card-menu-item
                    description="your settings"
                    icon-class="icon icon-settings"
                    label="Settings"
                >
                </dropdown-card-menu-item>

            </div>
        </template>

        <template v-slot:footer>
            <div class="item"><i class="icon icon-logout"></i> Logout</div>
        </template>

    </dropdown-card>


    <dropdown-card subtitle= "customer details" title ="Profile Description">
        <template v-slot:trigger>
            <button aria-expanded="false" class="dropdown-button" type="button">
                <div class="dropdown-button--profile">
<!--                    <img alt="Bordered avatar" class="avatar-img" src="../davatar.jpg">-->
                    <div class="usersection">
                        <div class="username">John Doe</div>
                        <div class="tagline">Editor</div>
                    </div>
                </div>
            </button>
        </template>

        <template v-slot:content>
            <div class="content">
                <dropdown-card-menu-item
                    description="your details"
                    icon-class="icon icon-profile"
                    label="Profile"
                >
                </dropdown-card-menu-item>

                <dropdown-card-menu-item
                    description="your settings"
                    icon-class="icon icon-settings"
                    label="Settings"
                >
                </dropdown-card-menu-item>
            </div>
        </template>

        <template v-slot:footer>
            <div class="item"><i class="icon icon-logout"></i> Logout</div>
        </template>

    </dropdown-card>

</div>
</template>


<script>
import DropdownCard from './DropdownCard.vue'
import DropdownCardMenuItem from "./DropdownCardMenuItem.vue";

export default {
    inheritAttrs: false,

    components: {
        DropdownCard,
        DropdownCardMenuItem
    },
}
</script>
