//Script para menu principal ativo
const links = document.querySelectorAll('.header-menu a')


function ativarLink(link){
    let url = location.href
    let href = link.href
    if(url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)


//Script para levar os dados clicados na pagina de seguros e/ou bicicletas para pagina de orçamento.
//1 - parte alterar o href do html do botao para inserir uma query "?":
//?tipo=seguro&produto=prata no href do botao, obs.. tipo=seguro e produto=prata, são respectivamente o name e o value utilizados no radio buttom do html da pagina orcamento, então precisamos apenas atualizar os botoes da pagina de seguros e bicicletas para colocar a query string dessa forma, com base no que foi passado na pagina de orçamento.

const parametros = new URLSearchParams(location.search)
parametros.forEach(parametro => {
    const elemento = document.getElementById(parametro)
    if (elemento) {
        elemento.checked = true
    }
})

//script para clicar e abrir as perguntas frequentes, deixando apenas a primeira aberta, obs..1º alterar a estrutura do html conforme a parte de perguntas frequentes.

const perguntas = document.querySelectorAll('.perguntas button')

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', event => {
        const pergunta = event.currentTarget
        const controls = pergunta.getAttribute('aria-controls')
        const resposta = document.getElementById(controls)
        resposta.classList.toggle('ativa')
        const ativa = resposta.classList.contains('ativa')
        pergunta.setAttribute('aria-expanded', ativa)  
    })
})
console.log(perguntas)