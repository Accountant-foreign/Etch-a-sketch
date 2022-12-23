function createSheet(){
    document.getElementById('container').innerHTML="";
    let size=document.getElementById('getSize').value;
    document.getElementById('getSize').value="";
    size=+size;

    console.log(typeof size);

    if(Number.isInteger(size)){
        if(size<1||size>64){

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
        column.setAttribute('onmousedown', "changeColor(this)");

        //Add 'size' number of columns in each row
        for(let i=1; i<=size; i++){
            row.append(column.cloneNode(true));
        }

        console.log(row);

        //Add 'size' number of rows to the container
        for(i=1; i<=size; i++){
            document.getElementById("container").append(row.cloneNode(true));
        }

        console.log(document.getElementById("container"));

    }else {
        document.getElementById('getSize').textContent="Please, an integer from one to 64...";
    }
}

function changeColor(element){
    console.log("the column is clicked")


}