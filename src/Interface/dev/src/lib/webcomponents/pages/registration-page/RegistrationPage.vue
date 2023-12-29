<template>
<div class="Component RegistrationPage" style="background-color: #0F0F0F;">
  <zspacedlayout class="text_align_center">
    <zwindow v-draggabilized="{handle:'.title-bar'}" class="display_inline_block text_align_left" style="margin-top: 120px;margin-bottom: 120px;">
      <zwindowtitle>{{ $t("Registrar nuevo usuario") }}</zwindowtitle>
      <zwindowbody>
        <zlayout v-if="!is_loading">
          <zformfield :on-change="v => nombre = v">{{ $t("Nuevo usuario") }}:</zformfield>
          <zformfield :on-change="v => correo = v">{{ $t("Correo electrónico") }}:</zformfield>
          <zformpassword :on-change="v => contrasenya = v">{{ $t("Nueva contraseña") }}:</zformpassword>
          <zformpassword :on-change="v => contrasenya2 = v">{{ $t("Repite nueva contraseña") }}:</zformpassword>
          <zseparator style="margin-top: 4px; margin-bottom: 4px;" />
          <zlayouthorizontal>
            <zlayouthorizontalitem>
              <button class="" v-on:click="go_back_to_login">
                {{ $t("Salir") }}
              </button>
            </zlayouthorizontalitem>
            <zlayouthorizontalitem style="padding-left: 4px;">
              <button class="width_100x100" v-on:click="register_new_user">
                {{ $t("Registrar nuevo usuario") }}
              </button>
            </zlayouthorizontalitem>
          </zlayouthorizontal>
        </zlayout>
        <zlayout v-else="">
          <zprogressbar />
        </zlayout>
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
      nombre: "",
      contrasenya: "",
      contrasenya2: "",
      correo: ""
    };
  },
  methods: {
    go_back_to_login() {
      this.$router.history.push("/");
    },
    async register_new_user() {
      try {
        if(this.contrasenya !== this.contrasenya2) throw new Error("Las contraseñas 1 y 2 son distintas");
        this.is_loading = true;
        const response_registration = await this.$ajax({
          url: "http://127.0.0.1:5054/Register",
          method: "POST",
          data: {
            nombre: this.nombre,
            contrasenya: this.contrasenya,
            correo: this.correo
          }
        });
        await this.$dialogs.inform(response_registration.data.data.mensaje);
        this.go_back_to_login();
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
