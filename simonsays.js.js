let game_seq=[];
let user_seq=[];
let buttons = ["red","purple","yellow","green"]
let started = false;
let level = 0;

document.addEventListener("keypress", function (){
    if (started == false){
    console.log("Game Start")
    started = true;
    }
    levelUp();
})

let h2 = document.querySelector("h2");


function levelUp(){
user_seq =[];
level++;
h2.innerText= `Level ${level}`;
let randIdx = Math.floor(Math.random()* 4 );
let randClr = buttons[randIdx];
let rdm_btn = document.querySelector(`.${randClr}`);
game_seq.push(randClr);
btn_flash(rdm_btn);
console.log(rdm_btn);
console.log(randClr);
console.log(randIdx);
}

function btn_flash(btn){
btn.classList.add("flash")
setTimeout(function(){
    btn.classList.remove("flash")
},250)
}

function user_flash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250)
    }
function check_ans(idx){
        if(user_seq[idx] === game_seq[idx]){
            if(user_seq.length == game_seq.length ){
               setTimeout(levelUp,1000);
            }
        }
        else{
           h2.innerHTML = `Game Over!your score was <b>${level}</b> <br> press any key to Start.`; 
           document.querySelector("body").style.backgroundColor = "red";
           setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
           },150);
            resetTo();
        }
}


function btnPress(){
    let btn= this;
    user_flash(btn);

    userClr = btn.getAttribute("id");
    user_seq.push(userClr);
    check_ans(user_seq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for (bttn of allBtn){
bttn.addEventListener("click",btnPress)
}

function resetTo(){
    started = false;
    game_seq=[];
    user_seq = [];
    level = 0;
}