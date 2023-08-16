const pessoas = [];

function cadastrarPessoa() {
  const nome = prompt('Informe o nome da pessoa: ');
  const idade = parseInt(prompt('Informe a idade da pessoa: '));

  const trabalhandoInput = prompt('A pessoa está trabalhando? (Sim/Não): ');
  const trabalhando = trabalhandoInput.toLowerCase() === 'sim';

  if (trabalhando) {
    const salario = parseFloat(prompt('Informe o salário da pessoa: '));
    pessoas.push({ nome, idade, trabalhando: true, salario });
  } else {
    pessoas.push({ nome, idade, trabalhando: false });
  }

  cadastrarOutraPessoa();
}

function cadastrarOutraPessoa() {
  const resposta = prompt('Deseja cadastrar outra pessoa? (Sim/Não): ');
  const cadastrarOutra = resposta.toLowerCase() === 'sim';

  if (cadastrarOutra) {
    cadastrarPessoa();
  } else {
    mostrarResultados();
  }
}

function mostrarResultados() {
  console.log('Pessoas desempregadas:');
  pessoas.filter(pessoa => !pessoa.trabalhando).forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
  });

  console.log('\nPessoas empregadas com salários menores que 2500:');
  pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario < 2500).forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
  });

  console.log('\nPessoas empregadas com salários maiores que 2500:');
  pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario >= 2500).forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
  });
}

cadastrarPessoa();
 


// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000