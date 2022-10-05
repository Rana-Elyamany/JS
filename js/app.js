let btn= document.querySelector('.btn1');
let inputs= document.querySelectorAll('input');
let h1=document.querySelector('.container > div> h1');
let div = document.querySelector('.container > div');
let s =document.querySelector('span');
let img = document.querySelector('img');
let spinner =document.querySelector('.spinner');
let Images=document.querySelectorAll('.images > img');
let BigImage=document.querySelector('.BigImage > img');
let button =document.querySelectorAll('.container > .Accourdion > button');
let paragraph =document.querySelectorAll('.container .Accourdion p');
let Mode =document.querySelector('.mode');
let Body= document.querySelector('body');
let containers=document.querySelectorAll('.container');

btn.onclick= function(){
    
    s.innerText=inputs[0].value;
    img.classList="show";
    img.src=inputs[1].value;
    h1.innerText=inputs[2].value;

}
window.onload=function(){
    spinner.classList.add('hidespinner');
}

for(let i=0 ;i<Images.length ;i++){
    Images[i].onclick =function(){
        let oldSrc=BigImage.src;
        BigImage.src=Images[i].src;
        Images[i].src=oldSrc;
    }
}
for(let i=0;i<button.length;i++)
{
    button[i].onclick=function(){
        if(paragraph[i].style.height==0)
        {
            paragraph[i].style.height=paragraph[i].scrollHeight +"px";
        }
        else{
            paragraph[i].style.height=null;
        }
    }
} 
Mode.onclick=function(){
    Body.classList.toggle('dark-body');
    for(let i=0 ;i<containers.length;i++){
        containers[i].classList.toggle('dark-container');

    }
    for(let i=0 ;i<inputs.length;i++){
        inputs[i].classList.toggle('dark-input');

    }
    if(Mode.innerText=='Dark Mode')
    {
        Mode.innerText='Light Mode';
    }else{
        Mode.innerText='Dark Mode';
    }


}

