import http from './http';


export default {
    getUser() {
        return http.fetch({
            path: '/user',
            method: 'GET',
            token: http.token,
        });
    },

};
