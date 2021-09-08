import initRouter from './index'
import components from './views'
const routes = require('./routes')

/**
 * @function defineRouter
 *
 * @param {Store} store Instance of Vuex Store; used to sync router to correct store
 */
export default function defineRouter (store) {
  let Routes = routes.map(route => {
    return {
      ...route,
      component: components[route.type],
    }
  })

  // const routes = [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home,
  //   },
  //   {
  //     path: '/our-wines',
  //     name: 'our-wines',
  //     component: OurWines,
  //     meta: {
  //       title: 'Our Wines',
  //       metaTags: [
  //         {
  //           name: 'description',
  //           content: 'Woodbridge by Robert Mondavi offers classic wines that reflect the unique characteristics of each varietal and over 40 years of rich winemaking heritage. Our wines are approachable and food-friendly, made for sharing and everyday drinking.',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     path: '/eat-and-drink',
  //     name: 'eat-and-drink',
  //     component: EatAndDrink,
  //   },
  //   {
  //     path: '/food-recipes',
  //     name: 'food-recipes',
  //     component: FoodRecipes,
  //   },
  //   {
  //     path: '/our-story',
  //     name: 'our-story',
  //     component: OurStory,
  //   },
  //   {
  //     path: '/wine-101',
  //     name: 'wine-101',
  //     component: Wine101,
  //   },
  //   {
  //     path: '/buying-wine',
  //     name: 'buying-wine',
  //     component: BuyingWine,
  //   },
  //   {
  //     path: '/where-to-buy',
  //     name: 'where-to-buy',
  //     component: WhereToBuy,
  //   },
  //   {
  //     path: '/pairing-app',
  //     name: 'pairing-app',
  //     component: PairingApp,
  //   },
  //   {
  //     path: '/contact',
  //     name: 'contact',
  //     component: Contact,
  //   },
  //   {
  //     path: '/privacy-policy',
  //     name: 'privacy-policy',
  //     component: PrivacyPolicy,
  //   },
  //   {
  //     path: '/test-component-page',
  //     name: 'test-component-page',
  //     component: TestComponentPage,
  //   },
  //   {
  //     path: '/recipes/:type/:id',
  //     name: 'recipe-detail',
  //     component: RecipeDetail,
  //   },
  //   {
  //     path: '/winemaking',
  //     name: 'winemaking',
  //     component: Winemaking,
  //   },
  // ]

  /*   const beforeEach = (to, from, next) => {
    if (store.state.ui.buyModal) {
      console.log('before route!')
      console.log(store)
      store.dispatch('ui/updateBuyModal',
        false
      )
    }
    next()
  } */

  // this will update the active wine and show the dropdown if router recieves a route to: name: 'our-wines' with param: bottleName
  const beforeEach = (to, from, next) => {
    const { wineList } = store.state.wines
    if ((from.name === 'recipe-detail' || 'pairing-app') && to.name === 'our-wines') {
      // better way to do this
      for (let i = 0; i < wineList.length; i++) {
        if (wineList[i].bottleName === to.params.bottleName) {
          store.dispatch('wines/updateActiveWine', i)
          if (!store.state.wines.showDropDown) {
            store.dispatch('wines/updateDropDown', true)
          }
        }
      }
    }
    next()
  }
  return initRouter(Routes, store, { beforeEach })
}
