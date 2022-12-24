var rainbowBtn=document.getElementById('rainbow');
var eraserBtn=document.getElementById('eraser');
var colorChoice=document.getElementById('colorChoice');

rainbowBtn.onclick=()=>{setColor('rainbow');};
eraserBtn.onclick=()=>{setColor('eraser')};
colorChoice.oninput=(e)=>{setColor(color)};

function setColor(switchVAR){
    let allElements=document.getElementsByClassName('column');
    allElements=Array.from(allElements);
    allElements.forEach(element => {
        element.setAttribute('onmouseover', `changeColor(this, '${switchVAR}')`)
    });
}

function createSheet(){
    sizeOfSheet=document.getElementById('getSize').value;
    document.getElementById('getSize').value="";
    sizeOfSheet=+sizeOfSheet;
    sizeOfSheetOfSheet=sizeOfSheet;

    //console.log(typeof sizeOfSheet);

    if(Number.isInteger(sizeOfSheet)){
        if(sizeOfSheet<1||sizeOfSheet>64){
            document.getElementById('errorMessage').textContent="Please enter a value from 1 to 64..."
            return;
        }
        document.getElementById('errorMessage').textContent="";
        document.getElementById('container').innerHTML="";
        //Create the row element
        let row=document.createElement('div');
        row.className="row";
        //Create the column element
        let column=document.createElement('div');
        column.className="column";
        column.textContent=" ";
        //change color of square
        column.setAttribute('onmouseover', "changeColor(this, 'black')");

        //Add 'sizeOfSheet' number of columns in each row
        for(let i=1; i<=sizeOfSheet; i++){
            row.append(column.cloneNode(true));
        }

        console.log(row);

        //Add 'sizeOfSheet' number of rows to the container
        for(i=1; i<=sizeOfSheet; i++){
            document.getElementById("container").append(row.cloneNode(true));
        }

        console.log(document.getElementById("container"));

    }else {
        document.getElementById('getSizeOfSheet').textContent="Please, an integer from one to 64...";
    }
}

function clearAll(){
    let allElements=document.getElementsByClassName('column');
    for(let i=0; i<allElements.length; i++){
        allElements[i].setAttribute('style', 'background-color: white;')
    }
    document.getElementById('errorMessage').textContent="";
}

function rgbColor(){
    let r=Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(){
    switch (arguments[1]) {
        case "black":
            arguments[0].setAttribute('style', 'background-color: black;')
            break;
        
        case "eraser":
            arguments[0].setAttribute('style', 'background-color: ')
            break;

        case "rainbow":
            let getRandomColor=rgbColor();
            arguments[0].setAttribute('style', `background-color: ${getRandomColor};`)
            break;

        default:
            arguments[0].setAttribute('style', `background-color: ${arguments[1]};`)
            break;
    }
    //element.setAttribute('style', 'background-color: black;')
}

function onload(){
    document.getElementById('getSize').value=16;
    sizeOfSheet=16;
    createSheet();
}