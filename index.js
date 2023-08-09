var d1=Math.round((6*Math.random())+1);
var d2=Math.round((6*Math.random())+1);
if(d1===1){
    document.querySelector(".img1").setAttribute("src","./dice1.png");
}else if(d1===2){
    document.querySelector(".img1").setAttribute("src","./dice2.png");
}else if(d1===3){
    document.querySelector(".img1").setAttribute("src","./dice3.png");
}else if(d1===4){
    document.querySelector(".img1").setAttribute("src","./dice4.png");
}else if(d1===5){
    document.querySelector(".img1").setAttribute("src","./dice5.png");
}else{
    document.querySelector(".img1").setAttribute("src","./dice6.png");
}
if(d2===1){
    document.querySelector(".img2").setAttribute("src","./dice1.png");
}else if(d2===2){
    document.querySelector(".img2").setAttribute("src","./dice2.png");
}else if(d2===3){
    document.querySelector(".img2").setAttribute("src","./dice3.png");
}else if(d2===4){
    document.querySelector(".img2").setAttribute("src","./dice4.png");
}else if(d2===5){
    document.querySelector(".img2").setAttribute("src","./dice5.png");
}else{
    document.querySelector(".img2").setAttribute("src","./dice6.png");
}
if(d1>d2){
    document.querySelector(".text").textContent="Player 1 won";
}else if(d1<d2){
    document.querySelector(".text").textContent="Player 2 won";
}else if(d1===d2){
    document.querySelector(".text").textContent="Match Draw";
}
