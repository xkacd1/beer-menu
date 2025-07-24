async function loadBeers() {
  const menu = document.getElementById("beer-menu");
  const response = await fetch('/data');
  const text = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  const links = [...doc.querySelectorAll('a')].map(a => a.href).filter(href => href.endsWith('.md'));

  for (let url of links) {
    const res = await fetch(url);
    const md = await res.text();
    const frontMatter = /---\n([\s\S]+?)\n---/.exec(md);
    if (!frontMatter) continue;

    const yaml = Object.fromEntries(
      frontMatter[1]
        .split('\n')
        .map(line => line.split(':').map(s => s.trim()))
    );

    const beerDiv = document.createElement('div');
    beerDiv.innerHTML = `
      <h2>${yaml.name}</h2>
      <p><strong>Style:</strong> ${yaml.style} | <strong>ABV:</strong> ${yaml.abv}</p>
      <p>${yaml.description}</p>
    `;
    menu.appendChild(beerDiv);
  }
}

loadBeers();
