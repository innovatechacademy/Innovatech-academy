function switchLanguage() {
  const lang = document.getElementById('language-select').value;
  const elements = document.querySelectorAll('[data-fr]');

  elements.forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
}

// Activer la langue par défaut au chargement
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage();
});
