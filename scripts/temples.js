function toggleNav() {
    var nav = document.getElementById("navigation");
    if (nav.style.display === "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}