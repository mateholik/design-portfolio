<template>
  <div class="item-wrap">
    <div class="item">
      <div class="tag">{{ webData.tag }}</div>
      <div v-if="!webData.live" class="title">{{ webData.title }}</div>
      <a
        :href="`https://${webData.title}`"
        target="_blank"
        v-else
        class="title title--link"
      >
        {{ webData.title }}
      </a>
      <p>{{ webData.description }}</p>

      <div class="img-wrapper cool-border">
        <img
          loading="lazy"
          :src="require('@/assets/img/' + webData.image)"
          :alt="webData.title"
        />
      </div>
      <div class="buttons">
        <a :href="webData.linkFigma" target="_blank" class="button">Figma</a>
        <a
          :href="webData.linkPdf"
          target="_blank"
          class="button button--secondary"
        >
          <img :src="require('@/assets/img/download.svg')" alt="download" />
          PDF</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWeb",
  props: {
    webData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
