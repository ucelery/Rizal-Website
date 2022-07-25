// CHANGE NAV BAR ON SCROLL
$(document).ready(function () {
    let intro = document.getElementById('intro');
    let introTop = intro.offsetTop;
    let introEnd = document.getElementById('introEnd');
    let introEndTop = introEnd.offsetTop;

    // Get all lines to be converted to white
    // Colored BG
    let linesBG = Array.prototype.slice.call(document.getElementsByClassName('lines-bg'))
    // Colored borders
    let linesBR = Array.prototype.slice.call(document.getElementsByClassName('lines'))

    let wrapper = document.getElementById('wrapper');

    $(window).scroll(function () {
        let quill = document.getElementById('quill');
        if (window.pageYOffset >= introTop && window.pageYOffset <= (introEndTop + (introEnd.clientHeight * .7))) {
            initLightMode();
        } else {
            // DARK MODE
            initDarkMode();
        }
    });

    const initLightMode = () => {
        quill.classList.add('newQuill');
        quill.style.opacity = 1;

        wrapper.style.backgroundColor = '#FFEFA7';
        wrapper.style.color = 'black';

        linesBR.forEach(item => {
            item.classList.remove('line-toggle');
        });

        linesBG.forEach(item => {
            item.classList.remove('line-toggle-bg');
        });
    }

    const initDarkMode = () => {
        quill.style.opacity = 0;

        wrapper.style.color = 'whitesmoke';
        wrapper.style.backgroundColor = '#11110F';

        linesBR.forEach(item => {
            item.classList.add('line-toggle');
        });

        linesBG.forEach(item => {
            item.classList.add('line-toggle-bg');
        });
    }

    new WOW().init();
});