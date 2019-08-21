const currencyStringToNumber = (cid) => {
    cid.forEach(item => {
        switch (item[0]) {
            case "TEN":
                item[0] = 10;
                break;
            case "FIVE":
                item[0] = 5;
                break;
            case "ONE":
                item[0] = 1;
                break;
            default:
                break;
        }
    });
}

function checkCashRegister(price, cash, cid) {
    currencyStringToNumber(cid);
    let changeDue = cash - price;
    let changeInCurrentCurrency = 0;
    let changeArray = [];
    let outputObject = {
        status: "OPEN",
        change: changeArray
    };
    // let totalCid = cid.reduce((total, item) => { return total + item[1] }, 0);
    // totalCid -= changeDue;
    for (i = cid.length - 1; i >= 0; i--) {
        let currencyUnit = cid[i][1];
        let currencyName = cid[i][0];
        changeInCurrentCurrency = changeDue - (changeDue % currencyName);
        currencyUnit
        changeInCurrentCurrency
        if (currencyUnit >= changeInCurrentCurrency) {
            changeArray.push(changeInCurrentCurrency);
            changeDue = changeDue % currencyName;
            console.log('i', i);
            console.log('pushed to array');
            console.log('currencyUnit', currencyUnit);
            console.log('changeInCurrentCurrency', changeInCurrentCurrency);

        } else if (changeDue > currencyUnit && i === 0) {
            console.log('i', i);
            console.log('currencyUnit', currencyUnit);
            console.log('changeInCurrentCurrency', changeInCurrentCurrency);
            return {
                status: "INSUFFICIENT_FUNDS",
                change: []
            };
        }
        console.log('i', i);
        console.log('no hit');
        console.log('currencyUnit', currencyUnit);
        console.log('changeInCurrentCurrency', changeInCurrentCurrency);
    }
    return outputObject;
}
let currentCid = [
    ["ONE", 9],
    ["FIVE", 20],
    ["TEN", 0]
];

console.log(checkCashRegister(1, 30, currentCid));


// else if (totalCid === 0) {
//     changeArray.push(changeInCurrentCurrency);
//     changeDue = changeDue % currencyName;
//     return {status: "CLOSED", change: changeArray};
// }






// changeDue = 28

// first iteration
// 28 - (28 % 10) // 20 changeInCurrentCurrency
// if there are enough money in the current currency 
// aka currencyUnit >= changeInCurrentCurrency
// push 20 to arr
// changeDue = (28 % 10) = 8

// next iteration
// 8 - (8 % 5) = 5
// (8 % 5) = 3

// next iteration
// 3 - (3 % 1) = 3
// changeDue = (3 % 1) = 0