
const burber =document.querySelector(".burber")

const meniu =document.querySelector(".burger-meniu")


function burgerfn(){
  
    if (meniu.classList.contains("active")){
        meniu.classList.remove("active")
       burber.innerHTML = '<i class="fa-solid fa-bars"></i>'
        
    }
    else  {meniu.classList.add("active")
    burber.innerHTML = '<i class="fa-solid fa-x"></i>';}
    
    
}

burber.addEventListener("click", burgerfn)





