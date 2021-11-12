<template>
  <section class="section-maps">
    <div class="maps">
      <gmap-map :zoom="14" :center="center" style="width: 100%; height: 35rem">
        <gmap-marker :position="center"></gmap-marker>
      </gmap-map>
    </div>
  </section>
</template>
<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: {
        lat: 45.508,
        lng: -73.587,
      },
    };
  },
};
</script>
