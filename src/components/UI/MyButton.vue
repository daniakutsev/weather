<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  height: 45px;
  width: 90px;
  margin: 10px;
  background: none;
  border: 3px solid palevioletred;
  font-size: 17px;
}
.btn:active {
  background: lightgrey;
}
</style>
