import initStore from './index'
import ui from './modules/ui'
import wines from './modules/wines'
import barrelAged from './modules/barrelAged'
import grabAndGo from './modules/grabAndGo'
/* import wineSeltzer from './modules/wineSeltzer' */
import recipes from './modules/recipes'
// import projects from './modules/projects'
export default initStore({
  ui,
  wines,
  barrelAged,
  grabAndGo,
  /*  wineSeltzer, */
  recipes,
})
