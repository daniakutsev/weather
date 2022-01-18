<template class="cardItem">
  <div class="weatherCard"
  @click="$router.push(`/FullCard/${card.cityName}`)">
    <div class="cardText">{{ card.cityName }}</div>
    <div class="cardText">
      <strong>{{ card.temperature }}</strong>
    </div>
  </div>
  <div class="card__btns">
    <my-button class="btn" @click="$emit('update', card)">Обновить</my-button>
    <my-button class="btn" @click="$emit('remove', card)">Удалить</my-button>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton";

export default {
  components: { MyButton },
  props: {
    card: {
      type: Object,
      required: true
    }

  },
  name: "CardItem"
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
