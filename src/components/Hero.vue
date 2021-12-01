<template>
  <section class="hero">
    <Planet theme="light" size="4rem" top="53%" left="26%" />
    <Planet theme="light" size="3rem" top="77%" left="16%" />
    <Planet theme="light" size="2rem" top="99%" left="8%" />
    <Planet theme="light" size="1rem" top="117%" left="1%" />

    <Planet theme="dark" size="4rem" bottom="39%" right="26%" />
    <Planet theme="dark" size="3rem" bottom="63%" right="16%" />
    <Planet theme="dark" size="2rem" bottom="85%" right="8%" />
    <Planet theme="dark" size="1rem" bottom="103%" right="1%" />
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

<style scoped lang="scss"></style>
