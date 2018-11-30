import request from './api'

export default {
    headDetail(payload) {
        return request.post('/api/app/auth/headline/detail', payload)
    },
}