import axios from "axios";

export const cardModule = {
  state: () => ({
    cards: [],
    point: ";",
    countId: 0,

    jsonCookiesCards: []
  }),
  getters: {
    getCards(state) {
      return state.cards;
    }

  },
  mutations: {
    setCards(state) {
      state.cards = this.cards;
    }
  },
  actions: {

    removeCard({ state }, card) {
      //this.cards = this.cards.filter((c) => c.id !== card.id);

      if (card.id === 0) {
        state.cards.splice(card.id, 1);
      } else {
        state.cards.splice(card.id - 1, 1);
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
          document.cookie ="cities="+ JSON.stringify(tempData);
        }
        if (hasCookie != null) {
          let arr = JSON.parse(hasCookie[1]);
          arr.push(state.cards[card.id]);
          document.cookie ="cities="+ JSON.stringify(arr);
        }
        console.log(document.cookie);
        // state.jsonCookiesCards += JSON.stringify(state.cards[card.id]);
        // document.cookie = state.jsonCookiesCards;
        // document.cookie = state.point;
        // console.log(document.cookie);
      } catch (e) {
        console.log(e);
      }
    },

    loadCookie({ state }, card) {
      let hasCookie = document.cookie.match(/cities=(.+?)(;|$)/);

      if (document.cookie != "") {
        card = JSON.parse(hasCookie[1]);
        state.cards.push(card);
      }

      // if (document.cookie != "") {
      //   let buff = document.cookie.match(/(.+?)(;|$)/);
      //   buff.slice(0, -1);
      //   console.log(buff);
      //   card = JSON.parse(buff);
      //   state.cards.push(card);
      // }
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
    }
  }
};
