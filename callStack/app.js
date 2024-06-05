function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let three = two() + one();
    console.log(three);
}

three();