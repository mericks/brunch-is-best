import http from './http';

export default {
    getAll() {
        return http.fetch({
            path: '/restaurants',
            method: 'GET',
            token: http.token,
        });
    },

    addNew(formPayload) {
        console.log('inside addNew fn in resto-svc');
        return http.fetch({
            path: '/restaurants',
            method: 'POST',
            token: http.token,
            body: formPayload,
        });
    }

};
