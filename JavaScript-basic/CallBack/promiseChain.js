function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataId);
            resolve("Success");
        }, 1000);
    })
}

getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
});

