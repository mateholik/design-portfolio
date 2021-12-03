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
    <section class="about">
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
            I am a meticulous, ambitious UI / UX designer looking for customer
            collaboration. I feel a passion for creating any design. If you are
            looking for something beautiful for yourself and your company, get
            in touch.
          </p>
        </div>
      </div>
    </section>
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
                  Submit!
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
            <img :src="require('@/assets/img/contact.svg')" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import CardSkill from "@/components/CardSkill.vue";
import CardWeb from "@/components/CardWeb.vue";
import CardLogo from "@/components/CardLogo.vue";
import Input from "@/components/Input.vue";
export default {
  components: {
    Header,
    Hero,
    CardSkill,
    CardWeb,
    CardLogo,
    Input,
  },
  data() {
    return {
      email: "",
      message: "",
      submitStatus: null,
      skillsData: [
        {
          logo: "design",
          title: "UI/UX design:",
          items: [
            "Create web pages",
            "Rearrange existing pages",
            "Create portfolios",
          ],
        },
        {
          logo: "logos",
          title: "Logos:",
          items: ["Create logos", "Rearrange existing logos "],
        },
        {
          logo: "programs",
          title: "Programs",
          items: ["Adobe Photoshop", "Figma", "Adobe XD"],
        },
      ],
      websData: [
        {
          tag: "Technology page ",
          title: "Moderna.com",
          description:
            "Moderna.com is a modern design web page, designed to acquire the latest technology. ",
          image: "moderna.jpeg",
          linkFigma:
            "https://www.figma.com/file/522ZJHxa6i49HbKKs1JLLd/Moderna",
          linkPdf: "www.pdf.lt",
        },
        {
          tag: "Jewelry page",
          title: "Papuosk.lt",
          description:
            "Papuosk.lt is a page of various handmade jewelry for everyone who wants to buy original jewelry. ",
          image: "papuosk.jpeg",
          linkFigma:
            "https://www.figma.com/file/j4dnV3uvtAqP6vxC7d6b9f/Papuo%C5%A1k.lt?node-id=0%3A1",
          linkPdf: "www.pdf.lt",
        },
        {
          tag: "Accommodation page",
          title: "Ecohotel.lt",
          description:
            "Ecohotel.lt is a page for those who like to relax by the sea. Our hotel offers you unforgettable memories. ",
          image: "ecohotel.jpeg",
          linkFigma:
            "https://www.figma.com/file/AJ111Znm1ki5XUhNjWwJrR/Ecohotel",
          linkPdf: "www.pdf.lt",
        },
        {
          tag: "Portfolio",
          title: "Maxdesign.online",
          description:
            "MaxDesign.online is a page where you can view all the current projects I have completed today.",
          image: "maxdesign.jpeg",
          linkFigma:
            "https://www.figma.com/file/9AXA07QZaMlo1ehvfNFz72/Untitled?node-id=0%3A1",
          linkPdf: "www.pdf.lt",
        },
      ],
      bannersData: [
        "banner-1.png",
        "banner-2.png",
        "banner-3.png",
        "banner-4.png",
      ],
      logosData: [
        {
          image: "svara.svg",
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
        },
        {
          image: "papuosk.svg",
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
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
            title: "Whats up",
            link: "https://wa.me/+37067791332",
          },
        ],
        inputs: [
          {
            label: "Email",
            errorEmpty: "Please fill input",
            errorEmail: "Invalid email",
          },
          {
            label: "Message",
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
