const incbtn = document.querySelector(".increase")
const resbtn =document.querySelector(".reset")
const decbtn = document.querySelector(".decrease")
const score = document.querySelector(".update")

let count =0
incbtn.addEventListener("click",()=>{
    count=count+1
    score.innerHTML=count
})

decbtn.addEventListener("click",()=>{
    count=count-1
    if(count=count>0 ? count-1 : 0)
        score.innerHTML=count
})

resbtn.addEventListener("click",()=>{
    count=0
    score.innerHTML=count
})