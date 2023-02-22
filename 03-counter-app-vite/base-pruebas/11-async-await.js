const fetch = require('node-fetch');

export const getImagen = async() => {
    const apiKey = 'b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6';
    const wrongApiKey = 'b8cdOh6NtzUd44Zññññññ-----dadads';
    try {
        // const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${wrongApiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url

    } catch (error) {
        // manejo del error
        return "No se encontró la imagen";
    }
};
