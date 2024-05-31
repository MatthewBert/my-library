function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let info = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
        return info;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not ready yet");
console.log(theHobbit.info());