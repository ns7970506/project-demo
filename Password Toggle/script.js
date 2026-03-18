const input = document.getElementById("input")
const eyeicon = document.getElementById("eyeicon")

eyeicon.addEventListener("click",function(){
    if(input.type =="password"){
        input.type="text"
        eyeicon.src="eye-open.png"
    }
    else{
        input.type="password"
         eyeicon.src="eye-close.png"
    }
})