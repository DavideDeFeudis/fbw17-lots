const currencyStringToNumber = (cid) => {
    cid.forEach(item => {
        switch (item[0]) {
            case "ONE HUNDRED":
                item[0] = 10000;
                break;
            case "TWENTY":
                item[0] = 2000;
                break;
            case "TEN":
                item[0] = 1000;
                break;
            case "FIVE":
                item[0] = 500;
                break;
            case "ONE":
                item[0] = 100;
                break;
            case "QUARTER":
                item[0] = 25;
                break;
            case "DIME":
                item[0] = 10;
                break;
            case "NICKEL":
                item[0] = 5;
                break;
            case "PENNY":
                item[0] = 1;
                break;
            default:
                break;
        }
    });
}

const currencyNumberToString = (cid) => {
    cid.forEach(item => {
        switch (item[0]) {
            case 10000:
                item[0] = "ONE HUNDRED";
                break;
            case 2000:
                item[0] = "TWENTY";
                break;
            case 1000:
                item[0] = "TEN";
                break;
            case 500:
                item[0] = "FIVE";
                break;
            case 100:
                item[0] = "ONE";
                break;
            case 25:
                item[0] = "QUARTER";
                break;
            case 10:
                item[0] = "DIME";
                break;
            case 5:
                item[0] = "NICKEL";
                break;
            case 1:
                item[0] = "PENNY";
                break;
            default:
                break;
        }
    });
}

const checkCashRegister = (price, cash, cid) => {

    currencyStringToNumber(cid);
    let changeDue = (cash - price) * 100;
    let changeInCurrency = 0;
    let changeArray = [];
    let outputObject = {
        status: "OPEN",
        change: changeArray
    };
    let totalCid = (cid.reduce((total, item) => {
        return total + item[1]
    }, 0)) * 100;

    for (i = cid.length - 1; i >= 0; i--) {

        let currencyUnit = cid[i][0];
        let currencyTotal = cid[i][1] * 100;
        changeInCurrency = changeDue - (changeDue % currencyUnit);

        if (currencyTotal === 0) { // useless
            // console.log('block', 1, 'currencyTotal === 0, push 0');
            changeArray.push([currencyUnit, 0]);
        } else if (currencyTotal < changeInCurrency && i !== 0) {
            // console.log('block', 2, 'currencyTotal <= changeInCurrency, push currency total');
            changeArray.push([currencyUnit, currencyTotal / 100]);
            changeDue -= currencyTotal;
            totalCid -= currencyTotal;
        } else if (currencyTotal >= changeInCurrency) {
            // console.log('block', 3, 'currencyTotal > changeInCurrency, push change in currency');
            changeArray.push([currencyUnit, changeInCurrency / 100]);
            changeDue -= changeInCurrency;
            totalCid -= changeInCurrency;
        }

        if (changeDue > currencyTotal && i === 0) { // if not enough change in smallest currency
            console.log('block', 4, 'changeDue > currencyTotal && i === 0, no funds');
            return {
                status: "INSUFFICIENT_FUNDS",
                change: []
            };
        }

        if (totalCid === 0) {
            currencyNumberToString(cid)
            return {
                status: "CLOSED",
                change: cid
            };
        }
    }
    currencyNumberToString(changeArray);
    return outputObject;
}

let cid = [
    ["PENNY", 1.12],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 0],
    ["FIVE", 5],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 400]
];

console.log(checkCashRegister(20, 40, cid));

// console.log('');
// console.log('total cid', totalCid);
// console.log('changeDue', changeDue);
// console.log('changeInCurrency', changeInCurrency);
// console.log('currencyTotal', currencyTotal);
// console.log('i', i);
// console.log(cid);