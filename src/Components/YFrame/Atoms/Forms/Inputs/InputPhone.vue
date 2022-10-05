<template>
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
        >
        </y-input-label>

        <maz-phone-number-input
            v-model="phoneNumerUnformatted"
            :default-country-code="'NL'"
            :required="true"
            @update="phoneUpdated"
        />

        <div class="y-input-help">
            <p v-if="showHint()" class="help is-info">{{ hintText }}</p>
            <p v-if="getError()" class="is-error">{{ getError() }}</p>
            <!--                <p v-if="dirty && valid && validText && hasRules" class="is-success">{{ validText }}</p>-->
        </div>


        <!--        size="lg"-->
        <!--        valid-color="#459B19"-->
<!--        error-color="#FF0000"-->
        {{this.form.data.phone}}
        {{this.form.data.countryCode}}

<!--        :translations="$t('bedrock-core.mazui.phone')"-->
    </div>

</template>

<script>
import YInputBase from "./InputBase.vue"
import YInputLabel from "./InputLabel.vue"
import MazPhoneNumberInput from "maz-ui/lib/maz-phone-number-input";


export default {
    extends: YInputBase,
    components: { YInputBase, YInputLabel,
        MazPhoneNumberInput
    },
    data () {
        return {
            phoneNumerUnformatted: null,


            form : {
                data: {
                    phone: '',
                    countryCode: ''
                },
                state: {
                    dirty: false,
                    phoneValid : null,
                },
                messages: {
                    error: '',
                }
            },
        }
    },

    methods: {
        phoneUpdated(data) {
            this.form.state.dirty =true;
            this.form.state.phoneValid = data.isValid;

            if (data.isValid) {
                this.form.data.phone = data.e164;
                this.form.data.countryCode = data.countryCode;
                this.form.messages.error = '';
                return
            }

            if (data.e164) {
                this.form.messages.error = 'invalid phonie'; //this.$t('bedrock-core.validations.phone.invalid');
            }
        },

        getError() {
            return this.form.messages.error;
        },


        showHint() {
            if (this.isDisabled || this.getError() || this.form.state.phoneValid) {
                return false;
            }
            //
            // const apiFieldErrors = this.getApiFieldErrors();
            // if (apiFieldErrors) {
            //     return false;
            // }

            return true;
        },
    }
}
</script>
