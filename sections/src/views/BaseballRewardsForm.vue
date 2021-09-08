<template lang="pug">
.baseball-rewards-form
  navigation
  rough-background.pt(bottomEdge)
    .page-content-wrap
      iframe#sweepsiframe.form-iframe(
        scrolling="no",
        allowtransparency="true",
        :src="IFrameURI"
      )
      //- script(type="text/javascript" src="https://woodbridgewinesbaseball.staging.dja.com/assets/js/iframe.js")
  global-footer.footer(:MLBPresent="true")
</template>

<script>
import debug from "debug";
import Navigation from "../components/Navigation";
import GlobalFooter from "../components/GlobalFooter";
import RoughBackground from "@/components/layout/RoughBackground";

const log = debug("locator");

export default {
  data() {
    return {
      IFrameURI: this.isProd()
        ? "https://woodbridgeworldseriess2021.dja.com/"
        : "https://woodbridgeworldseriess2021.staging.dja.com/",
    };
  },
  name: "Locator",
  components: {
    RoughBackground,
    Navigation,
    GlobalFooter,
  },
  beforeCreate() {
    // ADDING SCRIPT FOR IFRAME
    function addScript() {
      if (document.getElementById("baseball-script")) return;
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "baseball-script";
      script.src = isProd()
        ? "https://woodbridgewinesbaseball.dja.com/assets/js/iframe.js"
        : "https://woodbridgewinesbaseball.staging.dja.com/assets/js/iframe.js";
      document.body.appendChild(script);
    }
    function isProd() {
      if (window.location.origin.includes("stage")) return false;
      return process.env.NODE_ENV === "production";
    }
    // addScript()

    // Add display none to buy-now-button
    document
      .getElementsByClassName("buy-now-button")[0]
      .classList.add("display-none");
  },
  mounted() {
    log("Mounted");
  },
  computed: {},
  methods: {
    isProd() {
      if (window.location.origin.includes("stage")) return false;
      return process.env.NODE_ENV === "production";
    },
  },
  beforeDestroy() {
    document
      .getElementsByClassName("buy-now-button")[0]
      .classList.remove("display-none");
  },
};
</script>

<style lang="scss">
.baseball-rewards-form .rough-background__content {
  padding-top: 0;
}
#sweepsiframe {
  width: 100%; /*REQUIRED – DO NOT ALTER*/
  height: 100%; /*REQUIRED – DO NOT ALTER*/
  min-height: 800px; /*REQUIRED – ADJUSTABLE*/
  overflow: hidden; /*REQUIRED – DO NOT ALTER*/
  /* More styles can be added as needed based on site design */
  @media only screen and (min-width: 853px) {
    height: 800px !important;
  }
}
.display-none {
  display: none;
}
.pt {
  padding-top: 60px;
}
</style>
