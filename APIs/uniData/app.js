let url4 = "http://universities.hipolabs.com/search?country=india";
let btn4 = document.querySelector("#search");
let inp = document.querySelector("input");
let ul = document.querySelector("#list");
let h2 = document.querySelector("#college");


btn4.addEventListener("click", async () => {
    let colArr = await getColleges();
    show(colArr);
});

function show(colArr) {
    ul.innerText = "";
    let state = inp.value;
    const list = colArr.filter(uni => uni["state-province"] == state);
    // console.log(list);
    for (item of list) {
        // console.log(item);
        let li = document.createElement("li");
        li.innerText = item.name;
        ul.appendChild(li);
    };
}

async function getColleges() {
    try {
        let res = await axios.get(url4);
        return res.data;
    } catch (err) {
        return [];
    }
}