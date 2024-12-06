document.querySelectorAll(".accrodionItem").forEach(item => {
    let isOpen = false;

    const accordionHeading = item.querySelector(".accordionHeading");
    const accordionDesc = item.querySelector(".accordionDesc");
    const accordionOpenSignImg = accordionHeading.querySelectorAll(".accordionOpenSign img");

    // Set initial height based on the closed state
    function updateHeight() {
        const headingHeight = accordionHeading.getBoundingClientRect().height;
        const descHeight = accordionDesc.getBoundingClientRect().height;

        if (isOpen) {
            item.style.height = `${headingHeight + descHeight + 25 + 64}px`;
        } else {
            item.style.height = `${headingHeight + 64}px`;
        }
    }

    // Initial setup
    updateHeight(); // Set initial height
    accordionOpenSignImg[0].style.display = 'block'; // Show open icon initially
    accordionOpenSignImg[1].style.display = 'none'; // Hide close icon initially

    // Add click event listener
    accordionHeading.addEventListener("click", () => {
        isOpen = !isOpen; // Toggle state

        // Update height and icon visibility based on the new state
        updateHeight();
        accordionDesc.classList.toggle("active", isOpen);
        accordionOpenSignImg[0].style.display = isOpen ? 'none' : 'block'; // Toggle open icon
        accordionOpenSignImg[1].style.display = isOpen ? 'block' : 'none'; // Toggle close icon
    });
});
