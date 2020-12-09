let lastOperand = 0;
let operation = null;
var inputWindow =document.getElementById('inputWindow');
//start
document.addEventListener('click', function(){
    inputWindow.value -= '0';
})


//Цифры
document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';  
})
document.querySelector("#btn_point").addEventListener('click', function () {
    if (inputWindow.value.includes('.') == false) {
        console.log('log')
        inputWindow.value += ".";
    }
})



//Opetations 
document.getElementById('btn_res').addEventListener('click', function () {
if (operation=='sum'){
       inputWindow.value= parseInt(inputWindow.value)+lastOperand;
    }
if (operation=='dif'){
        inputWindow.value=lastOperand-parseInt(inputWindow.value);
     }
if (operation=='mult'){
        inputWindow.value= parseInt(inputWindow.value)*lastOperand;
     }
if (operation=='mod'){
        inputWindow.value= lastOperand/parseInt(inputWindow.value);
     }
if (operation=='minus'){
        inputWindow.value= parseInt(inputWindow.value)*(-1);
     }
})


document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = Math.sqrt(parseInt(inputWindow.value));
    inputWindow.value = lastOperand;
    operation= 'sqrt';
})
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    inputWindow.value = '';
    operation= 'sum';
})
document.getElementById('btn_dif').addEventListener('click', function () {
    if (inputWindow.value=='0'){operation='minus';}
    if (inputWindow.value!='0' && operation=='minus')
    {
    lastOperand = parseInt(inputWindow.value);
    inputWindow.value = '';
    operation= 'dif';}
    else{
        lastOperand = parseInt(inputWindow.value);
        inputWindow.value = '';
        operation= 'dif';}
})
document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    inputWindow.value = '';
    operation= 'mult';
})
document.getElementById('btn_mod').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    inputWindow.value = '';
    operation= 'mod';
})
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

