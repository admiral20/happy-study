import request from './api'

export default {
    getquery (payload) {
        return request.post('/api/app/anon/m/headline/query', payload)
    },
    getHeadDetail (payload) {
        return request.post('/api/app/auth/headline/detail', payload)
    }
}
