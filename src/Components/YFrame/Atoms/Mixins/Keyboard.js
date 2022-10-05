export default {
  methods: {
    handleKey(evt, keyName, callableFunction) {
      if (evt.key === keyName) {
        if (typeof callableFunction === "function") {
          callableFunction();
        }
      }
    },

    useKeyboard(keyboardContainerId) {
      const that = this;
      document.onkeydown = function (evt) {
        if (document.querySelector(keyboardContainerId)) {
          that.handleKey(evt, 'Escape', that.onEsc);
          that.handleKey(evt, 'Enter', that.onEnter);
        }
      };
    }
  },
};
