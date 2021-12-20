<template>
  <div>
    <h3>Список городов:</h3>
    <card-item
      class="weatherCard"
      v-for="card in cards"
      :card="card"
      :key="card"
    ></card-item>
  </div>
</template>

<script>
import CardItem from "./CardItem";

export default {
  components: {
    CardItem,
  },
  name: "CardList",
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.weatherCard {
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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

.btn {
  width: 95px;
  height: 30px;
  background: none;
  border: 3px solid palevioletred;
  font-size: 17px;
}

.btn:active {
  background: lightgrey;
}
</style>
