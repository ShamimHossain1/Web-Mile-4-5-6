function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log(dataId);
        if (getNextData) {
            getNextData();
        }
    }, 1000);
}

getData(1, () => { getData(2, () => { getData(3, () => { getData(4) }) }) });
// getData(2);
// getData(1);