<template>
  <div>

    <card-form
      @create="createCard"
      @updater="updaterHandler"
    ></card-form>
    <card-list
      :cards="getCards"
      @remove="removeCard"
    >
    </card-list>

  </div>
</template>

<script>
import CardForm from "../components/CardForm";
import CardList from "../components/CardList";
import { mapState, mapActions, mapGetters } from "vuex";

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
      removeCard: "removeCard",
      loadCookie: "loadCookie",

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
      getCards: "getCards"
    })
  },
  created() {
    this.loadCookie();
  },
};
</script>
<style>

</style>
