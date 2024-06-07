let url1 = "https://catfact.ninja/fact";
let btn1 = document.querySelector("#btn1");
let para = document.querySelector("p");


let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");
let img = document.querySelector("img");

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

