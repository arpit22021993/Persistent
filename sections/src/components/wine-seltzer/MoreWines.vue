<template lang="pug">
  .more-wines
    .page-content-wrap
      h2.seperator More Wines
      //p For forty years we’ve been making classic wines that reflect the diversity of California’s winegrowing regions. Woodbridge by Robert Mondavi wines are fruit-forward and balanced, making them ideal for everyday enjoyment.
      .flex-container(ref="container")
      //  span.col(v-for="(wine, index) in wines" :style="{paddingBottom: getWinePadding(index)}")
      //    wine-item(:index="index" :name="wine.name" :image="getImgUrl('bottles', wine.bottleName, 'small')" ref="wineItem")
      //wine-item-drop-down(ref="wineDropDown" :activeWine="activeWine" :style="{top: `${detailsOffset}px`}" @onResize="handleDetailResize" :showDropDown="this.showDropDown").abs
      cards(:cards="cards")
</template>

<script>
import debug from 'debug'
import Cards from '../Cards'
import Card from '../Card'
export default {
  name: 'MoreWines',
  props: {
  },
  data () {
    return {
      cards: [
        {
          image: require('@/assets/classicWines_paperBackground.png'),
          headline: 'CLASSIC WINES',
          text: 'Woodbridge by Robert Mondavi wines are fruit-forward, smooth, and made for sharing.',
          cta: 'EXPLORE SELECTION',
          routerLink: 'our-wines',
        },
        {
          image: require('@/assets/barrelAgedWines_paperBackground.png'),
          headline: 'SPIRITS BARREL-AGED WINES',
          text: 'Aging wine in bourbon or rum barrels adds rich character and complexity.',
          cta: 'EXPLORE SELECTION',
          routerLink: 'barrel-aged-wines',
        },

      ],
    }
  },
  components: {
    Card,
    Cards,
  },
}
</script>

<style scoped lang="scss">
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

  h2 {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 2.25rem;
    font-family: adobe-caslon-pro, sans-serif;
  }
  .seperator {
      color: #3C3931;
      position: relative;
    &:before, &:after{
    content: '';
    background-color: #3C3931;
    position: absolute;
    display: block;
    top: 35%;
    padding-right: 35px 0;
    height: 2px;
    left:20%;
    right: calc(60% + 60px);
  }
    &:after{
    left:calc(60% + 60px);
    right: 20%;
    }
}

/deep/ .card {
  box-shadow: none;
  display: flex;
  flex-direction: column;
  $gutter: 16px;
  margin-bottom: $gutter;
  max-width: 350px;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.75s ease;
  width: calc(33% - (#{$gutter} / 2));

  @media #{$mobile} {
    width: 100%;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &__image {
    align-items: flex-end;
    background-repeat: no-repeat;
    background-size:auto;
    display: flex;
    height: 25rem;
    max-height: calc(106vw / 3);
    padding: px-rem(24);
    padding-bottom: px-rem(64);
    position: relative;
    z-index: 20;

    @media #{$mobile} {
      max-height: 106vw;
    }

    &-overlay {
      background: none;
      position: absolute;
      right: 0;
      bottom: 1rem;
      left: 0;
      height: 10rem;
    }
  }

  &__headline {
    color: #FBF6E6;
    font-size: px-rem(35);
    font-weight: bold;
    position: relative;
    z-index: 10;
    width: 70%;
  }

  &__content {
    align-items: flex-start;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    margin-top: -5rem;
    padding: px-rem(40) px-rem(24) px-rem(24);
    position: relative;
    

    &-text {
      color: $brandTan;
      max-width: 100%;
      z-index: 21;
    }

    &-cta {
      color: $brandTan;

      &:after {
        width: 30%;
      }

      &:hover:after {
        width: 100%;
      }
    }
  }
}
/deep/ .cards {
  display: flex;
  flex-flow: wrap;
  justify-content:space-evenly;
  margin: auto;
  margin-top: px-rem(-48);
  max-width: px-rem(1100);
  position: relative;
  padding: 0 px-rem(12);

  @media #{$mobile} {
    justify-content: center;
  }
&.our-wines {
  .cards {
    justify-content: space-evenly;
  }
}
}
</style>
