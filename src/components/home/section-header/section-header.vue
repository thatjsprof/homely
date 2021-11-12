<template>
  <section class="section-header">
    <p class="title">
      Build your dream home <br />
      at Emerald Palace
    </p>
    <p class="text">
      <span data-bs-toggle="modal" data-bs-target="#talk"
        >Talk with our rep <img src="@/assets/images/icons/5.png"
      /></span>
    </p>
    <div class="container">
      <div class="image fadeIn">
        <img src="@/assets/images/bg/main-bg.png" />
        <div class="image-more" data-bs-toggle="modal" data-bs-target="#slides">
          <div class="imgs">
            <img class="imgs-1" src="@/assets/images/bg/img-7.png" />
            <img class="imgs-2" src="@/assets/images/bg/img-8.png" />
          </div>
          <span>Show 15 images</span>
          <img class="right" src="@/assets/images/icons/8.png" />
        </div>
      </div>
    </div>
    <Modal :id="'slides'" :type="'xl'">
      <h3>Dream Homes only at Emerald Palace</h3>
      <div class="slides-container">
        <div
          v-for="(gallery, index) in galleryData"
          :key="index"
          ref="slides"
          class="slides fadeIn"
        >
          <div class="numbertext">
            {{ index + 1 }} / {{ galleryData.length }}
          </div>
          <img :src="gallery.url" style="width: 100%" />
        </div>

        <a class="prevBtn" @click="plusSlides(-1)">&#10094;</a>
        <a class="nextBtn" @click="plusSlides(1)">&#10095;</a>

        <div class="caption-container">
          <p ref="caption" id="caption"></p>
        </div>

        <div class="column-container">
          <div class="d-flex">
            <div
              class="column"
              v-for="(gallery, index) in galleryData"
              :key="index"
            >
              <div class="column-item">
                <img
                  ref="demo"
                  class="demo"
                  :src="gallery.url"
                  style="width: 100%"
                  @click="currentSlide(index + 1)"
                  :alt="`Gallery image ${index + 1}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>
<script>
import Modal from "@/components/global/modal/modal.vue";
export default {
  components: {
    Modal,
  },
  props: {
    galleryData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      slideIndex: 1,
    };
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      setTimeout(() => {
        this.showSlides((this.slideIndex = n));
      }, 50);
    },
    showSlides(n) {
      var i;
      var slides = this.$refs["slides"];
      var dots = this.$refs["demo"];
      var captionText = this.$refs["caption"];
      if (slides && captionText) {
        if (n > slides.length) {
          this.slideIndex = 1;
        }
        if (n < 1) {
          this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
        captionText.innerHTML = dots[this.slideIndex - 1].alt;
      }
    },
  },
  mounted() {
    if (this.$refs["slides"]) {
      this.showSlides(this.slideIndex);
    }
  },
};
</script>
