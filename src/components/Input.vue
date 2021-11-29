<template>
  <div class="input-wrapper" :class="{ 'input-error': hasError }">
    <label :for="label"> {{ label }}</label>
    <input
      v-if="type === 'text'"
      type="text"
      :id="label"
      :value="value"
      @input="updateInput"
    />
    <textarea
      v-if="type === 'textarea'"
      :id="label"
      :value="value"
      @input="updateInput"
    />
    <p v-if="hasError && validator.required === false">Field is required</p>
    <p v-if="hasError && validator.email === false">Invalid email</p>
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
    validator: {
      type: [Object, undefined],
      default: undefined,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("input", event.target.value);
    },
  },
  computed: {
    hasError() {
      return this.validator !== undefined && this.validator.$error;
    },
  },
};
</script>

<style></style>
