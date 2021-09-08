<template lang="pug">
  .wine-seltzer
    navigation
    page-hero(:title='title' :backgroundImagePath="require(`@/assets/grab-and-go/OurWines-Banner@2x.jpg`)")
      p Woodbridge by Robert Mondavi Wine Seltzers are a line of premium wine-based seltzers that complement Woodbridge wines with dual-note fruit flavors. Our seltzers strike a balance between light and sweet, have 0g Added Sugar and are only 70 calories. These wine seltzers are perfect for any occasion.
    main
      rough-background(bottomEdge=true)
        wine-display.waypoint
        more-wines
    .page-footer.page-content-wrap(id="plain")
      .row
        .col
          .image-col.image.image-padding
            img(:src="require('@/assets/global/Wine101-Thumbnail@2x.jpg')" alt="")
          .text-col
            h3 Wine101
            p Learn the basics of storing, serving, and food pairing tips for our wines.
            button.btn.btn-gold(type='button' @click="$router.push(`/wine-101`)" aria-label="Learn More about Wine 101") Learn More
        .col
          .image-col.image.image-padding
            img(:src="require('@/assets/our-story/BuyingWine-Thumbnail@2x.jpg')" alt="")
          .text-col
            h3 Buying Wine
            p Feeling overwhelmed? Let us guide you through what to buy and how to serve it.
            button.btn.btn-gold(type='button' @click="$router.push(`/buying-wine`)" aria-label="Learn More about Buying Wine") Learn More
    globalFooter
</template>

<script>
// import debug from 'debug'

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import WineDisplay from '../components/wine-seltzer/WineDisplay'
import MoreWines from '../components/wine-seltzer/MoreWines'
import { mapActions } from 'vuex'
require('waypoints/lib/noframework.waypoints.js')
// const log = debug('view:Home')

export default {
  name: 'WineSeltzers',
  head: {
    title: {
      inner: 'Wine Seltzers',
    },
    meta: [
      {
        name: 'description', content: 'Woodbridge by Robert Mondavi Wine Seltzers are a line of premium wine-based seltzers that complement Woodbridge wines with dual-note fruit flavors. Our seltzers strike a balance between light and sweet, have 0g Added Sugar and are only 70 calories. These wine seltzers are perfect for any occasion.',
      },
    ],
  },
  data () {
    return {
      title: 'wine seltzers',
    }
  },
  mounted () {
    // this.initWaypoints()
  },
  watch: {
    $route: function () {
      this.updateDropDown(false)
    },
  },
  methods: {
    ...mapActions({
      updateDropDown: 'wineSeltzers/updateDropDown',
    }),
  },
  components: {
    Navigation,
    PageHero,
    GlobalFooter,
    RoughBackground,
    WineDisplay,
    MoreWines,
  },
}
</script>

<style lang="scss" scoped>
.wine-seltzer {
  min-height: 100vh;
}
section {
  margin-top: 200px;
}
.rel {
  position: relative;
}
.mt-5{
  margin-top: 5%;
}

.ready{
   opacity: 0;
   transform: translateY(10px);
   transition: all 1s ease-in;
   &-active{
     opacity: 1;
     transform: translateY(0px);
   }
 }
 .page-footer {
  .row {
    display: flex;
    @media #{$tablet} {
      flex-direction: column;
      padding-top: 25px;
    }
  }
  .image-col {
    flex-basis: 50%;

  }
  .text-col {
    flex-basis: 25%;
    align-self: center;
  }
  .image {
    img {
      width: 100%;
      max-width: 400px;
    }
    &-padding {
      padding: 20px;
    }
  }
  .col {
    display: flex;
    flex-basis: 50%;
    @media #{$mobile-xs} {
      text-align: center;
      flex-direction: column;
      padding-top: 25px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.seperator {
  position: relative;
  &:before, &:after{
    content: '';
    background-color: $brandTan;
    position: absolute;
    display: block;
    top: 35%;
    height: 2px;
    left:5% !important;
    right: calc(65% + 100px) !important;
  }
    &:after{
    left:calc(65% + 100px) !important;
    right: 5% !important;
    }
}
.page-hero {
  white-space: pre-wrap;
}
</style>
