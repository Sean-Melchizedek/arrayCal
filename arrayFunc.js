let arr = [];
let dollarFormatIsPressed = false;
if (arr.length == 0) {
    document.getElementById("ArrDisplayTxt").innerHTML = "your array is empty";
}

function refreshDisplay(){
    document.getElementById("ArrDisplayTxt").innerHTML = arr.toString();
    document.getElementById("ArrayType").innerHTML = typeof arr[arr.length-1];
}
function pushNumber() {
    var number = document.getElementById("inputPush").value;
    arr.push(number);
    refreshDisplay();   
}
function sortArr() {
    arr.sort(function(a,b){return a-b});//比值函数
    refreshDisplay();
}
function dollarFormat(value, index, array){
    array[index] += "$";
}
function deDollarFomat(value, index, array){
    array[index] = array[index].slice(0,array[index].length-1);
}
function dollarFormatForEachWrapper(){
    if (dollarFormatIsPressed == false) {
        arr.forEach(dollarFormat);
        dollarFormatIsPressed = true;
    }else{
        arr.forEach(deDollarFomat);
        dollarFormatIsPressed = false;
    }
    refreshDisplay();
}

var arrayType = document.getElementById("ArrayType");
alert(arrayType.innerHTML);