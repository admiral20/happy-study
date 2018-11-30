import 'whatwg-fetch'

export default {
     request : {
        get(url) {
            return fetch(url, {
                credentials: 'include',
                method: 'GET',
                headers: {
                    'token': '',
                    'Cache-Control': 'no-cache',
                    'pragma': 'no-cache',
                },
            })
                .then(transferToJSON)
                .catch((e) => {
                    throw e
                })
        },
        post(url, data) {
            return fetch(url, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': '',
                },
                body: JSON.stringify(data),
            })
                .then(transferToJSON)
                .catch((e) => {
                    throw e
                })
        },
    }
}