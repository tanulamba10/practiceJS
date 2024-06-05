// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
let h2 = document.querySelector("h2");
let inp = document.querySelector("input");

inp.addEventListener("keypress", function (event) {
    let key = event.key.toLowerCase();
    console.log("key was pressed", key);

    if (/^[a-z]$/.test(key)) {
        h2.innerText = inp.value;
    } else {
        event.preventDefault();
    }
});


// btn.addEventListener("click", function () {
//     btn.style.backgroundColor = "green";
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color updated");

// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// };

// window.addEventListener("load", function () {
//     this.alert("you've loaded the page!");
// });

// window.addEventListener("scroll", function () {
//     console.log("scrolled!");
// });

// inp.addEventListener("keypress", function () {
//     console.log("key was pressed");
// });

// btn.addEventListener("mouseout", function () {
//     btn.style.height = "21px";
//     btn.style.width = "110px";
// });

// btn.addEventListener("mouseenter", function () {
//     btn.style.height = "26px";
//     btn.style.width = "116px";
// });

