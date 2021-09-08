<template lang="pug">
  router-link.buy-now-button(v-if="!isBaseball" to="/where-to-buy")
    .buy-now-button-text
      h5 Get Delivery
  router-link.buy-now-button(v-else to="/baseball-rewards-form")
    .buy-now-button-text.mobile-text
      h5 enter sweeps
</template>

<script>
import debug from 'debug'
import { mapActions, mapState } from 'vuex'

/* global Waypoint */
/* eslint no-unused-vars: "off" */

let log = debug('component:BuyNowButton')

export default {
  name: 'BuyNowButton',
  data () {
    return {
      isBaseball: false,
    }
  },
  mounted () {
    log('Mounted')
    this.ifBaseball()
  },
  computed: {
  },
  watch: {
    $route () {
      this.ifBaseball()
    },
  },
  methods: {
    ...mapActions({
      showBuyModal: 'ui/updateBuyModal',
    }),
    ifBaseball () {
      this.isBaseball = this.$route.name === 'baseball'
    },
  },
  components: {
  },
}
</script>

<style scoped lang="scss">
  .buy-now-button {
    z-index: $zMiddle;
    width: 184px;
    height: 43px;
    background-color: $brandTan;
    color: #5E5B4B;
    position: fixed;
    bottom: 10vh;
    right: 20px;
    text-align: center;
    outline: 1px solid #5E5B4B;
    outline-offset: -4px;
    box-shadow: 0px 0px 10px rgba(black, .5);
    transition: background-color .3s ease;
    &:hover {
      cursor: pointer;
      background-color: white;

      &:after {
        width: 0;
      }
    }
    &:focus {
      color: black;
      background:$brandGoldLight;
      border: 0.15em solid black ;
      outline: 0.1em solid white;
    }
    @media #{$mobile} {
      width: 100px;
      right: 5px;
    }
  }
  .buy-now-button-text{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .mobile-text h5{
      @media #{$mobile} {
        font-size: 15px !important;
    }
  }
</style>
