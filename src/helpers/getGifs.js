//se creo para poder mandar las imagenes de la categoria que le pidamos.

export const getGifs = async(category)=>{ // devuelve una promesa que resuelve la coleccion de las imagenes
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XpDqrLub9vsG0RS3XrbLeluHoLSNdNZ8&q=${encodeURI(category)}&limit=10`
    const respuesta = await fetch(url);
    const {data}  = await respuesta.json();
    const gif = data.map(img=> {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
   return gif;

}