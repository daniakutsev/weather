<template class="cardList">
  <div v-if="cards.length > 0">
    <h3>Список городов:</h3>
    <card-item
      class="weatherCard"
      :card="card"
      v-for="card in cards"
      :key="card.id"
      @remove="$emit('remove', card)"
      @update="$emit('update', card)"
      @getUrl="$emit('gerUrl')"
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
    card: {
      type: Object,
      required: true
    },
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cardList {
  z-index: 10;
}
</style>
