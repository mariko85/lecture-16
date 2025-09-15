
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




const dataObj = {
    classes :{
    mainconteiner:"container",
    registration:"registration-temolete",
    innerformconteiner: "form-conteiner",
    formchangebut :"change-form" ,
    formSubmitBt:"form-submit",
    logintemplate:"login-temolete",
    loginchangeForm:"login-form",
    registratioForm:"regist-form",

    submitForm:"form-submit",
    forminput:"inpu-form",
    formeroor: "username-eroors"


    },

           ids: {
        usernameInput: "username-input",
        passwordInput: "password-input",
        repeatPasswordInput: "repeat-password-input",
        emailInput: "email-input"
    }
   
        
    
}

const conteiner =document.querySelector(`.${dataObj.classes.mainconteiner}`)

function changeForm(changebt){
    if(changebt.classList.contains(dataObj.classes.registratioForm)){
        renderForm(dataObj.classes.logintemplate)
    }else if (changebt.classList.contains(dataObj.classes.loginchangeForm)) {
        // ლოგინიდან → რეგისტრაციაზე
        renderForm(dataObj.classes.registration);
    }

}



function renderForm(templateclass = dataObj.classes.registration){
    conteiner.innerHTML=""
const template = document.querySelector(`.${templateclass}`).content.cloneNode(true).querySelector(`.${dataObj.classes.innerformconteiner}`) 
const changebt =template.querySelector(`.${dataObj.classes.formchangebut}`)
template.addEventListener("submit", (e)=> e.preventDefault())
changebt.addEventListener("click", () => changeForm(changebt))
conteiner.appendChild(template)
inputadiventlis(template)
}


function rendereroor(input,message){
switch (input.id){
    case dataObj.ids.usernameInput:
    const errodiv=document.querySelector(`.${dataObj.classes.formeroor}`)
    errodiv.innerHTML=""
    errodiv.textContent = message
    break;
    default:
        break;
        

}}







function validinput(input){

switch (input.id){
    case dataObj.ids.usernameInput:
        if(input.value.length<3){
            rendereroor(input, "erroooo")

        }          else {
                rendereroor(input, "",  dataObj.classes.formeroor)
            }
            break;
        case dataObj.ids.emailInput: 
            const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if(!regex.test(input.value)){
                rendereroor(input, "Invalid Email",  dataObj.classes.formeroor)
            } else {
                rendereroor(input, "",  dataObj.classes.formeroor)
            }
        default:
            break;
    }

}





function  inputadiventlis(form){
const input = form.querySelectorAll(`.${dataObj.classes.forminput}`)
input.forEach(input => input.addEventListener("input",(e) => validinput(input)) );
}







renderForm()



