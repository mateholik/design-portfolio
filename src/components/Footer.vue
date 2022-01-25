<template>
  <footer>
    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <img src="~@/assets/img/logo.svg" alt="logo" />
        </div>
        <ul class="menu-mob">
          <li
            @click="scroll(item.link)"
            v-for="item in menuList"
            :key="item.title"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      open: false,
      menuList: [
        {
          title: "Skills",
          link: "skills",
        },
        {
          title: "Websites",
          link: "websites",
        },
        {
          title: "Banners",
          link: "banners",
        },
        {
          title: "Logos",
          link: "logos",
        },
        {
          title: "Contact",
          link: "contact",
        },
      ],
    };
  },
  methods: {
    scroll(val) {
      this.$scrollTo(document.getElementById(val), 400, {});
    },
  },
};
</script>

<style></style>
