<template>
  <div class="planet" :style="style">
    <svg
      v-if="theme === 'dark'"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="25"
        transform="rotate(-90 25 25)"
        fill="url(#paint0_linear_99_1864)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_99_1864"
          x1="8.51563"
          y1="5.625"
          x2="33.9062"
          y2="47.1094"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9C38FF" />
          <stop offset="0.31105" stop-color="#4F108E" />
          <stop offset="0.593894" stop-color="#1F003E" />
          <stop offset="0.951901" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      v-if="theme === 'light'"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="25"
        transform="rotate(-90 25 25)"
        fill="url(#paint0_linear_99_1869)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_99_1869"
          x1="8.51563"
          y1="5.625"
          x2="33.9062"
          y2="47.1094"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00FF80" />
          <stop offset="0.348958" stop-color="#118C4F" />
          <stop offset="0.692708" stop-color="#00341A" />
          <stop offset="1" stop-color="#000704" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "planet",
  props: [
    "theme",
    "size",
    "top",
    "left",
    "bottom",
    "right",
    "delay",
    "mobSize",
    "mobTop",
    "mobLeft",
    "mobBottom",
    "mobRight",
    "shadow",
  ],
  computed: {
    style() {
      const obj = {};
      if (window.innerWidth > 768) {
        if (this.size) obj.width = this.size;
        if (this.size) obj.height = this.size;
        if (this.top) obj.top = this.top;
        if (this.left) obj.left = this.left;
        if (this.bottom) obj.bottom = this.bottom;
        if (this.right) obj.right = this.right;
      } else {
        if (this.mobSize) obj.width = this.mobSize;
        if (this.mobSize) obj.height = this.mobSize;
        if (this.mobTop) obj.top = this.mobTop;
        if (this.mobLeft) obj.left = this.mobLeft;
        if (this.mobBottom) obj.bottom = this.mobBottom;
        if (this.mobRight) obj.right = this.mobRight;
      }
      if (this.delay) obj.animationDelay = this.delay;
      if (this.shadow === "false") obj.boxShadow = "none!important";

      return obj;
    },
  },
};
</script>

<style>
.planet {
  position: absolute;
  z-index: -1;
}
</style>