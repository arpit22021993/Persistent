<template lang="pug">
.home
  navigation
  hero
  cards(:cards="cards")
  globalFooter
</template>

<script>
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import GlobalFooter from '../components/GlobalFooter'

export default {
  name: 'Home',
  head: {
    title: {
      inner: 'Woodbridge by Robert Mondavi',
      complement: 'Red, Blush & White Wines',
    },
    meta: [
      {
        name: 'description',
        content:
          'Woodbridge by Robert Mondavi offers classic wines that reflect the unique characteristics of our over 40 years of rich winemaking heritage. Learn more!',
      },
    ],
  },
  data () {
    return {
      cards: [
        {
          image: require('@/assets/homepage-fromoneforall.jpg'),
          headline: 'ENJOY IT<br>HOWEVER,<br>WHEREVER AND<br>WHENEVER',
          text: 'Celebrate Robert Mondavi’s industry-changing point of view and Woodbridge’s storied heritage.',
          cta: 'WATCH VIDEO',
          ctaLink: 'https://youtu.be/AH_JVsZkyxE',
          ctaLabel: 'Watch Video of Woodbridge From One For All',
        },
        {
          image: require('@/assets/hp-ourwines.jpg'),
          headline: 'OUR WINES',
          text: 'Woodbridge by Robert Mondavi wines are fruit-forward, smooth and made for sharing.',
          cta: 'LEARN MORE',
          routerLink: 'our-wines',
          ctaLabel: 'Learn More about Our Wines',
        },
        // {
        //   image: require('@/assets/card3.jpg'),
        //   headline: 'EAT & DRINK',
        //   text: 'Life is a little bit richer when you find the perfect recipe and Woodbridge wine to share with family and friends.',
        //   cta: 'VIEW RECIPES',
        //   routerLink: 'eat-and-drink',
        //   ctaLabel: 'View Recipes paired with your favorite Woodbridge Wines'
        // },
      ],
    }
  },
  components: {
    Navigation,
    Hero,
    Cards,
    GlobalFooter,
  },
}
</script>

<style lang="scss" scoped>
// .home {}
</style>
