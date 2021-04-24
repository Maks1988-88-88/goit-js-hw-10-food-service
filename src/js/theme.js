const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');

const themeLoad = () => {

  let savedSettings = localStorage.getItem('Theme');

  if (JSON.parse(savedSettings) === Theme.DARK) {
    themeSwitcher.setAttribute('checked', 'true');
    bodyTheme.classList.toggle(Theme.DARK);
  }
  if (
    localStorage.getItem('Theme') === null ||
    JSON.parse(savedSettings) === Theme.LIGHT
  ) {
    bodyTheme.classList.toggle(Theme.LIGHT);
  }
};
themeLoad();

const changeTheme = () => {
  bodyTheme.classList.toggle(Theme.DARK);
  bodyTheme.classList.toggle(Theme.LIGHT);

  if (bodyTheme.classList.contains('dark-theme')) {
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  }

  if (!bodyTheme.classList.contains('dark-theme')) {
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
};

themeSwitcher.addEventListener('click', changeTheme);
