function switchLanguage(lang) {
  const currentPath = window.location.pathname;
  let newPath = '';

  if (lang === 'en') {
    if (!currentPath.includes('/en/')) {
      newPath = currentPath.replace(/\/$/, '') + '/en' + (currentPath.endsWith('/') ? '/' : '/index.html');
      // Simple logic to handle root and subpages
      if (currentPath.endsWith('index.html')) newPath = currentPath.replace('index.html', 'en/index.html');
      else if (currentPath === '/' || currentPath === '') newPath = '/en/index.html';
      else newPath = '/en/' + currentPath.split('/').pop();
    }
  } else {
    newPath = currentPath.replace('/en/', '/');
  }
  
  window.location.href = newPath;
}

// Basic redirection if needed or handling lang toggle buttons
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const isEnglish = window.location.pathname.includes('/en/');
      switchLanguage(isEnglish ? 'ar' : 'en');
    });
  }
});
