// NAVBAR MENU
// document.addEventListener("DOMContentLoaded", () => {
// Fetch and inject navbar.html
fetch("/component/navbar/nav.html")
  .then((response) => response.text())
  .then((data) => {
    // Insert the HTML into the placeholder div
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Wait a tick to ensure DOM updates
    requestAnimationFrame(() => {
      // Select elements inside the newly injected HTML
      const navbarToggle = document.querySelector(".navbar-toggle");
      const navbarMenu = document.querySelector(".navbar-menu");

      const searchInput = document.getElementById("search-input");
      const searchButton = document.getElementById("search-button");
      const searchResults = document.getElementById("search-results");

      if (
        !navbarToggle ||
        !navbarMenu ||
        !searchInput ||
        !searchButton ||
        !searchResults
      ) {
        console.error("Navbar elements not found");
        return;
      }

      // Add event listener
      navbarToggle.addEventListener("click", () => {
        navbarToggle.classList.toggle("active");
        navbarMenu.classList.toggle("active");
      });
      // Add  the a link have the active class when the current page is the same as the link href
      const currentPath = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash
      const navLinks = document.querySelectorAll(".navbar-menu li a");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Make the search results box appear when the search button is clicked or input is focused

      searchButton.onclick = function (e) {
        searchResults.style.display = "block";
      };
      window.onclick = function (event) {
        if (
          !event.target.matches("#search-input") &&
          !event.target.matches("#search-button")
        ) {
          searchResults.style.display = "none";
        }
      };
      const websitcontent = [
        {
          title: "Telecom Services",
          description:
            "Explore our wide range of telecom services tailored for your needs.",
          url: "./pages/service/",
        },
        {
          title: "Contacts",
          description:
            "Reach out to us via phone or email for more information .",
          url: "./pages/contact/index.html",
        },
        {
          title: "About us",
          description: "Learn about our company history and team members.",
          url: "./pages/about/index.html",
        },
        {
          title: "Annoumcment and news , Blog",
          description: "find out our latest announcemnt and news.",
          url: "./pages/blog/",
        },
        {
          title: "Vehicles Maintenance Services",
          description:
            "Comprehensive  Vechille maintenance solution for your vechicles.",
          url: "./pages/service/index.html#vehicle",
        },
        {
          title: "Janitorial and Office Cleaning Services",
          description:
            "Affordable cleaining services for your home and company needs.",
          url: "./pages/service/index.html#janitorial",
        },
        {
          title: "Renewable Energy Distribution ",
          description:
            "Cost-effective Eco-friendly  Solar Lanterns and Home Systems for your needs.",
          url: "./pages/service/index.html#solar-panel",
        },
        {
          title: "Telebirr Master Agent",
          description: "We are pround master agent of Telebirr mobile money.",
          url: "/pages/service/index.html#telebirr",
        },
        {
          title: "Electronics Voucher Cards-EVD",
          description:
            "Nation wide distributer of Ethiotelecom's vocher card: EVD, Air-time, and sim-cardsgit",
          url: "./pages/service/index.html#air-time",
        },
        {
          title: "Ethio Telecom Franchised Services",
          description:
            "We are proud Ethio Telecom franchised service provider.",
          url: "./pages/service/index.html#franchised",
        },
        {
          title: "How to be EVD distributor?",
          description:
            "Become EVD distributor in 3 easy steps,<br> Easy three steps to earn more income",
          url: "/pages/service#stpes-to-become-distributor",
        },
        {
          title: "Mobile Network Services",
          description:
            "Explore our wide range of mobile network services tailored for your needs.",
          url: "index.html#telecom-services",
        },
      ];
      searchButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        const query = searchInput.value.toLowerCase().trim();
        console.log("query", query);

        if (!query) {
          searchResults.innerHTML = "";
          return;
        }

        // 3. Filter the data based on the query
        const results = websitcontent.filter((item) => {
          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
          );
        });
        console.log(`results`, results);
        if (query) {
          searchResults.style.display = "block";
        }
        if (query && results.length === 0) {
          searchResults.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
          return;
        }
        // 4. Clear previous results
        searchResults.innerHTML = "";
        if (query && results.length > 0) {
          searchResults.style.display = "block";
          searchResults.innerHTML = `<div class="results-count">${results.length} results found for "${query}"</div>`;
        }

        results.forEach((item) => {
          const resultElement = document.createElement("div");
          resultElement.className = "result-item";
          resultElement.innerHTML = `
                        <h2><a href="${item.url}">${highlightText(
            item.title,
            query
          )}</a></h2>
                        <h5><a href="${item.url}">${highlightText(
            item.description,
            query
          )}</a></h5>
                       `;
          searchResults.appendChild(resultElement);
        });
      });
      searchInput.addEventListener("input", function (e) {
        const query = e.target.value.toLowerCase().trim();
        if (query) {
          searchResults.style.display = "block";
        } else {
          searchResults.style.display = "none";
        }
        // Clear previous results
        searchResults.innerHTML = "";
        // Filter the data based on the query
        const results = websitcontent.filter((item) => {
          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
          );
        });
        if (query && results.length === 0) {
          searchResults.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
          return;
        }
        if (query && results.length > 0) {
          searchResults.style.display = "block";
          searchResults.innerHTML = `<div class="results-count">${results.length} results found for "${query}"</div>`;
        }
        results.forEach((item) => {
          const resultElement = document.createElement("div");
          resultElement.className = "result-item";
          resultElement.innerHTML = `
                        <h2><a href="${item.url}">${highlightText(
            item.title,
            query
          )}</a></h2>
                        <h5>${highlightText(item.description, query)}</h5>
                       `;
          searchResults.appendChild(resultElement);
        });
      });
      searchButton.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Prevent the form from reloading the page
          const query = searchInput.value.toLowerCase().trim();

          if (!query) {
            searchResults.innerHTML = "";
            return;
          }
          // Filter the data based on the query
          const results = websitcontent.filter((item) => {
            return (
              item.title.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query)
            );
          });
          if (query && results.length === 0) {
            searchResults.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
            return;
          }
          if (query && results.length > 0) {
            searchResults.style.display = "block";
            searchResults.innerHTML = `<div class="results-count">${results.length} results found for "${query}"</div>`;
          }
          results.forEach((item) => {
            const resultElement = document.createElement("div");
            resultElement.className = "result-item";
            resultElement.innerHTML = `
                        <h2><a href="${item.url}">${highlightText(
              item.title,
              query
            )}</a></h2>
                        <h5>${highlightText(item.description, query)}</h5>
                       `;
            searchResults.appendChild(resultElement);
          });
        }
      });
      function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, "gi");
        return text.replace(regex, '<span class="highlight">$1</span>');
      }
    });
  })
  .catch((error) => {
    console.error("Error loading navbar:", error);
  });
//start foreach loop for displaying the animated values
let allvalues = document.querySelectorAll(".value");

allvalues.forEach((singleValue) => {
  const endValue = parseInt(singleValue.getAttribute("data-value"), 10);
  const duration = Math.floor(2000 / endValue);
  let startValue = 0;
  const intervalId = setInterval(() => {
    startValue += 1;
    singleValue.textContent = startValue.toString();
    if (startValue === endValue) {
      clearInterval(intervalId);
    }
  }, duration);
});
// Testimonials
// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// function autoSlide() {
//   slideIndex++;
//   showSlides(slideIndex);
//   setTimeout(autoSlide, 2000);
// }
// autoSlide();
// Slide end
// Search functionality
// document.addEventListener("DOMContentLoaded", function () {
// });

// Footer loader
document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");

  fetch("/component/footer/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footerPlaceholder.innerHTML = data;

      requestAnimationFrame(() => {
        const copyRightYear = new Date().getFullYear();
        document.querySelector("#copy-right-year").textContent = copyRightYear;
      });
    })
    .catch((error) => console.error("Error loading nav:", error));
});
