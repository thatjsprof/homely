<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
import Public from "@/layout/public.vue";
export default {
  name: "App",
  components: {
    Public,
  },
  data() {
    return {
      layout: "public",
    };
  },
};
</script>

<style>
#app {
  font-family: "DM Sans", sans-serif;
}
</style>
