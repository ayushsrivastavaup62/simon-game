let gameseq=[];
let userseq=[]; 
alert(`How to play ?
Just follow the pop-up color sequence in correct order!`);

let btns=["yellow","red","purple","green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
 console.log("Game is started!");
   started = true;

   levelup();
}
});

function btnflash(btn){
    btn.classList.add("btnflash");
    setTimeout(function(){
        btn.classList.remove("btnflash");
    },700);
}



function levelup(){
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;


let randidx = Math.floor(Math.random()*3);
let randcolor = btns[randidx];
let randbtn = document.querySelector(`.${randcolor}`);

// console.log(randidx);
// console.log(randcolor);
// console.log(randbtn);
gameseq.push(randcolor);
console.log(gameseq);
    btnflash(randbtn);
 
}
function checkAns(idx){
    // console.log("Current Level : ",level);
    //  let idx = level-1;

     if (userseq[idx]==gameseq[idx]){
        if (userseq.length==gameseq.length){
            setTimeout(levelup,400);
            // levelup();
        }
        // console.log("same value");
     } else { h2.innerHTML= `Game over! High Score <b> ${level} </b> <br> press any key to restart! `;
     reset();
    }
}


function btnpress() {
   let btn =  this;
   btnflash(btn);

   usercolor =btn.getAttribute("id");
   console.log(usercolor);
   userseq.push(usercolor);
    checkAns(userseq.length-1);


 }
    

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);

}
function reset(){

    started=false;
    gameseq=[];
    userseq=[];
    level=0;

document.body.classList.add("end");

setTimeout(() => {
  document.body.classList.remove("end");
}, 400); // 1 second baad remove ho jayega


}
