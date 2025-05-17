class Drawer {
    constructor(templateId, drawerId) {
        this.templateId = templateId;
        this.drawerId = drawerId || `drawer-${Math.random().toString(36).substr(2, 9)}`;
        this.isOpen = false;

        this.init();
    }

    init() {
        // Create drawer element from template
        const template = document.getElementById(this.templateId);
        if (!template) {
            console.error(`Template with ID ${this.templateId} not found`);
            return;
        }

        this.drawerElement = template.content.cloneNode(true).querySelector('.custom-drawer');
        this.drawerElement.id = this.drawerId;
        document.body.appendChild(this.drawerElement);

        // Set up close button
        const closeBtn = this.drawerElement.querySelector('.drawer-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Set up backdrop
        this.backdropElement = document.querySelector('.drawer-backdrop');
        if (!this.backdropElement) {
            this.backdropElement = document.createElement('div');
            this.backdropElement.className = 'drawer-backdrop';
            document.body.appendChild(this.backdropElement);
        }

        this.backdropElement.addEventListener('click', () => this.close());
    }

    open() {
        this.drawerElement.classList.add('show');
        this.backdropElement.classList.add('show');
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    }

    close() {
        this.drawerElement.classList.remove('show');
        this.backdropElement.classList.remove('show');
        document.body.style.overflow = '';
        this.isOpen = false;
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu (original implementation)
    const drawerToggle = document.getElementById('mobileMenuToggle');
    const navbarContent = document.getElementById('navbarContent');
    const closeDrawer = document.getElementById('closeDrawer');
    const backdrop = document.querySelector('.drawer-backdrop');

    drawerToggle.addEventListener('click', () => {
        navbarContent.classList.add('show');
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeDrawer.addEventListener('click', () => {
        navbarContent.classList.remove('show');
        backdrop.classList.remove('show');
        document.body.style.overflow = '';
    });

    backdrop.addEventListener('click', () => {
        navbarContent.classList.remove('show');
        backdrop.classList.remove('show');
        document.body.style.overflow = '';
    });

    // Initialize class-based drawer system
    const drawers = {};

    // Create settings drawer
    drawers.settingsDrawer = new Drawer('settingsDrawerTemplate', 'settingsDrawer');
    drawers.cartDrawer = new Drawer('cartDrawerTemplate', 'cartDrawer');
    // Set up drawer triggers
    document.querySelectorAll('.drawer-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const drawerId = this.getAttribute('data-drawer');
            if (drawers[drawerId]) {
                drawers[drawerId].toggle();
            }
        });
    });

    // Initialize Bootstrap dropdowns for mobile
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('show');
            }
        });
    });
});