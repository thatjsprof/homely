<template>
  <button :class="classes" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    classes: {
      type: String,
      default: "",
    },
  },
};
</script>
