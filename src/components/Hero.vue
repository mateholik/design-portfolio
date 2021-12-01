<template>
  <section class="hero">
    <Planet
      v-if="!mob"
      delay="200ms"
      theme="light"
      size="1rem"
      top="117%"
      left="1%"
    />
    <Planet
      delay="400ms"
      theme="light"
      size="2rem"
      top="99%"
      left="8%"
      mobSize="0.8rem"
      mobBottom="0"
      mobLeft="13%"
    />
    <Planet
      delay="600ms"
      theme="light"
      size="3rem"
      top="77%"
      left="16%"
      mobSize="1.2rem"
      mobBottom="4%"
      mobLeft="24%"
    />
    <Planet
      delay="800ms"
      theme="light"
      size="4rem"
      top="53%"
      left="26%"
      mobSize="2.2rem"
      mobBottom="8%"
      mobLeft="35%"
    />
    <Planet
      delay="1000ms"
      theme="dark"
      size="4rem"
      bottom="39%"
      right="26%"
      mobSize="2.2rem"
      mobBottom="8%"
      mobRight="35%"
    />
    <Planet
      delay="1200ms"
      theme="dark"
      size="3rem"
      bottom="63%"
      right="16%"
      mobSize="1.2rem"
      mobBottom="15%"
      mobRight="24%"
    />
    <Planet
      delay="1400ms"
      theme="dark"
      size="2rem"
      bottom="85%"
      right="8%"
      mobSize="0.8rem"
      mobBottom="22%"
      mobRight="13%"
    />
    <Planet
      delay="1600ms"
      theme="dark"
      size="1rem"
      bottom="103%"
      right="1%"
      v-if="!mob"
    />
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
  computed: {
    mob() {
      return window.innerWidth < 768;
    },
  },
};
</script>

<style scoped lang="scss"></style>
