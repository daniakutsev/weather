<template class="cardForm">
  <form @submit.prevent class="header">
    <my-input
      v-model.trim="card.cityName"
      placeholder="Введите название города"
      type="text"
      @update-value="handler"
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
    handler(data) {
      this.$emit("updater", data);
    },
  },
  name: "CardForm",
};
</script>

<style scoped>
.header {
  padding: 10px;
}
.cardForm {
  z-index: 10;
}
</style>
