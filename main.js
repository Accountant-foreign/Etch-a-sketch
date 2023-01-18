let flag=false;
let currentColor="black";
window.onmouseup = () => {flag = false;}
window.onmousedown = () => {flag = true;}

let cell=document.createElement('div'); 
cell.className="cell";

let container=document.getElementById('container');
let sliderInput=document.getElementById('range');
let size=document.getElementById('size');
sliderInput.oninput=()=>{
    createSheet();
    size.textContent=`${+(sliderInput.value)}x${+(sliderInput.value)}`;
};
document.body.onload=createSheet();
document.getElementById('clear').onclick= () => createSheet();
document.getElementById('eraser').onclick=()=> doAccordingToMode('eraser');
document.getElementById('rainbow').onclick=()=> doAccordingToMode('rainbow');
document.getElementById('colorChoice').oninput = (e) => {
    let color=e.target.value;
    currentColor=color;
    doAccordingToMode('color');
}

function generateRGB(){
    let r=Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
function createSheet(){
    container.innerHTML="";
    let sizeOfSheet=+(sliderInput.value);
    container.style.gridTemplateColumns=`repeat(${sizeOfSheet}, 1fr)`;
    container.style.gridTemplateRows=`repeat(${sizeOfSheet}, 1fr)`;
    for (let i = 0; i < sizeOfSheet; i++) {

        for(let j=0; j<sizeOfSheet; j++){
            let clonedCell=cell.cloneNode(true);
            clonedCell.onmouseover = () => {
                if(flag) clonedCell.style.backgroundColor=currentColor;
            }
            container.append(clonedCell);
        }
    }
}

function doAccordingToMode(mode){
    let cells=Array.from(document.getElementsByClassName('cell'));
    cells.forEach(cell => {
        cell.onmouseover = () => {
            if(flag) {
                if(mode=='eraser'){
                    cell.style.backgroundColor='white';
                }
                if(mode=='rainbow'){
                    cell.style.backgroundColor=generateRGB();
                }
                if(mode=='color'){
                    cell.style.backgroundColor=currentColor;
                }
            }
        }
    });
}