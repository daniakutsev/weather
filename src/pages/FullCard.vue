<template>
  <div @click="$router.push({name:'Main'})">
    <p class="text">Город:{{ getCards[url].cityName }}</p>
    <p class="text">Страна: {{ getCards[url].country }}</p>
    <p class="text">Температура: {{ getCards[url].temperature }}</p>
    <p class="text">Чувствуется как:{{ getCards[url].feelsLike }}</p>
    <p class="text">Скорость ветра:{{ getCards[url].windSpeed }}</p>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FullCard",
  data(){
    return{
      url: ""
    }
  },
  created(){
    this.url=window.location.pathname.replace("/", "")
  },
  computed: {
    ...mapGetters({
      getCards: "getCards"
    })
  }
};
</script>

<style scoped>
.text{
  font-size: 25px;
  margin: 15px;
}
</style>