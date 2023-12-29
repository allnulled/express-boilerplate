<template>
<div id="app" class="win7">
  <WelcomeView v-if="!is_loaded" />
  <div class="app_header">
    <znavigationtopbar ref="znavigationtopbar" :root="this" />
  </div>
  <!-- You can start here! -->
  <div class="app_body">
    <router-view v-if="authentication" :root="this" />
    <template v-else="">
      <template v-if="$route.name === 'Registration'">
        <RegistrationPage :root="this" />
      </template>
      <template v-else-if="$route.name === 'Forgot-password'">
        <ForgotPage :root="this" />
      </template>
      <template v-else-if="$route.name === 'Recover-password'">
        <RecuperationPage :root="this" />
      </template>
      <template v-else="">
        <LoginPage :root="this" />
      </template>
    </template>
  </div>
  <div class="app_static">
    <zbadgeport ref="zbadgeport" />
    <zdialogport />
    <znavigationpanel ref="znavigationpanel" :root="this" />
  </div>
  <div class="app_footer">
    <zfooter>
      <span>{{ $t("Made with") }} <img class="footer_love_icon" src="favicon.ico" alt="love" /> {{ $t("by") }} <a target="_blank" href="https://github.com/allnulled/express-boilerplate">vbb</a></span>
    </zfooter>
  </div>
</div>
</template>

<script>
import "./lib/styles/all.css";

export default {
  name: "App",
  components: {},
  data() {
    return {
      is_loaded: false,
      is_in_login_subpage: false,
      authentication: false,
    };
  },
  methods: {
    goToPath(newPath) {
      this.$utils.trace("App.methods.goToPath");
      this.$router.push(newPath);
    },
    async login(user, password) {
      this.$utils.trace("App.methods.login");
      try {
        const login_response = await this.$ajax({
          url: "http://127.0.0.1:5054/Login",
          method: "POST",
          data: {
            nombre: user,
            contrasenya: password
          }
        });
        this.authentication = {
          permisos: login_response.data.data.permisos,
          sesion: login_response.data.data.sesion
        };
      } catch (error) {
        this.$vue.prototype.$dialogs.error(error);
      }
    }
  },
  async beforeCreate() {
    try {
      this.$root = this;
      await this.$storage.initialize();
      await this.$database.initialize();
    } catch (error) {
      console.error("Error loading App (on beforeCreate):", error);
    }
  },
  created() {},
  beforeMount() {

  },
  async mounted() {
    try {
      await this.$badges.initialize(this);
      await this.$badges.send({
        title: "Welcome",
        message: "" + this.$metadata.app + " (v" + this.$metadata.version + ")"
      });
      await this.$utils.timeout(3000);
      this.is_loaded = true;
    } catch (error) {
      console.error("Error loading App (on mounted):", error);
    }
    // @TOREMOVE: Just for debug purposes:
    window.app = this;
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  activated() {},
  deactivated() {},
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./lib/assets/fonts/Roboto/Roboto-Regular.ttf);
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

.navigation_button {
  width: 100%;
  height: 100%;
  border: 1px solid #DDDDDD;
  border-left: 0px;
  padding: 10px;
  cursor: pointer;
  font-size: 17px;
  color: #333333;
  text-shadow: 0 0 1px #333333;
  text-transform: uppercase;
  background-color: #FFFFFF;
}

.navigation_button:hover {
  background-color: #EEEEEE;
}

.navigation_button.selected {
  background-color: #DDDDDD;
}
</style>
