function closePop(){
    document.getElementById('popUp').style.display = 'none';
    }

function openPop(){
    document.getElementById('popUp').style.display = 'block';
}

let myLibrary = [];

function Book(Title, Author, Pages, Genre){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Genre = Genre;
}


function inTakeFormData(){
    let Title = document.getElementById("title").value;
    let Author = document.getElementById("author").value;
    let Pages = document.getElementById("pages").value;
    let Genre = document.getElementById("genre").value;

    AddBookToLibrary(Title, Author, Pages, Genre);
    document.getElementById("FormBook").reset();
}

function AddBookToLibrary(Title, Author, Pages, Genre){
    let book = new Book(Title, Author, Pages, Genre);
    myLibrary.push(book);
    displayBooksOnPage();
}

function displayBooksOnPage(){


    const books = document.querySelector(".books");

    const removePreviousCard = document.querySelectorAll(".card");
    for (let i = 0; i < removePreviousCard.length; i++){
        removePreviousCard[i].remove();
    }


    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        const title = document.createElement("h2");
        title.innerText = document.getElementById("title").value;
        card.appendChild(title);

        const author = document.createElement("h3");
        author.innerText = document.getElementById("author").value;
        card.appendChild(author);
 
        const pages = document.createElement("p");
        pages.innerText = document.getElementById("pages").value+" pages";
        card.appendChild(pages);

        const genre = document.createElement("p");
        genre.innerText = document.getElementById("genre").value;
        card.appendChild(genre);

        // const radio = document.createElement("p");
        // genre.innerText = document.getElementById("radio").value;
        // card.appendChild(radio);
    

        // const supr = document.createElement("i");
        // supr.classList.add('fa-solid', 'fa-xmark');
        // card.appendChild(supr); //comment integrer l'icone i



        // card.appendChild('<i class="fa-solid fa-xmark" aria-hidden="true"></i>');

    }

    
    )   

}

// function removeBook() {
//     const card = document.querySelector(".card");
//     card.style.display = "none";
// }




// AddBookToLibrary("The Hobbit", "Tolkien", "295 pages", "fantasy");
// AddBookToLibrary("Harry Potter", "JK Rowling", "300 pages", "sci-fi");

// displayBooksOnPage();
