/**
 * CASHIER function with brute force algorithm (using recursion)  
 * 
 * With recursion we can scan / traverse every single (!) combination of units / changes.
 * 
 * This is what is called a "brute force" algorithm. We just force our way to the solution.
 * The first working change will be returned as success. 
 */

function checkCashRegister(totalPrice, amountGiven, cashInDrawer) {
  
  let change = [];
  let totalInDrawer = { total: 0 }; // this object will add up the totals 
    // of each unit
  let totalChange = amountGiven - totalPrice;
  let remainingChange = totalChange;
  
  sortCashInDrawerDescending(cashInDrawer); /* needed to assure we always  
    loop through our drawer from highest to lowest units 
    (higher units have priority in payout) 
  */

  // check the drawer recursively - unit by unit
  remainingChange = checkUnitPayout(change, cashInDrawer, 0, remainingChange, totalInDrawer );

  // at the end: check if we can fully pay out the person or if funds are not sufficient
  let result = { status: '', change: [] };

  // customer blew the bank... 
  if(totalChange == totalInDrawer.total) {
    result.status = "CLOSED";
    result.change =  cashInDrawer.reverse(); 
  }
  // we can give exact change
  else if(remainingChange == 0) {
    result.status = "OPEN";
    result.change = change.reverse();
  }
  // we cannot give exact change. Too sad.
  else {
    result.status = "INSUFFICIENT_FUNDS";
  }
  console.log(result);
  console.log();
  return result;
}

/**
 * This function calculates the change for a given unit recursively (brute force). 
 * 
 * This means: It will try out each possible path to give back exact change (always prefering a maximum payout per unit)
 * If a path does not work (meaning: returning a remainder different from 0 at the end), it will go back one step. 
 * And will try out the next path.
 * 
 * Example: We have to give back 0.8 change
 * 
 * We have a drawer of [["QUARTER", 0.75], ["DIME", 0.30]]
 * 
 * Paying out 3 quarters is possible. But it leads to a problem. 
 * We cannot express the remaining 0.05 in dimes!
 * 
 * So we have to go back one step and try out 2 quarters next. Now we can express the remaining 0.3 in dimes sucessfully and can give an
 * exact change.
 * 
 * This "trying out every possibility" approach is a classical recursion use case.
 * 
 */
function checkUnitPayout(change, cashInDrawer, index, remainderOrig, totalInDrawer) {

  let currUnit = cashInDrawer[index];
  let unitLabel = currUnit[0]
  let unitTotal = currUnit[1];
  let unit = cashUnitToNumber(unitLabel);
  totalInDrawer.total += unitTotal; // add the current unit up to our total
    // we need this later to check Status "Closed" (if the customer exploited all our resources)

  // how many items of this unit fit into our remainder?
  let unitCount = howOftenFitsUnitIntoNumber(unitTotal >= remainderOrig ? remainderOrig : unitTotal, unit);
  
  // check each amount of the current unit we can pay out (from maximum units to minmum)
  for (let i = unitCount; i>0; i--) {

    // subtract the amount from the remainder
    let remainder = roundTwoDigits(remainderOrig - i*unit);

    // full change reached? > great!
    // add current unit to the change array
    if(remainder == 0) {
      change.push([unitLabel, roundTwoDigits(i*unit)]);
      return 0;
    }
    // last unit reached / no following unit? remainder still present ? 
    // => immediately give remainder / failure upwards 
    // (this path did not work)
    else if(isLastUnit(index, cashInDrawer)) {
      return remainder;
    }

    // handle remainder: we explore further units...

    // call next unit to continue with splitting remainder...
    remainder = checkUnitPayout(change, cashInDrawer, index+1, remainder, totalInDrawer );

    // next unit gave us a success (remainder = 0) ? Great. 
    // We can add our current unit change to the total change 
    // and pull it upwards...
    if(remainder == 0) {
      change.push([unitLabel, roundTwoDigits(i*unit)]);
      return 0;
    }

  }

  // this unit did not provide anything to the change at all
  // check next available unit...
  if(unitCount == 0 && !isLastUnit(index, cashInDrawer)) {
    return checkUnitPayout(change, cashInDrawer, index+1, remainderOrig, totalInDrawer );
  }
  // no next unit => leave
  return remainderOrig;

}

/* determines if the given cash unit is the last in the units stack 
   => important for our recursive algorithm so it knows at which point to stop
*/
function isLastUnit(index, cashInDrawer) {
  return (index == cashInDrawer.length-1);
}

function howOftenFitsUnitIntoNumber(total, unit) {
  return Math.floor((total * 100) / (unit * 100));
}

function roundTwoDigits(number) {
  return Math.round(number * 100) / 100;
}

function cashUnitToNumber(strCashUnit) {
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

/* this sorts the drawer contents from highest to lowest units */
function sortCashInDrawerDescending(cashInDrawer) {
  cashInDrawer.sort((unitA,unitB) => {
    return cashUnitToNumber(unitB[0])-cashUnitToNumber(unitA[0]);
  });
  return cashInDrawer;
}


checkCashRegister(0.2, 1, [["DIME", 0.30], ["QUARTER", 0.75]]);
// FREE CODE CAMP tests 
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.0], ["NICKEL", 0.05], ["DIME", 0.2], ["QUARTER", 0.25], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
