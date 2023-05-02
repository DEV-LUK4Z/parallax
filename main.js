const h1 = document.getElementById('h1');
const banner = document.getElementById('banner');
const button = document.getElementById('button');

const onScroll = (event) => {
        const scrollPosition = event.target.scrollingElement.scrollTop;

        if (scrollPosition > 150) {
                banner.style.backgroundSize = '130%';
                
                h1.style.opacity = 0;
                h1.style.translate = '0 -50px';
                h1.style.scale = '0.9';

                button.style.opacity = 0;
                button.style.translate = '0 -40%';
                button.style.scale = '0.8';
        } else {
                banner.style.backgroundSize = '180%';

                h1.style.opacity = 1;
                h1.style.translate = 0;
                h1.style.scale = 1;

                button.style.opacity = 1;
                button.style.translate = 0;
                button.style.scale =1;
        }
};

document.addEventListener("scroll", onScroll);