import CONST_REQUEST from '../../constants/request'
import api from '../../api/home.js'

const types = {
  HEAD_LINE_LIST_REQUEST: 'HEAD_LINE_LIST_REQUEST',
  HEAD_LINE_LIST_SUCCESS: 'HEAD_LINE_LIST_SUCCESS',
  HEAD_LINE_LIST_FAILURE: 'HEAD_LINE_LIST_FAILURE',

  GET_HEAD_LINE_REQUEST: 'GET_HEAD_LINE_REQUEST',
  GET_HEAD_LINE_SUCCESS: 'GET_HEAD_LINE_SUCCESS',
  GET_HEAD_LINE_FAILURE: 'GET_HEAD_LINE_FAILURE'
}

const state = {
  headLineList: null,
  headLineListStatus: {
    code: null,
    msg: null
  },

  headDetails: null,
  headDetailStatus: {
    code: null,
    msg: null
  }
}

const getters = {
  headLineList (state) {
    return state.headLineList
  },
  headLineListStatus (state) {
    return state.headLineListStatus
  },

  headDetails (state) {
    return state.headDetails
  },
  headDetailStatus (state) {
    return state.headDetailStatus
  }
}

const actions = {
  getquery ({ commit }, payload) {
    commit(types.HEAD_LINE_LIST_REQUEST)
    return api.getquery(payload).then((result) => {
      if (result.code === CONST_REQUEST.CODE_SUCCESS) {
        commit(types.HEAD_LINE_LIST_SUCCESS, result.data)
      } else {
        commit(types.HEAD_LINE_LIST_FAILURE, result.msg)
      }
      return result.data
    }).catch((e) => commit(types.HEAD_LINE_LIST_FAILURE, e))
  },

  getHeadDetail ({ commit }, payload) {
    commit(types.GET_HEAD_LINE_REQUEST)
    return api.getHeadDetail(payload).then((result) => {
      if (result.code === CONST_REQUEST.CODE_SUCCESS) {
        commit(types.GET_HEAD_LINE_SUCCESS, result.data)
      } else {
        commit(types.GET_HEAD_LINE_FAILURE, result.msg)
      }
      return result
    }).catch((e) => commit(types.GET_HEAD_LINE_FAILURE, e))
  }
}

const mutations = {
  [types.HEAD_LINE_LIST_REQUEST] (state, payload) {
    state.headLineListStatus = {
      code: CONST_REQUEST.LOADING,
      msg: null
    }
  },
  [types.HEAD_LINE_LIST_SUCCESS] (state, payload) {
    state.headLineListStatus = {
      code: CONST_REQUEST.SUCCESS,
      msg: null
    }
    console.log(state.headLineList, payload, 345)
    state.headLineList = payload
  },
  [types.HEAD_LINE_LIST_FAILURE] (state, e) {
    state.headLineListStatus = {
      code: CONST_REQUEST.FAILURE,
      msg: e.msg ? e.msg : typeof e === 'string' ? e : '服务异常，请稍后再试~'
    }
  },

  [types.GET_HEAD_LINE_REQUEST] (state, payload) {
    state.headDetailStatus = {
      code: CONST_REQUEST.LOADING,
      msg: null
    }
  },
  [types.GET_HEAD_LINE_SUCCESS] (state, payload) {
    state.headDetailStatus = {
      code: CONST_REQUEST.SUCCESS
    }
    state.headDetails = payload
  },
  [types.GET_HEAD_LINE_FAILURE] (state, e) {
    state.headDetailStatus = {
      code: CONST_REQUEST.FAILURE,
      msg: e.message ? e.message : typeof e === 'string' ? e : '服务异常，请稍后再试~'
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
