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