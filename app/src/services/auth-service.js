import http from './http';

export default {
    signup(formPayload) {
        return http.fetch({
            path: '/auth/signup',
            method: 'POST',
            body: formPayload,
        })
        .then(token => {
            http.setToken(({ token }));
            localStorage.setItem('brnchtkn', JSON.stringify(token));
        })
        .catch(err => console.log(err));
    },

    signin(formPayload) {
        console.log('inside auth-service signin function');
        return http.fetch({
            path: '/auth/signin',
            method: 'POST',
            body: formPayload,
        })
        .then(token => {
            http.setToken(({ token }));
            localStorage.setItem('brnchtkn', JSON.stringify(token));
        })
        .catch(err => console.log(err));
    },


    // TODO: logout function
    // logout() {

    // }

};
