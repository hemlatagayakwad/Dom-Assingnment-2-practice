let colorOfEl=document.getElementById("colorOf");
let fColorEl=document.getElementById("fColor");
let sizeOfFontEl=document.getElementById("sizeOfFont");
let wetOfFontEl=document.getElementById("wetOfFont");
let paddingOfTextEl=document.getElementById("paddingOfText");
let radiusOfTextEl=document.getElementById("radiusOfText");
let btnAEl=document.getElementById("btnA");
let btnBEl=document.getElementById("btnB");

function btnOfOne(){
    btnBEl.style.backgroundColor=colorOfEl.value;
    btnBEl.style.fontColor=fColorEl.value;
    btnBEl.style.fontSize=sizeOfFontEl.value;
    btnBEl.style.fontWeight=wetOfFontEl.value;
    btnBEl.style.borderRadius=radiusOfTextEl.value;
    btnBEl.style.padding=paddingOfTextEl.value;
}