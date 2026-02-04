//
pragma solidity ^

contract MyContract{
    struct Book{
        string title;
        string author;
        bool completed;
    }
    Book[] public books;
    
    // function newBook(string _name,string _author)public{
    // {
    //     book.push(Book(_name,_author));
    //     book[book.length-1].completed=false;
    // }
    function add(string memory _title,string memory _author)public{
        books.push(Book(_title,_author,false));
    }
// what the hell is memory
    function get(uint _index)public view returns(string memory title, string memory author, bool completed){
        Book storage book =books[_index];
        return (book.title,book.author,book.completed);
    }
    function finishBook(uint _index)public{
        books[_index].completed=True;

    }
    // why does it use uint instead of name
    function deleteBook(uint _index)public{
        delete books[_index];
    }

}