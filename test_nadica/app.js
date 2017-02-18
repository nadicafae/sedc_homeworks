let Novel = (function (){
    function Novel(title, author, publisher, yearOfPubl, pagesNum, seriesName, seriesNum, isbn, review) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.yearOfPubl = yearOfPubl;
        this.pagesNum = pagesNum;
        this.seriesName = seriesName;
        this.seriesNum = seriesNum;
        this.isbn = isbn;
        this.review = review;
    }
    return Novel;
}());

let Anthology = (function (){
    function Anthology(title, editor, publisher, yearOfPubl, pagesNum, stories, isbn, review){
        this.title = title;
        this.editor = editor;
        this.publisher = publisher;
        this.yearOfPubl = yearOfPubl;
        this.pagesNum = pagesNum;
        this.stories = stories;
        this.isbn = isbn;
        this.review = review;
    }
    return Anthology;
}());