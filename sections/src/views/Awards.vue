<template lang="pug">
  .awards
    navigation
    page-hero(title="AWARDS BY WINE ENTHUSIAST" :backgroundImagePath="require(`@/assets/awards/Awards-Banner.png`)")
    main
      rough-background(bottomEdge=true)
        .headline
          .t3 AWARD WINNING WINES FOR EVERYDAY&nbsp;ENJOYMENT
        Award.waypoint
    .page-footer.page-content-wrap(id="plain")
      .row
        .col
          .image-col.image.image-padding
            img(:src="require('@/assets/global/Wine101-Thumbnail@2x.jpg')" alt="")
          .text-col
            h3 Wine101
            p Learn the basics of storing, serving, and food pairing tips for our wines.
            button.btn.btn-gold(type='button' @click="$router.push(`/wine-101`)" aria-label="Learn More about Wine 101") Learn More
    globalFooter
</template>

<script>
// import debug from 'debug'

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import Award from '../components/awards/Award'
import MoreWines from '../components/our-wines/MoreWines'
// import { mapActions } from 'vuex'
require('waypoints/lib/noframework.waypoints.js')
// const log = debug('view:Home')

export default {
  name: 'Awards',
  head: {
    title: {
      inner: 'Awards',
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
  /*  watch: {
    $route: function () {
      this.updateDropDown(false)
    },
  },
  methods: {
    ...mapActions({
      updateDropDown: 'wines/updateDropDown',
    }),
  }, */
  components: {
    Navigation,
    PageHero,
    GlobalFooter,
    RoughBackground,
    Award,
    MoreWines,
  },
}
</script>

<style lang="scss" scoped>
.awards {
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
// footer/cta section
.page-footer {
  .row {
    display: flex;
    justify-content: center;
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
      padding: 5px;
      margin-right: 15px;
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
.headline {
  text-align: center;
  padding: 3rem 2rem 0.5rem 2rem;
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
