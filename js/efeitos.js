const menu = document.querySelector('.hamburguer');
const nav = document.querySelector('nav')
const itensMenu = document.querySelectorAll('.itens-menu li');

const home = 0;
const servicos = document.getElementById('servicos').offsetTop- 50;
const precos = document.getElementById('precos').offsetTop- 50;
const duvidas = document.getElementById('duvidas').offsetTop- 50;
const contato = document.getElementById('contato').offsetTop- 50;

menu.addEventListener('click', () => {
    if (nav.classList.contains('ativo')) {
        nav.classList.remove('ativo')
    } else {
        nav.classList.add('ativo')
    }
})

itensMenu.forEach((element) => {
    element.addEventListener('click', () => {
        nav.classList.remove('ativo')
        selecionaItem(element.attributes.getNamedItem('data-section').value)
        rolarPara(element.attributes.getNamedItem('data-section').value)
    })
})

document.addEventListener('scroll', () => {
    const scroll = document.scrollingElement.scrollTop;

    if (scroll > contato) selecionaItem("contato")
    else if (scroll > duvidas) selecionaItem("duvidas")
    else if (scroll > precos) selecionaItem("precos")
    else if (scroll > servicos) selecionaItem("servicos")
    else if (scroll > home) selecionaItem("home")
})

function selecionaItem(item) {
    const itens = document.querySelectorAll('.js-item-nav');

    itens.forEach((element) => {
        if (element.attributes.getNamedItem('data-section').value !== item) 
            element.classList.remove('selecionado')
        else 
        element.classList.add('selecionado')
    })
}

function rolarPara(item) {
    if (item === "home") window.scrollTo(0, home)
    if (item === "servicos") window.scrollTo(0, servicos+1)
    if (item === "precos") window.scrollTo(0, precos+1)
    if (item === "duvidas") window.scrollTo(0, duvidas+1)
    if (item === "contato") window.scrollTo(0, contato+1)
}