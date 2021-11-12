<template>
  <div class="home">
    <SectionHeader :galleryData="images" />
    <SectionWhy />
    <SectionMaps />
    <SectionTestimonial />
    <SectionExplore />
    <SectionFeatures />
  </div>
</template>
<script>
import SectionHeader from "@/components/home/section-header/section-header.vue";
import SectionWhy from "@/components/home/section-why/section-why.vue";
import SectionMaps from "@/components/home/section-maps/section-maps.vue";
import SectionTestimonial from "@/components/home/section-testimonial/section-testimonial.vue";
import SectionExplore from "@/components/home/section-explore/section-explore.vue";
import SectionFeatures from "@/components/home/section-features/section-features.vue";

export default {
  name: "Home",
  components: {
    SectionHeader,
    SectionWhy,
    SectionMaps,
    SectionTestimonial,
    SectionExplore,
    SectionFeatures,
  },
  data() {
    return {
      images: [
        {
          url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          url: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          url: "https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          url: "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          url: "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          url: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          url: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          url: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
    };
  },
};
</script>
