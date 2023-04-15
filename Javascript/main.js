// click effect mouse

function clickEffect(e) {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
}
document.addEventListener('click', clickEffect);

// animation scroll

// Create the observer
const observer = new IntersectionObserver(entries => {
    // We will fill in the callback later...
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.skill-card'));

entries.forEach(entry => {
    if (entry.isIntersecting) {
        // It's visible. Add the animation class here!
    }
});

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('square-animation');
        }
    });
});

observer.observe(document.querySelector('.skill-card'));