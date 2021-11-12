<template>
  <div>
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      class="form-control"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="$attrs['type'] === 'search'" class="fa fa-search"></span>
    <img
      class="password-view"
      src=""
      @click="togglePasswordVisibility($event)"
      v-if="$attrs['type'] === 'password'"
    />
    <textarea
      class="form-control"
      v-if="controlType === 'textarea'"
      :rows="row"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    controlType: {
      type: String,
      default: "input",
    },
    row: {
      type: Number,
      default: 7,
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    togglePasswordVisibility(e) {
      let div = e.target.closest("div");
      let input = div.querySelector("input");
      if (input.type === "password") input.type = "text";
      else input.type = "password";
    },
  },
};
</script>
