<template>
  <nav class="nav">
    <div class="container">
      <div class="align-items-center justify-content-between main-menu">
        <div class="nav-img">
          <router-link to="/">
            <img src="@/assets/images/logo/logo.png" />
          </router-link>
        </div>
        <div class="nav-links">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/showcase">Showcase</router-link>
            </li>
            <li>
              <a data-bs-toggle="modal" data-bs-target="#brochure" href="#"
                >Download Brochure</a
              >
            </li>
          </ul>
        </div>
        <div class="nav-action">
          <Button
            classes="btn btn-black"
            data-bs-toggle="modal"
            data-bs-target="#talk"
            >Talk with us</Button
          >
        </div>
      </div>
      <div class="align-items-center justify-content-between mobile-menu">
        <div class="nav-img">
          <router-link to="/">
            <img src="@/assets/images/logo/logo.png" />
          </router-link>
        </div>
        <div class="nav-icons" ref="icons" @click="toggleNav">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <div ref="navOverlay" class="nav-cover">
          <div class="nav-cover-content">
            <a href="#" @click="changeRoute('/')">Home</a>
            <a href="#" @click="changeRoute('/showcase')">Showcase</a>
          </div>
        </div>
      </div>
    </div>
    <Modal :id="'brochure'">
      <h3>
        Download <br />
        our brochure
      </h3>
      <p>
        Please enter your email address and we’ll send you a copy of the
        brochure
      </p>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <Input placeholder="First Name" />
          </div>
          <div class="col-md-6">
            <Input placeholder="Last Name" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Input placeholder="Email Address" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Input placeholder="Phone Number" />
          </div>
        </div>
      </div>
      <Button classes="btn btn-white-outline one">Submit</Button>
    </Modal>
    <Modal :id="'talk'">
      <h3>Let’s talk</h3>
      <p>Hello there, we’d love to hear from you</p>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <Input placeholder="First Name" />
          </div>
          <div class="col-md-6">
            <Input placeholder="Last Name" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Input placeholder="Email Address" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Input :controlType="'textarea'" placeholder="Your Message" />
          </div>
        </div>
      </div>
      <Button classes="btn btn-white-outline two">Submit</Button>
    </Modal>
  </nav>
</template>

<script>
import Modal from "@/components/global/modal/modal.vue";

export default {
  name: "Navigation",
  components: {
    Modal,
  },
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      const navOverlay = this.$refs["navOverlay"];
      const navIcons = this.$refs["icons"];
      this.$refs["navOverlay"].style.width =
        navOverlay.style.width === "100%" ? "0%" : "100%";
      const divs = [...navIcons.querySelectorAll("div")];
      this.$refs["navOverlay"].style.width === "100%"
        ? divs.forEach((element) => (element.style.backgroundColor = "#fff"))
        : divs.forEach((element) => (element.style.backgroundColor = "#000"));
      navIcons.classList.toggle("change");
    },
    changeRoute(route) {
      this.$refs["navOverlay"].style.width = "0%";
      this.$refs["icons"].classList.remove("change");
      [...this.$refs["icons"].querySelectorAll("div")].forEach(
        (element) => (element.style.backgroundColor = "#000")
      );
      this.$router.currentRoute.path !== route ? this.$router.push(route) : null;
    },
  },
};
</script>
