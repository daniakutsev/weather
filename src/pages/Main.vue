<template>
  <div >
    <card-form
      @create="createCard"
      @updater="updaterHandler"
      @update="updateWeather"
    ></card-form>
    <card-list
      :cards="cards"
      @remove="removeCard"
      @update="updateWeather"
      @updateState="updateWindowState"
      :window-state="windowState"
    ></card-list>

  </div>
</template>

<script>
import CardForm from "../components/CardForm";
import CardList from "../components/CardList";
import axios from "axios";



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
      windowState: false,
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
      this.updateWeather(card);
    },
    async updateWeather(card) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${card.cityName}&units=metric&appid=495b9188c36a232d7ca0b1ee57ed4764`
        );
        card.temperature = response.data.main.temp;
      } catch (e) {
        alert("Error");
      }
    },
    updaterHandler(data) {
      this.currentValue = data;
      // console.log(this.currentValue);
    },
    updateWindowState() {
      if (this.windowState === false) {
        this.windowState = true;
      } else {
        this.windowState = false;
      }
      console.log(this.windowState);
    },
  },
};
</script>
<style>

</style>
