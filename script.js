const copyDate = new Date();
let copyRightYear = copyDate.getFullYear();
let allvalues = document.querySelectorAll(".value");
console.log("date");

// NAVBAR MENU
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
//start forwach loop for displaying the animated values
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

const year = document.querySelector("#copy-right-year");
year.innerHTML = copyRightYear;

// Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 2000);
}

autoSlide();
// Slie end
// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const searchResults = document.getElementById("search-results");

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
      url: "index.html#telecom-services",
    },
    {
      title: "Non Telecom Services",
      description:
        "Reliable and fast internet solutions for both residential and business.",
      url: "index.html#non-telecom-service",
    },
    {
      title: "Contacts",
      description: "Reach out to us via phone or email for more information .",
      url: "index.html#contact",
    },
    {
      title: "About us",
      description: "Learn about our company history and team members.",
      url: "index.html#section-about-us",
    },
    {
      title: "Annoumcment and news",
      description: "find out our latest announcemnt and news.",
      url: "index.html#blog",
    },
    {
      title: "Vehicles Maintenance Services",
      description:
        "Comprehensive  Vechille maintenance solution for your vechicles.",
      url: "index.html#non-telecom-service",
    },
    {
      title: "Janitorial and Office Cleaning Services",
      description:
        "Affordable cleaining services for your home and company needs.",
      url: "index.html#non-telecom-service",
    },
    {
      title: "Renewable Energy Distribution ",
      description:
        "Cost-effective Eco-friendly  Solar Lanterns and Home Systems for your needs.",
      url: "index.html#non-telecom-service",
    },
    {
      title: "Telebirr Master Agent",
      description: "We are pround master agent of Telebirr mobile money.",
      url: "index.html#telecom-services",
    },
    {
      title: "Electronics Voucher Cards-EVD",
      description:
        "Nation wide distributer of Ethiotelecom's vocher card: EVD, Air-time, and sim-cardsgit",
      url: "index.html#telecom-services",
    },
    {
      title: "Ethio Telecom Franchised Services",
      description: "We are proud Ethio Telecom franchised service provider.",
      url: "index.html#telecom-services",
    },
    {
      title: "How to be EVD distributor?",
      description:
        "Become EVD distributor in 3 easy steps,<br> Easy three steps to earn more income",
      url: "index.html#stpes-to-become-distributor",
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
  // searchResults.style.display = "none";
  // searchResults.style.position = "absolute";
  // searchResults.style.backgroundColor = "#fff";
  // searchResults.style.border = "1px solid #ccc";
  // searchResults.style.padding = "10px";
  // searchResults.style.zIndex = "1000";
  // searchResults.style.width = "100%";
  // searchResults.style.maxHeight = "200px";
  // searchResults.style.overflowY = "auto";
  // searchResults.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  // searchResults.style.borderRadius = "4px";
  // searchResults.style.fontSize = "14px";
  // searchResults.style.color = "#333";
  // searchResults.style.marginTop = "5px";
});
