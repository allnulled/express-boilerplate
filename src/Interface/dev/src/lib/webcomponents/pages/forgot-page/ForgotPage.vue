<template>
<div class="Component ForgotPage" style="background-color: #0F0F0F;">
  <zspacedlayout class="text_align_center">
    <zwindow v-draggabilized="{handle:'.title-bar'}" class="display_inline_block text_align_left" style="margin-top: 120px;margin-bottom: 120px;">
      <zwindowtitle>Recuperar cuenta</zwindowtitle>
      <zwindowbody v-if="!is_loading">
        <zlayout>
          <zformfield :on-change="v => email = v">{{ $t("Correo electrónico") }}:</zformfield>
          <zseparator style="margin-top: 4px; margin-bottom: 4px;" />
          <zlayouthorizontal>
            <zlayouthorizontalitem>
              <button class="" v-on:click="go_back_to_login">
                {{ $t("Salir") }}
              </button>
            </zlayouthorizontalitem>
            <zlayouthorizontalitem style="padding-left: 4px;">
              <button class="width_100x100" v-on:click="recuperate_account">
                {{ $t("Enviar correo de recuperación") }}
              </button>
            </zlayouthorizontalitem>
          </zlayouthorizontal>
        </zlayout>
      </zwindowbody>
      <zwindowbody v-else="">
        <zprogressbar />
      </zwindowbody>
    </zwindow>
  </zspacedlayout>
</div>
</template>

<script>
export default {
  props: {
    root: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      is_loading: false,
      email: ""
    };
  },
  methods: {
    go_back_to_login() {
      this.$router.history.push("/");
    },
    async recuperate_account() {
      this.$utils.trace("ForgotPage.methods.recuperate_account");
      try {
        this.is_loading = true;
        const response_forgot = await this.$ajax({
            url: "http://127.0.0.1:5054/Forgot",
            method: "POST",
            data: {
              correo: this.email
            }
        });
        console.log(response_forgot);
        await this.$dialogs.inform("Un correo de recuperación fue enviado a la cuenta de correo electrónico indicada. Por favor, confirme su usuario desde el link enviado a esta cuenta de correo.")
        this.$router.history.push("/");
      } catch (error) {
        this.$dialogs.error(error);
      } finally {
        this.is_loading = false;
      }
    }
  },
  watch: {},
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>

<style>
  
</style>
