const movieList = document.querySelector('.movieList');
const buttonR = document.querySelector('#buttonR');
const buttonL = document.querySelector('#buttonL');


buttonR.addEventListener("click",function (){
        movieList.scrollBy({
        left: 300, behavior: 'smooth'
    });
});

buttonL.addEventListener("click",function (){
    movieList.scrollBy({
        left: -300, behavior: 'smooth'
    });
});


