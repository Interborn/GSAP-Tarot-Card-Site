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

    });
});