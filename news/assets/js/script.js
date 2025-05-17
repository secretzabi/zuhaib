document.addEventListener('DOMContentLoaded', function() {
    const searchLink = document.getElementById('searchLink');
    const searchPopup = document.getElementById('searchPopup');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Open search popup
    searchLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        searchPopup.classList.add('active');
        searchInput.focus();
    });

    // Close search popup
    closeSearch.addEventListener('click', function() {
        searchPopup.classList.remove('active');
    });

    // Close when clicking outside the search box (optional)
    searchPopup.addEventListener('click', function(e) {
        if (e.target === searchPopup) {
            searchPopup.classList.remove('active');
        }
    });

    // Search functionality (example)
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();

        // Clear previous results
        searchResults.innerHTML = '';

        if (query.length > 2) {
            // Simulate search results (replace with your actual search logic)
            const mockResults = [
                {
                    title: "From the Ground Up: A People-Centered Approach",
                    description: "Exploring how to build systems with people at the core."
                },
                {
                    title: "Justice for All: Exploring the Role of Public Support",
                    description: "How public opinion influences justice systems."
                }
            ];

            // Filter results based on query
            const filteredResults = mockResults.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
            );

            // Display results
            if (filteredResults.length > 0) {
                filteredResults.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                                <h3>${result.title}</h3>
                                <p>${result.description}</p>
                            `;
                    searchResults.appendChild(resultItem);
                });
            } else {
                searchResults.innerHTML = '<p>No results found.</p>';
            }
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchPopup.classList.remove('active');
        }
    });
});