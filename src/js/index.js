// criar um botao//


const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = desseleconarBotao();

        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        console.log(indice);
        console.log(personagens[indice]);

        desselecionarpersonagem();

        personagens[indice].classList.add("selecionado");
    });
});
function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desseleconarBotao() {
    return document.querySelector(".botao.selecionado");
}

