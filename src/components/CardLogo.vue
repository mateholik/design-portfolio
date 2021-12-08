<template>
  <div class="item-wrap">
    <div class="item cool-border">
      <img
        :src="require('@/assets/img/' + webData.image)"
        :alt="webData.title"
      />
      <!-- <div class="holder cool-border">
        <div class="title">{{ webData.title }}</div>
        <p>{{ webData.description }}</p>
        <div class="buttons">
          <a :href="webData.linkFigma" class="button">Figma</a>
          <a :href="webData.linkFigma" class="button button--secondary">
            <img
              :src="require('@/assets/img/download.svg')"
              alt="download"
            />PDF</a
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLogo",
  props: {
    webData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style></style>
