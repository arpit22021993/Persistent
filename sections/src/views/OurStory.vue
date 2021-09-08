<template lang="pug">
  .our-story
    navigation
    page-hero(title="Our Story" :backgroundImagePath="require(`@/assets/our-story/OurStory-Hero2.jpg`)")
      p Over forty years ago, Robert Mondavi set out to establish a wine culture in America by putting great California wine on every table. In 1979 he established the Woodbridge Winery near his childhood home of Lodi, California to make fruit-focused wines for everyday drinking.
    rough-background
      .page-content-wrap.pt-100.pb-100
        .row
          .quote-col.waypoint
            span.quote &ldquo;
            .quote-text
              p To succeed and have a happy life, you need common sense, a commitment to hard work and the courage to go your own way.
            seperator
          .text-col
            h5 The Beginning
            p In the early 1900’s, Cesare and Rosa Mondavi, newlyweds from Sassoferrato in northern Italy, settled in Minnesota. In 1919, the National Prohibition Act was passed, banning the sale of alcohol. This seemed incomprehensible to Italian families, to whom wine was a staple of daily life. Luckily, a loophole in the law allowed people to make 200 gallons of wine each year for family consumption.
            p Cesare became involved in shipping wine grapes from California for home winemaking, and noticed that the majority of the grapes were coming from a place called “Lodi” in California. Sensing an opportunity, he moved his family, which now included a young Robert Mondavi and started his own business shipping grapes back east to Italian-American families. Robert’s first job was nailing crates together to hold the grapes.
            p Robert’s parents instilled in him the virtues of hard work and encouraged him to explore the growing wine industry. After studying business and chemistry at Stanford University and taking a crash course in viticulture and enology at the University of California at Berkeley, Robert Mondavi immersed himself in all aspects of the wine industry.
    .row.page-content-wrap.pt-5.pb-5
      .text-col
        h5 Creating A Legacy
        p Robert Mondavi felt confident that the Napa Valley and California could ultimately create wines that would stand shoulder to shoulder with the great wines of the world. He founded the iconic Robert Mondavi Winery in 1966 near Oakville, California; the first major winery to be built in the Napa Valley since Prohibition.
        p After the outstanding success of his Napa Valley winery, Robert Mondavi pursued his second vision of creating delicious wines for everyday enjoyment. Having grown up in Lodi, Robert knew the region was ideal for growing wine grapes from which he could produce quality wines at affordable prices. In 1979, he acquired a local cooperative of grape growers, naming the winery after a nearby town - the Woodbridge Winery was born.
      .image-col.waypoint
        img(src='@/assets/ourstory-legacy.jpg')
    rough-background(onlyBottomEdge=true).pt-5
      image-text-row-cta(title="Winemaking" cta="Learn More" link="winemaking" path="our-story/OurStory-Winemaking.jpg" linkValue="Learn More about Our WineMaking")
        p For forty years, we’ve been making classic wines that reflect the diversity of California’s wine growing regions.
    global-footer
</template>

<script>

import Navigation from '../components/Navigation'
import PageHero from '../components/global/PageHero'
import GlobalFooter from '../components/GlobalFooter'
import RoughBackground from '../components/layout/RoughBackground'
import Seperator from '../components/element/Seperator'
import ImageTextRowCta from '../components/global/ImageTextRowCta'

require('waypoints/lib/noframework.waypoints.js')

export default {
  name: 'OurStory',
  head: {
    title: {
      inner: 'Our Story',
      complement: 'California Wines',
    },
    meta: [
      {
        name: 'description', content: 'Discover the history of Woodbridge by Robert Mondavi, and the origins of our classic wines. Learn more!',
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
    PageHero,
    RoughBackground,
    Seperator,
    ImageTextRowCta,
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
