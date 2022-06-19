let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo")! as HTMLElement;
let soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

let saldo_total = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldo_total += soma;
    campoSaldo.innerHTML = saldo_total.toString();
    limparCampoSoma();
  }
}

function limparCampoSoma() {
  if (soma) soma.value = "";
}

function limparSaldo() {
  if (campoSaldo) {
    saldo_total = 0;
    campoSaldo.innerHTML = saldo_total.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener("click", () => {
    somarAoSaldo(Number(soma.value));
  });
}
botaoLimpar.addEventListener("click", () => {
  limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
