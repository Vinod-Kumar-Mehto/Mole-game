const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUP = false;
function randTime(min, max){
    return Math
    .round(Math.random() *(max - min) + min);
};

function randomHole(holes){
    const id = Math.floor(Math.random() * holes.length);
    const hole = holes[id];
    if(hole === lastHole){
        return  randomHole(holes);

    }

    lastHole = hole;
    return hole;
};

function peep(){
    const time = randTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up")
    setTimeout(() => {
        hole.classList.remove("up")
        if(!timeUP) peep();
        
    }, time);
}
function startGame(){
    scoreBoard.textContent = 0;
    timeUP = false;
    peep()
    setTimeout(() => {
        timeUP = true;
    },10000)
}
function bonk(e){
    if(e.isTrusted){
        scoreBoard.textContent ++
        this.classList.remove("up");
    }
}
moles.forEach(mole => mole.addEventListener("click", bonk))

