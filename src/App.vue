<template>
  <div class="app">
    <card-form
      @create="createCard"
      @updater="updaterHandler"
      @update="updateWeather"
    ></card-form>
    <card-list
      :cards="cards"
      @remove="removeCard"
      @update="updateWeather"
    ></card-list>
  </div>
</template>

<script>
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import axios from "axios";
//import MyButton from "./components/UI/MyButton";

export default {
  components: {
    CardList,
    CardForm,
  },
  name: "App",
  data() {
    return {
      currentValue: "",
      cityName: "",
      temperature: 0,
      cards: [],
      APIKEY: "495b9188c36a232d7ca0b1ee57ed4764",
    };
  },
  methods: {
    removeCard(card) {
      this.cards = this.cards.filter((c) => c.id !== card.id);
    },
    async createCard(card) {
      this.cards.push(card);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${card.cityName}&units=metric&appid=495b9188c36a232d7ca0b1ee57ed4764`
        );
        console.log(response.data.main.temp);
        card.temperature = response.data.main.temp;
      } catch (e) {
        alert("Error");
      }
    },
    async updateWeather(card) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${card.cityName}&units=metric&appid=495b9188c36a232d7ca0b1ee57ed4764`
      );
      card.temperature = response.data.main.temp;
      console.log(card.temperature);
    },
    updaterHandler(data) {
      this.currentValue = data;
      // console.log(this.currentValue);
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
</style>
