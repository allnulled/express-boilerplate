<template>
<div class="Component RecuperationPage" style="background-color: #0F0F0F;">
  <zspacedlayout class="text_align_center">
    <zwindow v-draggabilized="{handle:'.title-bar'}" class="display_inline_block text_align_left" style="margin-top: 120px;margin-bottom: 120px;">
      <zwindowtitle>Recuperar cuenta</zwindowtitle>
      <zwindowbody v-if="!is_loading">
        <zlayout>
          <zformpassword :on-change="v => password = v">{{ $t("Nueva contraseña") }}:</zformpassword>
          <zformpassword :on-change="v => password2 = v">{{ $t("Repite nueva contraseña") }}:</zformpassword>
          <zformfield :initial-value="token_de_recuperacion" :on-change="v => token_de_recuperacion = v">{{ $t("Token de recuperación") }}:</zformfield>
          <zseparator style="margin-top: 4px; margin-bottom: 4px;" />
          <zlayouthorizontal>
            <zlayouthorizontalitem>
              <button class="" v-on:click="go_back_to_login">
                {{ $t("Salir") }}
              </button>
            </zlayouthorizontalitem>
            <zlayouthorizontalitem style="padding-left: 4px;">
              <button class="width_100x100" v-on:click="recuperate_account">
                {{ $t("Cambiar contraseña") }}
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
      token_de_recuperacion: this.$route.params.token,
      password: "",
      password2: ""
    };
  },
  methods: {
    go_back_to_login() {
      this.$router.history.push("/");
    },
    async recuperate_account() {
      this.$utils.trace("RecuperationPage.methods.recuperate_account");
      try {
        this.is_loading = true;
        const response_forgot = await this.$ajax({
            url: "http://127.0.0.1:5054/Recover",
            method: "POST",
            data: {
              token_de_recuperacion: this.token_de_recuperacion,
              correo: this.email,
              contrasenya: this.password,
              contrasenya2: this.password2,
            }
        });
        if(response_forgot.data.data.mensaje !== "El usuario cambió su contraseña correctamente") throw new Error("Mensaje devuelto no identificado");
        await this.$dialogs.inform("La contraseña fue modificada correctamente. Puedes entrar cuando quieras usando tu nueva contraseña.");
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
