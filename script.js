document.addEventListener('DOMContentLoaded', function () {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const isbnInput = document.getElementById('isbn');
  const btn = document.getElementById('submit');
  const bookList = document.getElementById('book-list');
	const form = document.getElementById('book-form');

  // Add book
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    if (!title || !author || !isbn) {
      alert('Please fill in all fields.');
      return;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
    `;

    bookList.appendChild(tr);

    // clear inputs
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
  });

  // Delete book (only one listener, outside submit)
  bookList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      e.target.closest('tr').remove();
    }
  });
});
