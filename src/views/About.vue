<template>
  <div class="container">
    <div @mouseover="hover = true" @mouseleave="hover = false" class="btn">
      labas
    </div>
    <ul :class="hover ? 'active' : ''">
      <li>niu</li>
      <li>niu2</li>
      <li>niu3</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>


<style lang="scss">
.btn {
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 40rem;
  background: red;
  font-size: 3rem;
  position: relative;
  z-index: 99;
}
ul {
  transition: 1000ms;
  width: 40rem;
  transform: translateY(-100%);
  opacity: 0;
  li {
    background: green;
    color: white;
    padding: 1rem;
  }
}
.active {
  transform: translateY(0);
  opacity: 1;
}
</style>
