function clk(ctrl){
    let textbox =document.getElementById("textbox");
let value = textbox.value;
textbox.value = value + ctrl.innerText;

}

function clr(){
    textbox.value = '';
}
function equal(){
    textbox.value = eval(textbox.value);
}
function bc(){
    textbox.value = textbox.value.toString().slice(0,-1);
}