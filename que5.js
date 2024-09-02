let inputOneEl=document.getElementById("inputOne");
let inputSecondEl=document.getElementById("inputSecond");
let resultEl=document.getElementById("result");
 let checkNumberEl=document.getElementById("checkNumber");
 let restartNumberEl=document.getElementById("restartNumber");
let alertEl=document.getElementById("alert");
let errorEl=document.getElementById("error");

let randomNumOne=Math.ceil(Math.random()*100);
let randomNumTwo=Math.ceil(Math.random()*100);

inputOneEl.textContent=randomNumOne;
inputSecondEl.textContent=randomNumTwo;

let randomNumThree=Math.ceil(Math.random()*100);
let randomNumFour=Math.ceil(Math.random()*100);

function buttonOne(){
       let total=randomNumOne+randomNumTwo;
       let totalOne=randomNumThree+randomNumFour;
       let numResult=parseInt(resultEl.value) ;

       if(numResult===total){
        alertEl.innerText="congratulations! you got it right";
        errorEl.style.backgroundColor="green";
       }
       else if(numResult===totalOne)
        {
            alertEl.innerText="congratulations! you got it right";
            errorEl.style.backgroundColor="green";
        }
        else(numResult===totalOne)
            {
                alertEl.innerText="please try again";
                errorEl.style.backgroundColor="red";
            }
}


function buttonTwo(){
    inputOneEl.textContent=randomNumThree;
    inputSecondEl.textContent= randomNumFour;

    resultEl.value="";
    errorEl.innertext="";


}
// checkNumberEl.addEventListener("click",buttonOne);
// restartNumberEl.addEventListener("click",buttonTwo);
