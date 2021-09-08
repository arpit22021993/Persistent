<template lang="pug">
  .locator-wrap
    rough-background(bottomEdge=true).pt
      .page-content-wrap
        h1.t2.locator-title Get delivery or buy locally
        iframe.locator(ref="locator" src="https://where-to-buy.co/widgets/core/BuyOnlineBuyLocalV2/index.html?pid=12036060&model=92283" title="Get delivery or buy locally")
</template>

<script>
import debug from 'debug'
import RoughBackground from '@/components/layout/RoughBackground'

const log = debug('locator')

export default {
  name: 'Locator',
  components: {
    RoughBackground,
  },
  mounted: function () { 
    log('Mounted') 
  },
  computed: {
    /*     brand () {
          return this.data.productBrandId
        },
        varietal () {
          return this.data.productVarietal
        } */
  },
  beforeDestroy () {
    window.removeEventListener('click', this.searchScroll)
  },
  methods: {
    // listen for cbrands product locator display changes on default ajax locator gif
    // and display custom modal and ajax loader
    searchScroll () {
      window.scrollTo({
        top: 850, // change back to a fixed pixel amount if this causes problems
        left: 0,
        behavior: 'smooth',
      })
    },

    toggleLoader () {
      this.$root.$emit('toggleLoad')
    },
    
    /* handleBuyOnline () {
      // Gtag.trackEvent(this.data.productTracking.locateBtnId)
      this.$root.$emit('externalPurchase', this.data.productPurchaseUrl)
    }, */
  },
}
</script>

<style lang="scss" scoped>
.locator-wrap{
  position: relative;
  width: 100%;
  margin-top: 50px;

  .locator-title {
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .locator {
    min-height: 650px;
    width: 100%;

    @media (max-width: 576px) {
      min-height: 100vh;
    }
  }
}
.pt {
  padding-top: 50px;
}
/* .locator, .inner {
    width: 100%;
    margin-left: auto;
    margin-right: 0;
    position: relative;
      @media #{$buywidget} {
      margin: 0 auto;
    }
  }
  .locator {
    display: flex;
    flex-direction: column;
    width: 80%;
    @include center-block;
    justify-content: flex-end;
    align-items: flex-start;
    @media #{$buywidget} {
      flex-direction: column;
      width: 100%;
    }
  }
  .locator_results {
    margin-top: 75px;
  } */

</style>
