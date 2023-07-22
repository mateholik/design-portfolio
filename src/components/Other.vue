<template>
  <section class="other">
    <CoolLightBox
      @on-open="open"
      :items="fullImages"
      :index="index"
      @close="close"
    >
    </CoolLightBox>
    <div class="container">
      <div class="title">
        <h2>Other</h2>
      </div>
      <div class="wrapper">
        <div
          class="img-wrapper"
          v-for="(image, imageIndex) in items"
          :key="`other-${imageIndex}`"
          @click="index = imageIndex"
        >
          <img loading="lazy" class="cool-border" :src="image.preview" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  name: "Other",
  components: {
    CoolLightBox,
  },
  data() {
    return {
      index: null,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    close() {
      this.index = null;
      document.documentElement.style.overflow = "visible";
    },
    open() {
      document.documentElement.style.overflow = "hidden";
    },
  },
  computed: {
    fullImages() {
      return this.items.map((item) => item.img);
    },
  },
};
</script>

<style>
.other .cool-lightbox .cool-lightbox__slide img {
  width: auto;
}
</style>
