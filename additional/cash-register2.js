const makeArrayOfObj = (cid) => {
    let cidObj = [
        // {
        //     name: 'PENNY',
        //     unit: 0.01 * 100,
        //     total: cid[0][1] * 100
        // },
        // {
        //     name: 'NICKEL',
        //     unit: 0.05 * 100,
        //     total: cid[1][1] * 100
        // },
        {
            name: 'DIME',
            unit: 0.1 * 100,
            total: cid[1][1] * 100
        },
        {
            name: 'QUARTER',
            unit: 0.25 * 100,
            total: cid[0][1] * 100
        }
        // ,
        // {
        //     name: 'ONE',
        //     unit: 1 * 100,
        //     total: cid[4][1] * 100
        // },
        // {
        //     name: 'FIVE',
        //     unit: 5 * 100,
        //     total: cid[5][1] * 100
        // },
        // {
        //     name: 'TEN',
        //     unit: 10 * 100,
        //     total: cid[6][1] * 100
        // },
        // {
        //     name: 'TWENTY',
        //     unit: 20 * 100,
        //     total: cid[7][1] * 100
        // },
        // {
        //     name: 'ONE-HUNDRED',
        //     unit: 100 * 100,
        //     total: cid[8][1] * 100
        // }
    ];
    return cidObj;
};

const checkCashRegister = (price, cash, cid) => {

    let changeDue = cash * 100 - price * 100;
    let totalCid = 0;
    let changeArr = [];
    let cidObj = makeArrayOfObj(cid).reverse();
    cidObj
    

    cidObj.forEach(type => {

        totalCid += type.total; // calculate total cid

        let changeGiven = 0; // of current type
        changeDue
        type 

        while (changeDue >= type.unit && type.total > 0) { // until i can give back cash of current type && until cash remaining in current type
            type.total -= type.unit; // update total remaining of current type
            totalCid -= type.unit; // update total cid
            changeDue -= type.unit // update changeDue   
            changeGiven += type.unit; // update change given of current type 
        };

        if (changeGiven != 0) { // push only if you gave change of current type
            changeArr.push([type.name, changeGiven / 100]) // build arr with type name and changeGiven of current type and push it to arr of change of all types
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

console.log(checkCashRegister(0.20, 1, [
    ["QUARTER", "0.75"],
    ["DIME", "0.3"]
]));