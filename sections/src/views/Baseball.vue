<template lang="pug">
.baseball
  navigation
  page-hero.hero(
    title="",
    :backgroundImagePath="require(`@/assets/baseball/baseball_hero_bg.jpg`)"
  )
    h1.bold-white Home or away, it's ready to&nbsp;play.
    img.lockup(
      :src="require(`@/assets/baseball/baseball_logo_lockup.png`)",
      alt="Woodbridge by Robert Mondavi Plus Logo"
    )
    p Woodbridge by Robert Mondavi is proud to be the Official Partner of Major League Baseball. This exciting new partnership brings together wine and Baseball with two iconic brands. Enjoy your favorite Woodbridge Wine while you root, root, root for the home&nbsp;team.
  .red-section
    img.wine-ball(:src="require(`@/assets/baseball/wine_ball.png`)")
    .scroll
      p(@click="scrollToSlider") Scroll
      img.scroll-img(
        @click="scrollToSlider",
        :src="require(`@/assets/baseball/down_arrow.png`)"
      )
    //- h1.bold-white enter for chance to&nbsp;win
  Slider.baseball-slider
  global-footer.footer(:MLBPresent="true")
</template>

<script>
import Navigation from '../components/Navigation'
import PageHero from '../components/global/BaseballPageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import Seperator from '../components/element/Seperator'
import ImageTextRowCta from '../components/global/ImageTextRowCta'
import Slider from '../components/baseball/BaseballSlider.vue'

require('waypoints/lib/noframework.waypoints.js')

export default {
  name: 'Baseball',
  head: {
    title: {
      inner: 'Baseball | California Wines',
    },
    meta: [
      {
        name: 'description',
        content:
          'Discover the history of Woodbridge by Robert Mondavi, and the origins of our classic wines. Learn more!',
      },
    ],
  },
  data () {
    return {
      scrollInterval: null,
    }
  },
  mounted () {
    this.initWaypoints()
    this.setScrollInterval()
  },
  methods: {
    initWaypoints () {
      this.$el.querySelectorAll('.waypoint').forEach((el) => {
        this.createWaypoint(el)
      })
    },
    scrollToSlider () {
      const el = this.$el.getElementsByClassName('swiper-container')[0]
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    setScrollInterval () {
      this.scrollInterval = setInterval(
        function () {
          const el = this.$el.getElementsByClassName('scroll-img')[0]
          if (el.classList.contains('grow')) {
            el.classList.remove('grow')
            el.classList.add('shrink')
          } else if (el.classList.contains('shrink')) {
            el.classList.remove('shrink')
            el.classList.add('grow')
          } else {
            el.classList.add('grow')
          }
        }.bind(this),
        800
      )
    },
    createWaypoint (el) {
      let waypoint = new Waypoint({
        // eslint-disable-line
        element: el,
        handler: (direction) => {
          if (direction === 'down') {
            el.classList.add('ready-active')
          }
          waypoint.destroy()
        },
        offset: '60%',
      })
      el.classList.add('ready')
    },
  },
  beforeDestroy () {
    clearInterval(this.scrollInterval)
  },
  components: {
    Navigation,
    GlobalFooter,
    PageHero,
    RoughBackground,
    Seperator,
    ImageTextRowCta,
    Slider,
  },
}
</script>

<style lang="scss">
.baseball {
  position: relative;
}
</style>

<style lang="scss" scoped>
.waypoint {
  opacity: 0;
}

.baseball-slider {
  position: absolute;
  top: -31%;
  @media #{$tablet} {
    top: -32%;
  }
  @media #{$mobile} {
    top: -41.5%;
  }
  @media #{$mobile-xs} {
    top: -40%;
  }
  @media only screen and (max-width: 335px) {
    top: -41%;
  }
}

.grow {
  transition: all 0.8s ease-in-out;
  transform: scale(1.5);
}
.shrink {
  transition: all 0.8s ease-in-out;
  transform: scale(1);
}

.hero {
  position: relative;
  .lockup {
    -webkit-filter: drop-shadow(1px 1px 1px #222);
    filter: drop-shadow(1px 1px 1px #222);
  }
  h1 {
    margin-left: -32px;
    @media #{$tablet} {
      margin: auto;
    }
  }
  img {
    margin-left: -30px;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 80%;
    @media #{$tablet} {
      margin: inherit auto;
    }
  }
  p {
    text-align: left;
    padding-right: 20px;
    @media #{$tablet} {
      text-align: center;
    }
  }
}

.red-section {
  background-image: url("../assets/global/red-paper-full.png");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -4.5rem;
  position: relative;
  padding: 4rem 2rem 2rem 2rem;
  text-align: center;
  height: 420px;
  width: 100%;
  @media #{$tablet} {
    height: 350px;
  }
  h1 {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 10%;
  }
  .wine-ball {
    position: absolute;
    z-index: 100;
    width: px-rem(400);
    left: 2%;
    top: px-rem(-390);
    @media only screen and (max-width: 1220px) {
      left: 0;
    }
    @media only screen and (max-width: 1190px) {
      left: -2%;
    }
    @media only screen and (max-width: 1140px) {
      width: px-rem(300);
      top: px-rem(-300);
      left: -1%;
    }
    @media only screen and (max-width: 1000px) {
      width: px-rem(300);
      top: px-rem(-300);
      left: -1%;
    }
    @media only screen and (max-width: 1450px) {
      left: -2%;
    }
    @media #{$tablet} {
      display: none;
    }
  }
  .scroll {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 100;

    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: $brandTan;
      font-size: px-rem(16);
      font-family: $caslonFontFamily;
      cursor: pointer;
    }
    img {
      margin-top: -0.5rem;
      width: 1rem;
      cursor: pointer;
    }
  }
}

::v-deep h1.bold-white {
  text-align: center;
  font-family: $headingsFontFamily;
  color: $brandTan;
  font-size: px-rem(72);
  font-weight: bold;
  line-height: 0.9;
  @media #{$tablet} {
    font-size: px-rem(56);
  }
  @media #{$mobile} {
    font-size: px-rem(54);
  }
  @media #{$mobile-xs} {
    font-size: px-rem(50);
  }
}

.footer {
  padding-top: 400px;
  // @media only screen and (max-width: 500px) {
  //   padding-top: 150px;
  // }
  @media #{$mobile} {
    padding-top: 230px;
  }
}
</style>
