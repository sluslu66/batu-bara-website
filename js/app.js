function info() {
  alert("Coal has powered industries for centuries.");
}

// load impact data
if (document.getElementById("impact")) {
  fetch("data/coal.json")
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(item => {
        html += `<div class="card">
          <p>${item.effect}</p>
        </div>`;
      });
      document.getElementById("impact").innerHTML = html;
    });
}

// load header
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });
