onmessage = (message) => {
    let sum = 0;
    let cumulativeOf = 10000000000;
    for (let i = 0; i < cumulativeOf; i++) {
        sum += i;
    }

    postMessage(sum);
};