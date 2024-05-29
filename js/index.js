/*Criando a lógica para criar o algortimo: */

/* Objetivo 01: Quando clicar no botão do personagem na lista, marcar o botão como selecionado
1.1 pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles
1.2 adicionar a classe "selecionado" no botão que o usuário clicou
1.3 verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
*/

/*Objetivo 02: Quando clicar no botão do personagem mostrar as informações do personagem
2.1 pegar os personagens no JS para poder mostrar ou esconder ele
2.2 adicionar a classe "selecionado" no personagem que o usuário selecionou
2.3 verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
*/
/*------------------------------------------------------------------------------------------------*/

//Pegar os elementos do HTML e fazer alguma coisa com eles no JS
// Objetivo 01: Quando clicar no botão do personagem na lista, marcar o botão como selecionado
// 1.1
const botoes = document.querySelectorAll(".botao");

// Objetivo 02: Quando clicar no botão do personagem mostrar as informações do personagem
// 2.1
const personagens = document.querySelectorAll(".personagem");

//Percorrer a lista, pois o método EventListener não pega a lista inteira
//Para cada botão eu vou executar alguma coisa
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
    // 1.3   
    desselecionarBotao();
        
    // 1.2
    botao.classList.add("selecionado");

    // 2.3
    desselecionarPersonagem();

    // 2.2
    personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
