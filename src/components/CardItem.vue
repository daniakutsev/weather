<template class="cardItem">
  <div class="weatherCard" v-bind="$attrs"
  @click="$router.push({name:'FullCard',params:{id: card.id}})">
    <div class="cardText">{{ card.cityName }}</div>
    <div class="cardText">
      <strong>{{ card.temperature }}</strong>
    </div>
  </div>
  <div class="card__btns">
    <my-button class="btn" @click="updateWeather(card)">Обновить</my-button>
    <my-button class="btn" @click="$emit('remove', card)">Удалить</my-button>
  </div>

</template>

<script>
import MyButton from "./UI/MyButton";
import { mapActions } from "vuex";


export default {
  emits: ["remove"],
  components: {  MyButton },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods:{
    ...mapActions({
      updateWeather:"updateWeather"
    })
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
