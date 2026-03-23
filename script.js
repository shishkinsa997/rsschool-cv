const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const themeText = document.getElementById('theme-text');
const rss = document.getElementById('rss');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

// Prism theme toggle
const prismTheme = document.getElementById('prism-theme');

function setTheme(theme) {
    if (theme === 'dark-theme') {
        document.body.classList.add('dark-theme');
        toggleSwitch.checked = true;
        prismTheme.href = 'https://cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css';
        localStorage.setItem('theme', 'dark-theme');
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        document.body.classList.remove('dark-theme');
        toggleSwitch.checked = false;
        prismTheme.href = 'https://cdn.jsdelivr.net/npm/prismjs/themes/prism.css';
        localStorage.setItem('theme', 'light-theme');
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
}

// Init theme on load
if (currentTheme) {
    setTheme(currentTheme);
} else {
    setTheme('light-theme'); // default
}

// Handle toggle
toggleSwitch.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark-theme' : 'light-theme';
    setTheme(theme);
});
