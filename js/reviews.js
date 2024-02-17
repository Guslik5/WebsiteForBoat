window.addEventListener('DOMContentLoaded', function() {
    const formReviews = document.getElementById("form-reviews");
    const tableReviews = document.getElementById("reviews-table")

    let storedTable = localStorage.getItem("Data");
    if (storedTable) {
        tableReviews.innerHTML = storedTable;
    }
    // localStorage.clear()

    formReviews.onsubmit = function (event){
        event.preventDefault();

        let formData = new FormData(event.target);

        let row = tableReviews.insertRow();
        row.insertCell().textContent = formData.get('name');
        row.insertCell().textContent = formData.get('nameBoat');
        row.insertCell().textContent = formData.get('nameCaptain');
        row.insertCell().textContent = formData.get('comment');
        row.insertCell().textContent = formData.get('rating');


        // let row = tableReviews.insertRow();
        // row.insertCell().textContent = event.target[0].value;
        // row.insertCell().textContent = event.target[1].value;
        // row.insertCell().textContent = event.target[2].value;
        // row.insertCell().textContent = event.target[3].value;
        // row.insertCell().textContent = event.target[4].value;

        localStorage.setItem("Data", tableReviews.innerHTML);
    }



});
