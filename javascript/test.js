function searchBook() {
    let valueSearch = document.getElementById("search").value.toLowerCase();
    
    if (valueSearch.trim() !== "") {
        fetch("http://localhost:3002/books")
            .then(response => response.json())
            .then(data => {
                let bookSearch = data.filter(value => {
                    return (
                        value.author.toLowerCase().includes(valueSearch) ||
                        value['book name'].toLowerCase().includes(valueSearch) ||
                        value.category.toLowerCase().includes(valueSearch) ||
                        value.description.toLowerCase().includes(valueSearch)
                    );
                });

                document.querySelector(".detail").innerHTML = '';
                let book = '';
                bookSearch.map(value => {
                    return book += `
                        <div>
                            <img src="${value.img}">
                            <h3>${value['book name']}</h3>
                            <h4>${value.author}</h4>
                            <h5>${value.category}</h5>
                            <p>${value.description}</p>
                            <div class="selection">
                                <button class="borrow">Borrow</button>
                                <button class="add">Add list</button>
                            </div>
                        </div>
                    `;
                });

                document.querySelector(".detail").innerHTML = book;
                console.log(bookSearch);
            })
            .catch(error => console.log(error));
    } 
}
