const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log('Fetch error: ', e)
    }
}

export default getData;