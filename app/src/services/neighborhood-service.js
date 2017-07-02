import http from './http';

export default {
    getAll() {
        return http.fetch({
            path: '/neighborhoods',
            method: 'GET',
            token: http.token,
        });
    },

    addNew(formPayload) {
        return http.fetch({
            path: '/neighborhoods',
            method: 'POST',
            token: http.token,
            body: formPayload,
        });
    }

};
