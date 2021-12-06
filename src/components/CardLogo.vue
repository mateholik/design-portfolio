<template>
  <div class="item-wrap">
    <div class="item cool-border">
      <img
        :src="require('@/assets/img/' + webData.image)"
        :alt="webData.title"
      />
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
