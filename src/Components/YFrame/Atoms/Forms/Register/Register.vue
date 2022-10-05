<template>
    <div>
        <y-title :title="$t('register.register.title')"></y-title>

        <div class="flex flex-col">
            <y-input-text
                :hint-text="$t('register.register.field.email.hint')"
                :label="$t('register.register.field.email.label')"
                :label-help-description="$t('register.register.field.email.description')"
                :placeholder="$t('register.register.field.email.placeholder')"
                :rules="'required|email|min:5'"
                fieldId="1"
                fieldName="email"
            >
            </y-input-text>

            <y-input-text
                :hint-text="$t('register.register.field.password.hint')"
                :is-password="true"
                :label="$t('register.register.field.password.label')"
                :label-help-description="$t('register.register.field.password.description')"
                :placeholder="$t('register.register.field.password.placeholder')"
                :rules="'required|strong-password'"
                fieldId=""
                fieldName="password"
            >
            </y-input-text>

            <y-input-text
                :hint-text="$t('register.register.field.password_confirm.hint')"
                :is-password="true"
                :label="$t('register.register.field.password_confirm.label')"
                :label-help-description="$t('register.register.field.password_confirm.description')"
                :placeholder="$t('register.register.field.password_confirm.placeholder')"
                :rules="'required|confirmed:password'"
                fieldId="2"
                fieldName="passwordConfirm"
            >
            </y-input-text>

            <div class="flex justify-between">
                <y-check-box
                    :description="$t('register.register.field.agree_general.description')"
                    :label="$t('register.register.field.agree_general.label')"
                    field-id="agree_general"
                    field-name="remember"
                    styling="text-small"
                    :rules="'hasAgreed'"
                >
                </y-check-box>
            </div>


            <div class="flex justify-between">
                <y-check-box
                    :description="$t('register.register.field.agree_marketing.description')"
                    :label="$t('register.register.field.agree_marketing.label')"
                    field-id="agree_marketing"
                    field-name="remember"
                    styling="text-small"
                    :rules="'hasAgreed'"
                >
                </y-check-box>
            </div>


            <y-button-primary
                :label="$t('register.action.create_account')"
                class="mt-3"
            >
            </y-button-primary>

            <div class="mt-3 text-right">
                <a class="is-greyed" @click="onReturnLoginHandler">{{
                        $t('auth.navigation.to_login')
                    }}</a>
            </div>

        </div>
    </div>
</template>

<script>
import YTitle from './../Title.vue'
import YInputText from "../Inputs/InputText.vue"
import YCheckBox from "../Checks/CheckBox.vue"
import YButtonPrimary from "../Buttons/ButtonPrimary.vue"

/**
 *
 */
export default {
    inheritAttrs: false,

    components: {
        YTitle,
        YInputText,
        YCheckBox,
        YButtonPrimary,
    },

    methods: {
        onReturnLoginHandler() {
            this.$emit('onReturnToLoginClicked');
        }
    }
}
</script>
