const BASE_URL = 'https://powerful-shelf-95000.herokuapp.com';

export function getToken(data) {
    return fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}
