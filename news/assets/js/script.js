document.addEventListener('DOMContentLoaded', function() {
    const searchTriggers = document.querySelectorAll('[data-search-trigger]');
    const searchPopup = document.getElementById('searchPopup');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const body = document.body;

    // Add click event to all search triggers
    searchTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            body.classList.add('blur');
            searchPopup.classList.add('active');
            setTimeout(() => {
                searchInput.focus();
            }, 400);
        });
    });

    // Close function
    function closePopup() {
        body.classList.remove('blur');
        searchPopup.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    }

    closeSearch.addEventListener('click', closePopup);

    // Close when clicking outside
    searchPopup.addEventListener('click', function(e) {
        if (e.target === searchPopup) {
            closePopup();
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query.length > 2) {
            // Your search logic here...
        }
    });

    // ESC key close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});