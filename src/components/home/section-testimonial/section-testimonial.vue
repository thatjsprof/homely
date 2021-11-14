<template>
  <section class="section-testimonial">
    <h2 class="section-testimonial-title">What our clients have to say</h2>
    <div class="section-testimonial-main">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-12">
          <div class="testimonial-card">
            <div
              class="body"
              data-bs-toggle="modal"
              data-bs-target="#testimonial"
              @click="
                playTestimonial('https://www.youtube.com/embed/tgbNymZ7vqY')
              "
            >
              <img class="img" src="@/assets/images/bg/img-1.png" />
              <div class="overlay"></div>
              <img class="icon" src="@/assets/images/icons/play.png" />
            </div>
            <p class="name">Amari Onoma</p>
            <p class="role">Emerald Gardens, 300SQM</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-12">
          <div class="testimonial-card">
            <div
              class="body"
              data-bs-toggle="modal"
              data-bs-target="#testimonial"
              @click="
                playTestimonial('https://www.youtube.com/embed/tgbNymZ7vqY')
              "
            >
              <img class="img" src="@/assets/images/bg/img-2.png" />
              <div class="overlay"></div>
              <img class="icon" src="@/assets/images/icons/play.png" />
            </div>
            <p class="name">Amari Onoma</p>
            <p class="role">Emerald Gardens, 300SQM</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-12">
          <div class="testimonial-card">
            <div
              class="body"
              data-bs-toggle="modal"
              data-bs-target="#testimonial"
              @click="
                playTestimonial('https://www.youtube.com/embed/tgbNymZ7vqY')
              "
            >
              <img class="img" src="@/assets/images/bg/img-3.png" />
              <div class="overlay"></div>
              <img class="icon" src="@/assets/images/icons/play.png" />
            </div>
            <p class="name">Amari Onoma</p>
            <p class="role">Emerald Gardens, 300SQM</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-testimonial-sub">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-12">
          <div class="testimonial-card">
            <div class="body">
              <img class="img" src="@/assets/images/bg/img-4.png" />
            </div>
            <div class="foot">
              <p class="content">
                Those options are already baked in with this model shoot me an
                email clear blue water but we need distributors to evangelize
                the new line to local markets.
              </p>
              <p class="name">Amari Onoma</p>
              <p class="role">Emerald Gardens, 300SQM</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-12">
          <div class="testimonial-card">
            <div class="body">
              <img class="img" src="@/assets/images/bg/img-5.png" />
            </div>
            <div class="foot">
              <p class="content">
                Those options are already baked in with this model shoot me an
                email clear blue water but we need distributors to evangelize
                the new line to local markets.
              </p>
              <p class="name">Amari Onoma</p>
              <p class="role">Emerald Gardens, 300SQM</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-12">
          <div class="testimonial-card">
            <div class="body">
              <img class="img" src="@/assets/images/bg/img-6.png" />
            </div>
            <div class="foot">
              <p class="content">
                Those options are already baked in with this model shoot me an
                email clear blue water but we need distributors to evangelize
                the new line to local markets.
              </p>
              <p class="name">Amari Onoma</p>
              <p class="role">Emerald Gardens, 300SQM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :id="'testimonial'" :type="'xl'">
      <iframe
        width="100%"
        height="550px"
        frameborder="0"
        allowfullscreen
        :src="testimonialVideo"
        ref="iframe"
      ></iframe>
    </Modal>
  </section>
</template>
<script>
import Modal from "@/components/global/modal/modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      testimonialVideo: "",
    };
  },
  methods: {
    playTestimonial(url) {
      this.testimonialVideo = url;
    },
  },
};
</script>
