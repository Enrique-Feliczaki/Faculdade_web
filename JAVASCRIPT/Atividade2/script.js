const readline = require('readline');


class Loja {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(nome, preco) {
    this.produtos.push({ nome, preco });
  }

  listarProdutos() {
    let texto = "Produtos disponíveis:\n";
    this.produtos.forEach((p, i) => {
      texto += `${i + 1}. ${p.nome} - R$${p.preco.toFixed(2)}\n`;
    });
    return texto;
  }
}

// Classe Cliente
class Cliente {
  constructor(saldo) {
    this.saldo = saldo;
    this.carrinho = [];
  }

  adicionarAoCarrinho(produto) {
    this.carrinho.push(produto);
  }

  calcularTotal() {
    return this.carrinho.reduce((soma, item) => soma + item.preco, 0);
  }

  mostrarCarrinho() {
    console.log("\nItens no carrinho:");
    this.carrinho.forEach((item, i) => {
      console.log(`${i + 1}. ${item.nome} - R$${item.preco.toFixed(2)}`);
    });
  }

  realizarPagamento() {
    const total = this.calcularTotal();
    console.log(`\nTotal da compra: R$${total.toFixed(2)}`);
    if (total > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo -= total;
      console.log("Compra realizada com sucesso!");
      console.log(`Saldo restante: R$${this.saldo.toFixed(2)}`);
    }
  }
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const loja = new Loja();
loja.adicionarProduto("Camisa", 50);
loja.adicionarProduto("Calça", 80);
loja.adicionarProduto("Tênis", 90);
loja.adicionarProduto("Boné", 30);
loja.adicionarProduto("Meias", 20);

const cliente = new Cliente(200);


function escolherProduto() {
  console.log("\n" + loja.listarProdutos());
  rl.question("Digite o número do produto para adicionar ao carrinho (ou 0 para finalizar): ", resposta => {
    const opcao = parseInt(resposta);

    if (opcao === 0) {
      cliente.mostrarCarrinho();
      cliente.realizarPagamento();
      rl.close();
    } else if (opcao > 0 && opcao <= loja.produtos.length) {
      const produto = loja.produtos[opcao - 1];
      cliente.adicionarAoCarrinho(produto);
      console.log(`${produto.nome} adicionado ao carrinho.`);
      escolherProduto(); 
    } else {
      console.log("Opção inválida.");
      escolherProduto(); 
    }
  });
}


escolherProduto();
