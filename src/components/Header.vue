<template>
  <header :class="{ active: open }">
    <div class="container">
      <nav>
        <div class="logo">
          <img src="~@/assets/img/logo.svg" alt="logo" />
        </div>
        <ul class="menu-desktop">
          <li
            @click="scroll(item)"
            v-for="item in menuList"
            :key="item.title"
            class="item"
            :class="{ 'has-submenu': item.subMenu }"
          >
            {{ item.title }}
            <img
              v-if="item.subMenu"
              :src="require('@/assets/img/menu-arrow.svg')"
              alt="arrow"
            />
            <ul v-if="item.subMenu" class="sub-menu">
              <li
                v-for="subItem in item.subMenu"
                :key="subItem.title"
                @click="scroll(subItem)"
              >
                {{ subItem.title }}
              </li>
            </ul>
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
          title: "Work examples",
          subMenu: [
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
          ],
        },
        {
          title: "About",
          link: "about",
        },
        {
          title: "Contact",
          link: "contact",
        },
      ],
    };
  },
  methods: {
    scroll(item) {
      if (item.subMenu) return;
      if (this.open) this.open = false;
      this.$scrollTo(document.getElementById(item.link), 400, {
        offset: this.offset,
      });
    },
    offset() {
      return window.innerWidth > 768 ? -100 : -50;
    },
  },
};
</script>

<style></style>
