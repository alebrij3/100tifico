const Character = () => {
    const view = `
        <div class="character">
            <section>
                <img src="image" alt="name">
                <h2>Name</h2>
            </section>
            <section>
                <p>Episodio: </p>
                <p>Estatus: </p>
                <p>Especie: </p>
                <p>Género: </p>
                <p>Origen: </p>
                <p>Última ubicación: </p>
            </section>
        </div>
    `;
    return view;
}

export default Character;