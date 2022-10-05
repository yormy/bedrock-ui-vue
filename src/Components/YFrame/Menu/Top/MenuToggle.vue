<template>
    <span class="brand">
        <button class="menu-toggler" data-toggle="menu" type="button"
                @click.stop="onMenuToggleHandler">
            <i class="fa icon-menu-toggle icon-rotate"></i>
        </button>
    </span>
</template>


<script>
export default {
    methods: {
        onMenuToggleHandler() {
            const root = document.documentElement;
            const mainMenu = document.getElementById("menuLeftId");
            const workspace = document.querySelector(".y-menu-workspace");
            workspace.classList.remove("background");

            if (mainMenu.classList.contains("menu-hidden")) {
                mainMenu.classList.remove("menu-hidden")
                root.classList.remove("menu-hidden")
            } else {
                mainMenu.classList.add("menu-hidden");
                root.classList.add("menu-hidden");

                const collection = document.getElementsByClassName("open");
                for (let i = 0; i < collection.length; i++) {
                    collection[i].classList.remove("open");
                }
            }
        }
    }
}
</script>
