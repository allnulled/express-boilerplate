<template>
<div class="component WelcomeView">
  <div class="welcome_view_container" v-on:click="() => $root.is_loaded = true">
    <div class="display_table width_100x100 height_100x100">
      <div class="display_table_cell width_100x100 height_100x100 vertical_align_middle text_align_center">
        <span class="vertical_align_middle text_align_center">
          <div class="welcome_title">{{ $t("Sistema de horarios") }}</div>
          <img class="welcome_image" src="lib/images/man.png" />
          <div class="welcome_title">v{{ $metadata.version }}</div>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "WelcomeView",
  props: {},
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  activated() {},
  deactivated() {},

}
</script>

<style>
.welcome_view_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFFFFF;
  color: #333333;
  z-index: 99999;
}
.welcome_image {
  border: 1px solid #111;
  border-radius: 4pt;
  max-width: 160px;
  background-color: #CCC;
}
.welcome_title {
  font-size: 10px;
  font-family: Arial;
  text-shadow: 0 0 2px black;
}
</style>
