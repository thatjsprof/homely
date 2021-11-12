<template>
  <section class="section-features">
    <h2 class="section-features-title">Estate pricing & features</h2>
    <div class="section-features-cards">
      <div class="section-features-card">
        <h2 class="title title-2">Outright Price</h2>
        <h2 class="price price-1">NGN 23,500,000</h2>
        <h4 class="title-1">What you get</h4>
        <ul class="features features-1">
          <li>That is the true genius</li>
          <li>America - a faith in</li>
          <li>an insistence on small</li>
          <li>meet at one of those</li>
          <li>moments - a moment</li>
          <li>nation is at war</li>
        </ul>
        <Button classes="btn btn-main btn-block">Sign up to purchase </Button>
      </div>
      <div class="section-features-card">
        <h2 class="title title-3">Installment</h2>
        <Select :optionValues="installmentOptions" :defaultOption="12" />
        <h2 class="price price-2">NGN 1,450,000/mo</h2>
        <h4 class="title-1">What you get</h4>
        <ul class="features features-2">
          <li>That is the true genius</li>
          <li>America - a faith in</li>
          <li>an insistence on small</li>
          <li>meet at one of those</li>
        </ul>
        <Button classes="btn btn-main-outline btn-block"
          >Sign up to purchase
        </Button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      installmentOptions: [{ text: "12 Months", value: 12 }],
    };
  },
};
</script>
