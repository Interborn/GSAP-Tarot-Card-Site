const tarotCards = [
    {
        title: 'Ace of Cups',
        image: 'images/tarot/ace-of-cups.png',
        description: '',
    },
    {
        title: 'Ace of Swords',
        image: 'images/tarot/ace-of-swords.png',
        description: '',
    },
    {
        title: 'Ace of Wands',
        image: 'images/tarot/ace-of-wands.png',
        description: '',
    },
    {
        title: 'Death',
        image: 'images/tarot/death.png',
        description: '',
    },
    {
        title: 'Temperance',
        image: 'images/tarot/temperance.png',
        description: '',
    },
    {
        title: 'The Devil',
        image: 'images/tarot/the-devil.png',
        description: '',
    },
    {
        title: 'The Emporer',
        image: 'images/tarot/the-emporer.png',
        description: '',
    },
    {
        title: 'The Hanged One',
        image: 'images/tarot/the-hanged-one.png',
        description: '',
    },
    {
        title: 'The Hierophant',
        image: 'images/tarot/the-hierophant.png',
        description: '',
    },
    {
        title: 'The High Priestess',
        image: 'images/tarot/the-high-priestess.png',
        description: '',
    },
    {
        title: 'The Lovers',
        image: 'images/tarot/the-lovers.png',
        description: '',
    },
    {
        title: 'The Moon',
        image: 'images/tarot/the-moon.png',
        description: '',
    },
    {
        title: 'The Sun',
        image: 'images/tarot/the-sun.jpg',
        description: '',
    },
    {
        title: 'The Tower',
        image: 'images/tarot/the-tower.png',
        description: '',
    },
    {
        title: 'The World',
        image: 'images/tarot/the-world.png',
        description: '',
    },
    {
        title: 'Three of Pentacles',
        image: 'images/tarot/three-of-pentacles.png',
        description: '',
    },
    {
        title: 'Wheel of Fortune',
        image: 'images/tarot/wheel-of-fortune.png',
        description: '',
    },
]

$(document).ready(function () {
    $(".title h4").on('click', function () {
        $(this).addClass('active');

        var tab = $(this).attr('id');
        
        if ($(this).hasClass('active')) {
            $(this).addClass('active');
            $('.title h4').not(this).removeClass('active');

            $('.img_group').removeClass('show');
            $('#' + tab + 'c').addClass('show');
        }

        // GSAP CARD ANIMATION
        let tl = gsap.timeline();

        tl.from(".img_group.show img:nth-child(2)", {
            scale: 0,
            rotate: -45,
            opacity: 0,
            duration: 1.1,
        })
        tl.from(".img_group.show img:nth-child(1)", {
            x: -100,
            rotate: 45,
            opacity: 0,
            duration: 1.6,
        })
        tl.from(".img_group.show img:nth-child(3)", {
            x: -300,
            rotate: -45,
            opacity: 0,
            duration: 1.1,
        }, '-=1.3')
    });

    let tl2 = gsap.timeline();

    tl2.from('.bg_stars .star', {
        scale: 0,
        duration: 1.4,
        opacity: 0,
        stagger: 1,
    })
    .from('.bg_stars .star', {
        rotate: 360,
        duration: 60,
        repeat: -1,
        stagger: 1,
    })
});