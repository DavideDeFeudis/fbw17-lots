function checkCashRegister(totalPrice, amountGiven, cashInDrawer) {
  
  let change = [];
  let totalInDrawer = 0;
  let totalPayout = amountGiven - totalPrice;
  let remainingPayout = totalPayout;
    
  console.log("[CASHIER] Have to pay out: ", totalPayout);

  /* reverse: needed to loop through our drawer
     from highest to lowest units (higher units have priority in payout) */
  cashInDrawer.reverse();

  /* go through each unit and check how much we can pay out per unit */
  cashInDrawer.forEach(currItem => {

    let unitLabel = currItem[0];
    let unitTotal = currItem[1];
    let unit = unitLabelToNumber(unitLabel);
    let unitCount = 0;

    totalInDrawer += unitTotal; // unit by unit: count up the totals we have in the drawer 
      // => will be needed later to check for status "CLOSED" (= all money in drawer paid out) 

    // does the total of this unit fit into our remainder? Pay out everything
    if( unitTotal <= remainingPayout  ) {
      remainingPayout = roundTwoDigits(remainingPayout - unitTotal);
      change.push([unitLabel, unitTotal]); // add payout of this unit to our change
    }

    // pay out a partial amount of the unit budget (if possible)
      // (only if the unit itself is not the bigger than the remaining total. 
      //  otherwise we continue)
    else if( unit <= remainingPayout  ) {
      unitCount = howOftenFitsUnitIntoNumber(remainingPayout, unit);
      remainingPayout = roundTwoDigits(remainingPayout - unitCount*unit);
      change.push([unitLabel, unitCount * unit]); // add payout of this unit to our change
    }

  });

  // at the end: check if we can fully pay out the customer or 
  // if our funds are not sufficient
  let result = { status: '', change: [] };

  // customer blew the bank... 
  if(totalPayout == totalInDrawer) {
    result.status = "CLOSED";
    result.change =  cashInDrawer.reverse(); 
  }
  // we can give exact change
  else if(remainingPayout == 0) {
    result.status = "OPEN";
    result.change = change;
  }
  // we cannot give exact change
  else {
    result.status = "INSUFFICIENT_FUNDS";
  }
  console.log(result);
  console.log();
  return result;
}

/* Check how often the number fits. Use the trick
 to convert floats into whole integers to do math operations. So you avoid the quirky JS behaviour
 (floating point math is not reliable)
 Math.floor() will round downwards => example: 3 / 2 = 1.5 => 2 fits exactly once into 3. By rounding downward we get the right value (=1)
 */
function howOftenFitsUnitIntoNumber(total, unit) {
  return Math.floor((total * 100) / (unit * 100));
}

/* round two decimal digits - again with the integer (whole numbers) conversion hack */
function roundTwoDigits(number) {
  return Math.round(number * 100) / 100;
}

/* convert the string labels into actual values */
function unitLabelToNumber(strCashUnit) {
  switch(strCashUnit) {
    case "ONE HUNDRED": return 100; 
    case "TWENTY": return 20;
    case "TEN": return 10;
    case "FIVE": return 5;
    case "ONE": return 1;
    case "QUARTER": return 0.25;
    case "DIME": return 0.1;
    case "NICKEL": return 0.05;
    case "PENNY": return 0.01;
  }
}

// FREE CODE CAMP tests 
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.0], ["NICKEL", 0.05], ["DIME", 0.2], ["QUARTER", 0.25], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
