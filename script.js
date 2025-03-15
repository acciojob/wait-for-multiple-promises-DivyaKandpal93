//your JS code here. If required.
function createPromise(promiseNumber) {
    let timeTaken = (Math.random() * 2 + 1).toFixed(3);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ number: promiseNumber, time: timeTaken });
        }, timeTaken * 1000);
    });
}

const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3)
];

Promise.all(promises).then((results) => {
    const output = document.getElementById("output");
    output.innerHTML = "";

    let maxTime = 0;

    results.forEach((result) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>Promise ${result.number}</td><td>${result.time}</td>`;
        output.appendChild(row);

        if (parseFloat(result.time) > maxTime) {
            maxTime = parseFloat(result.time);
        }
    });

    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${maxTime.toFixed(3)}</td>`;
    output.appendChild(totalRow);
});
