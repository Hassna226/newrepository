let toggle=false;
let toggleNav=function(){
    let togglelist=document.querySelector(".nav");
    if(toggle===false){
        togglelist.style.visibility="visible";
        toggle=true;
    }
   else if(toggle===true){
        togglelist.style.visibility="hidden";
        //color.style.background="#f1f1f1";
        toggle=false;
    }
}
let togglelist=document.querySelector(".nav");
let color=document.querySelector(".color");
let colors=document.querySelector(".colors");
let black=document.querySelector(".black");
let blue=document.querySelector(".blue");
let pink=document.querySelector(".pink");
let yellow=document.querySelector(".yellow");


blue.addEventListener('click',function(){
    color.style.background ="blue";
    togglelist.style.visibility="hidden";
    
})
pink.addEventListener('click',function(){
    color.style.background ="pink";
    togglelist.style.visibility="hidden";
    
    
})
black.addEventListener('click',function(){
    color.style.background ="black";
    togglelist.style.visibility="hidden";
    
    
})
yellow.addEventListener('click',function(){
    color.style.background ="yellow";
    togglelist.style.visibility="hidden";
    
    
})
colors.addEventListener('click',function(){
    color.style.background ="#f1f1f1";
    togglelist.style.visibility="hidden";
    
})


