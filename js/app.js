let valorTotal;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    //calcular o preço do subtotal
    //adicionar no carrinho
    //atualizar valor total

    let produto = document.getElementById('produto').value;
    let valorUnitario = produto.split('R$')[1]
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if (isNaN(quantidade) || quantidade <= 0) {
      alert('Por favor, insira a quantidade.');
      return;
    }

    let valorSubtotal = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> Celular <span class="texto-azul">${formatarParaMoeda(valorSubtotal)}</span>
        </section>`;

    valorTotal = valorTotal + valorSubtotal;
    let total = document.getElementById('valor-total');
    total.textContent = `${formatarParaMoeda(valorTotal)}`
    document.getElementById('quantidade').value = '';
}

function limpar() {
  valorTotal = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
  }

function formatarParaMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }
  