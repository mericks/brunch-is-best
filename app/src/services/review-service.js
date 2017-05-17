import http from './http';

export default {
    // getAll() {
    //     return http.fetch({
    //         path: '/reviews',
    //         method: 'GET',
    //         token: http.token,
    //     });
    // },

    addNew(formPayload) {
        return http.fetch({
            path: '/reviews',
            method: 'POST',
            token: http.token,
            body: formPayload,
        });
    }

};
