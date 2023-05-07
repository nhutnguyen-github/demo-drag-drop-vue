// file modules/moduleA.js
const state = {
  status_drag: -1
}

const mutations = {
  addStep(state: any, data_row: any) {
    state.data_row = data_row

    let row_dt = JSON.stringify(state.data_row)
    state.list_data_row.push(JSON.parse(row_dt))
    state.index_step += 1
  },
  autoAddStep(state: any) {
    let row_dt = JSON.stringify(state.data_row)
    state.list_data_row.push(JSON.parse(row_dt))

    if (state.list_data_row.length > 10) {
      state.list_data_row.shift()
    } else {
      state.index_step += 1
    }
  },
  removeStep(state: any) {
    if (state.index_step < state.list_data_row.length - 1) {
      state.list_data_row.splice(state.index_step + 1)
    }
  },
  decreaseIndex(state: any) {
    if (state.index_step > 0) {
      state.index_step--
    }
  },
  increaseIndex(state: any) {
    if (state.index_step < 9 && state.index_step < state.list_data_row.length - 1) {
      state.index_step += 1
    }
  },
  changeStep(state: any) {
    let row_dt = JSON.stringify(state.list_data_row[state.index_step])
    state.data_row = JSON.parse(row_dt)
  }
}

const actions = {
  addData({ commit }: any, data_row: any) {
    commit("addStep", data_row)
  },
  autoAddData({ commit }: any) {
    commit("removeStep")
    commit("autoAddStep")
  },
  decreaseIdx({ commit }: any) {
    commit('decreaseIndex')
  },
  increaseIdx({ commit }: any) {
    commit('increaseIndex')
  },
  changeStep({ commit }: any) {
    commit('changeStep')
  }
}

const getters = {
  getStep(state: any) {
    return state.data_row
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
