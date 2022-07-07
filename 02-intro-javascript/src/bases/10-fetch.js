const apiKey = 'b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6';

// https://api.giphy.com/v1/gifs/random?api_key=b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json())
.then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
})
.catch(console.warn);