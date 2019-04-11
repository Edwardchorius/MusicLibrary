
const books = [
    {
        bookId: 1,
        title: 'Lord of the Rings',
        author: 'J.R.R.Tolkien',
    },
    {
        bookId: 2,
        title: 'Lord of the Rings 2',
        author: 'J.R.R.Tolkien',
    },
    {
        bookId: 3,
        title: 'Lord of the Rings 3',
        author: 'J.R.R.Tolkien',
    },
];

function BookList(props) {
    const {books} = props;

    return (
        <ul>
            {books.map(book => (
                <li>
                    <h5>Title: {book.title}</h5>
                    <h6>Author: {book.author}</h6>
                </li>
            ))}
        </ul>
    );
}
