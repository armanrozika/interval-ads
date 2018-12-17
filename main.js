let child = document.querySelectorAll('.child');
let showcase = document.querySelector('.showcase')
let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

// setInterval(function(){
//     child[0].style.background = child[0].style.background == 'pink' ? 'white' : 'pink' ;
//     setTimeout(function(){
//         child[0].style.background = child[0].style.background == 'pink' ? 'white' : 'pink' ;
//     }, 1000)
// }, 5000);

let dividen = 0;

setInterval(function(){
    //pertama
   
    
    //showcase.style.opacity = showcase.style.opacity == '1' ? '0' : '1' ;

    if(dividen==0){
        child[0].style.background = 'pink';
        console.log('pink')
        setTimeout(function(){
            child[0].style.background = 'white';
        }, 1000);
        showcase.innerHTML = child[0].innerHTML;
    }else if(dividen==1){
        showcase.innerHTML = child[1].innerHTML;
        child[1].style.background = 'pink';

        setTimeout(function(){
            child[1].style.background = 'white';
        }, 1000);
    }else if(dividen == 2){
        child[2].style.background = 'pink';

        setTimeout(function(){
            child[2].style.background = 'white';
        }, 1000);
        showcase.innerHTML = child[2].innerHTML;
        
    }else if(dividen==3){
        dividen=0;
        child[0].style.background = 'pink';
        console.log('pink')
        setTimeout(function(){
            child[0].style.background = 'white';
        }, 1000);
        showcase.innerHTML = child[0].innerHTML;
    }

    setTimeout(function(){
        showcase.style.opacity = showcase.style.opacity == '1' ? '0' : '1' ;
    }, 1000);


    setTimeout(function(){
        showcase.style.opacity = showcase.style.opacity == '1' ? '0' : '1' ;
    }, 2000);

        console.log(dividen)

    dividen++;
}, 3000);