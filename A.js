let rock=document.getElementById("r");
let paper=document.getElementById("p");
let scissor=document.getElementById("s");
let dis=document.getElementById("TEXT");
let res=document.getElementById("reset");
let choice=[rock,paper,scissor];
let comch=choice[Math.floor(Math.random()*3)].innerHTML;
let userch=" ";
rock.addEventListener("click",function(){
    userch=rock.innerHTML;
if(comch=="PAPER"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so Computer won</h1>`;
}
else if(comch=="SCISSOR"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so User won</h1>`;
}
else if(comch=="ROCK"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so Draw Game</h1>`;
}
rock.disabled=true;
});
paper.addEventListener("click",function(){
    userch=paper.innerHTML;
if(comch=="ROCK"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so User won</h1>`;
}
else if(comch=="SCISSOR"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so Computer won</h1>`;
}
else if(comch=="PAPER"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so Draw Game</h1>`;
}
paper.disabled=true;
});
scissor.addEventListener("click",function(){
    userch=scissor.innerHTML;
if(comch=="ROCK"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so Computer won</h1>`;
}
else if(comch=="SCISSOR"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so Draw Game</h1>`;
}
else if(comch=="PAPER"){
    dis.innerHTML=`<h1>User choice is ${userch} and computer choice is ${comch},so User won</h1>`;
}
scissor.disabled=true;
});
res.addEventListener("click",()=>{
dis.innerHTML=" ";
});
