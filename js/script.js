const emailInfo = document.querySelector('#email-info')
// const submit1 = document.querySelector('#submit1')


// submit1.addEventListener("click", () => {
//     alert('message sent, check your email for response')
// })
emailInfo.addEventListener('submit', (event)=>{
    event.preventDefault()

    validateForm()
})

function validateForm(){
    if(emailInfo.Value.trim()=='')
        setError(emailInfo, 'email cannot be empty' )
}
function setError(element, errorMessage){
const parent = element.parentElement
parent.classList.add('error')
const paragraph = parent.querySelector('p')
paragraph.textContent = errorMessage
}