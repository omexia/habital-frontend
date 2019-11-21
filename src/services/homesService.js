const BASE_URL = 'http://localhost:3006';
const token = localStorage.getItem('token');

export function getHomes() {
    return fetch(`${BASE_URL}/homes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        }
    }).then(response => response.json())
    .then(data => {
        let homes = data.map(todo => {
            return [
                todo.home_name,
                todo.home_owner, 
                todo.home_address,
                todo.home_mts,
                "$ " + todo.home_value + " MXN",
                todo.home_predial
            ]
        });
        return homes;
    });
}

export function saveHomes(home) {
    return fetch(`${BASE_URL}/homes/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        },
        body: JSON.stringify(home)
    }).then(response => {return response.json()})
    .catch(err => console.log(err));
}
