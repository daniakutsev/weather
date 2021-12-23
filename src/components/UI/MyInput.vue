<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  margin-bottom: 15px;
  height: 45px;
  width: 250px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 3px;
}

.input:focus {
  color: #000000;
  border: 1px solid #000000;
}
</style>
