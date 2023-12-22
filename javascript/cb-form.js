window.onload = function () {
  // validate form data

  let id = (id) => document.getElementById(id);

  let classes = (classes) => document.getElementsByClassName(classes);

  let title = id("title"),
    author = id("author"),
    category = id("category"),
    bookFile = id("bookFile"),
    contributorName = id("contributorName"),
    contributorEmail = id("contributorEmail"),
    formGroup = id("form-group"),
    agreement = classes("form-check-input");
  (errorMsg = classes("error")),
    (successIcon = classes("success-icon")),
    (failureIcon = classes("failure-icon"));

  // ...

  let contributeForm = id("contributeForm"); // Corrected ID here

  contributeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(title, 0, "Title cannot be blank");
    engine(author, 1, "Author cannot be blank");
    engine(category, 2, "Category cannot be blank");
    engine(bookFile, 3, "Book File cannot be blank");
    engine(contributorName, 4, "Contributor Name cannot be blank");
    engine(contributorEmail, 5, "Contributor Email cannot be blank");

    // Use engine for the agreement checkbox validation
    engine(agreement[0], 6, "Please agree to our terms and conditions");

    // Check if all validations passed before displaying success message
    let allValid = false;
    for (let i = 0; i < errorMsg.length; i++) {
      if (errorMsg[i].innerHTML !== "") {
        allValid = false;
        break;
      } else {
        allValid = true;
      }
    }

    if (allValid) {
      formGroup.innerHTML = `<h2 class="form-message">Thank you for contributing to our library</h2>`;
    } else {
      return false;
    }
  });

  // engine function which is going to validate form data

  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
      id.style.border = "2px solid red";
    } else {
      errorMsg[serial].innerHTML = "";
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
      id.style.border = "2px solid green";
    }
  }; 
};
