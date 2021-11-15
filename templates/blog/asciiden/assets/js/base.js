function showSearch() {
    let searchBar = document.querySelector('.searchContainer');
    let overlay = document.querySelector('.searchOverlay');
    overlay.addEventListener('click', hideSearch);
    searchBar.classList.remove('hideSearch');
    searchBar.classList.add('showSearch');

    overlay.style.display = "block";
}

function hideSearch() {
    let searchBar = document.querySelector('.searchContainer');
    let overlay = document.querySelector('.searchOverlay');
    searchBar.classList.remove('showSearch');
    searchBar.classList.add('hideSearch');

    overlay.style.display = "none";
}
      
function switchTheme(e) {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.theme = theme;
}