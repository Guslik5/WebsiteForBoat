window.addEventListener('DOMContentLoaded', function() {
    const formReviews = document.getElementById("form-reviews");
    const tableReviews = document.getElementById("reviews-table")

    let storedTable = localStorage.getItem("Data");
    if (storedTable) {
        tableReviews.innerHTML = storedTable;
    }

    formReviews.onsubmit = function (){
        const name = document.getElementById('name').value;
        const nameBoat = document.getElementById('nameBoat').value;
        const nameCaptain = document.getElementById('nameCaptain').value;
        const comment = document.getElementById('comment').value;
        const rating = document.getElementById('rating').value;

        let row = tableReviews.insertRow();
        row.insertCell().textContent = name;
        row.insertCell().textContent = nameBoat;
        row.insertCell().textContent = nameCaptain;
        row.insertCell().textContent = comment;
        row.insertCell().textContent = rating;

        localStorage.setItem("Data", tableReviews.innerHTML);
    }



});
