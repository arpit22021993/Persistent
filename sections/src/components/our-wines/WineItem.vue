<template lang="pug">
  .wine-item(@click="wineClick" @keydown.enter="wineClick")
    .wine-item__border
    .wine-item__img
      a(tabindex="0" role="button" :id="'ourwinebottle_'+index" :aria-label="name" :rel="selectedWine" :aria-expanded="globalWine==name ? 'true' : 'false'" @click="wineOptClick(name)" @keydown.enter="wineOptClick(name)" @keydown.prevent.tab.exact="setFocusWTB()" @keydown.prevent.shift.tab="goToPrevBottle()")
        img(:src="image" alt="") 
    .wine-item__name
      h4 {{name}}
    //- transition(name="vt-fade")
    .wine-item--active(v-if="activeWine === index && showDropDown")
</template>

<script>
import debug from 'debug'
import { mapActions, mapState } from 'vuex'
let log = debug('component:WineItem')

export default {
  name: 'WineItem',
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
      default: 'Wine',
    },
    backgroundColor: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  data () {
    return {
      timer: null,
      globalWine: '',
      selectedWine: '',
    }
  },
  mounted () {
    log('Mounted')
  },
  computed: {
    ...mapState({
      showDropDown: state => state.wines.showDropDown,
      activeWine: state => state.wines.activeWine,
      wineList: state => state.wines.wineList,
    }),
  },
  methods: {
    ...mapActions({
      updateActiveWine: 'wines/updateActiveWine',
      updateDropDown: 'wines/updateDropDown',
    }),
    wineClick: function () {
      if (this.index === this.activeWine) {
        this.updateDropDown(!this.showDropDown)
      } else {
        this.updateActiveWine(this.index)
        // if (this.showDropDown === false) {
        //   this.updateDropDown(true)
        // }
      }
    /*   if (this.showDropDown) {
        this.updateDropDown(false)
      } else {
        this.updateActiveWine(this.index)
        this.updateDropDown(true)
      } */
      /*     console.log(this.activeWine)
      console.log(this.index)
      if (this.activeWine === this.index) {
        console.log('same dropdwon')
        this.timer = window.setTimeout(() => {
          this.updateActiveWine(this.index)
        }, 300)
      } else {
        this.updateActiveWine(this.index)
      } */
    },
    wineOptClick: function (wineName) {
      for(var i=0;i<this.wineList.length;i++)
      {
        if(this.wineList[i].index == this.index)
        {
          if(document.getElementById('ourwinebottle_'+this.wineList[i].index).getAttribute('rel') != wineName)
          {
            this.globalWine = wineName;
            document.getElementById('ourwinebottle_'+this.wineList[i].index).setAttribute('aria-expanded',true);
          }
          else
          {
            if(document.getElementById('ourwinebottle_'+this.wineList[i].index).getAttribute('aria-expanded') == 'true')
            {
              document.getElementById('ourwinebottle_'+this.wineList[i].index).setAttribute('aria-expanded',false);
            }
            else
            {
              document.getElementById('ourwinebottle_'+this.wineList[i].index).setAttribute('aria-expanded',true);
            }
          }
        }
        else
        {
          document.getElementById('ourwinebottle_'+this.wineList[i].index).setAttribute('aria-expanded',false);
        }        
      }
      for(var i=0;i<this.wineList.length;i++)
      {
        this.selectedWine = wineName;
        document.getElementById('ourwinebottle_'+this.wineList[i].index).setAttribute('rel',wineName);
      }
    },
    setFocusWTB: function () {
      if(document.getElementById('ourwinebottle_'+this.index).getAttribute('aria-expanded') == 'true')
      {
        document.getElementById('ourwines_wtb_'+this.index).focus();
      }
      else
      {
        if(this.index != (this.wineList.length - 1))
        {
          const nextBottleIdx = parseInt(this.index) + 1;
          document.getElementById('ourwinebottle_'+nextBottleIdx).focus();
        }
        else
        {
          document.getElementById('barrel-aged-wines').focus();
        }
      }
    },
    goToPrevBottle: function () {
      if(this.index != 0)
      {
        var prevBottleFocus = parseInt(this.index) - 1;
        if(document.getElementById('ourwinebottle_'+prevBottleFocus).getAttribute('aria-expanded') == 'true')
        {
          document.getElementById('ourwines_insta_'+prevBottleFocus).focus();
        }
        else
        {
          document.getElementById('ourwinebottle_'+prevBottleFocus).focus();
        }
      }
      else
        document.getElementById('fb_link').focus();
    },
  },
  components: {
  },
  beforeDestroy () {
    window.clearTimeout(this.timer)
  },
}
</script>

<style scoped lang="scss">
  .mb{
    margin-bottom: 400px;
  }
  .wine-item {
    margin: px-rem(35) auto;
    position: relative;
    cursor: pointer;
    width: 125px;
    height: 200px;

    &:hover {
      cursor: pointer;
    }
    &:hover  .wine-item__img{
      transform: scale(1.1);
    }
    &:hover .wine-item__name{
      color: $brandGold
    }
    &__border {
      border: 1px solid $brandGoldLight;
      position: absolute;
      z-index: $zBottomLevel;
      left: 10%;
      right: 10%;
      top: 25%;
      bottom: 25%;
    }
    &__img {
      transition: transform .3s ease;
      position: relative;
      z-index: $zBottomLevel;
      // transition: transform .3s ease;
      img {
        @include center-block;
        max-height: 180px;
      }
    }
    &__name {
      transition: color .3s ease;
      margin-top: 10px;
      text-align: center;
      h4 {
        font-size: px-rem(16px);
      }
    }
    &--active {
      border-right: 2px solid $brandGold;
      height: 20px;
      position: absolute;
      left: 50%;
      bottom: -50px;
    }
  }
</style>
