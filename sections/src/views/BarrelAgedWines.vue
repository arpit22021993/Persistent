<template lang="pug">
  .barrel-aged-wines
    navigation
    page-hero(:title='title' :backgroundImagePath="require(`@/assets/barrel-aged-wines/OurWines-Hero2.jpg`)")
      p Aging wine in bourbon or rum barrels adds rich character and complexity. Select lots are finished in bourbon or rum barrels for three months for a bold yet balanced flavor profile that still achieves Woodbridge's broad appeal and the perfect balance of fruit, toasty oak, and spice.
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
import WineDisplay from '../components/barrel-aged-wines/WineDisplay'
import MoreWines from '../components/barrel-aged-wines/MoreWines'
import { mapActions } from 'vuex'
require('waypoints/lib/noframework.waypoints.js')
// const log = debug('view:Home')

export default {
  name: 'BarrelAgedWines',
  head: {
    title: {
      inner: 'Red, Blush & White Wines',
      complement: 'California Wines'
    },
    meta: [
      {
        name: 'description', content: 'Woodbridge offers classic wines that reflect the unique characteristics of each varietal and over 40 years of rich winemaking heritage. Enjoy today!',
      },
    ],
  },
  data () {
    return {
      title: "Spirits barrel- \n aged wines"
    }
  },
  mounted () {
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
.barrel-aged-wines {
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
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.page-hero {
  white-space: pre-wrap;
}
/deep/ .wine-item {
  width: 150px;
}
/deep/ .title {
  width: 110%;
}
</style>
