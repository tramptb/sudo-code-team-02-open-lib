let profileImg = document.getElementById("profile-img");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    profileImg.src = URL.createObjectURL(inputFile.files[0]);
}

async function fetchUsers() {
    try {
        const response = await fetch("http://localhost:3002/users");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}