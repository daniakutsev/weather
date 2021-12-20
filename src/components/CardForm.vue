<template>
  <form @submit.prevent class="header">
    <input
      v-model="card.cityName"
      class="cityInput"
      placeholder="Введите название города"
      type="text"
    />
    <button class="addBtn" @click="createCard">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      card: {
        cityName: "",
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
.cityInput {
  margin: 15px;
  height: 45px;
  width: 250px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 3px;
}

.cityInput:focus {
  color: #000000;
  border: 1px solid #000000;
}

.addBtn {
  height: 45px;
  width: 90px;
  margin: 15px;
  background: none;
  border: 3px solid palevioletred;
  font-size: 17px;
}
.addBtn:active {
  background: lightgrey;
}
</style>
