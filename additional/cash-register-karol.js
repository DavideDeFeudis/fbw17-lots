function checkCashRegister(price, cash, cid) {

    let values = [{
            name: "PENNY",
            value: 0.01
        },
        {
            name: "NICKEL",
            value: 0.05
        },
        {
            name: "DIME",
            value: 0.1
        },
        {
            name: "QUARTER",
            value: 0.25
        },
        {
            name: "ONE",
            value: 1
        },
        {
            name: "FIVE",
            value: 5
        },
        {
            name: "TEN",
            value: 10
        },
        {
            name: "TWENTY",
            value: 20
        },
        {
            name: "ONE HUNDRED",
            value: 100
        },
    ]

    //WE ADD THE VALUE OF ONE COIN/BILL TO THE CID ARRAY
    cid = cid.map(item => {
        item.push(values.filter(i => item[0] === i.name)[0].value);
        return item;
    });

    //CHANGE THAT CLIENT SHOULD GET
    let changeBack = parseFloat((cash - price).toFixed(2));

    //OBJECT THAT WE WILL RETURN
    let result = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    }

    // TOTAL CASH
    let cashTotal = parseFloat(
        cid
        .filter(p => p[2] <= changeBack)
        .reduce((p, c) => p + c[1], 0)
        .toFixed(2)
    );

    // IN CASE WE HAVE FUNDS
    if (cashTotal > changeBack) {

        //WE COPY CID ARRAY TO RESULT.CHANGE PROPERTY
        result.change = cid.map(item => {
            item = [...item] // WE COPY SUBARRAY, THIS IS VERY IMPORTANT TO NOT MODIFY CID AND RESULT.CHANGE AT THE SAME TIME
            item[1] = 0;
            return item;
        });

        // HERE WE SET THE STATUS OF RESULT
        result.status = "OPEN";

        // WE START FROM THE LAST ELEMENT IN CID ARRAY
        let index = cid.length - 1;

        // HERE THE MAGIC HAPPENS
        // UNTIL THE CHANGE TO GIVE BACK IS EQUAL TO 0 WE DO SOMETHING
        while (changeBack > 0) {

            // INDEX OF CURRENT COIN OR BILL THAT WE ARE CHECKING 
            let current = cid[index];

            // IF (CHANGE - CURRENT BILL/COIN) IS SMALLER THAN 0
            // IT MEANS THAT WE ARE GIVING BACK TOO MUCH, AND WE HAVE TO GO TO THE NEXT LOWER VALUE OF COIN/BILL
            // OTHERWISE WE DEDUCT OUR CHANGE, WE MODIFY THE CASHIER, AND MODIFY RESULT OBJECT
            if (changeBack - current[2] >= 0 && current[1] > 0) {

                // THIS IS REMAINING AMOUNT FOR THE CLIENT
                changeBack = parseFloat((changeBack - current[2]).toFixed(2));

                // EACH TIME WE GIVE COIN/BILL TO THE CLIENT WE SAVE IT IN RESULT OBJECT
                result.change[index][1] = parseFloat((result.change[index][1] + current[2]).toFixed(2));

                // WE REMOVE FROM THE CID THE COIN/BILL THAT WE JUST PAID TO THE CLIENT FROM
                cid[index][1] -= current[2];

            } else {
                // IF CURRENT VALUE OF COIN OR BILL IS TOO HIGH
                // OR IF WE ARE OUT OF THAT COIN OR BILL
                // WE MOVE TO THE LOWER VALUE
                index--;
            }

        }

        // WE SET THE PROPER FORMAT OF OUR SUBARRAYS IN RESULT BY REMOVING 3RD ITEM
        result.change = result.change
            .filter(item => item[1] !== 0)
            .sort((a, b) => b[2] - a[2])
            .map(item => {
                item.pop();
                return item;
            });

    } else if (cashTotal === changeBack) { // IF TOTAL CASH IS THE SAME AS CHANGE FOR CLIENT
        result.status = "CLOSED";
        result.change = cid.map(item => {
            item.pop();
            return item;
        });
    }

    // WE RETURN OUR RESULT OBJECT
    return result;
}

console.log(checkCashRegister(1, 10, [
    ["PENNY", 1.12],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));