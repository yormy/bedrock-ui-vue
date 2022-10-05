<template>
    <div>
        <div v-if="message" :class="styleClass" role="alert">
            <y-purified-html :value="message"></y-purified-html>
        </div>
    </div>
</template>


<script>
import YPurifiedHtml from '../../Display/PurifiedHtml.vue';

/**
 * Show an alertbox
 *
 * Cases:
 *  - error messages, success messages
 */
export default {
    inheritAttrs: false,

    components: {
        YPurifiedHtml,
    },

    props: {
        /**
         * The message of the alert, displayed in the header
         */
        message: {
            type: String,
            default: '',
            required: false,
        },

        /**
         * The styling o the modal is-info , is-success, is-warning, is-danger
         */
        styling: {
            type: String,
            default: 'is-danger'
        }
    },

    computed: {
        styleClass() {
            return this.alertBorder + ' ' + this.styling;
        }
    }
}
</script>
