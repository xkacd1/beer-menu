async function loadBeers() {
  const menu = document.getElementById("beer-menu");

  try {
    const response = await fetch('/data/beers.json');
    const data = await response.json();

    const beers = data.beers || [];

    beers.forEach(beer => {
      const beerDiv = document.createElement('div');
      beerDiv.innerHTML = `
        <h2>${beer.name}</h2>
        <p><strong>Style:</strong> ${beer.style} | <strong>ABV:</strong> ${beer.abv}%</p>
        <p>${beer.description}</p>
      `;
      menu.appendChild(beerDiv);
    });
  } catch (error) {
    console.error("Error loading beers:", error);
  }
}

loadBeers();
