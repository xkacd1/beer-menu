document.addEventListener("DOMContentLoaded", function () {
  fetch('data/beers.json')
    .then(response => response.json())
    .then(beers => {
      const container = document.getElementById('beer-menu');
      beers.forEach(beer => {
        const el = document.createElement('div');
        el.innerHTML = `
          <h2>${beer.name}</h2>
          <p><strong>Style:</strong> ${beer.style} | <strong>ABV:</strong> ${beer.abv}</p>
          <p>${beer.description}</p>
        `;
        container.appendChild(el);
      });
    });
});
