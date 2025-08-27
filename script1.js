function loadHTML(selector, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const placeholder = document.getElementById(selector);
      if (placeholder) {
        placeholder.innerHTML = data;
      }
    })
    .catch((error) => {
      console.error(`Error loading ${url}:`, error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("navbar-placeholder", "/nav.html");
  loadHTML("footer-placeholder", "/footer.html");
});
const Ids = document.getElementById("id");
Ids.innerHTML = "Hellooooo";
