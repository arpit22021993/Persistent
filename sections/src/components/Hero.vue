<template lang="pug">
  .hero
    transition(name="fade" appear)
      .hero__image
        i.down(@click.prevent="scrollDown()")
        .hero__image-bg(:class="{rellax : !isMobile}" :style="`background-image: url(${require('@/assets/homepage-hero.jpg')})`")
        transition(name="fade-down" appear)
          lockupDesktop.hero__image-lockup(role="img" focusable="false" aria-label="From One For All Robert Mondavi")
        transition(name="fade-down" appear)
          lockupMobile.hero__image-lockup-mobile
    .hero__message(ref="bg" :style="`background-image: url(${require('@/assets/RedPaperTexture-bright.png')})`")
      h1.hero__message-text Wine that<br class="mobile-show"> doesn't get</br>uptight<br class="mobile-show"> about wine.
</template>

<script>
import debug from 'debug'
// eslint-disable-next-line
import Rellax from 'rellax'

import LockupDesktop from '@/assets/WYW_Lockup_TM.svg'
import LockupMobile from '@/assets/WYW_Lockup_TM_mobile.svg'

// import { mapActions, mapState } from 'vuex'

let log = debug('component:Hero')

export default {
  name: 'hero',
  props: {
    // propName: {
    //   type: String,
    //   default: 'text'
    // }
  },
  data () {
    return {
      isMobile: window.innerWidth < 720,
    }
  },
  mounted () {
    log('Mounted')
    // eslint-disable-next-line
    var rellax = new Rellax('.rellax')
  },
  computed: {
    // ...mapState('tasks', ['allTasks'])
  },
  methods: {
    // ...mapActions('tasks', ['syncTask'])
    scrollDown () {
      window.scrollTo({
        top: this.$refs.bg.offsetTop,
        behavior: 'smooth',
      })
    },
  },
  components: {
    LockupDesktop,
    LockupMobile,
  },
}
</script>

<style scoped lang="scss">

i {
  border: solid $brandTan;
  border-width: 0 4px 4px 0;
  display: inline-block;
  border-radius: 2px;
  padding: 8px;
  position: absolute;
  left: 50%;
  bottom: 60px;
  z-index: 1;
  visibility: hidden;
  @media #{$mobile} {
    visibility: visible;
  }
}
.down {
  transform: translateX(-50%) rotate(45deg);
}
.hero {
  &__image {
    height: 46vw;
    max-height: 85vh;
    padding: px-rem(32);
    position: relative;
    text-align: center;

    @media #{$mobile-xs} {
      height: 142vw;
      max-height: unset;
    }

    &-bg {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
    }

    &-lockup {
      left: 50%;
      filter: drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.3));
      max-width: 30%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      padding:10px;

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
        padding:10px;

        @media #{$mobile} {
          display: block;
        }

        path {
          fill: $brandTan;
        }
      }
    }
  }

  &__message {
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: px-rem(-40);
    padding: px-rem(88px) px-rem(32) px-rem(96);
    position: relative;
    text-align: center;

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
