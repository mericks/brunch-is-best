export default function fetcher({ path, method, token, body }) {
    const apiData = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method
    };

    if(token) {
        apiData.headers['Authorization'] = token;
    }

    if(body) {
        apiData.body = JSON.stringify(body);
    }

    return fetch( `/api${path}`, apiData)
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res;
        })
        .then(res => {
            return res.json();
        });
}
