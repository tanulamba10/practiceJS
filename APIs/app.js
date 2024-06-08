// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// async function getFacts() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data.fact);

//         let response1 = await fetch(url);
//         let data1 = await response1.json();
//         console.log(data1.fact);

//     } catch (err) {
//         console.log(err);
//     }

//     console.log("ended!");

// }


let url1 = "https://catfact.ninja/fact";
let btn1 = document.querySelector("#btn1");
let para = document.querySelector("p");

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");
let img = document.querySelector("img");

let url3 = "https://icanhazdadjoke.com/";
let btn3 = document.querySelector("#btn3");
let para2 = document.querySelector("#out");


btn1.addEventListener("click", async () => {
    let fact = await getFact();
    para.innerText = fact;
});
async function getFact() {
    try {
        let response = await axios.get(url1);
        return response.data.fact;

    } catch (err) {
        console.log(err);
        return "NO FACT FOUND!";
    }
}

btn2.addEventListener("click", async () => {
    let link = await getImage();
    img.setAttribute("src", link);
});
async function getImage() {
    try {
        let response = await axios.get(url2);
        return response.data.message;

    } catch (err) {
        console.log(err);
        return "NO IMAGE FOUND!";
    }
}

btn3.addEventListener("click", async () => {
    let joke = await getJoke();
    para2.innerText = joke;
});
async function getJoke() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let response = await axios.get(url3, config);
        return response.data.joke;

    } catch (err) {
        console.log(err);
        return "NO JOKE FOUND!";
    }
}


