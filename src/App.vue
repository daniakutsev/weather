<template>
  <form @submit.prevent class="header">
    <input
      :value="cityName"
      @input="inputCityName"
      class="cityInput"
      placeholder="Введите название города"
      type="text"
    />
    <button class="addBtn" @click="addCard">Добавить</button>
  </form>
  <div class="main">
    <div class="weatherCard" v-for="card in cards" :key="card">
      <div class="cardText">
        <strong>Город:</strong>
        {{ card.cityName }}
      </div>
      <div class="cardText">
        <strong>{{ card.temperature }}</strong>
      </div>
      <button class="btn">Обновить</button>
      <button class="btn">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cityName: "",
      temperature: 0,
      cards: [
        { id: 1, cityName: "city1", temperature: 10 },
        { id: 2, cityName: "city2", temperature: 20 },
        { id: 3, cityName: "city3", temperature: 30 },
      ],
    };
  },
  methods: {
    addCard() {
      const newCard = {
        id: Date.now(),
        cityName: this.cityName,
        temperature: "-",
      };
      this.cards.push(newCard);
      this.cityName = "";
    },
    inputCityName(event) {
      this.cityName = event.target.value;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

.weatherCard {
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border: 1px solid;
  height: 200px;
  width: 200px;
}

.btn {
  width: 95px;
  height: 30px;
  padding: 10px;
  background: none;
  border: 3px solid palevioletred;
  font-size: 17px;
  align-items: center;
}
.btn:active {
  background: lightgrey;
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

.cardText {
  font-size: 25px;
  margin: 15px;
}
</style>
