import CONST_REQUEST from '../../constants/request';
import api from '../../api/home.js';

const types = {
    GET_HEAD_LINE_REQUEST: 'GET_HEAD_LINE_REQUEST',
    GET_HEAD_LINE_SUCCESS: 'GET_HEAD_LINE_SUCCESS',
    GET_HEAD_LINE_FAILURE: 'GET_HEAD_LINE_FAILURE',
}

const state = {
    // 资讯详情 （头条、组图、多频道）
    headDetails: null,
    headDetailStatus: {
        code: null,
        msg: null,
    }
}

const getters = {
    // 资讯详情 （头条、组图、多频道）
    headDetails(state) {
        return state.headDetails;
    },
    headDetailStatus(state) {
        return state.headDetailStatus;
    },
}

const actions = {
    // 资讯详情 （头条、组图、多频道）
    headDetail({ commit }, payload) {
        commit(types.GET_HEAD_LINE_REQUEST)
        return api.headDetail(payload)
            .then((result) => {
                if (result.code == CONST_REQUEST.CODE_SUCCESS) {
                    commit(types.GET_HEAD_LINE_SUCCESS, result.data);
                } else {
                    commit(types.GET_HEAD_LINE_FAILURE, result.msg)
                }
                return result
            }).catch((e) => commit(types.GET_HEAD_LINE_FAILURE, e))
    }
}

const mutations = {
    // 资讯详情 （头条、组图、多频道）
    [types.GET_HEAD_LINE_REQUEST](state, payload) {
        state.headDetailStatus = {
            code: CONST_REQUEST.LOADING,
            msg: null,
        }
    },
    [types.GET_HEAD_LINE_SUCCESS](state, payload) {
        state.headDetailStatus = {
            code: CONST_REQUEST.SUCCESS,
            msg: null,
        }
        state.headDetails = payload
    },
    [types.GET_HEAD_LINE_FAILURE](state, e) {
        state.headDetailStatus = {
            code: CONST_REQUEST.FAILURE,
            msg: e.message ? e.message : typeof e === 'string' ? e : '服务异常，请稍后再试~'
        }
    },
}