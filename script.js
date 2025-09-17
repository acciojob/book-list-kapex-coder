document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const isbnInput = document.getElementById('isbn');
  const bookList = document.getElementById('book-list');

  // handle submit
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

  // handle delete
  bookList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      e.target.closest('tr').remove();
    }
  });
});
