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
          width="555"
          height="480"
          viewBox="0 0 555 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="planets">
            <g id="planet-4">
              <circle
                id="Ellipse 6"
                cx="548"
                cy="7"
                r="7"
                transform="rotate(-90 548 7)"
                fill="url(#paint0_linear_309_973)"
              />
            </g>
            <g id="planet-3">
              <circle
                id="Ellipse 7"
                cx="398"
                cy="155"
                r="10"
                transform="rotate(-90 398 155)"
                fill="url(#paint1_linear_309_973)"
              />
            </g>
            <g id="planet-2">
              <circle
                id="Ellipse 7_2"
                cx="222.5"
                cy="308.5"
                r="17.5"
                transform="rotate(-90 222.5 308.5)"
                fill="url(#paint2_linear_309_973)"
              />
            </g>
            <g id="planet-1">
              <circle
                id="Ellipse 15"
                cx="25"
                cy="455"
                r="25"
                transform="rotate(-90 25 455)"
                fill="url(#paint3_linear_309_973)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_309_973"
              x1="543.384"
              y1="1.575"
              x2="550.494"
              y2="13.1906"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C38FF" />
              <stop offset="0.31105" stop-color="#4F108E" />
              <stop offset="0.593894" stop-color="#1F003E" />
              <stop offset="0.951901" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_309_973"
              x1="391.406"
              y1="147.25"
              x2="401.562"
              y2="163.844"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C38FF" />
              <stop offset="0.31105" stop-color="#4F108E" />
              <stop offset="0.593894" stop-color="#1F003E" />
              <stop offset="0.951901" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_309_973"
              x1="210.961"
              y1="294.938"
              x2="228.734"
              y2="323.977"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C38FF" />
              <stop offset="0.31105" stop-color="#4F108E" />
              <stop offset="0.593894" stop-color="#1F003E" />
              <stop offset="0.951901" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_309_973"
              x1="8.51563"
              y1="435.625"
              x2="33.9062"
              y2="477.109"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C38FF" />
              <stop offset="0.31105" stop-color="#4F108E" />
              <stop offset="0.593894" stop-color="#1F003E" />
              <stop offset="0.951901" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="container">
      <h1>
        WEB DESIGN EXPERIENCE YOU <br />
        ARE LOOKING FOR
      </h1>
      <p>
        Performing UI / UX design <br />
        Logo design
      </p>
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
