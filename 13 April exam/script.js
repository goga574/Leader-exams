
let numberInput = document.querySelector(".number-only")

let name = document.querySelector(".name")
// short inputs-->ori inputi --- აქ ინახება 0 და 1 ნდექსი MM და YY
let short = document.querySelectorAll(".short")

// confirm buttoni
let button = document.querySelector(".confirm")

let cvc = document.querySelector(".cvc")

let alertp = document.querySelectorAll(".alert")

let h1 = document.querySelector(".h1")

let h2 = document.querySelector(".h2")

let h3 = document.querySelectorAll(".h3")

let form = document.querySelector("form")

button.addEventListener("click",function(){
    // for(let i of numberInput.value){
    //     if(i.includes("aeiou")){
    //         alertp[0].style.display = "block"
    //     }
    // }
    
    

    let isError = false;

    if(short[0].value === "" || cvc.value === "" ||  short[1].value === "" ){
        alertp[1].style.display = "block"
        isError = true;
    }

    if(numberInput.value === "" || name.value === "") {
        alertp[0].style.display = "block";
        isError = true;
    }
    
    if(isError) {
        return;
    }
    
    if(numberInput.value.length <16){
        alert("should be 16 digits")
    }else{
        h1.textContent = numberInput.value
    }
    
    
    h2.textContent = name.value




    if(short[0].value.length >2||short[0].value.length <2){
        alert("should be 2 digit")
    }else{
        h3[0].textContent = short[0].value
    }
    
    if(short[1].value.length >2){
        alert("should be 2 digit")
    }else{
        h3[1].textContent = short[1].value
    }


    if(cvc.value.length>3 || cvc.value.length<3){
        alert("should be 3 digit in cvc")
    }else{
         alertp[1].style.display = "block"
    }

    

})