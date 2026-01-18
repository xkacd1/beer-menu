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
        <strong>${beer.nazev}</strong>
        <span>${beer.nazev_pivovaru || ""}</span>
      </td>
      <td>${beer.styl}</td>
      <td class="abv">${beer.avb}%</td>
      <td class="price">${beer.cena04},-</td>
    `;
    tbody.appendChild(row);
  });
}

loadBeers();
