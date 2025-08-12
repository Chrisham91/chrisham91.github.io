let navlinks = document.querySelectorAll(".navlinks a");
navlinks.forEach(link => {
    link.addEventListener("mouseover", function () {
        this.style.color = 'black';
    });
    link.addEventListener("mouseout", function () {
        this.style.color = '';
    });
});

let navItems = document.querySelectorAll(".navlinks li");
navItems.forEach(item => {
    item.addEventListener("mouseover", function () {
        this.style.backgroundColor = 'white';
        this.querySelector('a').style.color = 'black';
    });
    item.addEventListener("mouseout", function () {
        this.style.backgroundColor = '';
        this.querySelector('a').style.color = '';
    });
});