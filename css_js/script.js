// Navbar Logo Change (if scroll >= 25) START
window.addEventListener('scroll', function () {
    var logo = document.getElementById('navbarlogo');
    if (window.scrollY >= 25) {
        logo.src = './images/logo-black.png';
    } else {
        logo.src = './images/logo-white.png';
    }
});
// Navbar Logo Change (if scroll >= 25) END

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

// -------------------------------------------------------------------------------------------------

// button Language Color Change
document.addEventListener('scroll', function () {
    const button = document.querySelector('.buttonlanguage');
    if (window.scrollY >= 25) {
        button.style.color = 'black';
    } else {
        button.style.color = 'white';
    }
});

// -------------------------------------------------------------------------------------------------

// button Language Color Change Scrool 
$(document).ready(function () {
    // Check scroll position on page load
    checkScrollPosition();

    // Check scroll position on scroll event
    $(window).scroll(function () {
        checkScrollPosition();
    });

    function checkScrollPosition() {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition >= 50) {
            // Change carousel to slide 0 (first slide)
            $('#carouselIndicators li').removeClass('active');
            $('#carouselIndicators li[data-slide-to="0"]').addClass('active');
            $('#carouselExampleCaptions').carousel(0); // Activate first slide
        } else {
            // Reset to the original state (you can customize this part if needed)
            $('#carouselIndicators li').removeClass('active');
            $('#carouselIndicators li[data-slide-to="1"]').addClass('active'); // You can adjust which slide to show here
            $('#carouselExampleCaptions').carousel(1); // Activate the specified slide
        }
    }
});