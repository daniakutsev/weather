<template>
  <div>
    <card-form
      @create="createCard"
      @updater="updaterHandler"
      @update="updateWeather"
    ></card-form>
    <card-list
      :cards="getCards"
      @remove="removeCard"
      @update="updateWeather"
    ></card-list>
  </div>
</template>

<script>
import CardForm from "../components/CardForm";
import CardList from "../components/CardList";
import { mapState, mapActions,mapGetters } from "vuex";

export default {
  components: {
    CardList,
    CardForm
  },
  name: "App",
  data() {
    return {
      currentValue: ""
    };
  },


  methods: {
    ...mapActions({
      createCard: "createCard",
      updateWeather: "updateWeather",
      removeCard:"removeCard"
    }),

    updaterHandler(data) {
      this.currentValue = data;
      // console.log(this.currentValue);
    }

  },
  computed: {
    ...mapState({
      cards: state => state.cards
    }),
    ...mapGetters({
      getCards:"getCards"
    }),
  }
};
</script>
<style>

</style>
