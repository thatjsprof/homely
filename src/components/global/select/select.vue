<template>
  <div>
    <label class="form-label" v-if="label">{{ label }}</label>
    <select
      class="form-select"
      v-bind="$attrs"
      @change="$emit('changed', getSelectedOption)"
      v-model="selectedOption"
    >
      <option value="" v-if="custom">{{ custom }}</option>
      <option
        v-for="(options, index) in optionValues"
        :value="options.value"
        :key="index"
        :selected="options.value === defaultOption"
      >
        {{ options.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    name: {
      type: String,
    },
    custom: {
      type: String,
    },
    optionValues: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    defaultOption: {
      type: [String, Number],
      required: false,
    },
  },
  data() {
    return {
      selectedOption: "",
    };
  },
  computed: {
    getSelectedOption() {
      return {
        selectedOption: this.selectedOption,
        name: this.name,
      };
    },
  },
};
</script>
