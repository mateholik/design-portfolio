<template>
  <div>
    <Header />
    <Hero />
    <section class="examples">
      <div class="container">
        <div class="wrapper">
          <CardExample />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import CardExample from "@/components/CardExample.vue";
export default {
  components: {
    Header,
    Hero,
    CardExample,
  },
};
</script>

<style></style>