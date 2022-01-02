<template>
  <div
    class="fullForm"
    @updateState="$emit('updateState', windowState)"
    @click="$emit('updateState', windowState)"
  >
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: "MyFullForm",
  props: {
    windowState: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.fullForm {
  width: 700px;
  height: 500px;
  border: 3px solid black;
  border-radius: 7px;
  position: absolute;
  top: 40px;
  left: 40px;
  background: white;
}
</style>
