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

    if(newPos < 35)
        text.innerHTML = 'Jan 2020';
    else if(newPos < 75)
        text.innerHTML = 'Feb 2020';
    else if(newPos < 120)
        text.innerHTML = 'May 2020';
    else if(newPos < 160)
        text.innerHTML = 'Jun 2020';
    else if(newPos < 240)
        text.innerHTML = 'Jul 2020';
    else if(newPos < 400)
        text.innerHTML = 'Aug 2020';
    else if(newPos < 600)
        text.innerHTML = 'Sep 2020';
    else if(newPos < 635)
        text.innerHTML = 'Oct 2020';
    else if(newPos < 675)
        text.innerHTML = 'Nov 2020';
    else if(newPos < 725)
        text.innerHTML = 'Dec 2020';
    else if(newPos < 830)
        text.innerHTML = 'Feb 2021';
    else
        text.innerHTML = 'Mar 2021';


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
