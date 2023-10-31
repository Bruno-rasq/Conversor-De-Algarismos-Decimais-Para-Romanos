import { RomanoParaDecimal } from "./romanParaDecimal.js";

let btn_roman = document.querySelector('#btn-roman');
let SPAN_roman = document.querySelector('#Span-roman');

btn_roman.addEventListener('click', function(e){

    e.preventDefault();
    let ResponseRom = RomanoParaDecimal();
    SPAN_roman.innerHTML = ResponseRom

    console.log(ResponseRom)

});