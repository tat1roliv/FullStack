//pass on enter keyboard
function digitou(e){
    if(e.keyCode == 13) { //enter
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}

//pass on enter+Ctrl keyboard

//function digitou(e){
    //if(e.keyCode == 13 && e.ctrlKey == true) { 
        //let texto = document.getElementById("campo").value;
        //console.log(texto);
    //}
//}