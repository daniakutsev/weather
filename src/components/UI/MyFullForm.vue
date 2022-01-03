<template>
  <transition
    name="fade"
    class="fullForm"
    @updateState="$emit('updateState', windowState)"
    @click="$emit('updateState', windowState)"
  >
    <h1></h1>
  </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
