<template lang="pug">
transition(name="fade-height")
  .wine-item-dropdown.bg(v-show="showDropDown", ref="display")
    .wine-item-dropdown__bg
    .wine-item-content
      .title
        h2 {{ activeWine.name }}
      p {{ activeWine.description }}
      img.wine-item-dropdown__img(
        :src="getImgUrl('bottles', activeWine.bottleName)"
      )
      .icons
        router-link.link.mr(
          to="/where-to-buy",
          :id="'ourwines_wtb_' + activeWine.index",
          v-on:keydown.prevent.tab.native="focusEAD",
          v-on:keydown.prevent.shift.tab.native="focusWineBottle"
        ) Where to Buy
        //- router-link to="/eat-and-drink" class="link mr" :id="'ourwines_ead_'+activeWine.index" Eat & Drink
        a.drizlyIcon(
          href="https://drizly.com/wine-brands/woodbridge-by-robert-mondavi/b1119",
          :id="'ourwines_drizzly_' + activeWine.index",
          target="_blank"
        )
          drizly
        a.instaCartIcon(
          :href="activeWine.instacartLink",
          target="_blank",
          :id="'ourwines_insta_' + activeWine.index",
          @keydown.prevent.tab.exact="gotoNextBottle()",
          @keydown.prevent.shift.tab="focusDrizzly()"
        )
          instacart
</template>
<script>
import debug from "debug";
import { mapActions, mapState } from "vuex";
import Drizly from "@/assets/icons/drizlywhite.svg";
import Instacart from "@/assets/svg/Asset 1.svg";
let log = debug("component:WineItemDropDown");

export default {
  name: "WineItemDropDown",
  props: {
    name: {
      type: String,
      default: "Wine",
    },
    description: {
      type: String,
      default: "Wine",
    },
    instacartLink: {
      type: String,
      default:
        "https://www.instacart.com/products/2900440-woodbridge-by-robert-mondavi-cabernet-sauvignon-red-wine-750-mlCabernet",
    },
    backgroundColor: {
      type: String,
    },
    onResize: {
      type: Function,
      default: () => {},
    },
    activeWine: {
      type: Object,
      required: true,
    },
    showDropDown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timer: null,
      firstFocusableEl: "",
      currentHeight: 0,
      backgroundImageHash: {},
      loadedImages: [],
    };
  },
  mounted() {
    log("Mounted");
    // this.loadImage()
    if (this.showDropDown) {
      this.initListeners();
    }
    if (this.loadedImages.length <= 0) {
      this.loadImages();
    }
  },
  updated: function () {
    this.setImage();
  },
  beforeDestroy() {
    this.updateDropDown(false);
    window.clearTimeout(this.killTimer);
    window.clearInterval(this.timer);
  },
  watch: {
    showDropDown: function (newState) {
      if (newState) {
        this.initListeners();
      } else {
        this.stopListeners();
      }
    },
  },
  computed: {
    ...mapState({
      wineList: (state) => state.wines.wineList,
    }),
  },
  methods: {
    ...mapActions({
      updateDropDown: "wines/updateDropDown",
    }),

    setImage() {
      let fullPath = this.activeWine.backgroundImagePath;
      let thumbPath = this.activeWine.backgroundImageThumb;
      if (this.loadedImages.find((img) => img === fullPath)) {
        this.setBackground(fullPath);
      } else {
        this.setBackground(thumbPath);
      }
    },
    loadImages() {
      this.wineList.forEach((wine) => {
        this.loadImage(wine.backgroundImagePath)
          .then((result) => {
            this.loadedImages.push(wine.backgroundImagePath);
          })
          .catch((err) => {
            log(err);
          });
      });
      this.setImage();
    },
    loadImage(url) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener("load", (e) => resolve(img));
        img.addEventListener("error", (e) => {
          console.error(e);
          reject(new Error(`Failed to load image's URL : ${url}`));
        });
        img.src = url;
      });
    },
    setBackground(url) {
      this.$refs.display.style.backgroundImage = `url(${url})`;
    },
    initListeners() {
      window.clearTimeout(this.killTimer);
      window.clearInterval(this.timer);
      this.timer = window.setInterval(this.handleResize, 5);
    },
    stopListeners() {
      this.killTimer = window.setTimeout(() => {
        window.clearInterval(this.timer);
      }, 1000);
    },
    handleResize(evnt) {
      let height = this.$refs.display.clientHeight;
      if (height !== this.currentHeight) {
        this.$emit("onResize", height);
        this.currentHeight = height;
      }
    },
    getBottleImgUrl(name) {
      /* return require(`../../assets/our-wines/bottles/${name}.png`) */
      return require(`../../assets/our-wines/bottles/${name}.png`);
    },
    getActiveWineBackgroundUrl() {
      return this.backgroundImageHash[this.activeWine.backgroundImageThumb];
    },
    getImgUrl(prefix, name, size) {
      if (size === "small") {
        return require(`../../assets/our-wines/${prefix}/${name}-small.png`);
      } else {
        return require(`../../assets/our-wines/${prefix}/${name}.png`);
      }
    },
    // },
    gotoNextBottle: function () {
      if (this.activeWine["index"] != this.wineList.length - 1) {
        var nextFocus = this.activeWine["index"] + 1;
        document.getElementById("ourwinebottle_" + nextFocus).focus();
      } else {
        document.getElementById("barrel-aged-wines").focus();
      }
    },
    focusDrizzly: function () {
      var nextFocus = this.activeWine["index"];
      document.getElementById("ourwines_drizzly_" + nextFocus).focus();
    },
    focusWineBottle: function () {
      var nextFocus = this.activeWine["index"];
      document.getElementById("ourwinebottle_" + nextFocus).focus();
    },
    focusEAD: function () {
      var nextFocus = this.activeWine["index"];
      document.getElementById("ourwines_ead_" + nextFocus).focus();
    },
  },
  components: {
    Drizly,
    Instacart,
  },
};
</script>

<style scoped lang="scss">
.wine-item-dropdown {
  z-index: 0;
  overflow-y: hidden;
  max-width: 1070px;
  @include center-block;
  max-height: 100vh;
  margin-top: 20px;
  left: 10%;
  right: 10%;
  transition: all 0.3s ease 0.1s;
  @media #{$tablet} {
    left: 0;
    right: 0;
  }
  @media #{$mobile} {
    left: 0;
    right: 0;
  }
  &__bg {
    background-image: url("../../assets/global/bottom-paper-edge.png");
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .link {
    color: $brandTan;
    display: inline-block;
    text-transform: uppercase;
    &:after {
      width: 30%;
    }
    &:hover:after {
      width: 100%;
    }
  }
  .mr {
    margin-right: 50px;
  }
  &__img {
    position: absolute;
    bottom: 10px;
    height: 85%;
    // max-height: 95%;
    right: 15%;
    @media #{$tablet} {
      right: 13%;
      height: auto;
      width: 12%;
    }
    @media #{$mobile} {
      display: none;
      right: 10px;
      height: auto;
      width: 20%;
    }
    @media #{$mobile-xs} {
      right: 10px;
      top: 0px;
      height: auto;
      width: 17%;
    }
  }
}
.wine-item-content {
  width: 50%;
  white-space: pre-wrap;
  margin-top: 60px;
  // padding-bottom: 100px;
  margin-left: 15%;
  padding-bottom: px-rem(75);
  color: $brandTan;
  height: 450px;
  p {
    color: $brandTan;
  }
  h2 {
    font-size: 4rem;
    font-weight: 600;
  }
  @media #{$mobile} {
    width: 80%;
    height: 550px;
  }
}

.fade-height-enter-active,
.fade-height-leave-active {
  transition: all 0.3s ease 5ms;
  max-height: 100vh;
  opacity: 1;
}
.fade-height-enter,
.fade-height-leave-to {
  max-height: 0;
  opacity: 0;
}
.bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
.title {
  width: 40%;
}
.icons {
  display: flex;
  flex-direction: row;
}
.drizlyIcon {
  margin-left: 10%;
}
.instaCartIcon {
  max-width: 150px;
  margin-left: 10%;
}
#instacart {
  width: 80%;
}
</style>
