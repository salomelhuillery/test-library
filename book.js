function closePop(){
    document.getElementById('popUp').style.display = 'none';
    }

function openPop(){
    document.getElementById('popUp').style.display = 'block';
}

let myLibrary = [];

function Book(title, author, pages, genre){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}


function inTakeFormData(){ //recupere les donnees remplie par l'utilisateur pour les mettre dans le constructor
    let Title = document.getElementById("title").value;
    let Author = document.getElementById("author").value;
    let Pages = document.getElementById("pages").value;
    let Genre = document.getElementById("genre").value;

    AddBookToLibrary(Title, Author, Pages, Genre);
    document.getElementById("FormBook").reset();
}

function AddBookToLibrary(title, author, pages, genre){ //ajoute les livres a l'array "myLibrary" defini plus haut
    let book = new Book(title, author, pages, genre);
    myLibrary.push(book); 
    displayBooksOnPage();
}

function displayBooksOnPage(){


    const books = document.querySelector(".books");

    const removePreviousCard = document.querySelectorAll(".card"); // affiche seulement le dernier livre et pas la totalite de l'array
    for (let i = 0; i < removePreviousCard.length; i++){
        removePreviousCard[i].remove();
    } 


    myLibrary.forEach(myLibrary => { //Pour chaque nouvelle entree, une nouvelle carte est cree avec les infos remplie par l'utilisateur
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

        const del = document.createElement("button");
        del.innerText = "Delete";
        del.classList.add("del");
        del.setAttribute("id", "del");
        card.appendChild(del);

        const edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.classList.add("edit");
        edit.setAttribute("id", "edit");
        card.appendChild(edit);

    }

    
    )   

}


// document.getElementById("del").addEventListener("click", removeFromScreen);  

// function removeFromScreen() {  
//     const card = document.querySelector(".card");
//     card.style.display = "none";
//     }




// AddBookToLibrary("The Hobbit", "Tolkien", "295 pages", "fantasy");
// AddBookToLibrary("Harry Potter", "JK Rowling", "300 pages", "sci-fi");

// displayBooksOnPage();
