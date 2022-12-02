
let button = document.getElementById("start")

let score = 0;

button.addEventListener("click", function() {

    if (score < 10){
        score++;
        buttonElement.innerHTML = "#" + score;        
    }
    
});
