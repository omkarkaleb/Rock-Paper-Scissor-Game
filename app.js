var userscore = 0;
var computerscore = 0;

background = document.getElementById("tocolor");

const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");

const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function computerchoice(){
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random()*3);
    return choices[randomnumber];
}


function game(cc){
    const compchoice = computerchoice();
    const uchoice = cc;
    console.log("User choice is " + uchoice);
    console.log("Computer choice is " + compchoice);

    switch (uchoice+compchoice){
        case "rs":
        case "pr":
        case "sp":
            wins(uchoice, compchoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(uchoice, compchoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            tie(uchoice, compchoice);
            break;
    }

}


function main() {

    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();

function wins(u, c){
    userscore++
    userscore_span.innerHTML = userscore;
    result_p.innerHTML = "YOU WIN!!!"
    background.style.color = "white"
    document.getElementById(u).classList.add('green-glow')
    setTimeout(function() {document.getElementById(u).classList.remove('green-glow')}, 500)
    console.log("USER WINS");
}

function lose(u, c){
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML =" COMPUTER WIN!!!"
    background.style.color = "#cd853f"
    document.getElementById(u).classList.add('red-glow')
    setTimeout(function() {document.getElementById(u).classList.remove('red-glow')}, 500)
    console.log("COMPUTER WINS");
}

function tie(u, c){
    result_p.innerHTML = "IT'S A TIE"
    background.style.color = "grey"
    document.getElementById(u).classList.add('grey-glow')
    setTimeout(function() {document.getElementById(u).classList.remove('grey-glow')}, 500)
    console.log("ITS A TIE")
}


function toword(letter){
    if (letter === 'r') return "Rock";
    if (letter === 's') return "Scissors";
    return "Paper"

}
