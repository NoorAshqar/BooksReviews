import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../styles/Details.css';

function BooksDetails() {
    const [books, setBooks] = useState<Array<string>>([]);
    const [dataisLoaded, setDataisLoaded] = useState<boolean>(false);
    useEffect(() => {
        getBooks();
      }, []);
    
      async function getBooks() {
        const response = await fetch('https://raw.githubusercontent.com/NoorAshqar/dataforbooks/master/books.json');
        const data = await response.json();
        setBooks(data.books);
        setDataisLoaded(true);
    }
    const location:any = useLocation();
    const id:any = location.state?.id;
    if(dataisLoaded){
      const mybook = books.filter((book)=>{if(book["id"] === id){return true} return false})
       setBooks(mybook)
       setDataisLoaded(false);
  }
    return (
        <Container className="details-wrapper" fluid>
            {books.length ?(
              <Container className="details-container">
            <img alt="" src={books[0]["image"]}></img>
            <div className="details-body">
            <h2>Title: {books[0]["title"]}</h2>
            <p>Author: {books[0]["author"]}</p>
            <p>Reviewed By: {books[0]["reviewedBy"]}</p>
            <p>Description: {books[0]["description"]}</p>
            <p>Published On: {books[0]["publishedOn"]}</p>
            </div>
            </Container>
            ):(<h2>loading</h2>)}
        </Container>
    )
}

export default BooksDetails