function displayPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

// Hàm khởi tạo các hàng của bảng khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
  generateTableRows();
});

function deleteBookRow(deleteIcon) {
  var bookRow = deleteIcon.closest("tr");
  bookRow.remove();
}

// closest(): sẽ bắt đầu tìm kiếm từ phần tử hiện tại và đi ngược lên với kết quả trả về là phần tử đầu tiên phù hợp tìm được. .

// Attach event listener to the trash bin icon when user chooses to delete a book
document.addEventListener("click", function (event) {
  var deleteIcon = event.target.closest(".fa-trash-can"); // Use consistent selector here
  if (deleteIcon) {
    displayPopup();
    deleteBookRow(deleteIcon);
  }
});
