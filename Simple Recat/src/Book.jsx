export default function Book({book}) {
    return(
        <div className="book-card">
            <h2>Book Title: {book.title}</h2>
            <h3>Author: {book.author}</h3>
        </div>
    )
}