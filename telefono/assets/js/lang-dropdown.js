document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageButton = document.querySelector('.language-button');

    languageDropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            const selectedFlag = this.querySelector('img').src;
            const selectedText = this.querySelector('span').textContent;

            // Update the button with the selected language
            languageButton.querySelector('img').src = selectedFlag;
            languageButton.querySelector('span').textContent = selectedText;

            // You can add additional logic here to change the language of the page
            console.log(`Language changed to: ${selectedText}`);
        });
    });
});