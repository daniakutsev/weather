import axios from "axios";

export const cardModule = {
  state: () => ({
    cards: []
  }),
  getters:{
    getCards(state){
      return state.cards
    }
  },
  actions: {
    async createCard({ state }, card) {
      state.cards.push(card);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${card.cityName}&units=metric&appid=495b9188c36a232d7ca0b1ee57ed4764`
        );
        card.temperature = response.data.main.temp;
        card.feelsLike = response.data.main.feels_like;
        card.windSpeed = response.data.wind.speed;
        card.country = response.data.sys.country;
      } catch (e) {
        console.log(e);
      }
    },
    async updateWeather(card) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${card.cityName}&units=metric&appid=495b9188c36a232d7ca0b1ee57ed4764`
        );
        card.temperature = response.data.main.temp;
        card.feelsLike = response.data.main.feels_like;
        card.windSpeed = response.data.wind.speed;
        card.country = response.data.sys.country;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
