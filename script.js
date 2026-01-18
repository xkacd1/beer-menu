async function loadBeers() {
  const tbodyDesktop = document.getElementById("beer-menu-desktop");
  const tbodyMobile = document.getElementById("beer-menu-mobile");
  const response = await fetch("/data/beers.json");
  const data = await response.json();

  data.beers.forEach((beer, index) => {
    // ---------- DESKTOP ROW ----------
    const rowDesktop = document.createElement("tr");
    rowDesktop.innerHTML = `
      <td class="num">#${index + 1}</td>
      <td class="epm">${beer.epm || ""}°</td>
      <td class="name">
        <strong>${beer.nazev}</strong>
        <span>${beer.nazev_pivovaru || ""}</span>
      </td>
      <td>${beer.styl}</td>
      <td class="abv">${beer.avb || "–"}%</td>
      <td class="price">
        <span class="sub-price ${beer.cena04 ? '' : 'empty-price'}">
          ${beer.cena04 ? beer.cena04 + ",-" : "–"}
        </span>
        <span class="sub-price ${beer.cena03 ? '' : 'empty-price'}">
          ${beer.cena03 ? beer.cena03 + ",-" : "–"}
        </span>
      </td>
    `;
    tbodyDesktop.appendChild(rowDesktop);

    // ---------- MOBILE ROW ----------
    const rowMobile = document.createElement("tr");
    rowMobile.innerHTML = `
      <td class="num">#${index + 1}</td>
      <td class="name">
        <strong>${beer.epm }° ${beer.nazev}</strong>
        <span>${beer.nazev_pivovaru || ""}</span>
        <span>${beer.styl}</span>
      
      <td class="price">
      <span>0,4l</span>
        <span class="sub-price ${beer.cena04 ? '' : 'empty-price'}">
          ${beer.cena04 ? beer.cena04 + ",-" : "–"}
        </span>
        <span>0,3l</span>
        <span class="sub-price ${beer.cena03 ? '' : 'empty-price'}">
          ${beer.cena03 ? beer.cena03 + ",-" : "–"}
        </span>
      </td>
    `;
    tbodyMobile.appendChild(rowMobile);
  });
}

loadBeers();
