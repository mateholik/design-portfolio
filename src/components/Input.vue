<template>
  <div class="input-wrapper">
    <label :for="label"> {{ label }}</label>
    <input
      v-if="type === 'text'"
      type="text"
      :id="label"
      :value="value"
      @change="$emit('change', $event.target.value)"
    />
    <textarea v-if="type === 'textarea'" :id="label" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>