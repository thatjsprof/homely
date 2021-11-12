<template>
  <section class="section-header">
    <h3 class="title">
      Let’s find a home <br />
      that’s perfect for you
    </h3>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header-products">
            <div class="section-header-box">
              <div class="images">
                <img class="one" src="@/assets/images/icons/12.png" />
                <img class="two" src="@/assets/images/icons/13.png" />
                <p>
                  Products of<br />
                  the month
                </p>
              </div>
            </div>
            <div
              class="section-header-product fadeIn"
              v-for="(product, index) in productData"
              :key="index"
              ref="slides"
            >
              <div class="image">
                <img :src="product.image" />
              </div>
              <div class="body">
                <div class="row">
                  <div class="col-md-7 col-12 main">
                    <h3>{{ product.name }}</h3>
                    <h4>{{ product.address }}</h4>
                    <p>
                      {{ product.description }}
                    </p>
                    <Button classes="btn btn-black"
                      >Take me there<img src="@/assets/images/icons/9.png"
                    /></Button>
                  </div>
                  <div class="col-md-5 col-12 sub">
                    <div class="row">
                      <div
                        class="col-md-6 col-sm-3 col-6"
                        v-for="(feature, index) in product.features"
                        :key="index"
                      >
                        <img :src="feature.icon" />
                        <h3>{{ feature.name }}</h3>
                        <p>
                          {{ feature.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="controls">
            <img
              class="prev"
              @click="plusSlides(-1)"
              src="@/assets/images/icons/10.png"
            />
            <img
              class="next"
              @click="plusSlides(1)"
              src="@/assets/images/icons/11.png"
            />
            <span @click="plusSlides(1)">VIEW NEXT PRODUCT</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    productData: [],
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
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      var slides = this.$refs["slides"];
      if (slides) {
        if (n > slides.length) {
          this.slideIndex = 1;
        }
        if (n < 1) {
          this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[this.slideIndex - 1].style.display = "block";
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
