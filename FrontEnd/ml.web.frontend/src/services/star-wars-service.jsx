

export const getTableInformation = (page) => {
    return fetch(`https://swapi.co/api/starships?page=${page}`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => console.error(error))
};