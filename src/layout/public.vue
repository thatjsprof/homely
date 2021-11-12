<template>
  <main>
    <Navigation />
    <slot />
    <Footer />
  </main>
</template>
<script>
import Navigation from "@/components/global/navigation/navigation.vue";
import Footer from "@/components/global/footer/footer.vue";

export default {
  name: "Layout",
  components: {
    Navigation,
    Footer,
  },
};
</script>
