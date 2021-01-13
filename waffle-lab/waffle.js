//Start the Waffles maker

let waffles;
let syrup;
let money;

const start = () => {
  money = 10;
  syrup = 0;
  waffles = 0;
  alert("Are you ready for some Waffles?! You have $"+ money+ " if you need it.");
  askIfPrepared();
};

// Check if you have waffles
const  askIfPrepared = () => {
  const prepared = prompt("Do you have waffles and/or syrup in the fridge?", "Yes or No");
  if(prepared === "Yes"){
    eat();
  } else if(prepared === "No"){
  shop();
  }
};

// // Buy supplies
const shop = () => {
  const supplies = prompt ("Welcome to Ralphs! Do you need to buy syrup or waffles?", "Syrup or Waffles or Both");
  if(supplies === "Syrup") {
  buySyrup();
} else if (supplies === "Waffles"){
  buyWaffles();
} else if(supplies === "Both") {
  buyBoth();
};
};

// // Checkout

const buySyrup = () => {
  const purchaseSyrup = prompt("Syrup is on aisle 9. Buy Now?", "Yes or No");
  if (purchaseSyrup === "Yes") {
    syrup++;
    money -=5;
    alert ("You now have " + syrup + "and $" + money + ". Time to make some waffles!");
  } else if (purchaseSyrup === "No") {
    alert ("You still have $" + money + ". It seems like you don't want any waffles. See you later!");
  };
};

const buyWaffles = () => {
  const purchaseWaffles = prompt("Waffles are on aisle 15. Buy Now?", "Yes or No")
  if (purchaseWaffles === "Yes") {
    waffles++;
    money -=5;
    alert ("You now have " + waffles + "and $" + money + ". Time to make some waffles!")
  } else if (purchaseWaffles === "No") {
      alert ("You still have $" + money + ". It seems like you don't want any waffles. See you later!")
    }
};

// 

// const buyBoth = () => {
//   prompt("Syrup is on aisle 9 and waffles are on aisle 15. Buy Now?", "Yes or No")
// }

// if (buyBoth === "Yes") {
//   waffles++;
//   syrup++;
//   money -=10;
//   alert ("You now have " + waffles + "and " + syrup + "$" + money + ". Time to make some waffles!")
// } else if (buyBoth === "No") {
//   alert ("You still have $" + money + ". It seems like you don't want any waffles. See you later!")
// }









// //Take waffles out of the freezer
// const eat = () => {
//   alert("Head to the fridge to take your waffles out")
//   prompt("How do you like your waffles?", "Extra crispy | Crispy | A little soft")
// }

// //Determine cook time
// if (eat === "Extra crispy") {
//   alert("Add your waffles to the toaster and set the toaster temperature to high, your waffles will be ready in 3 minutes")
// } else if (eat === "Crispy") {
//   alert("Add your waffles to the toaster and set the toaster temperature to medium, your waffles will be ready in 3 minutes")
// } else if (eat === "A little soft") {
//   alert("Add your waffles to the toaster and set the toaster temperature to low, your waffles will be ready in 3 minutes")
// } 
