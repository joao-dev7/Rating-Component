const radio = document.getElementsByName("avaliacao");
const botao = document.querySelector(".botao");
const p = document.getElementById("valorEnviado");

document.getElementById(`label4`).style.background = "hsl(216, 12%, 54%";
p.innerHTML = `Você selecionou 5 de 5`;

function ValorAnterior() {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      colocarCor(i);
      p.innerHTML = `Você selecionou ${i + 1} de 5`;
    } else {
      tirarCor(i);
    }
  }
}

botao.onclick = function clickBotao(e) {
  e.preventDefault();
  document.querySelector(".caixa1").style.display = "none";
  document.querySelector(".caixa2").style.display = "flex";
};

function colocarCor(i) {
  if (radio[i].value > 1) {
    document.getElementById(`label${radio[i].value - 1}`).style.background = "hsl(216, 12%, 54%";
    }
}

function tirarCor(i) {
  document.getElementById(`label${radio[i].value}`).style.background =
    "hsl(215, 9%, 26%)";
}
