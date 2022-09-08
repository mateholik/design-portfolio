<template>
  <header :class="{ active: open }" ref="top">
    <div class="container">
      <nav>
        <div class="logo" @click="scrollToTop">
          <img src="~@/assets/img/logo.svg" alt="logo" />
        </div>
        <ul class="menu-desktop">
          <li
            @click="desktopItemClick(item)"
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
                @click="desktopItemClick(subItem)"
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
          class="item"
          @click="mobileItemClick(item)"
          v-for="item in menuList"
          :key="item.title"
          :class="{ 'has-submenu': item.subMenu }"
        >
          <span>
            {{ item.title }}
            <img
              v-if="item.subMenu"
              :src="require('@/assets/img/menu-arrow.svg')"
              :class="{ rotate: subMenuOpen }"
              alt="arrow"
            />
          </span>
          <transition name="slide">
            <ul v-if="item.subMenu && subMenuOpen" class="sub-menu">
              <li
                v-for="subItem in item.subMenu"
                :key="subItem.title"
                @click.stop="mobileSubItemClick(subItem)"
              >
                {{ subItem.title }}
              </li>
            </ul>
          </transition>
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
      subMenuOpen: false,
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
          title: "Contacts",
          link: "contact",
        },
      ],
    };
  },
  watch: {
    open(newVal) {
      if (!newVal) this.subMenuOpen = false;
    },
  },
  methods: {
    scrollToTop() {
      this.$scrollTo(this.$refs.top, 400);
    },
    desktopItemClick(item) {
      if (item.subMenu) return;
      this.scroll(item);
    },
    scroll(item) {
      this.$scrollTo(document.getElementById(item.link), 400, {
        offset: this.offset,
      });
    },
    mobileItemClick(item) {
      if (item.subMenu) {
        this.subMenuOpen = !this.subMenuOpen;
      } else {
        this.scroll(item);
        this.open = false;
      }
    },
    mobileSubItemClick(item) {
      this.scroll(item);
      this.open = false;
    },
    offset() {
      return window.innerWidth > 768 ? -100 : -50;
    },
  },
};
</script>

<style></style>
