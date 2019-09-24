
$('#arrowID').scroll(function (event) {
    alert('Stop');
    if ($(window).scrollTop() > 100) {
        $('#arrowID').hide();
    }
    else {
        $('#arrowID').hide();
    }
});

/* Shapes */
var svgContainer = document.getElementById('bm');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'data.json'
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    var menuOpen = false;

    function ToggleMenu() {
        nav.classList.toggle('nav-active')

        menuOpen = !menuOpen;
        
        if(menuOpen){
            if (!nav.classList.contains('nav-activated')){
                nav.classList.toggle('nav-activated')
            }
        }
        else {
            if (!nav.classList.contains('nav-activated')){
                nav.classList.toggle('nav-activated')
            }
            setTimeout(function() {
                if (!menuOpen && nav.classList.contains('nav-activated')) {
                    nav.classList.toggle('nav-activated')
                }
            }, 500);
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if(!menuOpen) {
                link.style.opacity = `1`
                link.style.animation = `navLinkFadeBack 0.5s ease forwards ${index / 14}s`;
                setTimeout(function() {
                    if (!menuOpen) {
                        link.style.animation = '';
                        link.style.opacity = '';
                    }
                }, 500);
            } else {
                
                link.style.opacity = '';
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    }

    burger.addEventListener('click', () => {
        // Toggle Nav
        ToggleMenu();
    });

    nav.addEventListener("click", function(e) {
        ToggleMenu();
    })
}

navSlide();