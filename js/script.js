document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons
        document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('active'));

        // Add the active class to the clicked button
        button.classList.add('active');

        // Scroll to the target section
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});