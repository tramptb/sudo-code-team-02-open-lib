// script.js

// Function to generate table rows dynamically
function generateTableRows() {
    var tbody = document.getElementById('table-body');

    for (var i = 1; i <= 10; i++) {
        var row = document.createElement('tr');
        row.innerHTML = `
                <td><input type="checkbox"></td>
                <td>${i}</td>
                <td>Harry Potter</td>
                <td>J.K.Rowling</td>
                <td>Science Fiction</td>
                <td>
                    <span>
                        <button class="bb-book-quantity-btn" type="button" name="button"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            title="Decrease Quantity">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input class="bb-book-quantity-input" type="number" name="name" id="quantity" value="1"
                            min="1" max="10" placeholder="Enter quantity">
                        <button class="bb-book-quantity-btn" type="button" name="button"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            title="Increase Quantity">
                            <i class="fas fa-plus"></i>
                        </button>
                    </span>
                </td>
                <td>
                    <input type="date" id="start" name="trip-start" value="2024-03-22" min="2021-07-22"
                        max="2030-12-31">
                </td>
                <td>
                    <i class="fa-solid fa-trash-can" id="deleteIcon"></i>
                </td>
            `;
        tbody.appendChild(row);
    }
}

// Function to display the popup message
function displayPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

// Attach event listener to the trash bin icon
document.addEventListener('click', function (event) {
    var deleteIcon = event.target.closest('#deleteIcon');
    if (deleteIcon) {
        // Display the popup message when the trash bin icon is clicked
        displayPopup();
    }
});

// Function to initialize the table rows when the page loads
document.addEventListener('DOMContentLoaded', function () {
    generateTableRows();
});


// Function to delete the book row
function deleteBookRow(element) {
    var row = element.closest('tr');
    row.remove();
}

// Attach event listener to the trash bin icon
document.addEventListener('click', function (event) {
    var deleteIcon = event.target.closest('.fa-trash-can');
    if (deleteIcon) {
        // Display the popup message when the trash bin icon is clicked
        displayPopup();
        
        // Delete the book row
        deleteBookRow(deleteIcon);
    }
});