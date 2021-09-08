<template lang="pug">
  #app
    .agegateContainer(v-show="cookieOK === false && displayGate")
      age-gate(@checkCookie="checkForCookie" ref="agegate")
    router-view
    buy-now-modal(v-if="buyOpen")
    .btn-container(v-if="!isWhereToBuy")
      buy-now-button
</template>

<script>
import debug from 'debug'
import { mapState } from 'vuex'
import BuyNowButton from '@/components/global/BuyNowButton'
import BuyNowModal from '@/components/global/BuyNowModal'
import AgeGate from '@/components/global/AgeGate'

const log = debug('app')

export default {
  name: 'app',
  data () {
    return {
      cookieTimer: null,
      cookieOK: null,
      ungatedRoutes: [
        'Terms',
        'PrivacyPolicy',
        'Contact',
      ],
    }
  },
  created () {
    // this.init(this.$parent.site)
  },
  mounted () {
    log('App Mounted', this.$parent.site)
    this.cookieExists()
    if (!window.navigator.userAgent.includes('Headless')) {
      this.$gtm.enable(true)
    }
    // this.setLoading(false)
  },
  computed: {
    // ...mapState(['site', 'loading', 'ui/buyModal']),
    ...mapState({
      buyOpen: state => state.ui.buyModal,
    }),
    displayGate () {
      return this.ungatedRoutes.indexOf(this.$route.name) < 0
    },
    isWhereToBuy () {
      return this.$route.path === '/where-to-buy'
    },
    // cookieSet () {
    //   return window.cookieSet
    // },
  },
  watch: {
    cookieOK () {
      this.checkForCookie()
    },
  },
  methods: {
    // ...mapActions(['init', 'setLoading']),
    cookieExists () {
      console.log('----------')
      console.log('inside cookieExists')
      this.cookieTimer = window.setInterval(() => {
        if (document.cookie.indexOf('gatewayAgeVerifiedwoodbridgebyrobertmondavi=true') >= 0) {
          this.cookieOK = true
          console.log('inside cookieTimer')
          window.clearInterval(this.cookieTimer)
        } else {
          console.log('inside cookieFAIL')
          this.cookieOK = false
        }
      }, 250)
    },
    checkForCookie () {
      console.log('************')
      this.cookieExists()
    },
  },
  components: {
    BuyNowButton,
    BuyNowModal,
    AgeGate,
  },
}
</script>

<style lang="scss">
@import './styles/main';
#app {
  background: $brandTan;
}

.agegateContainer {
  background:rgba(249, 244, 224,0.8);
  //background-color: rgba(249, 244, 224,0.8);
  background-size: cover;
  z-index: 999999998;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}

.btn-container {
  position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
