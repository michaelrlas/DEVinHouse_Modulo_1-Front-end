// Crie uma classe chamada Filme com os atributos nome, anoDeLancamento e diretor.
// Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus
// atributos por meio do ponto (.).

class Filme {
  nome;
  anoDeLancamento;
  diretor;

  constructor(nome, anoDeLancamento, diretor) {
    this.nome = nome;
    this.anoDeLancamento = anoDeLancamento;
    this.diretor = diretor;
  }
}

let cinema = new Filme();

cinema.nome = 'Pulp Fiction';
cinema.anoDeLancamento = 1995;
cinema.diretor = 'Quentin Tarantino';

console.log(cinema);
