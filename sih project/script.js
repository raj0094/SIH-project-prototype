document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('side-nav');
    const overlay = document.getElementById('overlay');

    // to open the navigation menu
    const openNav = () => {
        sideNav.classList.add('open');
        overlay.classList.add('active');
    };

    //  to close the navigation menu
    const closeNav = () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('active');
    };

    // Event listener for the menu toggle button
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); 
        if (sideNav.classList.contains('open')) {
            closeNav();
        } else {
            openNav();
        }
    });

    // Event listener for the overlay 
    overlay.addEventListener('click', () => {
        closeNav();
    });

    sideNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeNav();
        }
    });
});