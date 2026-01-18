async function loadBeers() {
  const tbody = document.getElementById("beer-menu");
  const response = await fetch("/data/beers.json");
  const data = await response.json();

  data.beers.forEach((beer, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="num">${index + 1}</td>
      <td class="epm">${beer.epm || ""}°</td>
      <td class="name">
        <strong>${beer.name}</strong><br>
        <span>${beer.brewery || ""}</span>
      </td>
      <td>${beer.style}</td>
      <td class="abv">${beer.abv}%</td>
      <td class="price">${beer.price || "48,-"}</td>
    `;
    tbody.appendChild(row);
  });
}

loadBeers();
