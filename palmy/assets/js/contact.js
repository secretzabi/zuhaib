document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');

    // Add name attributes to all inputs if missing
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.name) {
            input.name = input.id || input.name;
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset error states
        clearErrors();

        // Validate form
        if (validateForm()) {
            // Form is valid, proceed with submission
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Submitting...</span>';

            // Here you would typically send the data to a server
            // For demonstration, we'll simulate a successful submission
            setTimeout(() => {
                alert('Form submitted successfully!');
                form.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = '<span>Submit</span>' +
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="#7478c5" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '</svg>';
            }, 1000);

            // In a real implementation, you would use fetch() or XMLHttpRequest
            // Example:
            /*
            const formData = new FormData(form);
            fetch('your-server-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Form submitted successfully!');
                form.reset();
            })
            .catch(error => {
                alert('There was an error submitting the form.');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = '<span>Submit</span>' + svgContent;
            });
            */
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        const name = form.querySelector('#name');
        if (!name.value.trim()) {
            showError(name, 'name-error', 'Name is required');
            isValid = false;
        }

        // Validate email
        const email = form.querySelector('#email');
        if (!email.value.trim()) {
            showError(email, 'email-error', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'email-error', 'Please enter a valid email');
            isValid = false;
        }

        // Validate phone (optional)
        const phone = form.querySelector('#phone');
        if (phone.value.trim() && !isValidPhone(phone.value)) {
            showError(phone, 'phone-error', 'Please enter a valid phone number');
            isValid = false;
        }

        // Validate help selection
        const helpSelected = form.querySelector('input[name="help"]:checked');
        if (!helpSelected) {
            showError(null, 'help-error', 'Please select how we can help you');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        if (input) {
            input.classList.add('error');
            input.addEventListener('input', function clearError() {
                input.classList.remove('error');
                errorElement.style.display = 'none';
                input.removeEventListener('input', clearError);
            });
        }
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });

        document.querySelectorAll('.error').forEach(el => {
            el.classList.remove('error');
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPhone(phone) {
        // Basic phone validation - adjust as needed
        const re = /^[\d\s\+\-\(\)]{10,}$/;
        return re.test(phone);
    }
});