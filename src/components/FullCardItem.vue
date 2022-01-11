<template class="cardItem">
  <div @click="$router.push('/')" class="weatherCard">
<!--    <div class="cardText">Город: {{ card.cityName }}</div>-->
<!--    <div class="cardText">Страна: {{ card.country }}</div>-->
<!--    <div class="cardText">-->
<!--      Температура: <strong>{{ card.temperature }}</strong>-->
<!--    </div>-->
<!--    <div class="cardText">Ощущается как: {{ card.feelsLike }}</div>-->
<!--    <div class="cardText">Скорость ветра: {{ card.windSpeed }}</div>-->
  </div>

</template>

<script>


export default {
  components: {  },
  props: {},
  name: "FullCardItem"
};
</script>

<style scoped>
.weatherCard {
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border: 1px solid;
  height: 200px;
  width: 200px;
}

.cardText {
  font-size: 25px;
  margin: 15px;
}

.cardItem {
  z-index: 10;
}
</style>
