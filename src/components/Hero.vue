<template>
  <section class="hero">
    <Planet theme="light" size="5rem" top="51%" left="26%" />
    <Planet theme="light" size="3.5rem" top="78%" left="15%" />
    <Planet theme="light" size="2rem" top="101%" left="6%" />
    <div class="container">
      <h1>
        WEB DESIGN EXPERIENCE <br />
        YOU ARE LOOKING FOR
      </h1>
      <p>
        Performing UI / UX design <br />
        Logo design
      </p>
      <div class="buttons">
        <div class="button">Portfolio</div>
        <div class="button button--secondary">Contact Me</div>
      </div>
      <div @click="scroll" class="scroll">
        <div class="ball"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Planet from "@/components/PlanetComponent.vue";
export default {
  name: "Hero",
  components: {
    Planet,
  },
  methods: {
    scroll() {
      this.$scrollTo(document.getElementById("skills"), 400, {});
    },
  },
};
</script>

<style scoped lang="scss">
</style>