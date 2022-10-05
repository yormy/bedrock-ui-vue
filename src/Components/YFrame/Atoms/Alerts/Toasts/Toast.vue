<template>
  <div>
    the toast will popup on the screen elsewhere
  </div>
</template>

<script>
import ToastMain from './ToastMain.vue';

/**
 * Display a quick toast message
 */
export default {
  props: {

    /**
     * Title of the toast
     */
    title: {
      type: String,
      default: '',
    },

    /**
     * Description of the toast
     */
    description: {
      type: String,
      default: '',
    },

    /**
     * The styling o the modal is-info , is-success, is-warning, is-danger
     */
    styling: {
      type: String,
      default: 'is-success'
    },
  },

  mounted() {
    //    this.$toast.error(this.title); // simple toast

    const content = {
      component: ToastMain,
      props: {
        title: this.title,
        description: this.description
      },
    };

    this.$toast(content, {
      toastClassName: this.styling,
      bodyClassName: [this.styling],
      position: "top-right",
      timeout: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false
    });
  },
}
</script>
