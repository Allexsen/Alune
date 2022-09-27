import { drop } from './lib/dropweapon.js'

document.getElementById('Calibrum').addEventListener('click', () => {
    drop('Calibrum')
})

document.getElementById('Severum').addEventListener('click', () => {
    drop('Severum')
})

document.getElementById('Gravitum').addEventListener('click', () => {
    drop('Gravitum')
})

document.getElementById('Infernum').addEventListener('click', () => {
    drop('Infernum')
})

document.getElementById('Crescendum').addEventListener('click', () => {
    drop('Crescendum')
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)

    const main = document.querySelector('main')
    main.classList.toggle('visible', window.scrollY > 0)
})
