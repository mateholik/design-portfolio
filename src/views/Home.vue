<template>
  <div>
    <Header />
    <Hero />
    <section id="skills" class="skills">
      <div class="container">
        <div class="planets-collection">
          <div class="planets-wrapper">
            <Planet
              shadow="false"
              theme="dark"
              size="1rem"
              bottom="28%"
              right="36%"
              mobSize="2.2rem"
              mobBottom="28%"
              mobRight="36%"
            />
            <Planet
              theme="dark"
              size="2rem"
              bottom="20%"
              right="33%"
              mobSize="2.2rem"
              mobBottom="20%"
              mobRight="33%"
              shadow="false"
            />

            <Planet
              theme="dark"
              size="13rem"
              bottom="-14%"
              right="21%"
              mobSize="7.4rem"
              mobBottom="-14%"
              mobRight="21%"
              shadow="false"
            />
            <Planet
              theme="dark"
              size="2rem"
              bottom="-8%"
              right="16%"
              mobSize="2.2rem"
              mobBottom="-8%"
              mobRight="16%"
              shadow="false"
            />
            <Planet
              shadow="false"
              theme="dark"
              size="1rem"
              bottom="-10%"
              right="13%"
              mobSize="2.2rem"
              mobBottom="-10%"
              mobRight="13%"
            />
          </div>
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
    <section class="about">
      <Planet
        delay="800ms"
        theme="light"
        size="4rem"
        top="53%"
        left="26%"
        mobSize="2.2rem"
        mobBottom="8%"
        mobLeft="35%"
      />
      <div class="container">
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
import Planet from "@/components/PlanetComponent.vue";
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
    Planet,
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
