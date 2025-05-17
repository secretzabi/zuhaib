const videos = [
    {
        title: "Five Lovely and Simple Hair Styles",
        description: "StreetStyleGru/GynFInHrainfgjUrban Fashion Trends for",
        category: "Fitness",
        categoryColor: "#019D9E",
        date: "2019-01-01",
        author: "Tnews",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        youtubeId: "j6PbonHsqW0"
    },
    {
        title: "Prints and Patterns: Adding Playful Elements",
        description: "Learn how to incorporate playful prints and patterns into your wardrobe with these easy tips.",
        category: "Animals",
        categoryColor: "#FF6B6B",
        date: "2019-01-01",
        author: "Tnews",
        thumbnail: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        youtubeId: "dQw4w9WgXcQ"
    },
    {
        title: "Street Style Diva: Navigating Edgy and",
        description: "Discover how to master edgy street style looks that turn heads wherever you go.",
        category: "Beauty",
        categoryColor: "#4ECDC4",
        date: "2019-01-01",
        author: "Tnews",
        thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        youtubeId: "dQw4w9WgXcQ"
    },
    {
        title: "Street Style Savvy: Embracing Urban Fashion",
        description: "Explore the latest urban fashion trends and how to make them work for your personal style.",
        category: "Games",
        categoryColor: "#FFA07A",
        date: "2019-01-01",
        author: "Tnews",
        thumbnail: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        youtubeId: "dQw4w9WgXcQ"
    }
];

let currentVideoIndex = 0;
let videoModal = null;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize modal
    videoModal = new bootstrap.Modal(document.getElementById('videoModal'));

    // Initialize first video
    loadVideo(0);

    // Play button event
    document.querySelector('.play-button').addEventListener('click', playCurrentVideo);
});

function loadVideo(index) {
    if (index < 0 || index >= videos.length) return;

    currentVideoIndex = index;
    const video = videos[index];

    // Update UI elements
    document.getElementById('videoMainTitle').textContent = video.title;
    document.getElementById('videoDescription').textContent = video.description;
    document.querySelector('.video-thumbnail img').src = video.thumbnail;
    document.getElementById('videoDate').textContent = video.date;
    document.getElementById('videoAuthor').textContent = video.author;

    // Update category label
    const categoryLabel = document.getElementById('videoLabel');
    categoryLabel.textContent = video.category;
    categoryLabel.style.backgroundColor = video.categoryColor;

    // Update modal content
    document.getElementById('videoModalTitle').textContent = video.title;
    document.getElementById('videoModalDescription').textContent = video.description;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });
}

function playCurrentVideo() {
    const video = videos[currentVideoIndex];
    const container = document.getElementById('videoContainer');

    // Clear previous content
    container.innerHTML = '';

    // Create new iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1`;
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    container.appendChild(iframe);
    videoModal.show();
}

// Clean up on modal close
document.getElementById('videoModal').addEventListener('hidden.bs.modal', function() {
    document.getElementById('videoContainer').innerHTML = '';
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        loadVideo(Math.max(0, currentVideoIndex - 1));
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        loadVideo(Math.min(videos.length - 1, currentVideoIndex + 1));
    }
});