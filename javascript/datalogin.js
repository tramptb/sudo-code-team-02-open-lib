fetch("http://localhost:3002/users")
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        
        data.forEach(user => {
            console.log(user.id, user.name, user.email, user.password);
        });
    })
    .catch(error => console.error(error));

async function fetchUsers() {
    try {
        const response = await fetch("http://localhost:3003/users");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

async function getLogin(email, password) {
    try {

        const data = await fetchUsers();

        const user = data.find(user => user.email === email && user.password === password);

        if (user) {
            console.log("Login successful!");
            alert("Login successful");
            window.location.href = "index.html";

        } else {
            console.log("Invalid email or password.");
            alert("Invalid email or password.");
        }

    } catch (error) {
        console.error("Error fetching login information:", error);
    }
}

function login(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    getLogin(email, password);

    return false;
}

document.querySelector(".form").addEventListener('submit', login);
