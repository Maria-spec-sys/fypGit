// Load history from local storage
const history = JSON.parse(localStorage.getItem('history')) || [];

// Function to render history items
function renderHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = '';
  history.forEach((item, index) => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
      <a href="${item.url}">${item.title}</a>
      <span class="timestamp">${new Date(item.timestamp).toLocaleString()}</span>
      <button class="delete-button" data-index="${index}">Delete</button>
    `;
    historyList.appendChild(historyItem);
  });

  // Attach click event listeners to delete buttons
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      const index = event.target.dataset.index;
      history.splice(index, 1);
      localStorage.setItem('history', JSON.stringify(history));
      renderHistory();
    });
  });
}

// Function to add a new history item
function addHistoryItem(url, title) {
  const newItem = { url, title, timestamp: new Date().getTime() };
  history.push(newItem);
  localStorage.setItem('history', JSON.stringify(history));
  renderHistory();
}

// Add a history item when a link is clicked
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    addHistoryItem(event.target.href, event.target.textContent);
    window.location.href = event.target.href;
  });
});

// Render history on page load
renderHistory();

// Toggle the model pop-up visibility when history heading is clicked
const historyHeading = document.getElementById('history-heading');
const overlay = document.getElementById('overlay');
const model = document.getElementById('model');
const closeButton = document.querySelector('.model .close');

historyHeading.addEventListener('click', event => {
  overlay.style.display = 'block';
  model.style.display = 'block';
});

closeButton.addEventListener('click', event => {
  overlay.style.display = 'none';
  model.style.display = 'none';
});

// Add click event listener to history button
const historyBtn = document.getElementById('history-list');
historyBtn.addEventListener('click', event => {
  console.log('History button clicked');
});
