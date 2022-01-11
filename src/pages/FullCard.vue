<template>
  <div>
    <router-link to="/">Вернуться</router-link>
    <FullCardItem></FullCardItem>
  </div>
</template>

<script>


import FullCardItem from "../components/FullCardItem";

export default {
  name: "FullCard",
  components: { FullCardItem },
  data() {
    return {
      currentValue: "",
      cityName: "",
      temperature: 0,
      url: "",
      cards: [],

      APIKEY: "495b9188c36a232d7ca0b1ee57ed4764"
    };
  },
  props: {}
};
</script>

<style scoped>

</style>