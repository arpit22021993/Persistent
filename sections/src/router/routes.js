module.exports = [
  {
    path: '/',
    name: 'home',
    type: 'Home',
  },
  {
    path: '/baseball-rewards-form',
    name: 'baseball-rewards-form',
    type: 'BaseballRewardsForm',
  },
  {
    path: '/baseball',
    name: 'baseball',
    type: 'Baseball',
  },
  {
    path: '/awards',
    name: 'awards',
    type: 'Awards',
  },
  {
    path: '/fromtabletotable',
    name: 'fromtabletotable',
    type: 'FromTable',
  },
  {
    path: '/our-wines',
    name: 'our-wines',
    type: 'OurWines',
  },
  // {
  //   path: '/eat-and-drink',
  //   name: 'eat-and-drink',
  //   type: 'EatAndDrink',
  // },
  {
    path: '/barrel-aged-wines',
    name: 'barrel-aged-wines',
    type: 'BarrelAgedWines',
  },
  {
    path: '/grab-and-go',
    name: 'grab-and-go',
    type: 'GrabAndGo',
  },
  /* {
    path: '/wine-seltzers',
    name: 'wine-seltzers',
    type: 'WineSeltzers',
  }, */
  {
    path: '/our-story',
    name: 'our-story',
    type: 'OurStory',
  },
  {
    path: '/wine-101',
    name: 'wine-101',
    type: 'Wine101',
  },
  {
    path: '/buying-wine',
    name: 'buying-wine',
    type: 'BuyingWine',
  },
  {
    path: '/where-to-buy',
    name: 'where-to-buy',
    type: 'WhereToBuy',
  },
  {
    path: '/pairing-app',
    name: 'pairing-app',
    type: 'PairingApp',
  },
  {
    path: '/contact',
    name: 'contact',
    type: 'Contact',
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    type: 'PrivacyPolicy',
  },
  // {
  //   path: '/recipes/:type/:id',
  //   name: 'recipe-detail',
  //   type: 'RecipeDetail',
  // },
  {
    path: '/winemaking',
    name: 'winemaking',
    type: 'Winemaking',
  },
  {
    path: '/terms',
    name: 'Terms',
    type: 'Terms',
  },
  {
    path: '/Inside-Woodbridge/winemaking.php',
    redirect: '/winemaking',
  },
  {
    path: '/wines*',
    redirect: '/our-wines',
  },
  {
    path: '/contact*',
    redirect: '/contact',
  },
  {
    path: '/find-wine*',
    redirect: '/where-to-buy',
  },
  {
    path: '/inside-woodbridge*',
    redirect: '/our-story',
  },
  // {
  //   path: '/food-wine*',
  //   redirect: '/eat-and-drink',
  // },
  {
    path: '/*.php',
    redirect: '/',
  },
]
