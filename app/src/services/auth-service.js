import http from './http';

function setToken(token) {
    http.setToken(token);
    localStorage.setItem('brnchtkn', JSON.stringify(token));
}

export default {
    verify(token) {
        return http.fetch({
            path: '/auth/verify',
            method: 'GET',
            token,
        })
        .catch(err => console.log(err));
    },

    signup(formPayload) {
        return http.fetch({
            path: '/auth/signup',
            method: 'POST',
            body: formPayload,
        })
        .then(({ token }) => setToken(token))
        .catch(err => console.log(err));
    },

    signin(formPayload) {
        return http.fetch({
            path: '/auth/signin',
            method: 'POST',
            body: formPayload,
        })
        .then(({ token }) => setToken(token))
        .catch(err => console.log(err));
    }

    // TODO: logout function
    // logout() {

    // }

};
