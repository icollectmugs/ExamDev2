// Changing Jumbotron Image
function changeImage(element) {
    element.setAttribute("src", "assets/img-header2.png")
    // element.setAttribute("height", "300")
    //element.setAttribute("class", "jumbotron-img")
}
    function changeImageBack(element) {
    element.setAttribute("src", "assets/img-header1.png")
    // element.setAttribute("height", "300")
    }

// Like and Dislike
var btnLike = document.querySelector("#green")
var btnDislike = document.querySelector("#red")

if (btnLike) {
    btnLike.onclick = likeColor;
}

if (btnDislike) {
    btnDislike.onclick = dislikeColor;
}

function likeColor() {
    if (btnDislike.classList.contains("red")) {
        btnDislike.classList.remove("red")
    }
    this.classList.toggle("green")
}

function dislikeColor() {
    if (btnLike.classList.contains("green")) {
        btnLike.classList.remove("green");
    }
    this.classList.toggle("red")
}