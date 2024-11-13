

const form = document.querySelector('#enter-message')
const emailInfo = document.querySelector('#email-info')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm();
})

function validateForm(){
    if(emailInfo.value.trim() == '')
    setError(emailInfo, 'Provide email address' );
}
// else if(isEmailValid(emailInfo.value)){
//     setSuccess(emailInput)
// }else{
//     setError(emailInput, 'provide valid email address')
// }

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

// function isEmailValid(email){
//     const reg = ^[^@]+@[^@]+\.[^@]+$


//     return reg.test(email)
// }

