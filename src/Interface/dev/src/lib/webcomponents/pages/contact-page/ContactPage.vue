<template>
<div class="component ContactPage">
  <zjumbotron>{{ $t("Contact") }}</zjumbotron>
  <ztitle>{{ $t("Contact") }}</ztitle>
  <zsubtitle>{{ $t("Website") }}</zsubtitle>
  <zlayout>
  </zlayout>
  <zspacedlayoutnopaddingvertical class="normal_text">
    {{ $t("Don't forget to visit us on") }} <zlink href="https://github.com/allnulled">https://github.com/allnulled</zlink>
  </zspacedlayoutnopaddingvertical>
</div>
</template>

<script>
export default {
  name: "ContactPage",
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
</style>
