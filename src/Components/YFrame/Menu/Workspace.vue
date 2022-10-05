<template>
    <main :class="menuType" class="y-menu-workspace">

        <div id="overlay" class="overlay" style="height:1px;display:none"></div>


        <div class="content">
            <slot></slot>
        </div>


        <footer class="" >
            <div class="page-footer">
                <div class="uppercase">© 2022 </div>
                <div>
                    <nav>
                        <a href="">Support</a>
                        <span class="divider">|</span>
                        <a href="#" target="_blank">Docs</a>

                    </nav>
                </div>
            </div>
        </footer>

    </main>
</template>

<script>
export default {
    props: {
        menuType: {
            type: String,
            default: 'menu-icon-only',
        },
    }
}
</script>
