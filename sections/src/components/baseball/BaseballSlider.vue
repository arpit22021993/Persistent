<template lang='pug'>
  .baseball-swiper
    .nav(ref="previous" @click="onPreviousClick")
        img.prev(:src="require(`@/assets/baseball/left_arrow.png`)")
    .nav(ref="next" @click="onNextClick")
        img.next(:src="require(`@/assets/baseball/right_arrow.png`)")
    Swiper.slider(ref="mySwiper" :options="swiperOptions" @slideChange="onSlideChange" :auto-destroy="false")
        SwiperSlide.slide.slide1
            .slider-card
                h1.bold-white enter for chance to&nbsp;win
                img.slider-image(:src="require(`@/assets/baseball/slider_image.jpg`)" alt="Gold Baseball Glove Box With White Inner Border")
                .slider-img-text
                    .main-copy
                      h1.bold-header WIN&nbsp;A&nbsp;TRIP&nbsp;TO&nbsp;A&nbsp;2021
                      h1.bold-header.gold-header <em>WORLD&nbsp;SERIES</em><span class="registered">&#174;</span>&nbsp;GAME
                      router-link.baseball-button(to="/baseball-rewards-form")
                        .baseball-button-text.mobile-text
                          h5 enter sweeps
                    p.legal-copy NO PURCHASE NECESSARY. Open only to legal residents of the 50 United States and Washington, D.C., 21 or older. Starts 12:00 AM ET on 7/1/21 and ends 11:59 PM ET on 8/31/21. The Woodbridge Trip to the MLB 2021 World Series Sweepstakes is sponsored by Constellation Brands, Inc. One prize will be awarded. No alcohol is awarded with prize. Limit one entry per person/email address per day regardless of method of entry. Odds of winning depend on the number of eligible entries received. For complete details, see <router-link class="official-rules" to="/baseball-rewards-form">Official&nbsp;Rules</router-link>.
        SwiperSlide.slide.slide3
            .slider-card
                h1.bold-white YOUR&nbsp;TEAM. YOUR&nbsp;WINE.
                h1.bold-white.smaller-h1 A&nbsp;NEW&nbsp;GAME TIME&nbsp;TRADITION.
                img.slider-image(:src="require(`@/assets/baseball/slider-wine-baseball.png`)" alt="Baseball Team Logos And Two Wine Boxes")
                p Introducing Limited Edition MLB™ Packaging This Season
        .swiper-pagination(ref="pagination", slot="pagination")
</template>

<script>
import Card from './SliderCard'
export default {
  data () {
    const slideGap = 0
    const slideWidth = 356
    return {
      slideGap,
      slideWidth,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: slideGap,
        centeredSlides: true,
        initialSlide: 0, // for mobile this should be 0
        // breakpoints: {
        //   1270: {
        //     initialSlide: 1
        //   }
        // }
      },
      nextEnabled: true,
      prevEnabled: false,
    }
  },
  components: {
    Card,
  },
  mounted () {
    this.setSwiperPaginationText()
  },
  updated () {
    this.setSwiperPaginationText()
  },
  renderTriggered () {
    this.setSwiperPaginationText()
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
  },
  destroy () {
    this.swiper.destroy()
  },
  methods: {
    onSlideChange (arg) {
      this.nextEnabled = !this.swiper.isEnd
      this.prevEnabled = !this.swiper.isBeginning
    },
    onPreviousClick () {
      this.swiper.slidePrev()
    },
    onNextClick () {
      this.swiper.slideNext()
    },
    onCLickOpen (url) {
      window.open(url, '_blank')
    },
    setSwiperPaginationText () {
    //   baseball-slider
      const elems = this.$el.querySelectorAll('.baseball-slider .swiper-pagination-bullet')
      // elems[0].innerHTML = 'A NEW TRADITION'
        elems[0].innerHTML = 'SWEEPS'
      elems[1].innerHTML = 'A NEW TRADITION'

      elems.forEach((el) => {
        el.classList.add('')
      })
    },
  },
}
</script>

<style lang='scss' scoped>
.slide {
  position: relative;
  margin-right: 0 !important;

}
.slide1 {
    .slider-card > h1 {
        margin-bottom: 6%;
        margin-top: 1%;
        @media #{$mobile} {
            margin-top: 7%;
        }
        @media #{$mobile-xs} {
            margin-top: 0;
        }
        @media only screen and (max-width: 455px) {
            margin-top: 10%;
        }
        @media only screen and (max-width: 375px) {
            margin-top: 25%;
        }
    }
    p {
        @media #{$tablet} {
            font-size: px-rem(15);
            width: 80%;
            text-align: center;
            margin: auto;
        }
        @media #{$mobile} {
            font-size: px-rem(12);
        }
    }
}
.slide3 {
  .slider-card {
        @media #{$tablet} {
            margin-top: 7%;
        }
        @media #{$mobile-xs} {
            margin-top: 0;
        }
  }
    p {
        font-family: $caslonFontFamily;
        @media #{$mobile-xs} {
            font-size: px-rem(10);
        }
    }
    img {
        margin-top: 15px;
    }
}
.slider {
  position: absolute;
  bottom: -230px;
  margin: auto;
  left: 0;
  right: 0;
  width: 99%;
  max-width: 1000px;
}
.slider-image {
  height: 100%;
    min-width: 300px;
}
.slider-card {
    // max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .slider-image {
        width: 75%;
    }
}
.slider-img-text {
    position: absolute;
    width: 100%;
    top: 36%;
    z-index: 10;
    @media only screen and (max-width: 720px) {
      top: 45%;
    }
    @media only screen and (max-width: 553px) {
      top: 46%;
    }
    @media only screen and (max-width: 500px) {
      top: 45%;
    }
    @media only screen and (max-width: 455px) {
      top: 50%;
    }
    @media only screen and (max-width: 375px) {
      top: 58.5%;
    }
    @media only screen and (max-width: 335px) {
      top: 59%;
    }
    p {
        font-family: $caslonFontFamily;
        color: $brandTan;
        text-align: center;
        width: 60% !important;
        margin: auto;
    }
}
.smaller-h1 {
    font-size: px-rem(58) !important;
  @media #{$tablet} {
    margin: 10px 0;
    font-size: px-rem(45) !important;
  }
  @media #{$mobile} {
    font-size: px-rem(40) !important;
  }
  @media #{$mobile-xs} {
    font-size: px-rem(39) !important;
  }
}
.baseball-swiper {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin: auto 0;
    width: 100%;
    height: 100%;
    // max-width: 1800px;
    // border: solid red 5px;
    @media #{$tablet} {

    }
}
.nav {
    @media #{$tablet} {
        display: none;
    }
    &:first-child {
        position: absolute;
        margin-left: 35px;
        left: 0;
        bottom: 0;
        z-index: 15;
    }
    &:nth-child(2) {
        position: absolute;
        margin-right: 35px;
        right: 0;
        bottom: 0;
        z-index: 15;
    }
    img {
        object-fit: contain;
        min-width: 14px;
        width: 40px;
        margin-top: 130px;
        cursor: pointer;
        // &:hover {
        //     width: 20px;
        // }
    }
}

.registered {
  margin-left: 3.5px;
  // font-size: 1em;
}
</style>

<style lang="scss">
.swiper-pagination {
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    bottom: 0;
}
@mixin baseball-after {
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    content: '';
    background-color: #3C3931;
    display: block;
    bottom: -4px;
    height: 2px;
}
.baseball-swiper {
  .swiper-pagination-bullet {
    opacity: 1;
    background: none;
    border: 0;
    width: 140px;
    height: 4px;
    margin: 0 3px !important;
    color: #3C3931;
    transition: all .3s ease;
    opacity: 0.5;
    text-decoration: none;
    &:first-child::after {
        margin-left: 44px;
    }
    &:last-child::after {
        margin-left: 16px;
    }
    &:nth-child(2)::after {
        // margin-left: 3px;
    }
    &::after {
        @include baseball-after();
        width: 20px;
    }
    // @media #{$mobile-xs} {
    //     font-size: px-rem(18);
    //     width: 120px;
    //     &:first-child::after {
    //         margin-left: 8px;
    //     }
    //     &:last-child::after {
    //         margin-left: 10px;
    //     }
    //     &:nth-child(2)::after {
    //         // margin-left: 6px;
    //     }
    //     &::after {
    //         @include baseball-after();
    //         width: 10px;
    //     }
    // }
    &:hover {
        opacity: 1;
        &:first-child::after {
            width: 49px;
        }
        &:last-child::after {
            width: 107px;
        }
        &:nth-child(2)::after {
            // width: 142px;
        }
        &::after {
            width: 100px;
        }
        // @media #{$mobile-xs} {
        //     &:first-child::after {
        //         width: 70px;
        //     }
        //     &:last-child::after {
        //         width: 65px;
        //     }
        //     &:nth-child(2)::after {
        //         // width: 80px;
        //     }
        // }
    }
    &-active {
        opacity: 1;
        &:first-child::after {
            width: 49px;
        }
        &:last-child::after {
            width: 107px;
        }
        &:nth-child(2)::after {
            // width: 142px;
        }
        &::after {
            width: 100px;
        }
        // @media #{$mobile-xs} {
        //     &:first-child::after {
        //         width: 70px;
        //     }
        //     &:last-child::after {
        //         width: 65px;
        //     }
        //     &:nth-child(2)::after {
        //         width: 80px;
        //     }
        // }
    }
  }
}
.swiper-slide {
    margin-bottom: 40px;
}

h1.bold-header {
  text-align: center;
  font-family: $headingsFontFamily;
  color: $brandTan;
  font-size: px-rem(54);
  font-weight: bold;
  line-height: 0.9;
  @media #{$tablet} {
    font-size: px-rem(48);
  }
  @media #{$mobile} {
    font-size: px-rem(36);
  }
  @media #{$mobile-xs} {
    line-height: 0.6;
    font-size: px-rem(28);
  }
  @media only screen and (max-width: 365px) {
    line-height: 0.5;
    font-size: px-rem(24);
  }
}
h1.gold-header {
  color: rgba(251,246,230, 0.7);
}

.baseball-button {
  z-index: 100;
  width: 170px;
  height: 45px;
  background-color: $brandTan;
  color: #B59F61;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  outline: 1px solid #B59F61;
  outline-offset: -4px;
  // box-shadow: 0px 0px 10px rgba(black, .5);
  transition: background-color .3s ease;
  &:hover {
    cursor: pointer;
    background-color: white;

    &:after {
      width: 0;
    }
  }
  @media #{$mobile} {
    // bottom: 50px;
    height: 35px;
    width: 120px;
  }
  // @media only screen and (max-width: 592px) {
  //   bottom: 68px;
  // }
  @media #{$mobile-xs} {
    // bottom: 44px;
    height: 30px;
    width: 110px;
  }
  // @media only screen and (max-width: 481px) {
  //   bottom: 48px;
  //   height: 30px;
  //   width: 110px;
  // }
  @media only screen and (max-width: 365px) {
    // bottom: 46px;
    height: 25px;
    // width: 110px;
  }
  // @media only screen and (max-width: 327px) {
  //   bottom: 55px;
  //   height: 25px;
  //   width: 110px;
  // }
}
.baseball-button-text{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #B59F61;
}

.mobile-text h5{
    @media #{$mobile} {
      font-size: 15px !important;
  }
}
.slider-img-text p.legal-copy {
  width: 60% !important;
  margin-top: 6em;
  font-family: $baseFontFamily;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.3px;
  color: rgba(251,246,230, 0.7);
  .official-rules {
    font-size: inherit;
    color: rgba(251,246,230, 0.7);
    font-weight: 500;
  }
  @media #{$tablet} {
    width: 80% !important;
    // bottom: -140px;
  }
  @media #{$mobile} {
    width: 94% !important;
    margin-top: 4.3em;
  }
  @media #{$mobile-xs} {
    width: 94% !important;
    font-size: 10px;
    line-height: 10px;
    margin-top: 4.1em;
  }
  @media only screen and (max-width: 365px) {
    margin-top: 39px;
    line-height: 10px;
    font-size: 9px;
    width: 94% !important;
  }
}
.slide1 .main-copy {

}
.slide1 .slider-card {

    .slider-image {
      @media #{$tablet} {
        width: 90%;
      }
      @media #{$mobile} {
        width: 100%;
      }
      @media #{$mobile-xs} {
        width: 100%;
      }
    }
}
</style>
