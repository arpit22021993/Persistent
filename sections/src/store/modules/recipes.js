import foodRecipes from './../data/recipes.json'
import drinkRecipes from './../data/drinks.json'

const recipes = {
  strict: true,
  namespaced: true,
  state: {
    foodRecipeList: foodRecipes,
    drinkRecipeList: drinkRecipes,
  },

  mutations: {},
  getters: {},
  actions: {},
}

export default recipes
