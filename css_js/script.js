// Navbar Logo Change (if scroll >= 25) START
window.addEventListener('scroll', function () {
    var logo = document.getElementById('navbarlogo');
    if (window.scrollY >= 25) {
        logo.src = '/assets/images/logo/logo-black.png';
    } else {
        logo.src = '/assets/images/logo/logo-white.png';
    }
});

// Navbar menu Color change Black/White START
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.mh-header');
        if (window.scrollY >= 25) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.mh-header');
        if (window.scrollY >= 25) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Navbar menu Color change Black/White END
window.addEventListener('scroll', function () {
    if (window.scrollY >= 25) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
