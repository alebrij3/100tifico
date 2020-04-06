import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    console.log(id);
    const character = await getData(id);
    console.log(character);
    const view = `
        <div class="character">
            <section>
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </section>
            <section>
                <p>Episodio: ${character.episode.length}</p>
                <p>Estatus: ${character.status}</p>
                <p>Especie: ${character.species}</p>
                <p>Género: ${character.gender}</p>
                <p>Origen: ${character.origin.name}</p>
                <p>Última ubicación: ${character.location.name}</p>
            </section>
        </div>
    `;
    return view;
}

export default Character;