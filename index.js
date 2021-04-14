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


    /*
    // line animations
    var lines = document.querySelectorAll('img, video');
    for(var i = 0; i < lines.length; i++) {
        var wHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        var scrollPosition = scrollY + wHeight;
        var elementPosition = lines[i].getBoundingClientRect().top + scrollY + lines[i].clientHeight;

        if(scrollPosition > elementPosition) {
            // run animation
            lines[i].style.transform = 'scale(1)';
            lines[i].style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px';
            lines[i].style.opacity = '1';
        }
        else {
            lines[i].style.transform = 'scale(1.2)';
            lines[i].style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';
            lines[i].style.opacity = '0';
        }   
        
    }
    */


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
