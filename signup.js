document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("signup-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const gender = document.getElementById("gender").value;
        const dob = document.getElementById("dob").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value;

        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }

        let newUser = {
            firstname,
            lastname,
            gender,
            dob,
            address,
            email,
            password
        };

        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        storedUsers.unshift(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));

        alert("Signup successful! Redirecting to login page...");
        window.location.href = "login.html";
    });
});
