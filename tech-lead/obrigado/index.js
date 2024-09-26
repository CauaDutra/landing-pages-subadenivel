"use strict"

const botaoMais = document.querySelector(".botao-mais")
const dropDownSection = document.querySelector(".section-modules-body--dropdown")


botaoMais.addEventListener('click', function() {
    dropDownSection.classList.toggle("hidden")
    botaoMais.classList.toggle("hidden")
})