

page = window.document.location.pathname
// http://localhost:63342/boatWebsite/www/index.html
// /boatWebsite/www/index.html


console.log(page)
if (page == "/boatWebsite/www/index.html"){
    document.getElementById("button-main").style.textDecoration = "underline red"
}

if (page == "/boatWebsite/www/boats.html"){
    document.getElementById("button-boats").style.textDecoration = "underline red"
}

if (page == "/boatWebsite/www/routes.html"){
    document.getElementById("button-routes").style.textDecoration = "underline red"
}

if (page == "/boatWebsite/www/events.html"){
    document.getElementById("button-events").style.textDecoration = "underline red"
}

if (page == "/boatWebsite/www/reviews.html"){
    document.getElementById("button-reviews").style.textDecoration = "underline red"
}

if (page == "/boatWebsite/www/contacts.html"){
    document.getElementById("button-contacts").style.textDecoration = "underline red"
}

(function() {
    let startTime = new Date().getTime();

    window.addEventListener('load', function(){
        var loadTime = new Date().getTime() - startTime;

        var loadState = document.createElement('div');
        loadState.style.position = 'fixed';
        loadState.style.bottom = '0';
        loadState.style.left = '0';
        loadState.style.backgroundColor = 'white';
        loadState.style.color = 'black';
        loadState.innerHTML = 'Страница загружена за ' + loadTime + ' мс';

        document.body.appendChild(loadState);
    });
})();

