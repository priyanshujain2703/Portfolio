const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.98)'; 
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.7)'; 
    } else {
        header.style.background = 'rgba(15, 15, 15, 0.9)'; 
        header.style.boxShadow = 'none';
    }
});

document.querySelectorAll('.nav-links a, .scroll-top, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if(targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = document.querySelector('header').offsetHeight;
        
        if (pageYOffset >= (sectionTop - headerHeight - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#ffffff';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#e63946';
        }
    });
});

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Thank you! Your message has been sent successfully. I will get back to you soon.");
        contactForm.reset();
    });
}