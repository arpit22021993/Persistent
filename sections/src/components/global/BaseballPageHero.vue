<template lang="pug">
  .page-hero
    .page-hero__content
      .page-hero__image
        .page-hero__image-bg(:class="{rellax : !isMobile}" :style="`background-image: url(${backgroundImagePath})`")
        .page-hero__image-content
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
  }
  &__image {
    height: 600px;
    padding: px-rem(32);
    position: relative;
    text-align: center;
    @media #{$tablet} {
      max-height: 95vh;
    }
    @media #{$mobile-xs} {
      height: 152vw;
      max-height: unset;
    }
    @media only screen and (max-width: 430px) {
      height: 182vw;
    }
    @media only screen and (max-width: 370px) {
      height: 210vw;
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
      top: calc(51% + 1.5rem);
      left: 60%;
      transform: translate(-50%, -50%);
      @media only screen and (min-width: 1400px) {
        left: 50%;
      }
      @media #{$mobile} {
        top: 50%;
      }
      @media #{$tablet} {
        left: 50%;
      }
      &-subtitle {
        position: relative;
        text-shadow: 0px 3px 6px $brandGrey;
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
