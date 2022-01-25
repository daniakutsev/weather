import axios from "axios";

export const cardModule = {
  state: () => ({
    cards: [],
    countId: 0,

  }),
  getters: {
    getCards(state) {
      return state.cards;
    },
  },
  mutations: {
    setCards(state) {
      state.cards = this.cards;
    },
  },
  actions: {
    removeCard({ state }, card) {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === card.id) {
          state.cards.splice(i, 1);
          let newCookie = JSON.stringify(state.cards);
          document.cookie = `cities=${newCookie}`;
        }
      }
    },
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
        card.id = state.countId++;

        let hasCookie = document.cookie.match(/cities=(.+?)(;|$)/);
        if (hasCookie == null) {
          let tempData = [];
          tempData.push(state.cards[card.id]);
          document.cookie = "cities=" + JSON.stringify(tempData);
        } else {
          let arr = JSON.parse(hasCookie[1]);
          arr.push(state.cards[card.id]);
          console.log(state.cards[card.id])
          document.cookie = "cities=" + JSON.stringify(arr);
        }
        console.log(document.cookie);

      } catch (e) {
        console.log(e);
      }
    },

    loadCookie({ state }, card) {
      let hasCookie = document.cookie.match(/cities=(.+?)(;|$)/);

      if (hasCookie != null) {
        card = JSON.parse(hasCookie[1]);
        state.cards = card;
        state.countId = state.cards.length;
      }

    },
    async updateWeather({ state }, card) {
      console.log(state.cards);
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
  },
};
