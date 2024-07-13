let gameSeq=[];
let userSeq=[];
let highscore = 0;

let btns = ["yellow","red","purple","green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");



document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(`pushed`);
    gameFlash(randbtn);
}

function checkAns(idx){
//console.log("curr level",level);level and size of array same
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
    setTimeout(levelUp(),1000);
    }
    if(level > highscore){
        highscore = level;
        h3.innerText = `Your Highest Score : ${highscore}`;
    }

}
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

//to restart game
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}

