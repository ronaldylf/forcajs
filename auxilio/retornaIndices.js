function retornaIndices(palavra, letra) {
    // retorna os índices em que a letra está contida na palavra secreta
    palavra = palavra.toLowerCase();
    letra = letra.toLowerCase();
    indices = [];
    indices = [...palavra].map((letra_atual, index) => {
        if (letra_atual==letra) return index;
    }).filter(item => item!==undefined)
    return indices;
}

module.exports = retornaIndices;