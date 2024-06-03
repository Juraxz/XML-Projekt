document.addEventListener('DOMContentLoaded', () => {
    const books = <?php echo json_encode($books); ?>;
    const bookList = document.getElementById('book-list');
    const bookDetails = document.getElementById('book-details');
    const searchInput = document.getElementById('search');
    const detailsImage = document.getElementById('details-image');
    const detailsTitle = document.getElementById('details-title');
    const detailsAuthor = document.getElementById('details-author');
    const detailsYear = document.getElementById('details-year');
    const detailsDescription = document.getElementById('details-description');
    const detailsRating = document.getElementById('details-rating');
    const ratingInput = document.getElementById('rating');
    const submitRatingButton = document.getElementById('submit-rating');

    let selectedBook;

    bookList.addEventListener('click', (e) => {
        const bookElement = e.target.closest('.book');
        if (!bookElement) return;
        
        const bookId = bookElement.dataset.id;
        selectedBook = books.find(book => book.id == bookId);
        
        if (selectedBook) {
            detailsImage.src = selectedBook.image;
            detailsTitle.textContent = selectedBook.title;
            detailsAuthor.textContent = selectedBook.author;
            detailsYear.textContent = `Year: ${selectedBook.year}`;
            detailsDescription.textContent = selectedBook.description;
            detailsRating.textContent = `Rating: ${selectedBook.rating}`;

            bookDetails.classList.remove('hidden');
        }
    });

    document.getElementById('close-details').addEventListener('click', () => {
        bookDetails.classList.add('hidden');
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll('.book').forEach(bookElement => {
            const title = bookElement.querySelector('h2').textContent.toLowerCase();
            if (title.includes(query)) {
                bookElement.style.display = 'block';
            } else {
                bookElement.style.display = 'none';
            }
        });
    });

    submitRatingButton.addEventListener('click', () => {
        const newRating = parseFloat(ratingInput.value);
        if (newRating >= 1 && newRating <= 5 && selectedBook) {
            selectedBook.rating = newRating;
            detailsRating.textContent = `Rating: ${newRating}`;
            ratingInput.value = '';
        } else {
            alert('Please enter a valid rating between 1 and 5.');
        }
    });
});
