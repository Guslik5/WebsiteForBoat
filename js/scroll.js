window.addEventListener('scroll', function() {
    console.log(pageYOffset + 'px');
    if (pageYOffset !== 0){
        const header = document.getElementById("header")
        header.style.background = "rgba(61, 77, 224,.5)"
    }
    if (pageYOffset === 0){
        const header = document.getElementById("header")
        header.style.background = "rgba(255,255,255,.1)"
    }
});