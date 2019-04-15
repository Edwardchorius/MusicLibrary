

export const getTableInformation = () => {
    return fetch("https://swapi.co/api/starships")
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => console.error(error))
};