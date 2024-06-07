let url = "https://catfact.ninja/fact";

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


async function getFacts() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.fact);

        let response1 = await fetch(url);
        let data1 = await response1.json();
        console.log(data1.fact);

    } catch (err) {
        console.log(err);
    }

    console.log("ended!");

}

