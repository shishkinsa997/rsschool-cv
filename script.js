    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    const themeText = document.getElementById('theme-text');
    const rss = document.getElementById('rss');
    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            toggleSwitch.checked = true;
            // themeText.textContent = 'Светлая тема';
            rss.style.fill = 'white';
            moon.style.display = 'none';
            sun.style.display = 'block';
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            // themeText.textContent = 'Светлая тема';
            moon.style.display = 'none';
            sun.style.display = 'block';
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
            // themeText.textContent = 'Темная тема';
            moon.style.display = 'block';
            sun.style.display = 'none';
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
