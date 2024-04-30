function validateform() {
    let x = document.forms["myform"]['fname'].value;
    let y = document.forms["myform"]["cform"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
        
    }
    else {
        if (y == "") {
            alert("Comment cannot be empty ");
            return false;

        }
    }
}
function saveContent() {
    document.addEventListener("DOMContentLoaded", function () {
      const textArea = document.querySelector("textarea");
      const storageKey = "text";

      const init = () => {
        textArea.value = localStorage.getItem(storageKey);

        textArea.addEventListener("input", () => {
          localStorage.setItem(storageKey, textArea.value);
        });
      };

      init();
    });
    
    
}
// Function to save search content to local storage
function saveContent1() {
    const searchInput = document.getElementById('searchInput').value.trim(); // Assuming there's an input field with the id 'searchInput'
    if (searchInput) {
        let searches = JSON.parse(localStorage.getItem('searches')) || [];
        searches.unshift(searchInput);
        localStorage.setItem('searches', JSON.stringify(searches));
        displaySearchHistory();
    }
}

// Function to display search history
function displaySearchHistory() {
    const searchHistory = document.getElementById('searchHistory');
    searchHistory.innerHTML = '';
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.forEach(search => {
        const li = document.createElement('li');
        li.textContent = search;
        searchHistory.appendChild(li);
    });
}

// Call displaySearchHistory function when the page loads

