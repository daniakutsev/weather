<template class="cardList">
  <div>
    <div v-if="cards && cards.length > 0">
      <h3>Список городов:</h3>
      <card-item
        v-bind="$attrs"
        class="weatherCard"
        :card="card"
        v-for="card in cards"
        :key="card.id"
        @remove="$emit('remove', card)"
      ></card-item>
    </div>

  <h2 v-else style="color: red; margin-left: 10px">Список городов пуст</h2>
  </div>
</template>

<script>
import CardItem from "./CardItem";


export default {
  emits: ["remove"],
  components: {
    CardItem
  },
  name: "CardList",
  props: {
    cards: {
      type: Array,
      required: true
    }
  },

};
</script>

<style scoped>
.cardList {
  z-index: 10;
}
</style>
