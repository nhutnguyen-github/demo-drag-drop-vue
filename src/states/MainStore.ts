// file store.js
import { createStore } from 'vuex'
import EditHomeState from './EditHomeState'

const main_store = createStore({
  modules: {
    EditHomeState
  }
})

export default main_store
