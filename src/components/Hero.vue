<template>
  <section class="hero">
    <div class="planets">
      <div class="green">
        <svg
          width="485"
          height="417"
          viewBox="0 0 485 417"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="465"
            cy="20"
            r="20"
            transform="rotate(-90 465 20)"
            fill="url(#paint0_linear_107_581)"
          />
          <circle
            cx="297"
            cy="151"
            r="16"
            transform="rotate(-90 297 151)"
            fill="url(#paint1_linear_107_581)"
          />
          <circle
            cx="139"
            cy="286"
            r="12"
            transform="rotate(-90 139 286)"
            fill="url(#paint2_linear_107_581)"
          />
          <circle
            cx="6"
            cy="411"
            r="6"
            transform="rotate(-90 6 411)"
            fill="url(#paint3_linear_107_581)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_107_581"
              x1="451.813"
              y1="4.5"
              x2="472.125"
              y2="37.6875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0038FF" />
              <stop offset="0.348958" stop-color="#143196" />
              <stop offset="0.692708" stop-color="#000C37" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_107_581"
              x1="286.45"
              y1="138.6"
              x2="302.7"
              y2="165.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0038FF" />
              <stop offset="0.348958" stop-color="#143196" />
              <stop offset="0.692708" stop-color="#000C37" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_107_581"
              x1="131.088"
              y1="276.7"
              x2="143.275"
              y2="296.613"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0038FF" />
              <stop offset="0.348958" stop-color="#143196" />
              <stop offset="0.692708" stop-color="#000C37" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_107_581"
              x1="2.04375"
              y1="406.35"
              x2="8.1375"
              y2="416.306"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0038FF" />
              <stop offset="0.348958" stop-color="#143196" />
              <stop offset="0.692708" stop-color="#000C37" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="blue">
        <svg
          width="493"
          height="412"
          viewBox="0 0 493 412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="487"
            cy="6"
            r="6"
            transform="rotate(-90 487 6)"
            fill="url(#paint0_linear_418_1318)"
          />
          <circle
            cx="360"
            cy="137"
            r="12"
            transform="rotate(-90 360 137)"
            fill="url(#paint1_linear_418_1318)"
          />
          <circle
            cx="20"
            cy="392"
            r="20"
            transform="rotate(-90 20 392)"
            fill="url(#paint2_linear_418_1318)"
          />
          <circle
            cx="203"
            cy="269"
            r="16"
            transform="rotate(-90 203 269)"
            fill="url(#paint3_linear_418_1318)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_418_1318"
              x1="483.044"
              y1="1.35"
              x2="489.137"
              y2="11.3063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D738FF" />
              <stop offset="0.31105" stop-color="#73128B" />
              <stop offset="0.593894" stop-color="#2D0038" />
              <stop offset="0.951901" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_418_1318"
              x1="352.088"
              y1="127.7"
              x2="364.275"
              y2="147.613"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D738FF" />
              <stop offset="0.31105" stop-color="#73128B" />
              <stop offset="0.593894" stop-color="#2D0038" />
              <stop offset="0.951901" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_418_1318"
              x1="6.8125"
              y1="376.5"
              x2="27.125"
              y2="409.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D738FF" />
              <stop offset="0.31105" stop-color="#73128B" />
              <stop offset="0.593894" stop-color="#2D0038" />
              <stop offset="0.951901" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_418_1318"
              x1="192.45"
              y1="256.6"
              x2="208.7"
              y2="283.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D738FF" />
              <stop offset="0.31105" stop-color="#73128B" />
              <stop offset="0.593894" stop-color="#2D0038" />
              <stop offset="0.951901" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="container">
      <h1>
        WEB DESIGN EXPERIENCE YOU<br />
        ARE LOOKING FOR
      </h1>
      <p>Performing UX/UI designs</p>
      <div class="buttons">
        <div @click="scroll('websites')" class="button">Portfolio</div>
        <div @click="scroll('contact')" class="button button--secondary">
          Contact Me
        </div>
      </div>
      <div @click="scroll('skills')" class="scroll">
        <div class="ball"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    scroll(val) {
      this.$scrollTo(document.getElementById(val), 400, {
        offset: this.offset,
      });
    },
  },
  computed: {
    offset() {
      return window.innerWidth > 768 ? -100 : -50;
    },
  },
};
</script>

<style scoped lang="scss"></style>
