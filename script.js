const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');

    // Toggle between dark and light mode variables
    const isLightMode = document.documentElement.classList.contains('light-mode');
    document.documentElement.style.setProperty('--mainTextColor', isLightMode ? 'var(--mainTextColor-light)' : 'var(--mainTextColor-dark)');
    document.documentElement.style.setProperty('--secondaryTextColor', isLightMode ? 'var(--secondaryTextColor-light)' : 'var(--secondaryTextColor-dark)');
    document.documentElement.style.setProperty('--mainLinkColor', isLightMode ? 'var(--mainLinkColor-light)' : 'var(--mainLinkColor-dark)');
    document.documentElement.style.setProperty('--mainBorderColor', isLightMode ? 'var(--mainBorderColor-light)' : 'var(--mainBorderColor-dark)');
    document.documentElement.style.setProperty('--mainBgColor', isLightMode ? 'var(--mainBgColor-light)' : 'var(--mainBgColor-dark)');
});
