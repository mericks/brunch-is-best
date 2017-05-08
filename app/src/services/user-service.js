import http, { token } from './http';

export default {
    getUser() {
        console.log('inside getUser fn in user-svc');
        return http.fetch({
            path: '/user',
            method: 'GET',
            token: token,
        })
        .then(user => console.log(user))
        .catch(err => console.log(err));
    },

};
