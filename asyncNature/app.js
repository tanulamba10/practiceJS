//Callback Hell
// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("helloWorld!",
//     () => {
//         console.log("Success! Data was saved.");
//         saveToDb("this is an example",
//             () => {
//                 console.log("Success1! Data was saved.");
//                 saveToDb("of callBack Hell.",
//                     () => {
//                         console.log("success2!");
//                     }, () => {
//                         console.log("failure2");
//                     });
//             },
//             () => {
//                 console.log("Failure1!");
//             });
//     },
//     () => {
//         console.log("Failure!");
//     });


//Promises
function saveToDataBase(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success!");
        } else {
            reject("Failure!");
        }
    });
}

saveToDataBase("HelloWorld!")
    .then((result) => {
        console.log(result);
        console.log("Data was saved");
        return saveToDataBase("this is an example");
    })
    .then((result) => {
        console.log(result);
        console.log("data1 was saved!");
        return saveToDataBase("of promise chaining");
    })
    .then((result) => {
        console.log(result);
        console.log("data2 was saved!");
    })
    .catch((error) => {
        console.log(error);
        console.log("Promise was rejected!");
    });