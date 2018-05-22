import http from './http';

export default {
    getAll() {
        return http.fetch({
            path: '/restaurants',
            method: 'GET',
            token: http.token,
        });
    },

    getAbbrv() {
        return http.fetch({
            path: '/restaurants/abbrv',
            method: 'GET',
            token: http.token,
        });
    },

    getRestaurant(restaurantID) {
        return http.fetch({
            path: `/restaurants/${restaurantID}`,
            method: 'GET',
            token: http.token,
        });
    },

    addNew(formPayload) {
        return http.fetch({
            path: '/restaurants',
            method: 'POST',
            token: http.token,
            body: formPayload,
        });
    },

    delete(restaurantID) {
        return http.fetch({
            path:`/restaurants/${restaurantID}`,
            method: 'DELETE',
            token: http.token,
        });
    }

};
