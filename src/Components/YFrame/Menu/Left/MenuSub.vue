<template>
<span>
    <div :data-menu="menuId" class="menu-detail">
        <div class="menu-detail-wrapper">

            <div v-for="(group, index) in menu.groups" :key="group.title">
                <hr v-if="index !== 0">
                <div class="group level1">{{ group.title }}</div>

                <div v-for="item in group.items" :key="item.title">

                    <menu-item-container :item="item" level="level1">

                        <div v-if="item.submenu">
                            <div v-for="level2Item in item.submenu.items" :key="level2Item.title">
                                <menu-item-container :item="level2Item" level="level2">

                                    <div v-if="level2Item.submenu">
                                        <div v-for="level3Item in level2Item.submenu.items"
                                             :key="level3Item.title">
                                            <menu-item-container :item="level3Item"
                                                                 level="level3"></menu-item-container>
                                        </div>
                                    </div>

                                </menu-item-container>

                            </div>
                        </div>

                    </menu-item-container>

                </div>
            </div>
        </div>
    </div>
</span>
</template>

<script>
import MenuItemContainer from './Components/MenuItemContainer.vue';

/**
 */
export default {
    components: {
        MenuItemContainer
    },
    inheritAttrs: false,

    props: {
        menuId: {
            type: String,
            required: true,
        },

        menu: {
            type: Object,
            required: true,
        },
    },
}
</script>
