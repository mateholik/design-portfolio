<template>
  <header :class="{ active: open }">
    <div class="container">
      <nav>
        <div class="logo">
          <img src="~@/assets/img/logo.svg" alt="logo" />
        </div>
        <ul class="menu-desktop">
          <li
            @click="scroll(item.link)"
            v-for="item in menuList"
            :key="item.title"
          >
            {{ item.title }}
          </li>
        </ul>
        <div @click="open = !open" class="burger">
          <button
            class="hamburger hamburger--vortex"
            :class="{ 'is-active': open }"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>
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
  </header>
</template>

<script>
export default {
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
      if (this.open) this.open = false;
      this.$scrollTo(document.getElementById(val), 400, {});
    },
  },
};
</script>

<style></style>
