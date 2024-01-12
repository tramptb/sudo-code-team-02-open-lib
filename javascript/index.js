
document.addEventListener('DOMContentLoaded', () => {
    const textbox = document.getElementById("rwSearchKeyword");
    textbox.addEventListener("keypress", function onEvent(event) {
        if (event.key === "Enter") {
            const host = window.location.host;
            const pathname = "./html/search.html";

            window.location.href = host + pathname;
        }
    });

});


function searchBook() {
      let valueSearch = document.getElementById("search").value.toLowerCase();
      let searchType = document.getElementById("searchType").value.toLowerCase();

      if (valueSearch.trim() !== "") {
        fetch("http://localhost:3003/books")
          .then(response => response.json())
          .then(data => {
            let bookSearch = data.filter(value => {
              if (searchType === "all") {
                return (
                  value.author.toLowerCase().includes(valueSearch) ||
                  value['book name'].toLowerCase().includes(valueSearch) ||
                  value.category.toLowerCase().includes(valueSearch) ||
                  value.description.toLowerCase().includes(valueSearch)
                );
              } else if (searchType === "author") {
                return value.author.toLowerCase().includes(valueSearch);
              } else if (searchType === "bookname") {
                return value['book name'].toLowerCase().includes(valueSearch);
              } else if (searchType === "category") {
                return value.category.toLowerCase().includes(valueSearch);
              } else if (searchType === "keyword") {
                return (
                  value.author.toLowerCase().includes(valueSearch) ||
                  value['book name'].toLowerCase().includes(valueSearch) ||
                  value.category.toLowerCase().includes(valueSearch) ||
                  value.description.toLowerCase().includes(valueSearch)
                );
              }
            });

            // Chuyển hướng sang trang search.html với kết quả tìm kiếm
            window.location.href = `search.html?search=${valueSearch}&type=${searchType}&results=${JSON.stringify(bookSearch)}`;
          })
          .catch(error => console.log(error));
      }
    }

