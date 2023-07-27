const inputPassword = document.querySelector("#password")
 const inputLength = document.querySelector ("#password-length")

 const uppercaseCheckEl = document.querySelector("#uppercase-check")
 const numberCheckEl = document.querySelector("#number-check")
 const simbolCheckEl = document.querySelector("#simbol-check")

const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")



 document.querySelector ("#copy-1").addEventListener("click",copy)
 document.querySelector ("#copy-2").addEventListener("click",copy)
 
let inputLengthvalue = 16







function generatePassword(){
    let chars = "abcdefghjkmnpqrstuvwxyz"

    const uppercaseChar = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberChar = "123456789"
    const simbolChar = "?!@&*()[]"

    if(uppercaseCheckEl.checked){
        chars += uppercaseChar

    }

    if(numberCheckEl.checked){
        chars += numberChar
    }

    if(simbolCheckEl.checked){
        chars += simbolChar

    }






    let password = ""

    for(let i = 0; i < inputLengthvalue ; i++){

        const randomNumber = Math.floor(Math.random()* chars.length)
         
        password += chars.substring(randomNumber,randomNumber+1)
      
    }

    inputPassword.value= password 
    calculateQuality()
    
    
}

 function calculateQuality(){
    const percent = Math.round ((inputLengthvalue / 64)*25   +  (uppercaseCheckEl.checked ? 25:0)  + (numberCheckEl.checked ? 25:0) + (simbolCheckEl.checked ? 25:0))
    securityIndicatorBarEl.style.width = `${percent}%`
    
    if(percent > 70){
        securityIndicatorBarEl.classList.add("safe")
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.remove("critical")
    }else if(percent > 50){
        securityIndicatorBarEl.classList.add("warning")
        securityIndicatorBarEl.classList.remove("safe")
        securityIndicatorBarEl.classList.remove("critical")
    }else{
        securityIndicatorBarEl.classList.add("critical")
        securityIndicatorBarEl.classList.remove("safe")
        securityIndicatorBarEl.classList.remove("warning")
    }
    if(percent >= 100){
        securityIndicatorBarEl.classList.add("completed")
    }else{
        securityIndicatorBarEl.classList.remove("completed")
    }






 }

 uppercaseCheckEl.addEventListener("click", generatePassword)
 numberCheckEl.addEventListener("click", generatePassword)
 simbolCheckEl.addEventListener("click", generatePassword)




 function copy(){

    navigator.clipboard.writeText(inputPassword.value)


 }

 

 inputLength.addEventListener("input",function(){
 inputLengthvalue = inputLength.value
 generatePassword()
 calculateQuality()
 document.querySelector("#password-length-text").innerText = inputLengthvalue
 


 })


generatePassword() 
calculateQuality()
