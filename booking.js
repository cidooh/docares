// const consultFree = document.querySelector('#consult-free')
// const consultEmail = document.querySelector('#consult-email')

// consultFree.addEventListener('submit', (event) => {
//     event.preventDefault()

//     validateForm()
// })

// function validateForm(){
//     if (consultEmail.value.trim() == '')
//         setError(consultEmail, 'Provide Email address')
// }

// function setError(element, errorMessage){
//     const parent = element.parentElement
//     parent.classList.add('error')
//     const paragraph = parent.querySelector('p')
//     paragraph.textContent = errorMessage
//     }

// Open modal and populate doctor name
function openBookingModal(doctorName) {
    document.getElementById('doctor').value = doctorName;
    document.getElementById('bookingModal').style.display = "block";
}

// Close modal
document.querySelector(".close").onclick = function() {
    document.getElementById('bookingModal').style.display = "none";
};

// Function to handle booking
function bookAppointment() {
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (doctor && date && time) {
        // Temporarily store appointment details
        localStorage.setItem('appointment', JSON.stringify({ doctor, date, time }));

        // Display confirmation message
        document.getElementById('confirmation').innerText = `Appointment booked with ${doctor} on ${date} at ${time}.`;
        
        // Hide modal after confirmation
        setTimeout(() => {
            document.getElementById('bookingModal').style.display = "none";
            document.getElementById('confirmation').innerText = "";
        }, 3000);
    } else {
        alert("Please fill in all fields");
    }
}
