let imageEl=document.getElementById("image");
let iconEl=document.getElementById("icon");
let btnBEl=document.getElementById("btnB");
let ischanged=true;
function btnTwo(){
    if(ischanged===true)
    {
    imageEl.src="https://images.unsplash.com/photo-1558236714-d1a6333fce68?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    iconEl.style.color="#56ccf2";
    btnBEl.style.backgroundColor="#56ccf2";
    ischanged=false;
    }
    else{
        imageEl.src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        iconEl.style.color="lightgray";
        btnBEl.style.backgroundColor=" lightgray";
        ischanged=true;
    }
        console.log(ischanged);
}