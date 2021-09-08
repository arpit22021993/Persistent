<template lang="pug">
  .pairing-app
    navigation
    rough-background
      .pairing-app-container
        iframe(ref="iframe" scrolling="no" src="./pairingapp/selection.html" onload="this.style.height=`${this.contentDocument.body.scrollHeight +600}px`" width="101%" title="Main Content")
    globalFooter
</template>d

<script>
// import debug from 'debug'

import Navigation from '../components/Navigation'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'

// const log = debug('view:Home')

export default {
  name: 'PairingApp',
  head: {
    title: {
      inner: 'Wine & Food Pairing Mobile App',
      complement: 'California Wines'
    },
    meta: [
      {
        name: 'description', content: 'Discover the Woodbridge Wine and Food Pairing App. Find the perfect pairings for our wines to perfect a meal. Learn more!',
      },
    ],
  },
  data () {
    return {
    }
  },
  mounted () {
    window.goToWine = this.goToWine
  },
  methods: {
    goToWine (name) {
      this.$router.push({ name: 'our-wines', params: { bottleName: name } })
    },
  },
  components: {
    Navigation,
    GlobalFooter,
    RoughBackground,
  },
}
</script>

<style lang="scss" scoped>
.pairing-app {
  &-container {
    width: 60%;
    margin-top: 50px;
    max-width: 1200px;
    @include center-block;
    @media #{$tablet} {
      width: 100%;
    }
  }
}
</style>
