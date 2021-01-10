function changeTheme(themeName) {
  let currentThemeElem = document.getElementById('theme'),
    currentThemeName = currentThemeElem.className;
  if (currentThemeName === themeName) {
    return;
  } else {
    console.log(`Changed to ${themeName} from ${currentThemeName}`);
    currentThemeElem.className = themeName;
  }
}