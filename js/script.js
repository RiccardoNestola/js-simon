
const buttonElement = document.getElementById('start');

let score = 0;
let stop = false;

buttonElement.addEventListener('click', function(){
    if(!stop){
        if (score < 10){
            score++;

            buttonElement.innerHTML = "Start" + " " + score; 

        } else{
            stop=true;
            setTimeout(() => {
                stop=false;
                score=0;
                buttonElement.innerHTML = "Start" + " " + score; 
            },5000);
        }
    }
});
