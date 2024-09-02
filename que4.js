let imagePixelEl=document.getElementById("imagePixel");
let sizeOfImEl=document.getElementById("sizeOfIm");
let imageEl=document.getElementById("image");
let alertEl=document.getElementById("alert");
let imageDeEl=document.getElementById("imageDe");
let imageInEl=document.getElementById("imageIn");


let count=200;

function ImageIncrease(){
    if(count===250)
        alertEl.textcontent="not more zoom in";
 
    else
    {
        count=count+5;

        alertEl.textcontent=count;

        imageEl.style.height=`${count}px`;

        imageEl.style.width=`${count}px`;

        imagePixelEl.innerText=`width:${count}px`;

        // sizeOfImEl.innerText=`${count}px `;


        alertEl.textContent="";
    }

}

function ImageDecrease(){
    
    if(count===100 )
        alertEl.textcontent="not more zoom out";
     
        else
        {
            count=count-5;
            alertEl.textcontent=count;

            imageEl.style.height=`${count}px`;

            imageEl.style.width=`${count}px`;

            imagePixelEl.innerText=`width:${count}px`;

            // sizeOfImEl.innerText=`${count}px `;

             alertEl.textContent="";
            
        }
}