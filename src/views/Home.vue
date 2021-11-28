<template>
  <div>
    <Header />
    <Hero />
    <section id="skills" class="skills">
      <img src="@/assets/img/planet.svg" alt="planet" class="planet" />
      <img src="@/assets/img/planet.svg" alt="planet" class="planet planet-2" />
      <img src="@/assets/img/planet.svg" alt="planet" class="planet planet-3" />
      <img src="@/assets/img/planet.svg" alt="planet" class="planet planet-4" />
      <img src="@/assets/img/planet.svg" alt="planet" class="planet planet-5" />
      <img src="@/assets/img/planet.svg" alt="planet" class="planet planet-6" />
      <div class="container">
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
                v-model.trim="label"
                :value="label"
                @change="(val) => (value = val)"
              />
              <Input
                v-model.trim="$v.message.$model"
                :label="contacts.inputs[1].label"
                type="textarea"
              />
              <div class="btn-holder">
                <button type="submit" class="button">SEND</button>
              </div>
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
      label: "",
      message: "",
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
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
        },
        {
          tag: "Jewelry page",
          title: "Papuosk.lt",
          description:
            "Papuosk.lt is a page of various handmade jewelry for everyone who wants to buy original jewelry. ",
          image: "papuosk.jpeg",
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
        },
        {
          tag: "Accommodation page ",
          title: "Ecohotel.lt",
          description:
            "Ecohotel.lt is a page for those who like to relax by the sea. Our hotel offers you unforgettable memories. ",
          image: "ecohotel.jpeg",
          linkFigma: "www.figma.lt",
          linkPdf: "www.pdf.lt",
        },
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
      console.log("submit");
    },
  },
  validations: {
    label: {
      required,
    },
    message: {
      required,
      email,
    },
  },
};
</script>

<style></style>