<template lang="pug">
.cards
  card.card(
    v-for="(card, index) in cards",
    :image="card.image",
    :headline="card.headline",
    :routerLink="card.routerLink",
    :text="card.text",
    :cta="card.cta",
    :ctaLink="card.ctaLink",
    :key="index",
    :ctaLabel="card.ctaLabel"
  )
</template>

<script>
import debug from "debug";
import Card from "../components/Card";
// import { mapActions, mapState } from 'vuex'

let log = debug("component:Cards");

export default {
  name: "cards",
  props: {
    cards: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  mounted() {
    log("Mounted");
  },
  computed: {
    // ...mapState('tasks', ['allTasks'])
  },
  methods: {
    // ...mapActions('tasks', ['syncTask'])
  },
  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-flow: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: px-rem(-48);
  // max-width: px-rem(700);
  position: relative;
  padding: 0 px-rem(12);

  @media #{$mobile} {
    justify-content: center;
  }
  &.our-wines {
    .cards {
      justify-content: space-evenly;
    }
  }
}
.card {
  margin: 0.7em 1.5em;
}
</style>
