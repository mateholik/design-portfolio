<template>
  <div class="item-wrap">
    <div class="item cool-border">
      <p>
        {{ priceData.title }}
      </p>
      <div class="number">{{ priceData.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPrice",
  props: {
    priceData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
