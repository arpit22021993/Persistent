import 'es6-promise/auto'
import 'es6-object-assign/auto'
import Vue from 'vue'
import VueGtm from 'vue-gtm'
import debug from 'debug'
import VueHead from 'vue-head'

import { Swiper as SwiperClass, Navigation, Pagination } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'

import App from './../App.vue'
import Config from './../config'

/**
 * @function initEntry
 *
 * @param {Router} router             Accepts an instance of Vue Router
 * @param {Store}  store              Accepts an instance of Vuex Store
 * @param {String} entryName            The name of the entry point, such as 'main'
 * @param {Object} [options={}]       Any optional properties to add to the Vue instance
 * @param {Array}  options.components Components to add that are specific to this entry point
 * @param {Array}  options.plugins    Plugins to add that are specific to this entry point
 * @param {Array}  options.prototypes Prototypes to add that are specific to this entry point
 */
export default function entry (router, store, entryName, options = {}) {
  Vue.config.productionTip = false
  Vue.use(VueHead)
  if (options.components) {
    options.components.forEach(component => {
      Vue.component(component.name, component.var)
    })
  }

  if (options.plugins) {
    options.plugins.forEach(plugin => {
      Vue.use(plugin)
    })
  }

  if (options.prototypes) {
    options.prototypes.forEach(prototype => {
      Vue.prototype[prototype.name] = prototype.var
    })
  } console.log(Config.get('gtmEnabled'), Config.get('gtmDebug'))

  Vue.use(VueGtm, {
    id: 'GTM-PKDC3JJ',
    enabled: false,
    debug: Config.get('gtmDebug'),
    loadScript: true,
    vueRouter: router,
  })
  SwiperClass.use([Navigation, Pagination])
  Vue.use(getAwesomeSwiper(SwiperClass))
  store.dispatch('init', entryName, { root: true })

  new Vue({
    router,
    store,
    data: {
      site: entryName,
    },
    render: h => h(App),
  }).$mount('#app')

  if (Config.get('isLocal')) {
    debug.enable('app*,store*,router*,view*,component*,api*,helper*')
    debug(`app:${entryName}`)(`Initialized ${entryName}`)

    // make the global store available on the window for local development
    window.STORE = store
  }
}
