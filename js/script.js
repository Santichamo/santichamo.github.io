
var info1 = "Un diseñador queriendo incurcionar en el mundo del Desarrollo Web.";
var info2 = "Un diseñador queriendo incurcionar en el mundo del Desarrollo Web. Sueño con encontrar mi primer empleo IT y convertirme en Desarrollador Front-End";

const about = document.getElementById('about');
const btnLess = document.getElementById('btn-less');
const btnMore = document.getElementById('btn-more');     

function moreInfo() {
    about.innerHTML = info2;
    btnMore.setAttribute('style','display:none');
    btnLess.setAttribute('style','display:block');       
}

function lessInfo() {
    about.innerHTML = info1;
    btnLess.setAttribute('style','display:none')
    btnMore.setAttribute('style','display:block')
}

btnMore.addEventListener('click',moreInfo);
btnLess.addEventListener('click',lessInfo);
