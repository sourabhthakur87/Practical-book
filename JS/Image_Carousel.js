var prv = document.querySelector('.prv');
var next = document.querySelector('.next');

var images = document.querySelector('.imgbox').children;

totalImages = images.length;

var index = 0;

prv.addEventListener('click', () => {
    nextImage('prv');
})

next.addEventListener('click', () => {
    nextImage('next');
})


function nextImage(direction) {
    if (direction == "next") {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    }
    else {
        if (index == 0) {
            index = totalImages - 1
        }
        else {
            index--;
        }
    }

    for (let i = 0; i < totalImages; i++) {
        images[i].classList.remove('main')
    }
    images[index].classList.add('main');
}