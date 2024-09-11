"use strict";
const images = document.querySelectorAll('img');
const windowHeight = window.innerHeight / 5 * 4;
window.addEventListener('scroll', () => {
    Array.from(images).forEach((i) => {
        const boxPosition = i.getBoundingClientRect().top;
        if (boxPosition < windowHeight) {
            i.classList.add('active');
        }
        else {
            i.classList.remove('active');
        }
    });
});
//# sourceMappingURL=app.js.map