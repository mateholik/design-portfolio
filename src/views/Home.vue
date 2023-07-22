<template>
  <div>
    <Header />
    <Hero />
    <section id="skills" class="skills">
      <div class="container">
        <div class="planets rotate">
          <svg
            width="309"
            height="201"
            viewBox="0 0 309 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="157"
              cy="100"
              r="73"
              transform="rotate(-90 157 100)"
              fill="url(#paint0_linear_539_30)"
            />
            <circle
              cx="53.5"
              cy="162.5"
              r="10.5"
              transform="rotate(-90 53.5 162.5)"
              fill="url(#paint1_linear_539_30)"
            />
            <circle
              cx="5.5"
              cy="195.5"
              r="5.5"
              transform="rotate(-90 5.5 195.5)"
              fill="url(#paint2_linear_539_30)"
            />
            <circle
              cx="254.5"
              cy="37.5"
              r="10.5"
              transform="rotate(-90 254.5 37.5)"
              fill="url(#paint3_linear_539_30)"
            />
            <circle
              cx="303.5"
              cy="5.5"
              r="5.5"
              transform="rotate(-90 303.5 5.5)"
              fill="url(#paint4_linear_539_30)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_539_30"
                x1="108.866"
                y1="43.425"
                x2="183.006"
                y2="164.559"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_539_30"
                x1="46.5766"
                y1="154.363"
                x2="57.2406"
                y2="171.786"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_539_30"
                x1="1.87344"
                y1="191.238"
                x2="7.45937"
                y2="200.364"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_539_30"
                x1="247.577"
                y1="29.3625"
                x2="258.241"
                y2="46.7859"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_539_30"
                x1="299.873"
                y1="1.2375"
                x2="305.459"
                y2="10.3641"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2>SKILLS</h2>
        <div class="wrapper">
          <CardSkill
            :skillData="item"
            v-for="(item, i) in skillsData"
            :key="`skill-${i}`"
          />
        </div>
      </div>
    </section>
    <section id="websites" class="websites">
      <div class="container">
        <h2>WEBSITES</h2>
        <div class="wrapper">
          <CardWeb
            :webData="item"
            v-for="(item, i) in visibleWebsData"
            :key="`web-${i}`"
          />
        </div>
        <div ref="seeMore" class="see-more">
          <div @click="toggleWebsiteAmountCta">
            {{ !showAllwebsData ? "See more" : "See less" }}
            <img
              :class="{ opened: showAllwebsData }"
              :src="require('@/assets/img/arrow-down.svg')"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="banners" class="banners">
      <div class="container">
        <div class="title">
          <h2>
            Banners
            <div class="planets rotate">
              <svg
                width="185"
                height="117"
                viewBox="0 0 185 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="93.8995"
                  cy="58.201"
                  r="43.6603"
                  transform="rotate(-90 93.8995 58.201)"
                  fill="url(#paint0_linear_539_75)"
                />
                <circle
                  cx="31.9977"
                  cy="95.5814"
                  r="6.2799"
                  transform="rotate(-90 31.9977 95.5814)"
                  fill="url(#paint1_linear_539_75)"
                />
                <circle
                  cx="3.28947"
                  cy="113.711"
                  r="3.28947"
                  transform="rotate(-90 3.28947 113.711)"
                  fill="url(#paint2_linear_539_75)"
                />
                <circle
                  cx="152.214"
                  cy="20.8206"
                  r="6.2799"
                  transform="rotate(-90 152.214 20.8206)"
                  fill="url(#paint3_linear_539_75)"
                />
                <circle
                  cx="181.519"
                  cy="3.28945"
                  r="3.28947"
                  transform="rotate(-90 181.519 3.28945)"
                  fill="url(#paint4_linear_539_75)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_539_75"
                    x1="65.111"
                    y1="24.3643"
                    x2="109.453"
                    y2="96.813"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_539_75"
                    x1="27.8569"
                    y1="90.7144"
                    x2="34.2349"
                    y2="101.135"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_539_75"
                    x1="1.12048"
                    y1="111.161"
                    x2="4.46135"
                    y2="116.62"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_539_75"
                    x1="148.073"
                    y1="15.9537"
                    x2="154.451"
                    y2="26.3744"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_539_75"
                    x1="179.35"
                    y1="0.740105"
                    x2="182.691"
                    y2="6.19857"
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
          </h2>
        </div>
        <div class="wrapper">
          <div
            class="img-wrapper"
            v-for="(img, i) in bannersData"
            :key="`banner-${i}`"
          >
            <img
              loading="lazy"
              class="cool-border"
              :src="require('@/assets/img/' + img)"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section id="logos" class="logos">
      <div class="container">
        <h2>Logos</h2>
        <div class="wrapper">
          <CardLogo
            :webData="item"
            v-for="(item, i) in logosData"
            :key="`logo-${i}`"
          />
        </div>
      </div>
    </section>

    <section id="other" class="other">
      <div class="container">
        <div class="title">
          <h2>Other</h2>
        </div>
        <div class="wrapper">
          <div
            class="img-wrapper"
            v-for="(item, i) in otherData"
            :key="`other-${i}`"
          >
            <img
              loading="lazy"
              class="cool-border"
              :src="require('@/assets/img/' + item.preview)"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div class="container">
        <h2>About me</h2>
        <div class="planets">
          <div class="blue rotate">
            <svg
              width="309"
              height="201"
              viewBox="0 0 309 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="157"
                cy="100"
                r="73"
                transform="rotate(-90 157 100)"
                fill="url(#paint0_linear_539_30)"
              />
              <circle
                cx="53.5"
                cy="162.5"
                r="10.5"
                transform="rotate(-90 53.5 162.5)"
                fill="url(#paint1_linear_539_30)"
              />
              <circle
                cx="5.5"
                cy="195.5"
                r="5.5"
                transform="rotate(-90 5.5 195.5)"
                fill="url(#paint2_linear_539_30)"
              />
              <circle
                cx="254.5"
                cy="37.5"
                r="10.5"
                transform="rotate(-90 254.5 37.5)"
                fill="url(#paint3_linear_539_30)"
              />
              <circle
                cx="303.5"
                cy="5.5"
                r="5.5"
                transform="rotate(-90 303.5 5.5)"
                fill="url(#paint4_linear_539_30)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_539_30"
                  x1="108.866"
                  y1="43.425"
                  x2="183.006"
                  y2="164.559"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_539_30"
                  x1="46.5766"
                  y1="154.363"
                  x2="57.2406"
                  y2="171.786"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_539_30"
                  x1="1.87344"
                  y1="191.238"
                  x2="7.45937"
                  y2="200.364"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_539_30"
                  x1="247.577"
                  y1="29.3625"
                  x2="258.241"
                  y2="46.7859"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_539_30"
                  x1="299.873"
                  y1="1.2375"
                  x2="305.459"
                  y2="10.3641"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="green pulse">
            <svg
              width="317"
              height="317"
              viewBox="0 0 317 317"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="158.13"
                cy="158.13"
                r="158.13"
                transform="rotate(-90 158.13 158.13)"
                fill="url(#paint0_linear_468_192)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_468_192"
                  x1="53.863"
                  y1="35.5795"
                  x2="214.464"
                  y2="297.976"
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
        </div>
        <div class="wrapper cool-border">
          <div class="left">
            <p>
              After spending some time in Udemy and countless hours in youtube,
              watching UX/UI tutorials, I managed to find some clients and
              started freelancing. Side by side, freelancing and studying on my
              own, I made this portfolio where you can find my projects, placed
              chronologically from bottom to top, and see how I am improving. I
              consider myself as a strong junior UX/UI designer, because:
            </p>
            <ul>
              <li>
                I can <span>professionally</span> use Figma platform for every
                day UX/UI design tasks
              </li>
              <li>
                I am using <span>components</span>, <span>variants</span> and
                <span>auto layouts</span> in my projects
              </li>
              <li>I am making designs using <span>8px grid</span> system</li>
              <li>
                I have experience communicating with front end developers. I
                have understanding what <span>‘code-ready’</span> design is and
                how design should be prepared for efficient coding
              </li>
              <li>
                I provide <span>design system</span> with all interactive
                elements (buttons, inputs, links, etc.) and their states (hover,
                active, error, etc.)
              </li>
            </ul>
            <p>
              I am looking for new projects or office job, preferably where I
              can communicate with experienced designers. I want to improve my
              skills and become great UX/UI designer.
            </p>
            <div class="subtitle">
              <img src="@/assets/img/process.svg" alt="icon" />
              My work process:
            </div>
            <ul class="process">
              <li>
                1.&nbsp;&nbsp;<span>Collect information</span> about project
                (what is the main goal; what website client needs; what pages
                and sections are; who is target audience, etc.)
              </li>
              <li>
                2.&nbsp;&nbsp;Create design structure with
                <span>wireframes</span>. Discuss with client, update until
                structure is approved
              </li>
              <li>
                3.&nbsp;&nbsp;<span>Research</span> on competitors or similar
                websites
              </li>
              <li>4.&nbsp;&nbsp;Create <span>design system</span></li>
              <li>5.&nbsp;&nbsp;Start <span>designing</span> the wireframes</li>
              <li>
                6.&nbsp;&nbsp;<span>Review</span> with client. Update till
                desktop version is approved
              </li>
              <li>7.&nbsp;&nbsp;Create <span>mobile</span> version</li>
            </ul>
          </div>
          <div class="right">
            <div class="price">
              <img src="@/assets/img/label.svg" alt="icon" />PRICE
            </div>
            <div class="rate">18 €/h</div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="contact">
      <div class="container">
        <h2>Contacts</h2>
        <div class="wrapper">
          <div class="left">
            <div class="socials">
              <a
                v-for="item in contacts.socials"
                :href="item.link"
                class="cta"
                :key="item.title"
                target="_blank"
              >
                <img
                  loading="lazy"
                  :src="require('@/assets/img/' + item.icon)"
                  :alt="item.title"
                />
                <span>{{ item.title }}</span>
              </a>
            </div>
            <form action="" @submit.prevent="submit">
              <Input
                :label="contacts.inputs[0].label"
                type="text"
                v-model.trim="$v.email.$model"
                :validator="$v.email"
              />
              <Input
                v-model.trim="$v.message.$model"
                :label="contacts.inputs[1].label"
                type="textarea"
                :validator="$v.message"
              />
              <div class="btn-holder">
                <button
                  class="button"
                  type="submit"
                  :disabled="submitStatus === 'PENDING'"
                >
                  Send
                </button>
              </div>

              <p class="typo__p" v-if="submitStatus === 'OK'">
                Thanks for your submission!
              </p>
              <p class="typo__p" v-if="submitStatus === 'ERROR'">
                Please fill the form correctly.
              </p>
              <p class="typo__p" v-if="submitStatus === 'PENDING'">
                Sending...
              </p>
            </form>
          </div>
          <div class="right">
            <Sun />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import CardSkill from "@/components/CardSkill.vue";
import CardWeb from "@/components/CardWeb.vue";
// import CardPrice from "@/components/CardPrice.vue";
import CardLogo from "@/components/CardLogo.vue";
import Input from "@/components/Input.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Hero,
    CardSkill,
    CardWeb,
    // CardPrice,
    CardLogo,
    Input,
    Footer,
    Sun: () => import(/* webpackPrefetch: true */ "@/components/Sun.vue"),
  },
  data() {
    return {
      email: "",
      message: "",
      submitStatus: null,
      showAllwebsData: false,
      skillsData: [
        {
          logo: "design",
          title: "UX/UI design:",
          items: [
            "Create e-shops",
            "Rearrange existing pages",
            "Create landing pages",
          ],
        },
        {
          logo: "logos",
          title: "Logos:",
          items: ["Logos creation", "Old logos update"],
        },
        {
          logo: "programs",
          title: "Programs",
          items: ["Figma", "Photoshop", "Illustrator"],
        },
      ],
      websData: [
        {
          tag: "E-SHOP",
          title: "matesklubas.lt",
          description:
            "Explore a unique flavour of yerba mate tea at mate club and join our friendly family",
          image: "matesklubas.jpeg",
          linkFigma:
            "https://www.figma.com/file/VrcFnfBwXb2LoHZFcdhtei/Mate?node-id=0%3A1",
          linkPdf: "./pdf/matesklubas.pdf",
        },
        {
          tag: "Social platform",
          title: "Recipes project",
          description:
            "Food recipes platform. Share with other people and create your own recipes depending on products you have.",
          image: "recipes.jpeg",
          linkFigma:
            "https://www.figma.com/file/Via19Olqbo4Lcf8Jpnbzhu/Food-world?node-id=0%3A1",
          linkPdf: "./pdf/recipes.pdf",
        },
        {
          tag: "Landing page",
          title: "fasadoapsiltinimas.lt",
          description:
            "Revitalize your building's exterior with our advanced facade insulation, combining energy efficiency and noise reduction.",
          image: "fasadai.jpeg",
          linkFigma:
            "https://www.figma.com/file/JfeISvm0sqVB3ItSWNsR5T/Fasado-siltinimas?type=design&node-id=1-2&mode=design&t=bYdud2WxIOofxicg-0",
        },
        {
          tag: "E-SHOP",
          title: "Wood e-shop",
          description:
            "Find wood that you need, from structural wood to outdoor siding and build your house with quality.",
          image: "wood.jpeg",
          linkFigma:
            "https://www.figma.com/file/8gimzufbp4ry0NULYr0sp3/Medienos-E-parduotuv%C4%97?node-id=0%3A1",
          linkPdf: "./pdf/wood.pdf",
        },
        {
          tag: "E-shop",
          title: "Technology project",
          description:
            "Moderna is a modern design web page, designed to acquire the latest technology. ",
          image: "moderna.jpeg",
          linkFigma:
            "https://www.figma.com/file/522ZJHxa6i49HbKKs1JLLd/Moderna",
          linkPdf: "./pdf/moderna.pdf",
        },
        {
          tag: "Mobile app",
          title: "Google map based app",
          description:
            "In this page you can add some ideas to make your own town look better.",
          image: "app.jpeg",
          linkFigma:
            "https://www.figma.com/file/W2kVvBgROTMl6o8QC54Qep/Appsas?node-id=0%3A1",
          linkPdf: "./pdf/app.pdf",
        },
        {
          tag: "Auction page",
          title: "evgauto.lt",
          description:
            "In this page the buyer offering the highest price for the vehicle is found in the shortest possible time.",
          image: "evgauto.jpeg",
          linkFigma:
            "https://www.figma.com/file/TfaCaBETRLihK6Q1VGDwls/evgauto?node-id=0%3A1",
          linkPdf: "./pdf/evgauto.pdf",
        },
        {
          tag: "landing page",
          title: "psychological help",
          description:
            "Here you can get a professional psychological help from our specialists.",
          image: "psychology.jpeg",
          linkFigma:
            "https://www.figma.com/file/iVRgEaQtxZkf7Xl3xKeFkX/Olios-landingas?type=design&node-id=0-1&mode=design&t=bYdud2WxIOofxicg-0",
        },
        {
          tag: "landing page",
          title: "chatbot",
          description:
            "Experience expert house foundation assistance through our chatbot, ensuring the stability and longevity of your home.",
          image: "chatbot.jpeg",
          linkFigma:
            "https://www.figma.com/file/WgeYS3Vzb3JxLYUZduYdQL/Chatbot-done?type=design&node-id=0-1&mode=design&t=AHnU5GXpqyCVaQKx-0",
        },
        {
          tag: "E-shop",
          title: "Lucky tackle fishing shop",
          description:
            "There you can buy really good  items for fishing and their accessories.",
          image: "luckytackle.jpeg",
          linkFigma:
            "https://www.figma.com/file/TfaCaBETRLihK6Q1VGDwls/evgauto?node-id=0%3A1",
          linkPdf: "./pdf/evgauto.pdf",
        },
        {
          tag: "PORTFOLIO",
          title: "linaaudronyte.lt",
          live: "true",
          description:
            "It’s a page of some self painted art projects> Portfolio of a painter",
          image: "portfolio-minimal.jpeg",
          linkFigma:
            "https://www.figma.com/file/BynEHWEkkMf2Rwv7GjdHmn/Untitled?node-id=0%3A1",
          linkPdf: "./pdf/portfolio-minimal.pdf",
        },
        {
          tag: "E-shop",
          title: "Papuosk.lt",
          description:
            "Papuosk.lt is a page of various handmade jewelry for everyone who wants to buy original jewelry. ",
          image: "papuosk.jpeg",
          linkFigma:
            "https://www.figma.com/file/ndZ5dyxEYsn0SBmq7RdHxC/Papuosk.lt",
          linkPdf: "./pdf/papuosk.pdf",
        },
        {
          tag: "Representative website",
          title: "ecoplast.lt",
          live: "true",
          description:
            "A page about Monolithic Polycarbonate - the strongest transparent material with an extremely wide range of applications.",
          image: "ecoplast.jpeg",
          linkFigma:
            "https://www.figma.com/file/9UZY23Xw7K4KizG0UrSldX/Ecoplast.lt",
          linkPdf: "./pdf/ecoplast.pdf",
        },
      ],
      bannersData: [
        "banner-1.jpeg",
        "banner-2.jpeg",
        "banner-3.jpeg",
        "banner-4.jpeg",
        "banner-5.jpeg",
        "banner-6.jpeg",
      ],
      otherData: [
        {
          preview: "other-1-preview.jpeg",
          img: "",
        },
        {
          preview: "other-2-preview.jpeg",
          img: "",
        },
        {
          preview: "other-3-preview.jpeg",
          img: "",
        },
        {
          preview: "other-4-preview.jpeg",
          img: "",
        },
        {
          preview: "other-5-preview.jpeg",
          img: "",
        },
        {
          preview: "other-6-preview.jpeg",
          img: "",
        },
        {
          preview: "other-7-preview.jpeg",
          img: "",
        },
      ],
      logosData: [
        {
          image: "rivertown.png",
          linkFigma: "",
          linkPdf: "",
        },
        {
          image: "evgauto.svg",
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
        },
        {
          image: "papuosk.svg",
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
        },
        {
          image: "svara.svg",
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
        },
      ],
      pricesData: [
        {
          title: "Landing page",
          price: "80-170€",
        },
        {
          title: "Representative website (2-5 pages)",
          price: "120-250€",
        },
        {
          title: "Representative website (5-9 pages)",
          price: "250-350€",
        },
        {
          title: "Representative website (10-more pages)",
          price: "350-500€",
        },
        {
          title: "E-shop",
          price: "220-320€",
        },
        {
          title: "Mobile app",
          price: "140-240€",
        },
        {
          title: "Facebook ad banner",
          price: "10€",
        },
        {
          title: "Facebook cover photo",
          price: "10€",
        },
        {
          title: "Logo",
          price: "40-120€",
        },
      ],
      contacts: {
        socials: [
          {
            icon: "phone.svg",
            title: "+37067791332",
            link: "tel:+37067791332",
          },
          {
            icon: "email.svg",
            title: "maksim.vaisov061@gmail.com",
            link: "mailto:maksim.vaisov061@gmail.com",
          },
          {
            icon: "fb.svg",
            title: "Facebook",
            link: "https://www.facebook.com/maxvaisov",
          },
          {
            icon: "viber.svg",
            title: "Viber",
            link: "viber://chat/?number=%2B37067791332",
          },
          {
            icon: "whatsup.svg",
            title: "WhatsApp",
            link: "https://wa.me/+37067791332",
          },
          {
            icon: "linkedin.svg",
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/maksim-vaisov-b33634230/",
          },
        ],
        inputs: [
          {
            label: "E-mail:",
            errorEmpty: "Please fill input",
            errorEmail: "Invalid email",
          },
          {
            label: "Message:",
            errorEmpty: "Please fill input",
          },
        ],
      },
    };
  },
  computed: {
    visibleWebsData() {
      return this.showAllwebsData ? this.websData : this.websData.slice(0, 6);
    },
  },
  methods: {
    toggleWebsiteAmountCta() {
      this.showAllwebsData = !this.showAllwebsData;
      if (this.showAllwebsData) return;
      this.$nextTick(() => {
        this.$scrollTo(this.$refs.seeMore, 400, {
          offset: -700,
        });
      });
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 2000);
      }
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    message: {
      required,
    },
  },
};
</script>

<style></style>
