import { useEffect, useState } from "react"
import { getRandomBooks } from "../fetch"


function Home() {
    const [books,setBooks] = useState([])
  
    //when the page loads do this
    useEffect(()=>{
      getRandomBooks()
      .then(data => { 
        if (data.items) {
          setBooks(data.items)
        }
      })
      .catch(error => console.error(error))
    },[])
  
  console.log(books)
    return (
     <>
      <ul>
        {books.map(book => 
          
          <li key={book.id}> 
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Image" />
            <h1 className='title'>{book.volumeInfo.title}</h1>
            <h2 className='author'>{book.volumeInfo.authors ? book.volumeInfo.authors : null}</h2>
          </li>
  
        )}
      </ul>
    </>
    )
  }
  
  export default Home