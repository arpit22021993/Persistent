<template lang="pug">
  .wine-display
    .page-content-wrap
      .flex-container(ref="container")
        span.col(v-for="(wine, index) in wineSeltzer" :style="{paddingBottom: getWinePadding(index)}")
          wine-item(:index="index" :name="wine.name" :image="getImgUrl('bottles', wine.bottleName, 'small')" ref="wineItem")
      wine-item-drop-down(ref="wineDropDown" :activeWine="activeWine" :style="{top: `${detailsOffset}px`}" @onResize="handleDetailResize" :showDropDown="this.showDropDown").abs
</template>

<script>
import debug from 'debug'
import WineItem from '../wine-seltzer/WineItem'
import WineItemDropDown from '../wine-seltzer/WineItemDropDown'
import { mapGetters, mapState, mapActions } from 'vuex'

let log = debug('component:WineDisplay')

export default {
  name: 'WineDisplay',
  props: {
  },
  data () {
    return {
      displayHeight: 0,
      detailsOffset: 0,
      spacerEl: {},
      timer: null,
      activeWine: null,
    }
  },
  beforeMount () {
    this.updateActiveWine()
  },
  mounted () {
    log('Mounted')
    this.detailsOffset = this.getRowOffset()
    if (this.showDropDown) {
      setTimeout(() => {
        window.scrollTo({
          top: this.detailsOffset + this.displayHeight - 50,
        })
      }, 100)
    }

    // this.handDetailResize('250px')
  },
  computed: {
    ...mapGetters({
      wineSeltzer: 'wineSeltzer/wineList',
    }),
    ...mapState({
      activeWineIndex: state => state.wineSeltzer.activeWine,
      showDropDown: state => state.wineSeltzer.showDropDown,
    }),
    wineOffset: function () {
      return this.$refs.wineDropDown.$el.clientHeight
    },
  },
  watch: {
    activeWineIndex: function () {
      let height = this.getRowOffset()
      if ((this.detailsOffset > height + 10 || this.detailsOffset < height - 10) && this.showDropDown) {
        this.closeAndAdjust()
      } else {
        this.updateActiveWine()
        this.setOffset(height)
        this.updateDropDown(true)
      }
    },
  },
  methods: {
    ...mapActions({
      updateDropDown: 'wineSeltzer/updateDropDown',
    }),
    closeAndAdjust () {
      window.clearTimeout(this.timer)
      // close6
      this.updateDropDown(false)
      this.timer = window.setTimeout(() => {
        let height = this.getRowOffset()
        this.updateActiveWine()
        this.setOffset(height)
        // open
        this.updateDropDown(true)
      }, 350)
    },
    setOffset (height) {
      this.detailsOffset = height
    },
    getWinePadding (index) {
      if (this.activeWine && index === this.activeWine.index) {
        return `${this.displayHeight}px`
      } else {
        return `0px`
      }
    },
    getImgUrl (prefix, name, size) {
      if (size === 'small') {
        return require(`../../assets/grab-and-go/${prefix}/${name}-small.png`)
      } else {
        return require(`../../assets/grab-and-go/${prefix}/${name}.png`)
      }
    },
    // returns the offsetTop of the next row based on the activeWine
    getRowOffset () {
      let el = this.$refs.wineItem[this.activeWineIndex].$el
      return el.offsetTop + el.clientHeight + 40
    },
    handleDetailResize (height) {
      // TODO: handle new height
      this.displayHeight = height
    },
    updateActiveWine () {
      this.activeWine = this.wineSeltzer[this.activeWineIndex]
    },
  },
  components: {
    WineItem,
    WineItemDropDown,
  },
}
</script>

<style scoped lang="scss">
  .wine-display {
    padding-top: px-rem(50);
    padding-bottom: none;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .col {
    flex-basis: 16.666666%;
  }
  .abs {
    position: absolute;
    z-index: 200;
  }

</style>
