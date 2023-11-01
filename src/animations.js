let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("in view")
            entry.target.classList.add('show')
        }
        else {
            console.log("out of view");
            entry.target.classList.remove('show')
        }
    });
});

let hiddenElements = document.querySelectorAll(".hidden");
console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));