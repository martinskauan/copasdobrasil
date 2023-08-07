const readline = require('readline-sync');

// Array contendo os clubes e seus respectivos números de títulos no Campeonato Brasileiro
const clubes = [
  { nome: 'Palmeiras', titulos: 10 },
  { nome: 'Sao Paulo', titulos: 6 },
  { nome: 'Corinthians', titulos: 7 },
  { nome: 'Santos', titulos: 8 }
];

let acertos = 0;
let tentativas = 0;

function fazerPergunta(pergunta, resposta) {
  const palpite = parseInt(readline.question(pergunta));

  if (palpite === resposta) {
    console.log('Resposta correta!\n');
    acertos++;
  } else {
    console.log('Resposta incorreta. Tente novamente!\n');
  }
}

console.log('Bem-vindo ao Torneio de Futebol - Campeonato Brasileiro\n');
console.log('Responda quantos títulos do Campeonato Brasileiro cada clube tem.\n');

while (acertos < clubes.length) {
  const clube = clubes[acertos];
  fazerPergunta(`Quantos títulos o ${clube.nome} tem? `, clube.titulos);
  tentativas++;
}

console.log(`Parabéns! Você acertou todas as perguntas em ${tentativas} tentativas.`);
