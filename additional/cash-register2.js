const makeArrayOfObj = (cid) => {
    let cidObj = [
        {
            name: 'DIME',
            unit: 0.1 * 100,
            total: cid[0][1] * 100
        },
        {
            name: 'ONE',
            unit: 1 * 100,
            total: cid[1][1] * 100
        },
        {
            name: 'FIVE',
            unit: 5 * 100,
            total: cid[2][1] * 100
        }
    ];
    return cidObj;
};

const checkCashRegister = (price, cash, cid) => {

    let changeDue = cash * 100 - price * 100;
    let totalCid = 0;
    let changeArr = [];
    let cidObj = makeArrayOfObj(cid).reverse();

    cidObj.forEach(type => {
        
        totalCid += type.total; // calculate total cid

        let changeGiven = 0;

        while (changeDue >= type.unit && type.total > 0) { // until i can give back cash of current type && until cash remaining in each type
            type.total -= type.unit; // update total remaining for each type
            totalCid -= type.unit; // update total cid
            changeDue -= type.unit // update changeDue   
            changeGiven += type.unit; // update change given for each type 
        };

        if (changeGiven != 0) { // push only if you give change
            changeArr.push([type.name, changeGiven / 100]) // build arr with name and changeGiven
        }
    });

    let outputObj = {
        status: "OPEN",
        change: changeArr
    }

    if (changeDue > 0) {
        outputObj.status = "INSUFFICIENT_FUNDS";
        outputObj.change = [];
    } else if (totalCid === 0) {
        outputObj.status = "CLOSED";
    };

    return outputObj;
};

console.log(checkCashRegister(8.6, 10, [
    ["DIME", 0.4],
    ["ONE", 2],
    ["FIVE", 0]
]));