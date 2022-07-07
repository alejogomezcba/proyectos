const getImagen = async () => {
    try {
        const apiKey = 'b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    }
    catch (error) {
        console.log(error);
    }
}

console.log(getImagen());