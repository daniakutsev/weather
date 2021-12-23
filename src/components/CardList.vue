<template>
  <div v-if="cards.length > 0">
    <h3>Список городов:</h3>
    <card-item
      class="weatherCard"
      v-for="card in cards"
      :card="card"
      :key="card.id"
      @remove="$emit('remove', card)"
    ></card-item>
  </div>
  <h2 v-else style="color: red; margin-left: 10px">Список городов пуст</h2>
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

<style scoped></style>
