

///////////Sidebar
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeSidebar');
const sidebar = document.getElementById('page-sidebar');

// Detect if mobile
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

// Toggle sidebar
menuButton.addEventListener('click', () => {
    if (isMobile()) {
        document.body.classList.add('sidebar-closed', 'mobile');
    } else {
        document.body.classList.toggle('sidebar-closed');
        document.body.classList.toggle('desktop');
    }
});

// Close sidebar with X button (mobile only)
closeButton.addEventListener('click', () => {
    if (isMobile()) {
        document.body.classList.remove('sidebar-closed', 'mobile');
    }
});

// Close sidebar when clicking outside (mobile only)
document.addEventListener('click', (e) => {
    if (!isMobile()) return;

    const isSidebar = sidebar.contains(e.target);
    const isMenuButton = e.target === menuButton || menuButton.contains(e.target);

    if (document.body.classList.contains('mobile') &&
        !isSidebar &&
        !isMenuButton) {
        document.body.classList.remove('sidebar-closed', 'mobile');
    }
});

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (isMobile() && document.body.classList.contains('mobile')) {
            document.body.classList.remove('sidebar-closed', 'mobile');
        } else if (!isMobile()) {
            document.body.classList.remove('sidebar-closed', 'desktop');
        }
    }
});

////////////////////////////Theme switch
const themeSwitch = document.querySelector('.theme-switch');
const html = document.documentElement;

// Initialize theme
const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.dataset.theme = savedTheme;

// Theme switching function
themeSwitch.addEventListener('click', () => {
    const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
});