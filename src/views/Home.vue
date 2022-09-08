<template>
  <div>
    <Header />
    <Hero />
    <section id="skills" class="skills">
      <div class="container">
        <div class="planets rotate">
          <svg
            width="316"
            height="187"
            viewBox="0 0 316 187"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="153.629"
              cy="88.7538"
              r="73.2297"
              transform="rotate(-90 153.629 88.7538)"
              fill="url(#paint0_linear_468_132)"
            />
            <circle
              cx="52.2558"
              cy="154.922"
              r="10.5283"
              transform="rotate(-90 52.2558 154.922)"
              fill="url(#paint1_linear_468_132)"
            />
            <circle
              cx="5.49057"
              cy="181.219"
              r="5.49057"
              transform="rotate(-90 5.49057 181.219)"
              fill="url(#paint2_linear_468_132)"
            />
            <circle
              cx="262.922"
              cy="38.1611"
              r="10.5283"
              transform="rotate(-90 262.922 38.1611)"
              fill="url(#paint3_linear_468_132)"
            />
            <circle
              cx="309.788"
              cy="5.49057"
              r="5.49057"
              transform="rotate(-90 309.788 5.49057)"
              fill="url(#paint4_linear_468_132)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_468_132"
                x1="105.343"
                y1="32.0008"
                x2="179.717"
                y2="153.516"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_468_132"
                x1="45.3137"
                y1="146.763"
                x2="56.0065"
                y2="164.233"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_468_132"
                x1="1.87023"
                y1="176.963"
                x2="7.44659"
                y2="186.074"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_468_132"
                x1="255.98"
                y1="30.0017"
                x2="266.673"
                y2="47.472"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CC34F2" />
                <stop offset="0.234375" stop-color="#7F179A" />
                <stop offset="0.588542" stop-color="#1E0026" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_468_132"
                x1="306.168"
                y1="1.23537"
                x2="311.744"
                y2="10.3463"
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
            v-for="(item, i) in websData"
            :key="`web-${i}`"
          />
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
                width="175"
                height="120"
                viewBox="0 0 175 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="82.335"
                  cy="57.3349"
                  r="44.335"
                  transform="rotate(-90 82.335 57.3349)"
                  fill="url(#paint0_linear_468_178)"
                />
                <circle
                  cx="29"
                  cy="100"
                  r="7"
                  transform="rotate(-90 29 100)"
                  fill="url(#paint1_linear_468_178)"
                />
                <circle
                  cx="3.5"
                  cy="116.5"
                  r="3.5"
                  transform="rotate(-90 3.5 116.5)"
                  fill="url(#paint2_linear_468_178)"
                />
                <circle
                  cx="145"
                  cy="21"
                  r="7"
                  transform="rotate(-90 145 21)"
                  fill="url(#paint3_linear_468_178)"
                />
                <circle
                  cx="171.5"
                  cy="3.5"
                  r="3.5"
                  transform="rotate(-90 171.5 3.5)"
                  fill="url(#paint4_linear_468_178)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_468_178"
                    x1="53.1016"
                    y1="22.9753"
                    x2="98.1293"
                    y2="96.5437"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_468_178"
                    x1="24.3844"
                    y1="94.575"
                    x2="31.4937"
                    y2="106.191"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_468_178"
                    x1="1.19219"
                    y1="113.788"
                    x2="4.74687"
                    y2="119.595"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_468_178"
                    x1="140.384"
                    y1="15.575"
                    x2="147.494"
                    y2="27.1906"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.348958" stop-color="#143196" />
                    <stop offset="0.692708" stop-color="#000C37" />
                    <stop offset="1" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_468_178"
                    x1="169.192"
                    y1="0.7875"
                    x2="172.747"
                    y2="6.59531"
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
        <div class="title">
          <h2>Logos</h2>
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
          <div class="blue rotate">
            <svg
              width="316"
              height="187"
              viewBox="0 0 316 187"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="153.629"
                cy="88.7538"
                r="73.2297"
                transform="rotate(-90 153.629 88.7538)"
                fill="url(#paint0_linear_468_132)"
              />
              <circle
                cx="52.2558"
                cy="154.922"
                r="10.5283"
                transform="rotate(-90 52.2558 154.922)"
                fill="url(#paint1_linear_468_132)"
              />
              <circle
                cx="5.49057"
                cy="181.219"
                r="5.49057"
                transform="rotate(-90 5.49057 181.219)"
                fill="url(#paint2_linear_468_132)"
              />
              <circle
                cx="262.922"
                cy="38.1611"
                r="10.5283"
                transform="rotate(-90 262.922 38.1611)"
                fill="url(#paint3_linear_468_132)"
              />
              <circle
                cx="309.788"
                cy="5.49057"
                r="5.49057"
                transform="rotate(-90 309.788 5.49057)"
                fill="url(#paint4_linear_468_132)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_468_132"
                  x1="105.343"
                  y1="32.0008"
                  x2="179.717"
                  y2="153.516"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_468_132"
                  x1="45.3137"
                  y1="146.763"
                  x2="56.0065"
                  y2="164.233"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_468_132"
                  x1="1.87023"
                  y1="176.963"
                  x2="7.44659"
                  y2="186.074"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_468_132"
                  x1="255.98"
                  y1="30.0017"
                  x2="266.673"
                  y2="47.472"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC34F2" />
                  <stop offset="0.234375" stop-color="#7F179A" />
                  <stop offset="0.588542" stop-color="#1E0026" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_468_132"
                  x1="306.168"
                  y1="1.23537"
                  x2="311.744"
                  y2="10.3463"
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
          <div class="multiple pulse">
            <svg
              width="81"
              height="79"
              viewBox="0 0 81 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="40.5"
                cy="39.5"
                rx="39.5"
                ry="40.5"
                transform="rotate(-90 40.5 39.5)"
                fill="url(#paint0_linear_418_1465)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_418_1465"
                  x1="14.4547"
                  y1="8.1125"
                  x2="56.0477"
                  y2="74.3911"
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
        <div class="wrapper cool-border">
          <div class="left">
            <div class="title">ABOUT ME</div>
            <p>
              I am a meticulous and ambitious UX/UI designer, who is looking for
              customers collaboration. I feel a passion for creating responsive,
              modern and code ready designs. If you are looking for something
              beautiful for yourself or your company, please get in touch with
              me.
            </p>
          </div>
          <div class="right">
            <div class="price">PRICE</div>
            <div class="rate">12 €/h</div>
          </div>
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
