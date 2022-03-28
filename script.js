

    let myLibrary = [];

    function Book(title, author, numPage, status){
        this.title = title;
        this.author = author;
        this.numPage = numPage;
        this.status = status;
    //     this.info = function(){
    //     // return (" \""+this.title+" by "+this.author+", "+this.numPage+", "+this.status)}
    //     // console.log(this.info());
    }




    var btn = document.getElementById("addButton");
    btn.addEventListener("click", addBookToLibrary);


        function addBookToLibrary() {

            let title = document.getElementById('title').value;
            let author = document.getElementById('author').value;
            let numPage = document.getElementById('numPage').value;
            let status = document.getElementById('status').value;


            let newBook = new Book(title,author,numPage,status)
        
        myLibrary.push(newBook)

        refreshTable()
        }

        function refreshTable(){
            if (myLibrary.length > 0) {
            for (let i = 0; i < myLibrary.length; i++) {
                // Le console log fonctionne et me montre bien les infos qu'on rentre dans le form
                // console.log(myLibrary) 
                // mais quand j'utilise document.write j'ai '[object Object]' qui s'affiche
                // en fait je voudrais qu'on rentre les infos et quand tu click sur 'add a book' que les nouvelles infos s'affichent en dessous
                document.write (myLibrary) 
            }}}
            


   