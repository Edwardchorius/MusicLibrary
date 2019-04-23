
const apiUrl = 'http://localhost:60231/api/values'; 


export const getPeople = () => {
    return fetch(apiUrl)
        .then(response => response.json())
        .catch(error => console.error(error))
};

