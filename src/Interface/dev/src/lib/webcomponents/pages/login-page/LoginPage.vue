<template>
<div class="Component LoginPage" style="background-color: #0F0F0F;">
  <zspacedlayout class="text_align_center">
    <zwindow v-draggabilized="{handle:'.title-bar'}" class="display_inline_block text_align_left" style="margin-top: 120px;margin-bottom: 120px;">
      <zwindowtitle>Entrar al sistema</zwindowtitle>
      <zwindowbody>
        <zlayout>
          <zformfield :on-change="v => user = v">{{ $t("Usuario") }}</zformfield>
          <zformpassword :on-change="v => password = v">{{ $t("Contraseña") }}</zformpassword>
          <zseparator style="margin-top: 4px; margin-bottom: 4px;" />
          <button class="width_100x100" v-on:click="login">
            Entrar
          </button>
        </zlayout>
      </zwindowbody>
      <zwindowfooter>
        <zwindowfooteritem class="no_break_line width_100x100 text_align_right">
          <router-link to="/register" class="zlink" v-on:click="open_register_page">Registrarse</router-link>
        </zwindowfooteritem>
        <zwindowfooteritem class="no_break_line text_align_right">
          <router-link to="/forgot" class="zlink" v-on:click="open_forgot_page">Recuperar cuenta</router-link>
        </zwindowfooteritem>
      </zwindowfooter>
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
      user: "",
      password: ""
    };
  },
  methods: {
    login() {
      return this.root.login(this.user, this.password);
    },
    open_register_page() {
      this.$router.history.push("/register");
    },
    open_forgot_page() {
      this.$router.history.push("/forgot");
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
