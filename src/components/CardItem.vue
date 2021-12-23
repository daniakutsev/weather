<template>
  <div class="weatherCard">
    <div class="cardText">{{ card.cityName }}</div>
    <div class="cardText">
      <strong>{{ card.temperature }}</strong>
    </div>
    <div class="card__btns">
      <my-button class="btn">Обновить</my-button>
      <my-button class="btn" @click="$emit('remove', card)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  name: "CardItem",
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
</style>
