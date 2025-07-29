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
// Search Bar Fonksiyonları

// Ana arama fonksiyonu
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.trim();
  
  if (query) {
    // Burada arama işlemini gerçekleştirin
    console.log('Aranan: ' + query);
    
    // Örnek: Sayfada arama yapma
    searchInPage(query);
    
    // Veya başka sayfaya yönlendirme
    // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    
    // Önerileri gizle
    hideSuggestions();
  } else {
    alert('Lütfen arama yapmak için bir kelime girin.');
  }
}

// Sayfada kelime arama fonksiyonu
function searchInPage(query) {
  // Önceki aramayı temizle
  clearHighlights();
  
  // Sayfada metni ara ve vurgula
  const bodyText = document.body.innerHTML;
  const regex = new RegExp(`(${query})`, 'gi');
  const highlightedText = bodyText.replace(regex, '<mark class="search-highlight">$1</mark>');
  
  if (bodyText !== highlightedText) {
    document.body.innerHTML = highlightedText;
    
    // İlk sonuca scroll yap
    const firstResult = document.querySelector('.search-highlight');
    if (firstResult) {
      firstResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    alert(`"${query}" için ${document.querySelectorAll('.search-highlight').length} sonuç bulundu.`);
  } else {
    alert(`"${query}" için sonuç bulunamadı.`);
  }
}

// Vurgulamaları temizle
function clearHighlights() {
  const highlights = document.querySelectorAll('.search-highlight');
  highlights.forEach(highlight => {
    const parent = highlight.parentNode;
    parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
    parent.normalize();
  });
}

// Öneri seçme fonksiyonu
function selectSuggestion(suggestion) {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = suggestion;
  hideSuggestions();
  performSearch();
}

// Önerileri göster
function showSuggestions() {
  const suggestions = document.getElementById('searchSuggestions');
  suggestions.classList.add('show');
}

// Önerileri gizle
function hideSuggestions() {
  const suggestions = document.getElementById('searchSuggestions');
  suggestions.classList.remove('show');
}

// Enter tuşu ile arama
function handleSearchKeyPress(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
}

// Sayfa yüklendiğinde event listener'ları ekle
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchSuggestions = document.getElementById('searchSuggestions');
  
  if (searchInput) {
    // Enter tuşu için
    searchInput.addEventListener('keypress', handleSearchKeyPress);
    
    // Focus olduğunda önerileri göster
    searchInput.addEventListener('focus', showSuggestions);
    
    // Input alanından çıkıldığında önerileri gizle (biraz gecikme ile)
    searchInput.addEventListener('blur', function() {
      setTimeout(hideSuggestions, 200);
    });
    
    // Yazarken canlı arama (opsiyonel)
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      if (query.length > 2) {
        // 3 karakterden fazla yazıldığında önerileri filtrele
        filterSuggestions(query);
      }
    });
  }
});

// Önerileri filtrele (opsiyonel özellik)
function filterSuggestions(query) {
  const suggestions = document.querySelectorAll('.suggestion-item');
  const lowerQuery = query.toLowerCase();
  
  suggestions.forEach(suggestion => {
    const text = suggestion.textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      suggestion.style.display = 'block';
    } else {
      suggestion.style.display = 'none';
    }
  });
  
  showSuggestions();
}

// CSS style ekle (vurgulama için)
const style = document.createElement('style');
style.textContent = `
  .search-highlight {
    background-color: yellow;
    padding: 2px 4px;
    border-radius: 3px;
    font-weight: bold;
  }
`;
document.head.appendChild(style);
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 2000);
}
// İngilizce Search Önerileri Sistemi

// Gelişmiş öneri listesi
const searchSuggestions = [
  'EVD Services',
  'Telecom Products', 
  'Payment Solutions',
  'Solar Solutions',
  'Network Infrastructure',
  'Find Nearest Shop',
  'Contact Support',
  'Become Distributor',
  'About Hidasie Telecom',
  'News & Updates',
  'Career Opportunities',
  'Customer Reviews',
  'Service Areas',
  'Pricing Plans',
  'Technical Support',
  'Business Solutions',
  'Mobile Services',
  'Internet Plans',
  'Voice Services',
  'Data Packages'
];

// Dinamik öneri oluşturma fonksiyonu
function createDynamicSuggestions() {
  const suggestionsContainer = document.getElementById('searchSuggestions');
  
  if (suggestionsContainer) {
    // Mevcut önerileri temizle
    suggestionsContainer.innerHTML = '';
    
    // İlk 8 öneriyi göster
    searchSuggestions.slice(0, 8).forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.className = 'suggestion-item';
      suggestionElement.textContent = suggestion;
      suggestionElement.onclick = () => selectSuggestion(suggestion);
      suggestionsContainer.appendChild(suggestionElement);
    });
  }
}

// Gelişmiş öneri filtreleme
function filterSuggestions(query) {
  const suggestionsContainer = document.getElementById('searchSuggestions');
  const lowerQuery = query.toLowerCase();
  
  // Eşleşen önerileri bul
  const matchingSuggestions = searchSuggestions.filter(suggestion => 
    suggestion.toLowerCase().includes(lowerQuery)
  );
  
  // Önerileri güncelle
  suggestionsContainer.innerHTML = '';
  
  if (matchingSuggestions.length > 0) {
    matchingSuggestions.slice(0, 6).forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.className = 'suggestion-item';
      suggestionElement.innerHTML = highlightMatch(suggestion, query);
      suggestionElement.onclick = () => selectSuggestion(suggestion);
      suggestionsContainer.appendChild(suggestionElement);
    });
    showSuggestions();
  } else {
    // Eşleşme yoksa "No results found" göster
    const noResultElement = document.createElement('div');
    noResultElement.className = 'suggestion-item no-results';
    noResultElement.textContent = 'No suggestions found';
    noResultElement.style.color = '#999';
    noResultElement.style.fontStyle = 'italic';
    suggestionsContainer.appendChild(noResultElement);
    showSuggestions();
  }
}

// Eşleşen metni vurgulama
function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong style="color: #007bff;">$1</strong>');
}

// Sayfa yüklendiğinde dinamik önerileri oluştur
document.addEventListener('DOMContentLoaded', function() {
  createDynamicSuggestions();
  
  const searchInput = document.getElementById('searchInput');
  
  if (searchInput) {
    // Input değiştikçe önerileri filtrele
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      if (query.length > 0) {
        filterSuggestions(query);
      } else {
        createDynamicSuggestions();
      }
    });
  }
});

// Popüler aramalar özelliği (opsiyonel)
const popularSearches = [
  'EVD Services',
  'Find Shop',
  'Contact',
  'Payment',
  'Support'
];

function showPopularSearches() {
  const suggestionsContainer = document.getElementById('searchSuggestions');
  suggestionsContainer.innerHTML = '<div class="suggestion-header">Popular Searches</div>';
  
  popularSearches.forEach(search => {
    const suggestionElement = document.createElement('div');
    suggestionElement.className = 'suggestion-item popular-search';
    suggestionElement.innerHTML = `<ion-icon name="trending-up-outline" style="margin-right: 8px; font-size: 14px;"></ion-icon>${search}`;
    suggestionElement.onclick = () => selectSuggestion(search);
    suggestionsContainer.appendChild(suggestionElement);
  });
}

autoSlide();
