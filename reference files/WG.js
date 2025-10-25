const textDisplay = document.getElementById('text-display');
const selector = document.getElementById('textSelector');

function loadText(fileName) {
  fetch(`reference files/texts/${fileName}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('textDisplay').innerText = data;
    })
    .catch(error => {
      document.getElementById('textDisplay').innerText = "Error loading text, so sad!";
      console.error(error);
    });
}

// Load first by default
loadText('pæling1.txt');