<template lang="pug">
  .test-component-page
    navigation
    page-hero(title="Our wines")
      p For forty years we’ve been making classic wines that reflect the diversity of California’s winegrowing regions. Woodbridge by Robert Mondavi Classic wines are fruit-forward and balanced, making them ideal for everyday enjoyment.
    rough-background
      wine-item-drop-down
    globalFooter
</template>

<script>
// import debug from 'debug'

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import WineItemDropDown from '../components/our-wines/WineItemDropDown'

// const log = debug('view:Home')

export default {
  name: 'TestComponentPage',
  data () {
    return {
    }
  },
  components: {
    Navigation,
    PageHero,
    GlobalFooter,
    RoughBackground,
    WineItemDropDown,
  },
}
</script>

<style lang="scss" scoped>
// .test-component-page {}
</style>
