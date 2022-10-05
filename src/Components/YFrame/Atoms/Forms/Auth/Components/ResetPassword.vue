<template>
    <div>
        <y-title :title="$t('auth.reset_password.title')"></y-title>

        <div class="flex flex-col">
            <y-input-text
                :hint-text="$t('auth.field.email.hint')"
                :label="$t('auth.field.email.label')"
                :label-help-description="$t('auth.field.email.description')"
                :placeholder="$t('auth.field.email.placeholder')"
                :rules="'required|email|min:5'"
                fieldId="1"
                fieldName="email"
            >
            </y-input-text>

            <y-input-text
                :hint-text="$t('auth.reset_password.field.password_new.hint')"
                :is-password="true"
                :label="$t('auth.reset_password.field.password_new.label')"
                :label-help-description="$t('auth.reset_password.field.password_new.description')"
                :placeholder="$t('auth.reset_password.field.password_new.placeholder')"
                :rules="'required|strong-password'"
                fieldId="1"
                fieldName="password"
            >
            </y-input-text>

            <y-input-text
                :hint-text="$t('auth.reset_password.field.password_confirm.hint')"
                :is-password="true"
                :label="$t('auth.reset_password.field.password_confirm.label')"
                :label-help-description="$t('auth.reset_password.field.password_confirm.description')"
                :placeholder="$t('auth.reset_password.field.password_confirm.placeholder')"
                :rules="'required|confirmed:password'"
                fieldId="2"
                fieldName="passwordConfirm"
            >
            </y-input-text>

            <y-button-primary
                :label="$t('auth.action.password_request_change')"
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
<!--v-model="modelValue"-->


<!--:error-text="args.errorText"-->
<!--:hide-label="args.hideLabel"-->
<!--:hint-text="args.hintText"-->
<!--:is-password="args.isPassword"-->
<!--:label-help-description="args.description"-->
<!--:label-help-text="'forgot password ?'"-->
<!--:label="args.label"-->
<!--:valid-text="args.validText"-->
<!--:api-errors="args.apiErrors"-->
<!--@onAppendClicked="onAppendClicked"-->
<!--@onEnter="onEnter"-->
<!--@onEsc="onEsc"-->
<!--@onKeyUp="onKeyUp"-->
<!--prefix-clicked="clicked"-->
<!--prefix="<i class='icon icon-warning'></i>"-->

<!--v-model="modelValue"-->


<script>
import YTitle from './../../Title.vue'
import YInputText from "../../Inputs/InputText.vue"
import YCheckBox from "../../Checks/CheckBox.vue"
import YButtonPrimary from "../../Buttons/ButtonPrimary.vue"

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
