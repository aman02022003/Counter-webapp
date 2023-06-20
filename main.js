const title=document.getElementById("title");
const btndecrement=document.getElementById("decrement");
const btnreset=document.getElementById("reset");
const btnincrement=document.getElementById("increment");

let curvalue=0;

btnincrement.addEventListener("click", ()=>{
 
    curvalue=curvalue+1;
    title.textContent=curvalue;
})

btndecrement.addEventListener("click", ()=>{
 
    curvalue=curvalue-1;
    title.textContent=curvalue;
})

btnreset.addEventListener("click", ()=>{
 
    curvalue=0;
    title.textContent=curvalue;
})