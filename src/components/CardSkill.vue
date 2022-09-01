<template>
  <div class="item-wrap">
    <div class="item cool-border">
      <div class="img-holder">
        <img
          loading="lazy"
          :src="require('@/assets/img/' + skillData.logo + '.svg')"
          :alt="skillData.title"
        />
      </div>

      <p>
        {{ skillData.title }}
      </p>
      <ul>
        <li v-for="(item, i) in skillData.items" :key="`item-${i}`">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSkill",
  props: {
    skillData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
