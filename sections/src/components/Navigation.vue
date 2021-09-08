<template lang="pug">
  .nav
    .nav__upper
      logo.nav__logo(@click.prevent="$router.push('/')" aria-label="Woodbridge Wines Home" focusable="true" role="link" tabindex="0")
    .nav__lower(:style="`background-image: url(${isMobile ? mobileBg : bg})`" :class="{sticky: isSticky}" id="bg-img")
      button.hamburger.hamburger--squeeze.z-20(
        type="button"
        aria-label="hamburger menu"
        :aria-expanded="menuOpen? 'true':'false'"
        :class="{ 'hamburger--active': menuOpen }"
        @click="toggleMenuhamburger"
        v-if="($root.site === 'coming-soon') ? false : true"
      )
        span.hamburger__box
          span.hamburger__inner
      .nav__menu(@click="menuOpen = !menuOpen" :class="{active: menuOpen && isMobile}")
        ul.nav__menu-items
          .dropdown
            li(class="dropbtn") OUR WINES
              .positioner
                .triangle(class="triangle over")
            .dropdown-content
              router-link(to="/our-wines").nav__menu-link Classic
              router-link(to="/barrel-aged-wines").nav__menu-link Spirit Barrel-Aged
              router-link(to="/grab-and-go").nav__menu-link Grab & Go
              //- router-link(to="/wine-seltzers").nav__menu-link Wine Seltzers
          li.nav__menu-item
            router-link(to="/our-story").nav__menu-link Our Story
          li.nav__menu-item
            router-link(to="/pairing-app").nav__menu-link Pairing App
          li.nav__menu-item
            router-link(to="/where-to-buy").nav__menu-link Where To Buy
          //- li.nav__menu-item
          //-   router-link(to="/fromtabletotable").nav__menu-link.table Table to Table
          li.nav__menu-item
            router-link(to="/baseball").nav__menu-link.table Baseball
          li.nav__menu-item
            router-link(to="/awards").nav__menu-link.table Awards
        .nav__social
          a.nav__social-link(aria-label="Follow us on YouTube" href="https://www.youtube.com/user/WoodbridgeWines" target="_blank" rel="noopener" )
            youtube.nav__social-icon.nav__social-youtube(role="none" focusable="false" aria-hidden="true")
          a.nav__social-link(aria-label="Follow us on Instagram" href="https://www.instagram.com/woodbridgewines" target="_blank" rel="noopener")
            instagram.nav__social-icon.nav__social-instagram(role="none" focusable="false" aria-hidden="true")
          a.nav__social-link(aria-label="Follow us on Facebook" href="https://www.facebook.com/WoodbridgeByRobertMondavi" id="fb_link" target="_blank" rel="noopener")
            facebook.nav__social-icon.nav__social-facebook(role="none" focusable="false" aria-hidden="true")
</template>

<script>
/*
<div class="dropdown">
            li(class="dropbtn").nav__menu-item
            router-link(to="/our-wines").nav__menu-link Our Wines
            <div class="dropdown-content">
              <a href="/our-wines">CLASSIC</a>
              <a href="/barrel-aged-wines">SPIRIT BARREL-AGED</a>
              <a href="/grab-and-go">GRAB & GO</a>
            </div>
          </div> */
import debug from 'debug'
// import { mapActions, mapState } from 'vuex'

import Facebook from '@/assets/icons/facebook.svg'
import Instagram from '@/assets/icons/insta.svg'
import Youtube from '@/assets/icons/youtube.svg'
import Logo from '@/assets/logo2.svg'

let log = debug('component:Navigation')

export default {
  name: 'navigation',
  props: {
    // propName: {
    //   type: String,
    //   default: 'text'
    // }
  },
  data () {
    return {
      bg: require('@/assets/paper-menu-desktop@2x.png'),
      mobileBg: require('@/assets/red-mobile-texture@2x.png'),
      isMobile: window.innerWidth < 720,
      menuOpen: false,
      menuOffset: null,
      isSticky: false,
    }
  },
  mounted () {
    var image = document.createElement('img')
    image.src = this.getBgUrl(document.getElementById('bg-img'))
    image.onload = function () {
      $('.nav__menu li').css('text-shadow', 'none')
      $('#bg-img').css('background-color', 'transparent')
      $('.nav__social-icon').css({ 'box-shadow': 'none', 'border-radius': '0px', 'background': 'none' })
      $('.nav__social-icon path').css('fill', '#FBF6E6')
    }
    window.addEventListener('resize', this.setIsMobile)
    window.addEventListener('scroll', this.handleScroll)
    let nav = document.querySelector('.nav__upper')
    this.menuOffset = nav.clientHeight
  },
  computed: {
    // ...mapState('tasks', ['allTasks'])
  },
  methods: {
    // ...mapActions('tasks', ['syncTask'])
    setIsMobile () {
      this.isMobile = window.innerWidth < 720
      let nav = document.querySelector('.nav__upper')
      this.menuOffset = nav.clientHeight
    },
    handleScroll () {
      let scroll = window.scrollY
      scroll >= this.menuOffset
        ? this.isSticky = true
        : this.isSticky = false
    },
    toggleMenuhamburger () {
      this.menuOpen = !this.menuOpen
      document.getElementsByClassName('z-20')[0].blur()
      setTimeout(function () {
        document.getElementsByClassName('z-20')[0].focus()
      }, 500)
    },
    getBgUrl (el) {
      var bg = ''
      if (el.currentStyle) {
        bg = el.currentStyle.backgroundImage
      } else if (document.defaultView && document.defaultView.getComputedStyle) {
        bg = document.defaultView.getComputedStyle(el, '').backgroundImage
      } else {
        bg = el.style.backgroundImage
      }
      return bg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1')
    },
  },
  components: {
    Facebook,
    Instagram,
    Youtube,
    Logo,
  },
}
</script>

<style scoped lang="scss">
.nav {
  /* .router-link-active {
    color: #fff;
  } */
  margin-bottom: px-rem(0);
  position: relative;
  z-index: 201;
  &__upper {
    background: $brandTan;
    height: px-rem(120);
    padding: px-rem(39) px-rem(32) px-rem(32);
    text-align: center;

    @media #{$mobile} {
      height: px-rem(50);
    }
  }

  &__logo {
    width: px-rem(230);
    cursor: pointer;
    transition: fill .3s ease;
    @media #{$mobile} {
      width: px-rem(180);
      width: 11.25rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      top: 50%;
    }
    &:hover {
      fill: $brandGold;
    }
  }

  &__lower {
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: wrap;
    height: px-rem(50);
    justify-content: flex-end;
    padding: px-rem(22px) px-rem(22) px-rem(56);
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;

    @media #{$mobile} {
      height: auto;
      padding: px-rem(6px) px-rem(16) px-rem(10);
    }

    &.sticky {
      position: fixed;
      top: 0;
    }
  }

  .hamburger {
    display: none;
    // top: 50%;
    // right: 10px;
    // transform: translateY(-50%);

    $hamburger-padding-x                       : 0px !default;
    $hamburger-padding-y                       : 10px !default;
    $hamburger-layer-width                     : 26px !default;
    $hamburger-layer-height                    : 1px !default;
    $hamburger-layer-spacing                   : 8px !default;
    $hamburger-layer-color                     : #ffffff;
    $hamburger-layer-border-radius             : 10px !default;
    $hamburger-hover-opacity                   : 0.7 !default;
    $hamburger-hover-transition-duration       : 0.15s !default;
    $hamburger-hover-transition-timing-function: linear !default;

    // To use CSS filters as the hover effect instead of opacity,
    // set $hamburger-hover-use-filter as true and
    // change the value of $hamburger-hover-filter accordingly.
    $hamburger-hover-use-filter: false !default;
    $hamburger-hover-filter    : opacity(50%) !default;
    padding: $hamburger-padding-y $hamburger-padding-x;
    cursor: pointer;

    transition-property: opacity, filter;
    transition-duration: $hamburger-hover-transition-duration;
    transition-timing-function: $hamburger-hover-transition-timing-function;

    // Normalize (<button>)
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    // margin: 0;
    overflow: visible;

    @media #{$mobile} {
      display: block;
    }

    &__box {
      width: $hamburger-layer-width;
      height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
      display: inline-block;
      position: relative;
    }

    &__inner {
      display: block;
      top: 50%;
      // margin-top: $hamburger-layer-height / -2;

      &,
      &::before,
      &::after {
        width: $hamburger-layer-width;
        height: $hamburger-layer-height;
        background-color: $hamburger-layer-color;
        border-radius: $hamburger-layer-border-radius;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
      }

      &::before,
      &::after {
        content: "";
        display: block;
      }

      &::before {
        top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
      }

      &::after {
        bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
      }
    }

    &--squeeze {
      .hamburger__inner {
        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

        &::before {
          transition: top 0.075s 0.12s ease, opacity 0.075s ease;
        }

        &::after {
          transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
      }

      &.hamburger--active {
        .hamburger__inner {
          transform: rotate(45deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

          &::before {
            top: 0;
            opacity: 0;
            transition: top 0.075s ease, opacity 0.075s 0.12s ease;
          }

          &::after {
            bottom: 0;
            transform: rotate(-90deg);
            transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
        }
      }
    }
  }

  &__menu {
    width: 100%;
    height: auto;
    opacity: 1;
    position: relative;
    transition: all .3s ease;

    @media #{$mobile} {
      height: 0;
      opacity: 0;
      overflow: hidden;
    }

    &.active {
      height: px-rem(430);
      opacity: 1;
    }
    li{
       text-shadow:0 0 3px black, 0 0 5px black;
    }
    &-items {
      display: inline-block;
    }

    &-item {
      display: inline-block;
      margin-right: 35px;

      @media #{$tablet} {
        margin: 0 px-rem(8);
        width: unset;
      }

      @media #{$mobile} {
        display: block;
        margin: auto;
        padding: px-rem(12) 0;
        width: 100%;
      }
    }

    &-link {
      color: $brandTan;
      font-size: px-rem(18);
      font-weight: 300;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.3s ease;
      @media #{$tablet} {
        font-size: px-rem(17);
      }

      @media #{$mobile} {
        font-size: px-rem(24);
      }
    }
  }

  &__social {
    position: absolute;
    right: -10px;
    top: 0;

    @media #{$tablet} {
      float: right;
      position: unset;
    }

    @media #{$mobile} {
      float: unset;
      margin-top: 2rem;
    }

    &-link {
      display: inline-block;
      margin: 0 9px;

      @media #{$mobile} {
        margin: 0 22px;
      }
    }

    &-icon {
      height: 22px;
      width: 22px;
      box-shadow: 0 0 10px #ffffff, 0 0 10px #ffffff;
      border-radius: 8px;
      background:#FBF6E6;
      path{
        fill:#5E5B4B;
      }

      @media #{$mobile} {
        height: 34px;
        width: 34px;
      }

      ellipse {
        fill: $brandTan;
      }
    }

    &-youtube {
      height: 19px;
      width: 26px;

      @media #{$mobile} {
        height: 28px;
        width: 40px;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-25px);
}

/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
}

/* Links inside the navbar */

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
  padding-right: 35px;
  padding-left: 35px;
}

/* Dropdown button */
.dropdown .dropbtn {
  cursor: pointer;
  color: $brandTan;
  font-size: px-rem(18);
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
    @media #{$tablet} {
      font-size: px-rem(17);
    }
    @media #{$mobile} {
      padding-bottom: 20px;
      padding-left: 19px;
      font-size: px-rem(24);
    }
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: none;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;

  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  transform: translate(-30%, 0);
  padding-top: 1%;
}

/* Links inside the dropdown */
/deep/ .dropdown-content a {
  background-color: #FBF6E6;
  float: left;
  color: #9E7E4A;
  padding: 5px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  border-color: #9E7E4A;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f5e8bf;
  transition: .25s;
  transition:ease;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: grid;
}
.triangle {
    border: solid #FBF6E6;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
}

.over {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

.positioner {
  padding-left: 10px;
  display: inline-block;
  transform: translate(0, -17%);
}
#bg-img{
  @media #{$mobile}{
    background-color:rgba(0, 0, 0, 0.5);
  }
}
</style>
