var timer = 60;
var score = 0;
var hitrn = 0;

function makebubble(){
    var clutter = "";

for(var i = 1; i<=78; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer(){
   var timerint = setInterval(function (){
        if(timer>0){
        timer--;
        document.querySelector("#timervalue").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>` ;
        }
    },1000);

}
function getnewhit(){
    var hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}
function scoreincrement(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){

    var hitrn = Math.floor(Math.random()*10);
    var clickednum = Number(dets.target.textContent);     

    if(clickednum === hitrn){
    scoreincrement();
    makebubble();
    getnewhit();
}
});

    runtimer();
    makebubble();
    getnewhit();
    

