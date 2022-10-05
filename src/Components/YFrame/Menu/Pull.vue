<template>
    <aside id="customizer" class="y-menu-pull y-menu-pull_customizer">

        <!-- Toggler -->
        <button class="y-menu-pull-toggler" data-toggle="customizer"
                @click.stop="onPullToggleHandler">
            <i class="icon icon-menu-pull-toggle"></i>
        </button>


        <!-- Header -->
        <div class="header">
            <div class="title">Theme</div>
            <div>
                <a href="#">
                    <button class="menu-top-button expands" type="button">
                        <strong><i class="icon icon-warning"></i></strong>
                    </button>
                </a>
            </div>
        </div>
        <hr>

        <div class="pull-container">
            <div class="item">
                <div>
                    <h5>Branded Menu</h5>
                    <small>Menu will be  <a href="#">set</a> to primary color</small>
                </div>
                <label class="">
                    <input data-toggle="branded-menu" type="checkbox">
                    <span></span>
                </label>
            </div>
        </div>
    </aside>


</template>


<script>

/**
 * Show an full width banner
 */
export default {
    methods: {
        onPullToggleHandler() {
            const pullMenu = document.getElementById("customizer");
            if (pullMenu.classList.contains("open")) {
                pullMenu.classList.remove("open")
            } else {
                pullMenu.classList.add("open");
                // document.getElementById("overlay").style.display = "block";
            }
        }
    }
}
</script>
