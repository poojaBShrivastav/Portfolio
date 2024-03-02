let nav_link = document.querySelectorAll(".nav-link");

for (let index = 0; index < nav_link.length; index++) {

    nav_link[index].addEventListener("click", function () {

        var current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    })
}