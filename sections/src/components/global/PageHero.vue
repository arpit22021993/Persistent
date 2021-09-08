<template lang="pug">
  .page-hero
    .page-hero__content
      .page-hero__image
        .page-hero__image-bg(:class="{rellax : !isMobile}" :style="`background-image: url(${backgroundImagePath})`")
        .page-hero__image-content
          .page-hero__image-content-title
            h1.seperator {{title}}
          .page-hero__image-content-subtitle
            slot
</template>

<script>
import debug from 'debug'
// eslint-disable-next-line
import Rellax from 'rellax'

// import { mapActions, mapState } from 'vuex'

let log = debug('component:PageHero')

export default {
  name: 'PageHero',
  props: {
    backgroundImagePath: {
      type: String,
      default: 'text',
    },
    title: {
      type: String,
      default: 'text',
    },
    subtitle: {
      type: String,
      default: 'text',
    },
  },
  data () {
    return {
      isMobile: window.innerWidth < 720,
      rellax: {},
    }
  },
  mounted () {
    log('Mounted')
    // eslint-disable-next-line
    this.rellax = new Rellax('.rellax')
  },
  computed: {
  },
  methods: {
    // ...mapActions('tasks', ['syncTask'])
  },
  components: {
  },
  beforeDestroy () {
    if (this.rellax) {
      // let rellax = Rellax(this.rellaxRef)
      this.rellax.destroy()
    }
  },
}
</script>

<style scoped lang="scss">
.page-hero {
  margin-bottom: -2vw;
  @media #{$tablet} {
    margin-bottom: -20px;
    white-space: pre;
  }
  &__image {
    height: 29vw;
    max-height: 85vh;
    min-height: 400px;
    padding: px-rem(32);
    position: relative;
    text-align: center;
    @media #{$tablet} {
      max-height: 95vh;
    }
    @media #{$mobile-xs} {
      height: 142vw;
      max-height: unset;
    }
    &-bg {
      background-image: url('../../assets/wb-hero@3x.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 30px;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      @media #{$mobile} {
        top: -20px;
      }
    }
    &-content {
      white-space: pre-wrap;
      color: $brandTan;
      padding-top: 0.5em;
      position: absolute;
      font-weight: $heroBoldWeight;
      width: 80%;
      max-width: 600px;
      @include center-block;
      top: calc(50% + 1.5rem);
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: pre-wrap;
      @media #{$mobile} {
        top: 50%;
      }
      &-title {
        margin-bottom: 1em;
        position: relative;
        text-shadow: 2px 1.5px 2px rgba(30,30,30,0.9);
        h1 {
          font-size: px-rem(36);
          font-family: $caslonFontFamily;
        }
        font-weight: $heroSemiBoldWeight;
      }
      &-subtitle {
        position: relative;
        text-shadow: 2px 1.5px 2px rgba(30,30,30,0.9);
        p {
          font-family: $caslonFontFamily;
          font-weight: 500;
          font-size: px-rem(16);
          line-height: px-rem(32);
          margin-bottom: 0;
          color: $brandTan;
        }
      }
    }

    &-lockup {
      left: 50%;
      filter: drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.3));
      max-width: 53%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);

      @media #{$mobile} {
        display: none;
      }

      path {
        fill: $brandTan;
      }

      &-mobile {
        display: none;
        filter: drop-shadow(0px 1px 14px rgba(0, 0, 0, 0.4));
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 245px;

        @media #{$mobile} {
          display: block;
        }

        path {
          fill: $brandTan;
        }
      }
    }
  }

  &__content {
    @include center-block;
    text-align: center;
    h2 {
      font-family: $caslonFontFamily;
    }
    /* background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: px-rem(-40);
    padding: px-rem(88px) px-rem(32) px-rem(96);
    position: relative;
    text-align: center; */
    @media #{$mobile} {
      text-align: left;
    }

    &-text {
      color: $brandTan;
      font-size: px-rem(72);
      font-weight: bold;
      line-height: 0.9;

      @media #{$mobile} {
        font-size: px-rem(68);
      }
    }
  }

  .mobile-show {
    display: none;
    @media #{$mobile} {
      display: inline;
    }
  }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .75s;
  transition-delay: 0.25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-down-enter-active, .fade-down-leave-active {
  transition: .75s;
  transition-delay: 1s;
}
.fade-down-enter, .fade-down-leave-to {
  transform: translate(-50%, -55%);
  opacity: 0;
}
</style>
