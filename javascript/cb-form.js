// validation for form

const contributeForm = document.querySelector("#contributeForm");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const category = document.querySelector("#category");
const bookFile = document.querySelector("#bookFile");
const contributorName = document.querySelector("#contributorName");
const contributorEmail = document.querySelector("#contributorEmail");

function validateInput() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const categoryValue = category.value.trim();
  const bookFileValue = bookFile.value.trim();
  const nameValue = contributorName.value.trim();
  const emailValue = contributorEmail.value.trim();
  const checkboxValue = validateCheckbox();

  if (titleValue === "") {
    setError(title, "Title cannot be blank");
  } else {
    setSuccess(title);
  }

  if (authorValue === "") {
    setError(author, "Author cannot be blank");
  } else {
    setSuccess(author);
  }

  if (categoryValue === "") {
    setError(category, "Category cannot be blank");
  } else {
    setSuccess(category);
  }

  if (bookFileValue === "") {
    setError(bookFile, "Book File cannot be blank");
  } else {
    setSuccess(bookFile);
  }

  if (nameValue === "") {
    setError(contributorName, "Name cannot be blank");
  } else {
    setSuccess(contributorName);
  }

  if (emailValue === "") {
    setError(contributorEmail, "Email cannot be blank");
  } else if (!isValidEmail(emailValue)) {
    setError(contributorEmail, "Email is not valid");
  } else {
    setSuccess(contributorEmail);
  }

  if (!checkboxValue) {
    setError(agreement, "Please accept the terms and conditions");
  } else {
    setSuccess(agreement);
  }

  // if the form is valid then submit to the server and redirect to the thank you page
  if (
    titleValue &&
    authorValue &&
    categoryValue &&
    bookFileValue &&
    nameValue &&
    emailValue &&
    checkboxValue
  ) {
    contributeForm.submit();
    alert("Thank you for your contribution!");
  }
}

// validation form
document.addEventListener("DOMContentLoaded", function () {
  const contributeForm = document.querySelector("#contributeForm");

  contributeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateInput();
  });
});

function setError(input, message) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error");

  if (errorDisplay) {
    errorDisplay.innerText = message;
  }
  formGroup.classList.add("error");
  formGroup.classList.remove("error");
}

const setSuccess = (input) => {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(" .error");

  if (errorDisplay) {
    errorDisplay.innerText = "";
  }

  formGroup.classList.add("success");
  formGroup.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

// validate checkbox for terms and conditions before submitting
function validateCheckbox() {
  const checkbox = document.getElementById("agreement");
  if (checkbox.checked) {
    return true;
  } else {
    alert("Please accept the terms and conditions");
    return false;
  }
}
