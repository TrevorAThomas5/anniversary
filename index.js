// add scroll listener to date div
var isScrolling;
window.addEventListener('scroll', function(event) {
    date = document.getElementById('date-wrap');
    sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
    newPos = window.scrollY / document.body.clientHeight * window.innerHeight;
    date.style.top = newPos + 'px';
    date.style.width = '100px';
    text = document.getElementById('date-text');
    text.style.opacity = '1';

    window.clearTimeout(isScrolling);

    // shrink after a second
    isScrolling = setTimeout(function() {
        date.style.transition = '0.3s;';
        date = document.getElementById('date-wrap');
        date.style.width = '6px';
        text = document.getElementById('date-text');
        text.style.opacity = '0';
    }, 1000);
}, false );


window.onload = function() {
// add video play on hover
const videos = document.getElementsByTagName("video");
for(let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('mouseover', function(e) {
        videos[i].play()
    });
    videos[i].addEventListener('mouseout', function(e) {
        videos[i].pause()
    });
}
}
