const burbers =document.querySelector(".fa-bars")

const x =document.querySelector(".fa-x")
const meniu =document.querySelector(".burger-meniu")


function burgerfn(){
    meniu.classList.toggle("active")
    if (x.classList.contains("active")){
        x.classList.remove("active")
    }
    else  x.classList.add("active")
    
    
}

burbers.addEventListener("click",burgerfn)


meniu.addEventListener("click",burgerfn)
x.addEventListener("click",burgerfn)

