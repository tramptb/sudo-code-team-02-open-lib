async function createUser(event) {
    event.preventDefault(); 

    let isValid = checkValidate();

    if (!isValid) {
        return false; 
    }

    try {
        const response = await fetch("http://localhost:3002/users");
        const data = await response.json();

        const id = data.length + 1; 
        const emailValue = document.querySelector("#email").value.trim();
        const passwordValue = document.querySelector("#password").value.trim();
        const username = emailValue.split("@")[0];

        const newUser = {
            id: id,
            name: username,
            image: `../img/profile.png`, 
            email: emailValue,
            password: passwordValue
        };

        data.push(newUser);

        await fetch("http://localhost:3003/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        event.preventDefault();
        console.log("User registration successful!", newUser);
        alert("Registration Successful!");
        window.location.href = "../html/login.html";
        

    } catch (error) {
        console.error("Error creating user:", error);
    }

    return false;
}

document.querySelector(".form").addEventListener('submit', createUser);
