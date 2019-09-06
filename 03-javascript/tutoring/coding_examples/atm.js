
let account = {
    balance: 300,
    pin: 1234
};


function withdrawMoney(pinProvided, amount) {

  if(pinProvided === account.pin) {
    if(amount <= account.balance) {
      account.balance = account.balance - amount;
      console.log("Withdrawal successful");
      console.log("You now got: " + amount);
      console.log("Your new balance is: " + account.balance);
      return amount;
    }
    else {
      console.log("You are far too greedy");
    }
  }
  else {
    console.log("PIN incorrect. Please try again.")
  }
  console.log("-------");
}

withdrawMoney(1234, 100);
withdrawMoney(1234, 150);
withdrawMoney(1234, 1000);
