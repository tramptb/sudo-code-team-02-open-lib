const allDropdowns = document.querySelectorAll("#menu .side-dropdown");

allDropdowns.forEach((item) => {
  const a = item.parentElement.querySelector("a:first-child");

  a.addEventListener("click", function (e) {
    e.preventDefault();

    allDropdowns.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("show");
      }
    });

    document.querySelectorAll("#menu .side-menu a").forEach((otherLink) => {
      if (otherLink !== this) {
        otherLink.classList.remove("active");
      }
    });

    this.classList.toggle("active");
    item.classList.toggle("show");
  });
});

const navbar = document.querySelector("#menu");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("activec");
};

const subMenu = document.querySelector("#subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

const btnAdd = document.querySelector(".js-add");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".js-modal-close");

function showAddBook() {
  modal.classList.add("open");
}

function hideAddBook() {
  modal.classList.remove("open");
}

btnAdd.addEventListener("click", showAddBook);
modalClose.addEventListener("click", hideAddBook);

const selectImg = document.querySelector(".select-img");
const inputFile = document.querySelector("#file");
const imgArea = document.querySelector(".img-area");

selectImg.addEventListener("click", function () {
  inputFile.click();
});

inputFile.addEventListener("change", function () {
  const image = this.files[0];

  const reader = new FileReader();
  reader.onload = () => {
    const imgUrl = reader.result;
    imgArea.innerHTML = "";
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea.appendChild(img);
  };
  reader.readAsDataURL(image);
});

var infoAPI = " http://localhost:3003/manageBooks";

function start() {
  getInfoBook(renderInfoBook);
  handleCreatForm();
}

start();

function getInfoBook(callback) {
  fetch(infoAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function creatInfoBook(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(infoAPI, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function deleteBook(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(infoAPI + "/" + id, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      getInfoBook(renderInfoBook);
    });
}

function editBookModal(id) {
  // Lấy thông tin cuốn sách cần sửa từ API
  fetch(`${infoAPI}/${id}`)
    .then((response) => response.json())
    .then((book) => {
      modal.classList.add("open");
      document.querySelector('input[name="imageBook"]').value = book.image;
      document.querySelector('input[name="name"]').value = book["book name"];
      document.querySelector('input[name="available"]').value = book.available;
      document.querySelector('input[name="date-added"]').value =
        book["date added"];
      document.querySelector('input[name="date-expired"]').value =
        book["date expired"];

      isEditing = true;
      editingBookId = id;
    })
    .catch((error) => console.error("Error fetching book for edit:", error));
}

var isEditing = false;
var editingBookId = null;

function renderInfoBook(manageBooks) {
  var infobook = document.querySelector(".info-book");
  var htmls = manageBooks.map(function (book) {
    return ` 
               <tr>
                   <td>${book.id}</td>
                   <td><img src="${book.image}"></td>
                   <td>${book["book name"]}</td>
                   <td>${book.available}</td>
                   <td>${book["date added"]}</td>
                   <td>${book["date expired"]}</td>
                   <td><button onclick="deleteBook(${book.id})">Delete</button></td>
                   <td><button onclick="editBookModal(${book.id})">Edit</button></td>
                   
               </tr>
               `;
  });

  infobook.insertAdjacentHTML("beforeend", htmls.join(""));
}

function handleCreatForm() {
  var creatBtn = document.querySelector(".submit");
  creatBtn.onclick = function () {
    var imageBook = document.querySelector('input[name="imageBook"]').value;
    var name = document.querySelector('input[name="name"]').value;
    var available = document.querySelector('input[name="available"]').value;
    var dateAdded = document.querySelector('input[name="date-added"]').value;
    var dateExpired = document.querySelector(
      'input[name="date-expired"]'
    ).value;

    var formData = {
      image: imageBook,
      "book name": name,
      available: available,
      "date added": dateAdded,
      "date expired": dateExpired,
    };

    creatInfoBook(formData, function () {
      getInfoBook(renderInfoBook);
    });
  };

  if (isEditing) {
    editBook(editingBookId, formData);
  } else {
    creatInfoBook(formData, function () {
      getInfoBook(renderInfoBook);
    });
  }

  isEditing = false;
  editingBookId = null;
}

function editBook(id, updatedData) {
  fetch(`${infoAPI}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then(() => {
      getInfoBook(renderInfoBook);
    })
    .catch((error) => console.error("Error updating book:", error))
    .finally(() => {
      modal.classList.remove("open");

      resetEditingState();
    });
}

function resetEditingState() {
  isEditing = false;
  editingBookId = null;
}
