import http, { token } from './http';

export default {
    getAll() {
        return http.fetch({
            path: '/neighborhoods',
            method: 'GET',
            token: token,
        });
    },

    // addNew() {
    //     console.log('inside addNew fn in nabe-svc');
    //     return http.fetch({
    //         path: '/neighborhoods',
    //         method: 'POST',
    //         token: token
    //     })
    // }

};
