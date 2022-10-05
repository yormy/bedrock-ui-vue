<template>
  <div>
    <div class="y-input">
      <y-input-label
        :field-id="fieldId"
        :hide-label="hideLabel"
        :is-required="isRequired"
        :label="label"
        :label-help-description="labelHelpDescription"
        :label-help-text="labelHelpText"
        :modal-close-text="modalCloseText"
        :modal-sizing="modalSizing"
        :total-width="totalCodeWidth"
      ></y-input-label>

      <!--                class=""-->
      <!--                 v-bind:class="{-->
      <!--    'vue-code-input-container': true,-->
      <!--    [className]: !!className,-->
      <!--    }"-->
      <div
        v-bind:style="{ width: `${totalCodeWidth}px` }"
      >
        <div class="y-input-code">
          <div v-if="isLoading" class="is-loading">
            <div class="loading-text">LOADING...</div>
          </div>
          <div :class="isLoading ? 'blurred' : ''" class="code">
            <template v-for="(v, index) in values">
              <input
                :key="`${id}-${index}`"
                :ref="iRefs[index]"
                :autoFocus="autoFocus && !isLoading && index === autoFocusIndex"
                :class="hasErrors() ? 'is-error' : ''"
                :data-id="index"
                :disabled="isDisabled"
                :pattern="pattern"
                :required="isRequired"
                :style="{
            width: `${fieldWidthCalc}px`,
            height: `${fieldHeight}px`,
          }"
                :type="type === 'number' ? 'tel' : type"
                :value="v"
                maxlength="1"
                v-on:focus="onFocus"
                v-on:input="onValueChange"
                v-on:keydown="onKeyDown"
                v-on:paste="onPaste"
              />
            </template>
          </div>
        </div>
      </div>

      <div class="y-input-help">
          <p v-if="!errorText" class="help is-info">{{ hintText }}</p>
          <p v-if="errorText" class="is-error">{{ errorText }}</p>
      </div>
    </div>

  </div>
</template>


<script>
import YInputBase from './InputBase.vue'
import YInputLabel from './InputLabel.vue'


const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
  space: 32,
  enter: 13,
};

/**
 * Code Input
 */
export default {
  extends: YInputBase,

  components: {
    YInputLabel
  },

  props: {
    /**
     * allowed input number | string
     */
    type: {
      type: String,
      default: 'number',
    },

    /**
     * The length of the code
     */
    fields: {
      type: Number,
      default: 6,
    },

    fieldWidth: {
      type: Number,
      default: 48,
    },

    fieldSpace: {
      type: Number,
      default: 10,
    },

    fieldHeight: {
      type: Number,
      default: 54,
    },

    autoFocus: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    const {fields, values} = this;
    let vals = [];
    let autoFocusIndex = 0;
    if (values && values.length) {
      vals = [];
      for (let i = 0; i < fields; i += 1) {
        vals.push(values[i] || '');
      }
      autoFocusIndex = values.length >= fields ? 0 : values.length;
    } else {
      vals = Array(fields).fill('');
    }

    this.iRefs = [];
    for (let i = 0; i < fields; i += 1) {
      this.iRefs.push(`input_${i}`);
    }

    this.id = +new Date();
    return {values: vals, autoFocusIndex};
  },

  computed: {
    fieldWidthCalc() {
      if (screen
        .width < 700) {
        return 30;
      }
      return this.fieldWidth;
    },

    totalCodeWidth() {
      return this.fields * this.fieldWidthCalc + this.fieldSpace + 20;
    },

    pattern() {
      let pattern = '[0-9a-zA-Z]';
      if (this.type === 'number') {
        pattern = '[0-9]';
      }

      return pattern;
    },

  },


  methods: {
    onPaste(event) {
      event.preventDefault();
      const pastedValue = event.clipboardData.getData('Text');
      this.setCode(pastedValue);
    },

    setCode(input) {
      for (let i = 0; i < this.fields; i += 1) {
        const item = this.iRefs[i];
        const element = this.$refs[item][0];
        this.values[i] = input[i];
        element.value = input[i];

        this.$refs[this.iRefs[0]][0].focus();
        this.triggerChange();
      }
    },

    clear() {
      for (let i = 0; i < this.fields; i += 1) {
        const item = this.iRefs[i];
        const element = this.$refs[item][0];
        this.values[i] = '';
        element.value = '';

        this.$refs[this.iRefs[0]][0].focus();
      }
    },

    onFocus(e) {
      e.target.select(e);
    },

    onValueChange(e) {
      const index = parseInt(e.target.dataset.id, 10);
      const {type, fields} = this;

      if (type === 'number') {
        e.target.value = e.target.value.replace(/[^\d]/gi, '');
      }
      if (type === 'string') {
        e.target.value = e.target.value.replace(/[^0-9a-zA-Z]/g, '');
      }

      // this.handleKeys[index] = false
      if (e.target.value === '' || (type === 'number' && !e.target.validity.valid)) {
        return;
      }

      let next = 0;
      const {value} = e.target;
      let {values} = this;
      values = Object.assign([], values);
      if (value.length > 1) {
          let nextIndex = value.length + index - 1;
          if (nextIndex >= fields) {
              nextIndex = fields - 1;
          }
          next = this.iRefs[nextIndex];
          const split = value.split('');

          let i = 0;
          for (let item of split) {
              const cursor = index + i;
              if (cursor < fields) {
                  values[cursor] = item;
              }
              i++;
          }

          this.values = values;
      } else {
        next = this.iRefs[index + 1];
        values[index] = value;
        this.values = values;
      }

      if (next) {
        const element = this.$refs[next][0];
        element.focus();
        element.select();
      }

      this.triggerChange(values);
    },

    onKeyDown(e) {
      const index = parseInt(e.target.dataset.id, 10);
      const prevIndex = index - 1;
      const nextIndex = index + 1;
      const prev = this.iRefs[prevIndex];
      const next = this.iRefs[nextIndex];
      switch (e.keyCode) {
        case KEY_CODE.enter: {
          e.preventDefault();
          const val = this.values.join('');
          if (val.length >= this.fields) {
            this.$emit('enter', val);
          }
          break;
        }

        case KEY_CODE.space: {
          e.preventDefault();
          break;
        }

        case KEY_CODE.delete: {
          e.preventDefault();
          const vals = [...this.values];
          vals[index] = '';
          this.values = vals;
          this.triggerChange(vals);
          break;
        }

        case KEY_CODE.backspace: {
          e.preventDefault();
          const vals = [...this.values];
          if (this.values[index]) {
            vals[index] = '';
            this.values = vals;
            this.triggerChange(vals);
          } else if (prev) {
            vals[prevIndex] = '';
            this.$refs[prev][0].focus();
            this.values = vals;
            this.triggerChange(vals);
          }
          break;
        }
        case KEY_CODE.left:
          e.preventDefault();
          if (prev) {
            this.$refs[prev][0].focus();
          }
          break;
        case KEY_CODE.right:
          e.preventDefault();
          if (next) {
            this.$refs[next][0].focus();
          }
          break;
        case KEY_CODE.up:
        case KEY_CODE.down:
          e.preventDefault();
          break;
        default:
          // this.handleKeys[index] = true
          break;
      }
    },

    triggerChange(values = this.values) {
      const {fields} = this;
      const val = values.join('');
      this.$emit('change', val);
      if (val.length >= fields) {
        this.$emit('complete', val);
      }
    },

    //===============================================
    onChange() {
      this.$emit("input", this.state.value);
    },

    onKeyUp() {
      this.$emit("input", this.state.value);
      this.$emit('onKeyUp', this.state.value);
    },

    onEnter() {
      this.$emit('onEnter', this.state.value);
    },

    onEsc() {
      this.$emit('onEsc', this.state.value);
    },
  }
}
</script>
