let para1 = document.createElement("p");
para1.innerText = "hey, i'm red!";
document.querySelector('body').prepend(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "i'm a blue h3.";
document.querySelector('body').prepend(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
document.querySelector("body").prepend(div);

h1.innerText = "i'm in a div";
p.innerText = "ME TOO!!";

div.append(h1);
div.append(p);

div.classList.add("div");