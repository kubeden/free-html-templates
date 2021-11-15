const colorScheme  = document.querySelector('meta[name="color-scheme"]');
const themeToggler = document.getElementById('theme-toggle');
const logo         = document.querySelectorAll('.asciiden-logo');

function getTheme() {
  return localStorage.getItem('theme') || 'light';
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
  rotateIcon(theme);
}

function applyTheme(theme) {
  document.body.className = theme;
  colorScheme.content = theme;
  rotateIcon(theme);
}

function rotateIcon(theme) {
  theme = localStorage.getItem('theme');

  if(theme == "dark") {
    themeToggler.classList.remove('fa-sun');
    themeToggler.classList.add('fa-moon');

    for(let i=0; i<logo.length; i++) {
      logo[i].classList.remove('showLightLogo');
      logo[i].classList.add('showDarkLogo');
    }
  }
  else if(theme == "light") {
    themeToggler.classList.remove('fa-moon');
    themeToggler.classList.add('fa-sun');

    for(let i=0; i<logo.length; i++) {
      logo[i].classList.remove('showDarkLogo');
      logo[i].classList.add('showLightLogo');
    }
  }
}

function rotateTheme(theme) {
  if (theme === 'light') {
    rotateIcon(theme);
    return 'dark'
  }
  rotateIcon(theme);
  return 'light';
}

// Mimic heavy load done by other JS scripts
setTimeout(() => {
  let theme = getTheme();
  applyTheme(theme);

  themeToggler.onclick = () => {
    const newTheme = rotateTheme(theme);
    applyTheme(newTheme);
    saveTheme(newTheme);

    theme = newTheme;
  }
}, 1);