let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

// library
addBook("The Great Gatsby", "F. Scott Fitzgerald", 218);
addBook("To Kill a Mockingbird", "Harper Lee", 281);
addBook("1984", "George Orwell", 328);
addBook("Pride and Prejudice", "Jane Austen", 279);
addBook("The Catcher in the Rye", "J.D. Salinger", 234);
addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309);
addBook("The Hobbit", "J.R.R. Tolkien", 310);
addBook("The Da Vinci Code", "Dan Brown", 489);
addBook("The Hunger Games", "Suzanne Collins", 374);
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1178);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("displayBtn").addEventListener("click", displayLibrary);
    document.getElementById("addBookToggleBtn").addEventListener("click", toggleAddBookForm);
    document.getElementById("addBtn").addEventListener("click", addBookFromForm);
});

function addBookFromForm() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    
    // Validate input fields
    if (title.trim() === '' || author.trim() === '' || pages.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }
    
    addBook(title, author, pages);
    displayLibrary();
  
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
   
    showMessage("The library has been updated");
}

function toggleAddBookForm() {
    let addBookForm = document.getElementById("addBookForm");
    addBookForm.style.display = addBookForm.style.display === 'none' ? 'block' : 'none';
}

function showMessage(message) {
    alert(message);
}

// display the library contents in alphabetical order
function displayLibrary() {
    let libraryListDiv = document.getElementById("libraryList");
    libraryListDiv.innerHTML = ""; 
    
    library.sort((a, b) => a.title.localeCompare(b.title));
    
    library.forEach(book => {
        let card = document.createElement("div");
        card.classList.add("bookCard");
        card.innerHTML = `<p>Title: ${book.title}</p>
                          <p>Author: ${book.author}</p>
                          <p>Pages: ${book.pages}</p>`;
        libraryListDiv.appendChild(card);
    });
}


