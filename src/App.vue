<template>
  <div class="app">
    <card-form @create="createCard"></card-form>
    <card-list :cards="cards"></card-list>
  </div>
</template>

<script>
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";

export default {
  components: {
    CardList,
    CardForm,
  },
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
    createCard(card) {
      this.temperature = 0;
      this.cards.push(card);
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
</style>
