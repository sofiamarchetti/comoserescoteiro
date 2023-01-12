alert("Os dados fornecidos nesse site não chegam em lugar algum, por enquanto. Mas se quiser, deixe seu nome e preencha o formulário ao final para ver meus estudos em ação :)");

alert("Os textos foram adaptados do site dos Escoteiros do Brasil. O link está disponível ao final da página. Boa leitura!");

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value !="" && document.getElementById("email").value !="" && document.getElementById("telefone").value !=""){
    alert("Prontinho! Você receberá as novidades por email")
  }else{
    alert("Por favor, preencha os campos")
  }
}