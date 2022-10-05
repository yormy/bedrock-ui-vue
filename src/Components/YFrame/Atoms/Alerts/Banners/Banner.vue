<template>
  <div class="y-banner">
    <p class="y-banner--text">
      Banners right align
      <br class="sm:hidden"/>
      Check out this new deep dive course! -bedrock-core
    </p>
    <button class="y-btn y-btn-primary"> next</button>
  </div>
</template>


<script>
import YPurifiedHtml from '../../Display/PurifiedHtml.vue';

/**
 * Show an full width banner
 */
export default {
  inheritAttrs: false,

  components: {
    YPurifiedHtml,
  },

  props: {
    // /**
    //  * The title of the alert, displayed in the header
    //  */
    // title: {
    //     type: String,
    //     default: '',
    //     required : false,
    // },
    //
    // /**
    //  * The message of the alert, displayed in the header
    //  */
    // message: {
    //     type: String,
    //     default: '',
    //     required : false,
    // },
    //
    // /**
    //  * The html icon display
    //  */
    // icon: {
    //     type: String,
    //     default: '',
    //     required : false,
    // },
    //
    // /**
    //  * The general styling of the box and where to place the header
    //  */
    // alertBorder: {
    //     type: String,
    //     default: 'left with-header'
    // },
    //
    // /**
    //  * The styling o the modal is-info , is-success, is-warning, is-danger
    //  */
    // styling: {
    //     type: String,
    //     default: 'is-danger'
    // }
  },

  computed: {
    // styleClass () {
    //     return this.alertBorder + ' ' + this.styling;
    // }
  }
}
</script>
