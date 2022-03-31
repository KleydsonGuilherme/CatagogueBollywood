const movieList = document.querySelector('.movieList');
const buttonR = document.querySelector('#buttonR');
const buttonL = document.querySelector('#buttonL');


buttonR.addEventListener("click",function (){
    movieList.scrollBy({
        left: 200, behavior: 'smooth'
    });
    /*if(movieList.scrollLeft = 1000)
    movieList.scrollLeft = 0;*/
});

buttonL.addEventListener("click",function (){
    movieList.scrollBy({
        left: -200, behavior: 'smooth'
    });
});


