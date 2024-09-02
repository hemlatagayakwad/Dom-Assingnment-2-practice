let buttonAEl=document.getElementById("buttonA");
let backDivEl=document.getElementById("backDiv");

function buttonOn(){
      let r =(Math.ceil(Math.random()*120));
     let g =(Math.ceil(Math.random()*121));
     let b =(Math.ceil(Math.random()*122));
    backDivEl.style.backgroundColor= `rgb(${r}, ${g} , ${b} )`;
}


