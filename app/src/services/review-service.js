import http from './http';

export default {
    getAllForRestaurant(restaurantID) {
        return http.fetch({
            path: `/reviews/restaurant/${restaurantID}`,
            method: 'GET',
            token: http.token,
        });
    },

    addNew(formPayload) {
        return http.fetch({
            path: '/reviews',
            method: 'POST',
            token: http.token,
            body: formPayload,
        });
    }

};
