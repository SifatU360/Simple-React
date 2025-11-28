import Book from "./Book";

export default function Library({books}){
    return(
        <div>
            <h2>The National Library</h2>
            <h3>Books Available: {books.length}</h3>
            <p>Location </p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book} />)
                }
            </ul>
        </div>
    )
}