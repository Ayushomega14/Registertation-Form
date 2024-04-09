const container = document.querySelector(".container");
const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Check if all fields are filled
    const inputs = registerForm.querySelectorAll("input, select");
    let allFieldsFilled = true;
    inputs.forEach((input) => {
        if (!input.value) {
            allFieldsFilled = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    if (allFieldsFilled) {
        // Submit the form if all fields are filled
        registerForm.submit();
    } else {
        // Show an error message or perform any other action
        alert("Please fill in all fields.");
    }
});
