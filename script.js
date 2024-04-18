let mainCon = document.querySelector(".game-con");
let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector("#triangle");
let winModel=document.querySelector(".win-model");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play")

let yscore=JSON.parse(localStorage.getItem("sc"));
let yscoreElem=document.getElementById("yscore");

let cscore=JSON.parse(localStorage.getItem("csc"))
let cscoreElem=document.getElementById("cscore");


let rulemodel=document.querySelector(".rule-model");
let rulBtn=document.querySelector(".btn-rule")
let ruleimg=document.querySelector(".rule-img")
let closeBtn=document.querySelector(".close");

let nextBtn=document.querySelector(".nextBtn")

if(yscore){
    yscoreElem.innerText=yscore;
}

if(cscore){
    cscoreElem.innerText=cscore;
}

let yourCount=0;
let comCount=0;

con.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        con.forEach(item =>{
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=> {
            machine.style.opacity="1";
            setTimeout(() => {
                computer[random].style.display="block";
                computer[random].classList.add("right");
                
            });
        },500);
        setTimeout(()=>{
            if(random==index){
                winModel.style.display="grid";
                winner.innerText="TIE UP";
            }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                winModel.style.display="grid";
                winner.innerText="You Win";
                yourCount=yscore;
                yourCount++;
                yscoreElem.innerText=yourCount;
                localStorage.setItem("sc",JSON.stringify(yourCount));
                nextBtn.style.display="block";
            }else{
                winModel.style.display="grid";
                winner.innerText="You Lose";
                comCount=cscore;
                comCount++;
                cscoreElem.innerText=comCount;
                localStorage.setItem("csc",JSON.stringify(comCount));
            }
        },1500)
    })
});
play.addEventListener("click",()=>{
    window.location.reload();
})


rulBtn.addEventListener("click",()=>{
    rulemodel.style.display="flex";
})

closeBtn.addEventListener("click" , ()=>{
    rulemodel.style.display="none";
})



// nextBtn.addEventListener("click",()=>{
//     mainCon.style.display="none";
// })