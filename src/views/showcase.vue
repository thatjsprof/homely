<template>
  <div class="showcase">
    <SectionHeader :productData="productData" />
    <SectionCatalogues />
    <SectionTestimonial />
  </div>
</template>
<script>
import SectionHeader from "@/components/showcase/section-header/section-header.vue";
import SectionCatalogues from "@/components/showcase/section-catalogues/section-catalogues.vue";
import SectionTestimonial from "@/components/home/section-testimonial/section-testimonial.vue";

export default {
  name: "Showcase",
  components: {
    SectionHeader,
    SectionCatalogues,
    SectionTestimonial,
  },
  data() {
    return {
      productData: [
        {
          name: "Emerald Palace",
          address: "LEKKI, LAGOS",
          description:
            "Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature.",
          image: require("@/assets/images/bg/img-13.png"),
          features: [
            {
              icon: require("@/assets/images/icons/1.png"),
              name: "24 Hours power",
              description:
                "Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival.",
            },
            {
              icon: require("@/assets/images/icons/2.png"),
              name: "Robust road network",
              description:
                "Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory.",
            },
            {
              icon: require("@/assets/images/icons/3.png"),
              name: "Corner Piece",
              description:
                "Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            },
            {
              icon: require("@/assets/images/icons/4.png"),
              name: "Secured Location",
              description:
                "Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.",
            },
          ],
        },
        {
          name: "Silicon Valley",
          address: "LEKKI, LAGOS",
          description:
            "Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature.",
          image:
            "https://images.pexels.com/photos/7545494/pexels-photo-7545494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          features: [
            {
              icon: require("@/assets/images/icons/1.png"),
              name: "24 Hours power",
              description:
                "Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival.",
            },
            {
              icon: require("@/assets/images/icons/2.png"),
              name: "Robust road network",
              description:
                "Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory.",
            },
            {
              icon: require("@/assets/images/icons/3.png"),
              name: "Corner Piece",
              description:
                "Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            },
            {
              icon: require("@/assets/images/icons/4.png"),
              name: "Secured Location",
              description:
                "Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.",
            },
          ],
        },
        {
          name: "Whistling Walls",
          address: "LEKKI, LAGOS",
          description:
            "Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature.",
          image:
            "https://images.pexels.com/photos/7545501/pexels-photo-7545501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          features: [
            {
              icon: require("@/assets/images/icons/1.png"),
              name: "24 Hours power",
              description:
                "Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival.",
            },
            {
              icon: require("@/assets/images/icons/2.png"),
              name: "Robust road network",
              description:
                "Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory.",
            },
            {
              icon: require("@/assets/images/icons/3.png"),
              name: "Corner Piece",
              description:
                "Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            },
            {
              icon: require("@/assets/images/icons/4.png"),
              name: "Secured Location",
              description:
                "Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.",
            },
          ],
        },
        {
          name: "Beveryly Hills",
          address: "LEKKI, LAGOS",
          description:
            "Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature.",
          image:
            "https://images.pexels.com/photos/7545790/pexels-photo-7545790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          features: [
            {
              icon: require("@/assets/images/icons/1.png"),
              name: "24 Hours power",
              description:
                "Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival.",
            },
            {
              icon: require("@/assets/images/icons/2.png"),
              name: "Robust road network",
              description:
                "Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory.",
            },
            {
              icon: require("@/assets/images/icons/3.png"),
              name: "Corner Piece",
              description:
                "Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            },
            {
              icon: require("@/assets/images/icons/4.png"),
              name: "Secured Location",
              description:
                "Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.",
            },
          ],
        },
        {
          name: "Hollywood Valley",
          address: "LEKKI, LAGOS",
          description:
            "Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature.",
          image:
            "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          features: [
            {
              icon: require("@/assets/images/icons/1.png"),
              name: "24 Hours power",
              description:
                "Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival.",
            },
            {
              icon: require("@/assets/images/icons/2.png"),
              name: "Robust road network",
              description:
                "Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory.",
            },
            {
              icon: require("@/assets/images/icons/3.png"),
              name: "Corner Piece",
              description:
                "Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            },
            {
              icon: require("@/assets/images/icons/4.png"),
              name: "Secured Location",
              description:
                "Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.",
            },
          ],
        },
      ],
    };
  },
};
</script>
