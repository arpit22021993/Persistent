<template lang="pug">
  .our-story
    navigation
    rough-background
      .page-content-wrap.pt-100.pb-100
        .row
          .quote-col.waypoint
            span.quote &ldquo;
            .quote-text
              p Meals were a sacred time for us, the gathering of the family, and wine always enjoyed a prominent place on our table.
            seperator
          .text-col
            p Robert Mondavi believed dinner was a time of coming together for friends and family alike. Unfortunately, many Americans are unable to put food on their tables during this time of crisis. True to the beliefs and generosity of our founder, we feel it is important that we open our table to those in need.
            p We have committed more than $200,000 to COVID-19 relief efforts in a partnership with World Central Kitchen. We also invite fans of Woodbridge by Robert Mondavi wines to show their support for those in need. When they do, we'll donate funds for an additional meal for every public post* on Instagram or Facebook up to an additional value of $50,000.
            p Our initiative "From Table to Table" encourages everyone to come to the table for those in need. If you would like to join us, please click the below link to donate directly to World Central Kitchen.
            p.disclaimer *For 21+ Only. Void in AL, MA, and MS. For any public post during the month of May that includes a meal with and tags <a href="https://www.instagram.com/woodbridgewines/" target="_blank">@WoodbridgeWines</a> and <a href="https://www.instagram.com/explore/tags/fromtabletotable/" target="_blank">#FromTabletoTable</a>, Woodbridge will donate an additional $4 to <a href="https://www.instagram.com/wckitchen/ " target="_blank">@WCKitchen</a> to cover the cost of an additional meal.
            .button-wrap
              a(href="https://donate.wck.org/give/236738/#!/donation/checkout" target="_blank").donate-button Donate To World Central Kitchen
    global-footer
</template>

<script>
// import debug from 'debug'

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import Seperator from '../components/element/Seperator'

require('waypoints/lib/noframework.waypoints.js')
// const log = debug('view:Home')

export default {
  name: 'FromTable',
  head: {
    title: {
      inner: 'From Table To Table',
    },
    meta: [
      {
        name: 'description', content: 'Robert Mondavi believed dinner was a time of coming together for friends and family alike.',
      },
    ],
  },
  data () {
    return {
    }
  },
  mounted () {
    this.initWaypoints()
  },
  methods: {
    initWaypoints () {
      this.$el.querySelectorAll('.waypoint').forEach((el) => {
        this.createWaypoint(el)
      })
    },
    createWaypoint (el) {
      let waypoint = new Waypoint({ // eslint-disable-line
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
  components: {
    Navigation,
    GlobalFooter,
    RoughBackground,
    Seperator,
  },
}
</script>

<style lang="scss">
.our-story {
  .page-hero__image-bg {
    @media #{$mobile} {
      background-position: 45%;
    }
  }
}
</style>

<style lang="scss" scoped>
.waypoint{
  opacity: 0;
}
.quote {
  font-size: px-rem(246);
  color: rgba(#3C3931, .5);
}
.ready{
   opacity: 0;
   transform: translateY(10px);
   transition: all .5s ease-in;
   &-active{
     opacity: 1;
     transform: translateY(0px);
   }
 }
// .our-story {}
.row{
  display: flex;
  @media #{$tablet} {
    flex-direction: column;
    padding-top: 25px;
  }
}
.quote{
  position: absolute;
  top: -71px;
  left: -27px;

  &-text {
    p {
      font-family: $baseFontFamily;
      font-weight: 600;
      color: $FoodTitles;
      text-transform: uppercase;
      font-size: px-rem(60);
      line-height: px-rem(54);
      @media #{$tablet} {
        font-size: px-rem(30);
        line-height: px-rem(28);
      }
    }

  }
}
.image-col {
  flex-basis: 50%;
  align-self: center;
  img {
    width: 80%;
    @include center-block;
    max-width: 380px;
  }
}
.quote-col {
  flex-basis: 50%;
  position: relative;
  margin-right:75px;
  @media #{$tablet} {
    margin-right: 0;
  }
}
.text-col {
  flex-basis: 50%;
  p {
    margin-right: 0px;
    font-weight: 200;
    font-size: px-rem(16);
    line-height: px-rem(26);
  }
  @media #{$tablet} {
    margin-right: 0;
  }
}
.footer-image-col {
  flex-grow: 50%;
}
.footer-text-col {
  flex-grow: 45%;
}
.center {
  justify-content: center;
}
.image{
  img {
    width: 100%;
  }
}
.container{
  @include center-block;
  width: 60%;
   @media #{$tablet} {
    width: 95%;
    text-align: center;
  }
}
.center-vert {
  align-self: center;
}
 .fix-mt {
   margin-top: -60px
 }

.button-wrap {
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
 a.donate-button {
    background-color: $brandTan;
    padding: 10px 20px;
    color: $brandGold;
    text-align: center;
    outline: 1px solid $brandGold;
    outline-offset: -4px;
    box-shadow: 0px 0px 10px rgba(black, .5);
    transition: background-color .3s ease;
    white-space: nowrap;
    &:hover {
      cursor: pointer;
      background-color: white;
      text-decoration: none;
    }
    &:after {
      display: none;
    }
    @media #{$mobile} {
      // width: 100px;
      font-size: 1em;
    }
  }
</style>
