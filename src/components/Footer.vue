<template>
  <footer>
    <div class="container">
      <p>maxdesign.lt © {{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style></style>
