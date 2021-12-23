<template>
  <form @submit.prevent class="header">
    <my-input
      v-model.trim="card.cityName"
      placeholder="Введите название города"
      type="text"
    />
    <my-button class="addBtn" @click="createCard">Добавить</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      card: {
        cityName: "",
        temperature: 0,
      },
    };
  },
  methods: {
    createCard() {
      this.card.id = Date.now();
      this.$emit("create", this.card);
      this.card = {
        cityName: "",
        temperature: 0,
      };
    },
  },
  name: "CardForm",
};
</script>

<style scoped>
.header {
  padding: 10px;
}
</style>
