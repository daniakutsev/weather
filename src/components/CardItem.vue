<template>
  <div class="weatherCard">
    <div class="cardText"><strong>Город:</strong>{{ card.cityName }}</div>
    <div class="cardText">
      <strong>{{ card.temperature }}</strong>
    </div>
    <button class="btn">Обновить</button>
    <button class="btn">Удалить</button>
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

<style scoped></style>
