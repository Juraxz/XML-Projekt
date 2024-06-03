<?php
// Učitavanje JSON fajla
$booksJson = file_get_contents('books.json');
$books = json_decode($booksJson, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Book Library</title>
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js" defer></script>
</head>
<body>
    <header>
        <h1>Book Library</h1>
        <input type="text" id="search" placeholder="Search for books...">
    </header>
    <main>
        <div id="book-list">
            <?php foreach ($books as $book): ?>
                <div class="book" data-id="<?php echo $book['id']; ?>">
                    <img src="<?php echo $book['image']; ?>" alt="<?php echo $book['title']; ?>">
                    <h2><?php echo $book['title']; ?></h2>
                    <p><?php echo $book['author']; ?> (<?php echo $book['year']; ?>)</p>
                </div>
            <?php endforeach; ?>
        </div>
        <div id="book-details" class="hidden">
            <button id="close-details">Close</button>
            <img id="details-image" src="" alt="">
            <h2 id="details-title"></h2>
            <p id="details-author"></p>
            <p id="details-year"></p>
            <p id="details-description"></p>
            <p id="details-rating"></p>
            <label for="rating">Rate this book:</label>
            <input type="number" id="rating" min="1" max="5">
            <button id="submit-rating">Submit</button>
        </div>
    </main>
</body>
</html>
