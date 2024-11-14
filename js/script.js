

const form = document.querySelector('#enter-message')
const textArea = document.querySelector('#text-area')
const emailInfo = document.querySelector('#email-info')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))



form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm();
})
function validateForm() {
       if (emailInfo.value.trim() == '') {
        setError(emailInfo, 'Provide email address')
    } 
   
    else if (isEmailValid(emailInfo.value)) {
        setSuccess(emailInfo)
    } 
   
    else {
        setError(emailInfo, 'Provide a valid email address')
    }
      if (textArea.value.trim() == '') {
        setError(textArea, 'Add your message')
    }
}

 function setError(element, errorMessage){
const parent = element.parentElement;
if (parent.classList.contains('success')){
    parent.classList.remove('success')
}
parent.classList.add('error');
const paragraph = parent.querySelector('p')
paragraph.textContent = errorMessage
 }

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success')
}

function isEmailValid(email){
    const reg =(/^[A-Za-z\._\-0-9]*[@][A_Za-z]*[\.][a-z]{2,4}$/)

    return reg.test(email)
}

