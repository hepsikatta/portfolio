document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer Configuration options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    // Callback setup for running execution changes inside the viewport
    const revealCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Introduce a minor delay multiplier depending on viewport sequencing
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); 
                
                // Cease element tracking once visual status transitions to active
                observer.unobserve(entry.target); 
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    // Target custom dynamic component elements
    const animatedElements = document.querySelectorAll('.reveal-animate');
    animatedElements.forEach(el => revealObserver.observe(el));
    
    // Dynamic change for Navbar background transition based on scroll depth
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    });
});