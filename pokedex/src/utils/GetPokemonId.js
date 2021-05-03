function getPokemonId(url){
    const urlSplit = url.split("/");
    return urlSplit[6];
}

export default getPokemonId;