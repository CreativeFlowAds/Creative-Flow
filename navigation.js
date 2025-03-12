// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            document.body.style.overflow = 'hidden';
        } else {
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });
    
    // Mobile dropdown toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.id.replace('-toggle', '-dropdown');
            const dropdownContent = document.getElementById(targetId);
            
            dropdownContent.classList.toggle('active');
            
            if (dropdownContent.classList.contains('active')) {
                toggle.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                toggle.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
});
