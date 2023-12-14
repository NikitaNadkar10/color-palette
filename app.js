let h2=document.querySelector("h2");
let btn=document.querySelector("button").addEventListener("click",getColor);


function randomColor(){
    let randomRed=Math.floor(Math.random()*255);
    let randomGreen=Math.floor(Math.random()*255);
    let randomBlue=Math.floor(Math.random()*255);
    
    let color=`rgb(${randomRed},${randomGreen},${randomBlue})`;
    return color;
}
function getColor(){
    let allColors=randomColor();
    let div=document.querySelector("div");
    div.style.backgroundColor=allColors;
    h2.innerText =allColors;
    
}