function createSheet(){
    document.getElementById('container').innerHTML="";
    sizeOfSheet=document.getElementById('getSize').value;
    sizeOfSheet=+sizeOfSheet;
    sizeOfSheetOfSheet=sizeOfSheet;

    console.log(typeof sizeOfSheet);

    if(Number.isInteger(sizeOfSheet)){
        if(sizeOfSheet<1||sizeOfSheet>64){
            document.getElementById('getSize').value="Please enter a value..."
            return;
        }
        //Create the row element
        let row=document.createElement('div');
        row.className="row";
        //Create the column element
        let column=document.createElement('div');
        column.className="column";
        column.textContent=" ";
        //change color of square
        column.setAttribute('onmouseover', "changeColor(this)");

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
    //console.log('test');
    let allElements=document.getElementsByClassName('column');
    //console.log(allElements);
    //allElements.setAttribute("style", "background-color: white;")
    for(let i=0; i<allElements.length; i++){
        allElements[i].setAttribute('style', 'background-color: white;')
    }
}

function changeColor(element){
    element.setAttribute('style', 'background-color: black;')
}


function onload(){
    document.getElementById('getSize').value=16;
    sizeOfSheet=16;
    createSheet();
}