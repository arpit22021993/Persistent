<template lang="pug">
  .our-wines
    navigation
    page-hero(title="Classic wines" :backgroundImagePath="require(`@/assets/our-wines/OurWines-Hero2.jpg`)")
      p For forty years we’ve been making classic wines that reflect the diversity of California’s winegrowing regions. Woodbridge by Robert Mondavi wines are fruit-forward and balanced, making them ideal for everyday enjoyment.
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
import WineDisplay from '../components/our-wines/WineDisplay'
import MoreWines from '../components/our-wines/MoreWines'
import { mapActions } from 'vuex'
require('waypoints/lib/noframework.waypoints.js')
// const log = debug('view:Home')

export default {
  name: 'OurWines',
  head: {
    title: {
      inner: 'Red, Blush & White Wines',
      complement: 'California Wines',
    },
    meta: [
      {
        name: 'description', content: 'Woodbridge offers classic wines that reflect the unique characteristics of each varietal and over 40 years of rich winemaking heritage. Enjoy today!',
      },
    ],
  },

  data () {
    return {
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
      updateDropDown: 'wines/updateDropDown',
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
.our-wines {
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
   transition: all .3s ease-in;
   &-active{
     opacity: 1;
     transform: translateY(0px);
   }
 }
.eat-and-drink {
  background-color:  #fbf6e6;
  min-height: 100vh;
  height: 100vh;
  color: $FoodTitles;
  .title {
    font-weight: 700;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 50px;
  }
  .flex-item {
    min-width: 250px;
  }
  .food-recipes__header, .cocktail-recipes__header {
    margin-bottom: 25px;
    p {
      width: 50%;
      font-size: px-rem(16);

      @media #{$mobile} {
        width: 100%;
      }
    }
    @media #{$mobile} {
      text-align: center;
    }
  }
  .btn {
    margin-left: 10px;
    &:after {
      background: $brandGold;
      width: 30%;
    }
    &:hover:after {
      width: 100%;
    }

    @media #{$mobile} {
      display: block;
      margin: 1em auto;
      width: fit-content;
    }
  }
}

// footer/cta section
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
    left:0;
    right: calc(65% + 80px);
  }
    &:after{
    left:calc(65% + 80px);
    right: 0;
    }
}
</style>
