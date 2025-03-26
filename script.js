// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');
    const themeText = document.querySelector('.theme-toggle span');
    
    body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDark);
    
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
        if (themeText) themeText.textContent = 'Light Mode';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        if (themeText) themeText.textContent = 'Dark Mode';
    }
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-theme');
        const icon = document.querySelector('.theme-toggle i');
        const themeText = document.querySelector('.theme-toggle span');
        icon.classList.replace('fa-moon', 'fa-sun');
        if (themeText) themeText.textContent = 'Light Mode';
    }
});

// Wikipedia Function
function openWiki(topic) {
    window.open(`https://en.wikipedia.org/wiki/${topic}`, '_blank');
}