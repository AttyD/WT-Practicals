document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        let user = storedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login successful!");
            // Redirect to another page if needed
            // window.location.href = "homepage.html";
            window.location.href = "users.html";
        } else {
            alert("Invalid email or password!");
        }
    });
});
 