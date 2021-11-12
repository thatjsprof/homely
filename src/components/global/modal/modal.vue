<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="id + 'Label'"
    aria-hidden="true"
  >
    <div :class="`modal-dialog modal-${type} modal-dialog-centered`">
      <div class="modal-content">
        <img
          class="close"
          data-bs-dismiss="modal"
          aria-label="Close"
          src="@/assets/images/icons/14.png"
        />
        <div class="modal-body"><slot /></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    id: {
      type: String,
      default: "",
    },
    type: {
        type: String,
        default: "lg"
    }
  },
  data() {
    return {};
  },
};
</script>
