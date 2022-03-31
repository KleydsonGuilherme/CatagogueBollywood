const movieList = document.querySelector('.movieList');
const buttonR = document.querySelector('#buttonR');
const buttonL = document.querySelector('#buttonL');


buttonR.addEventListener("onmouseenter",function (){
    movieList.scrollLeft -=10;
});

buttonL.addEventListener("onmouseenter",function (){
    movieList.scrollLeft +=10;
});
