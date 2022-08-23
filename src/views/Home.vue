<template>
  <div>
    <Header />
    <Hero />
    <section id="skills" class="skills">
      <div class="container">
        <div class="planets">
          <svg
            width="365"
            height="373"
            viewBox="0 0 365 373"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="355.836"
              cy="230.385"
              r="5.87207"
              transform="rotate(-135 355.836 230.385)"
              fill="url(#paint0_linear_303_933)"
            />
            <ellipse
              cx="301.926"
              cy="215.531"
              rx="11.2548"
              ry="11.2548"
              transform="rotate(-135 301.926 215.531)"
              fill="url(#paint1_linear_303_933)"
            />
            <circle
              cx="185.049"
              cy="172.748"
              r="78.2943"
              transform="rotate(-135 185.049 172.748)"
              fill="url(#paint2_linear_303_933)"
            />
            <ellipse
              cx="62.6631"
              cy="156.846"
              rx="11.2548"
              ry="11.2548"
              transform="rotate(-135 62.6631 156.846)"
              fill="url(#paint3_linear_303_933)"
            />
            <circle
              cx="8.75195"
              cy="141.991"
              r="5.87207"
              transform="rotate(-135 8.75195 141.991)"
              fill="url(#paint4_linear_303_933)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_303_933"
                x1="355.836"
                y1="224.513"
                x2="355.836"
                y2="236.257"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9C38FF" />
                <stop offset="0.328125" stop-color="#671FAF" />
                <stop offset="0.682292" stop-color="#340067" />
                <stop offset="1" stop-color="#080010" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_303_933"
                x1="301.926"
                y1="204.276"
                x2="301.926"
                y2="226.785"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9C38FF" />
                <stop offset="0.328125" stop-color="#671FAF" />
                <stop offset="0.682292" stop-color="#340067" />
                <stop offset="1" stop-color="#080010" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_303_933"
                x1="185.049"
                y1="94.4537"
                x2="185.049"
                y2="251.042"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9C38FF" />
                <stop offset="0.328125" stop-color="#671FAF" />
                <stop offset="0.682292" stop-color="#340067" />
                <stop offset="1" stop-color="#080010" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_303_933"
                x1="62.6631"
                y1="145.591"
                x2="62.6631"
                y2="168.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9C38FF" />
                <stop offset="0.328125" stop-color="#671FAF" />
                <stop offset="0.682292" stop-color="#340067" />
                <stop offset="1" stop-color="#080010" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_303_933"
                x1="8.75195"
                y1="136.119"
                x2="8.75195"
                y2="147.863"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9C38FF" />
                <stop offset="0.328125" stop-color="#671FAF" />
                <stop offset="0.682292" stop-color="#340067" />
                <stop offset="1" stop-color="#080010" />
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
            v-for="(item, i) in websData"
            :key="`web-${i}`"
          />
        </div>
      </div>
    </section>
    <section id="banners" class="banners">
      <div class="container">
        <h2>Banners</h2>
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
        <div class="title">
          <h2>
            Logos
            <div class="planets">
              <svg
                width="234"
                height="172"
                viewBox="0 0 234 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Planets">
                  <g id="planet-5">
                    <circle
                      id="Ellipse 5"
                      cx="227.805"
                      cy="16.1631"
                      r="4.38112"
                      transform="rotate(-135 227.805 16.1631)"
                      fill="url(#paint0_linear_309_943)"
                    />
                  </g>
                  <g id="planet-4">
                    <circle
                      id="Ellipse 5_2"
                      cx="192.756"
                      cy="38.799"
                      r="8.39714"
                      transform="rotate(-135 192.756 38.799)"
                      fill="url(#paint1_linear_309_943)"
                    />
                  </g>
                  <g id="planet-3">
                    <circle
                      id="Ellipse 5_3"
                      cx="110.977"
                      cy="82.611"
                      r="58.4149"
                      transform="rotate(-135 110.977 82.611)"
                      fill="url(#paint2_linear_309_943)"
                    />
                  </g>
                  <g id="planet-2">
                    <ellipse
                      id="Ellipse 5_4"
                      cx="41.2432"
                      cy="142.851"
                      rx="8.39714"
                      ry="8.39714"
                      transform="rotate(-135 41.2432 142.851)"
                      fill="url(#paint3_linear_309_943)"
                    />
                  </g>
                  <g id="planet-1">
                    <circle
                      id="Ellipse 16"
                      cx="6.19727"
                      cy="165.486"
                      r="4.38112"
                      transform="rotate(-135 6.19727 165.486)"
                      fill="url(#paint4_linear_309_943)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_309_943"
                    x1="227.805"
                    y1="11.7819"
                    x2="227.805"
                    y2="20.5442"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3FFF9F" />
                    <stop offset="0.328125" stop-color="#1FBA6C" />
                    <stop offset="0.682292" stop-color="#006C36" />
                    <stop offset="1" stop-color="#000F07" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_309_943"
                    x1="192.756"
                    y1="30.4018"
                    x2="192.756"
                    y2="47.1961"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3FFF9F" />
                    <stop offset="0.328125" stop-color="#1FBA6C" />
                    <stop offset="0.682292" stop-color="#006C36" />
                    <stop offset="1" stop-color="#000F07" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_309_943"
                    x1="110.977"
                    y1="24.1962"
                    x2="110.977"
                    y2="141.026"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3FFF9F" />
                    <stop offset="0.328125" stop-color="#1FBA6C" />
                    <stop offset="0.682292" stop-color="#006C36" />
                    <stop offset="1" stop-color="#000F07" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_309_943"
                    x1="41.2432"
                    y1="134.454"
                    x2="41.2432"
                    y2="151.248"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3FFF9F" />
                    <stop offset="0.328125" stop-color="#1FBA6C" />
                    <stop offset="0.682292" stop-color="#006C36" />
                    <stop offset="1" stop-color="#000F07" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_309_943"
                    x1="6.19727"
                    y1="161.105"
                    x2="6.19727"
                    y2="169.868"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3FFF9F" />
                    <stop offset="0.328125" stop-color="#1FBA6C" />
                    <stop offset="0.682292" stop-color="#006C36" />
                    <stop offset="1" stop-color="#000F07" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </h2>
        </div>
        <div class="wrapper">
          <CardLogo
            :webData="item"
            v-for="(item, i) in logosData"
            :key="`logo-${i}`"
          />
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div class="container">
        <div class="planets">
          <div class="blue">
            <svg
              width="222"
              height="222"
              viewBox="0 0 222 222"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="111.049"
                cy="110.748"
                r="78.2943"
                transform="rotate(-135 111.049 110.748)"
                fill="url(#paint0_linear_303_939)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_303_939"
                  x1="111.049"
                  y1="32.4537"
                  x2="111.049"
                  y2="189.042"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9C38FF" />
                  <stop offset="0.328125" stop-color="#671FAF" />
                  <stop offset="0.682292" stop-color="#340067" />
                  <stop offset="1" stop-color="#080010" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="green">
            <svg
              width="166"
              height="166"
              viewBox="0 0 166 166"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="82.9766"
                cy="82.611"
                r="58.4149"
                transform="rotate(-135 82.9766 82.611)"
                fill="url(#paint0_linear_309_948)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_309_948"
                  x1="82.9766"
                  y1="24.1962"
                  x2="82.9766"
                  y2="141.026"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3FFF9F" />
                  <stop offset="0.328125" stop-color="#1FBA6C" />
                  <stop offset="0.682292" stop-color="#006C36" />
                  <stop offset="1" stop-color="#000F07" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="multiple">
            <svg
              width="365"
              height="373"
              viewBox="0 0 365 373"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="355.836"
                cy="230.385"
                r="5.87207"
                transform="rotate(-135 355.836 230.385)"
                fill="url(#paint0_linear_303_933)"
              />
              <ellipse
                cx="301.926"
                cy="215.531"
                rx="11.2548"
                ry="11.2548"
                transform="rotate(-135 301.926 215.531)"
                fill="url(#paint1_linear_303_933)"
              />
              <circle
                cx="185.049"
                cy="172.748"
                r="78.2943"
                transform="rotate(-135 185.049 172.748)"
                fill="url(#paint2_linear_303_933)"
              />
              <ellipse
                cx="62.6631"
                cy="156.846"
                rx="11.2548"
                ry="11.2548"
                transform="rotate(-135 62.6631 156.846)"
                fill="url(#paint3_linear_303_933)"
              />
              <circle
                cx="8.75195"
                cy="141.991"
                r="5.87207"
                transform="rotate(-135 8.75195 141.991)"
                fill="url(#paint4_linear_303_933)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_303_933"
                  x1="355.836"
                  y1="224.513"
                  x2="355.836"
                  y2="236.257"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9C38FF" />
                  <stop offset="0.328125" stop-color="#671FAF" />
                  <stop offset="0.682292" stop-color="#340067" />
                  <stop offset="1" stop-color="#080010" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_303_933"
                  x1="301.926"
                  y1="204.276"
                  x2="301.926"
                  y2="226.785"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9C38FF" />
                  <stop offset="0.328125" stop-color="#671FAF" />
                  <stop offset="0.682292" stop-color="#340067" />
                  <stop offset="1" stop-color="#080010" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_303_933"
                  x1="185.049"
                  y1="94.4537"
                  x2="185.049"
                  y2="251.042"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9C38FF" />
                  <stop offset="0.328125" stop-color="#671FAF" />
                  <stop offset="0.682292" stop-color="#340067" />
                  <stop offset="1" stop-color="#080010" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_303_933"
                  x1="62.6631"
                  y1="145.591"
                  x2="62.6631"
                  y2="168.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9C38FF" />
                  <stop offset="0.328125" stop-color="#671FAF" />
                  <stop offset="0.682292" stop-color="#340067" />
                  <stop offset="1" stop-color="#080010" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_303_933"
                  x1="8.75195"
                  y1="136.119"
                  x2="8.75195"
                  y2="147.863"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9C38FF" />
                  <stop offset="0.328125" stop-color="#671FAF" />
                  <stop offset="0.682292" stop-color="#340067" />
                  <stop offset="1" stop-color="#080010" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="wrapper cool-border">
          <div class="title">ABOUT ME</div>
          <p>
            I am a meticulous and ambitious UX/UI designer, who is looking for
            customers collaboration. I feel a passion for creating responsive,
            modern and code ready designs. If you are looking for something
            beautiful for yourself or your company, please get in touch with me.
          </p>
        </div>
      </div>
    </section>
    <!-- <section id="prices" class="prices">
      <div class="container">
        <h2>Prices</h2>
        <div class="wrapper">
          <CardPrice
            :priceData="item"
            v-for="(item, i) in pricesData"
            :key="`price-${i}`"
          />
        </div>
      </div>
    </section> -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="wrapper">
          <div class="left">
            <h3>Contact me</h3>
            <div class="socials">
              <a
                v-for="item in contacts.socials"
                :href="item.link"
                class="cta"
                :key="item.title"
              >
                <img
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
                  Send!
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
            <img
              loading="lazy"
              :src="require('@/assets/img/contact.svg')"
              alt=""
            />
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
  },
  data() {
    return {
      email: "",
      message: "",
      submitStatus: null,
      skillsData: [
        {
          logo: "design",
          title: "UX/UI design:",
          items: [
            "WEB design creation",
            "Old web pages update",
            "Components, options, autolayouts",
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
          items: ["Adobe Photoshop", "Figma", "Adobe XD"],
        },
      ],
      websData: [
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
          title: "EVG auto",
          description:
            "In this page the buyer offering the highest price for the vehicle is found in the shortest possible time.",
          image: "evgauto.jpeg",
          linkFigma:
            "https://www.figma.com/file/TfaCaBETRLihK6Q1VGDwls/evgauto?node-id=0%3A1",
          linkPdf: "./pdf/evgauto.pdf",
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
          description: "It’s a page of some self painted art projects",
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
      logosData: [
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
  methods: {
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
