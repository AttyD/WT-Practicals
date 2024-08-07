document.addEventListener("DOMContentLoaded", () => {
    const displayData = () => {
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        storedUsers.map((user, index) => {
            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.gender}</td>
                    <td>${user.dob}</td>
                    <td>${user.address}</td>
                    <td>${user.email}</td>
                </tr>`;
        });
    };

    displayData();
});
