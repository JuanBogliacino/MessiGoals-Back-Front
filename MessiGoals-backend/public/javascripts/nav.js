const menuFiltrar = document.querySelector('.menu-filtrar');
const menuMobile = document.querySelector('.menu-mobile');

menuFiltrar.addEventListener('click', () => {
menuMobile.classList.toggle('invisible');
});

const liEquipos = document.querySelector('.li-equipos');
const menuEquipos = document.querySelector('.menu-equipos');

liEquipos.addEventListener('click', () => {
    menuEquipos.classList.toggle('oculto');
});

const liCompeticion = document.querySelector('.li-competicion');
const menuCompeticion = document.querySelector('.menu-competicion');

liCompeticion.addEventListener('click', () => {
    menuCompeticion.classList.toggle('oculto');
});

const liAnio = document.querySelector('.li-anio');
const menuAnio = document.querySelector('.menu-anio');

liAnio.addEventListener('click', () => {
    menuAnio.classList.toggle('oculto');
});

const liRival = document.querySelector('.li-rival');
const menuRival = document.querySelector('.menu-rival');

liRival.addEventListener('click', () => {
    menuRival.classList.toggle('oculto');
});

const liTipoDeGol = document.querySelector('.li-tipoDeGol');
const menuTipoDeGol = document.querySelector('.menu-tipoDeGol');

liTipoDeGol.addEventListener('click', () => {
    menuTipoDeGol.classList.toggle('oculto');
});