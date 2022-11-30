
// pointer section 
let circle = document.querySelector(".circle")



function move(e){
    circle.style.left = e.clientX + "px"
    circle.style.top = e.clientY + "px"
    console.log(e.clientX);
    
}
document.addEventListener("mousemove",move)


// img variabol and function 


let body = document.querySelector("body")
let main = document.querySelector(".main")


body.addEventListener("click",(e)=>{
    console.log(e.target.classList);

    if(e.target.classList[0] == "same"){
        main.classList.add("main2")
        main.innerHTML = `<img src="${e.target.dataset.url}.jpg" alt="">`

    }else{
        main.classList.remove("main2")
        main.innerHTML = ""
    }
    
})