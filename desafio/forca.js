const retornaIndices = require('../auxilio/retornaIndices');

class Forca {
  constructor(string_palavra) {
    this.string_palavra = string_palavra.toLowerCase();
    this.estado = "aguardando chute";
    this.dados = {
      letrasChutadas: [], // letras chutadas
      vidas: 6, // vidas restantes
      palavra: Array(string_palavra.length).fill("_") // letras que já foram acertadas ou "_" para as não identificadas
    }
  }

  chutar(letra) {
    if (letra.length>1) {
      console.log("Mais de uma letra inserida, ignorando jogada.");
    } else if (this.dados.letrasChutadas.includes(letra)) {
      console.log("Letra já chutada anteriormente, ignorando jogada");
    } else {
      this.dados.letrasChutadas.push(letra); // adiciona no array letrasChutadas a letra
      var possiveis_indices = retornaIndices(this.string_palavra, letra);
      if (possiveis_indices.length>0) {
        possiveis_indices.forEach(indice => { this.dados.palavra[indice] = letra; })
      } else { //letra chutada não contida na palavra
        this.dados.vidas -= 1;
      }
    }
  }

  buscarEstado() {
    if (this.dados.vidas==0) this.estado = "perdeu";
    if (this.dados.vidas>0 && this.dados.palavra.join("").toLowerCase()==this.string_palavra) this.estado = "ganhou";
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return this.dados;
  }
}

module.exports = Forca;
