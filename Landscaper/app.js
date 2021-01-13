let money;

const start = () => {
  money = 0;
  alert("You are starting a landscaping business, but all you have are your teeth. You currently have $" + money)
  startCutting();
};

//Landscaping game
const  startCutting = () => {
  money++;  
  const go = alert("Let's use your teeth to begin cutting!");
  while(money<5) {
    alert("Great! You now have $" + money);
    const moreMoney = prompt("Keep going?", "Yes or No?");
    if (moreMoney === "Yes" || moreMoney === "yes") {
        money++;
    } else {
        stop();
    }
  }

// Buy Scissors  
  while(money<25){
    const buyScissors = prompt("You now have $" + money + "! Would you like to buy scissors to help you cut the grass!", "Yes or No?");
        if (buyScissors === "Yes" || buyScissors === "yes") {
            scissors();
            break;
        } else if (buyScissors === "No" || buyScissors === "no") {
            keepTeeth();
        } else {
            stop();
        }  
    }
  // Buy Lawnmower 
  while(money<50){
    const buyLawnmower = prompt("You now have $" + money + "! Would you like to buy a lawn mower to help you cut the grass!", "Yes or No?");
        if (buyLawnmower === "Yes" || buyLawnmower === "yes") {
            lawnmower();
            break;
        } else if (buyLawnmower === "No" || buyLawnmower === "no") {
            keepScissors();
        } else {
            stop();
        }  
    }
    // Buy battery-powered lawnmower
  while(money<500){
        const buyBatteryMower = prompt("You now have $" + money + "! Would you like to buy a battery mower to help you cut the grass!", "Yes or No?");
            if (buyBatteryMower === "Yes" || buyBatteryMower === "yes") {
                batteryMower();
            } else if (buyBatteryMower === "No" || buyBatteryMower === "no") {
                keepMower();
            } else {
                stop();
            }
     } 

  while(money<1000){
        const payStudents = prompt("You now have $" + money + "! Would you like to pay students to help you cut the grass!", "Yes or No?");
            if (payStudents === "Yes" || payStudents === "yes") {
                starvingStudents();
            } else if (payStudents === "No" || payStudents === "no") {
                keepBattery();
            } else {
                stop();
            }
     }  
   
    if (money>1000){
        alert ("Congratulations! You have won the game!")
    }
}  

///////// ========================== IF NO =========================== ////////////////

// Stop cutting
const stop = () => {
    const areYouSure = prompt("Are you sure you don't want to keep going?", "Yes or No")
    if (areYouSure === "Yes" || areYouSure === "yes"){
        alert ("Tired of using your teeth, huh? You finished with $" + money);
        start();
    } else{
        if (money<5) {
            startCutting();
        } else if (money<25){
            keepTeeth();
        } else {
            keepMower();
        }
    }
}    

//Unlimited teeth cutting
const keepTeeth = () => {
    money++;
    const buyScissors = prompt("You now have $" + money + "! Would you like to buy scissors to help you cut the grass!", "Yes or No?");
    if (buyScissors === "Yes" || buyScissors === "yes") {
     scissors();
    } else if (buyScissors === "No" || buyScissors === "no") {
     keepTeeth();
    }  else {
     stop();
    }
}

//Unlimited scissor cutting
const keepScissors = () => {
    let y = money+5;
    const buyLawnmower = prompt("You now have $" + y + "! Would you like to buy a lawn mower to help you cut the grass!", "Yes or No?");
    if (buyLawnmower === "Yes" || buyLawnmower === "yes") {
     lawnmower();
    } else if (buyLawnmower=== "No" || buyLawnmower === "no") {
        let money = y;
        y = money + 5;
        keepScissors();
    }  else {
     stop();
    }
}

//Unlimited push mower cutting
const keepMower = () => {
    let y = money+5;
    const buyBatteryMower = prompt("You now have $" + y + "! Would you like to buy a battery mower to help you cut the grass!", "Yes or No?");
    if (buyBatteryMower === "Yes" || buyBatteryMower === "yes") {
     batteryMower();
    } else if (buyBatteryMower=== "No" || buyBatteryMower === "no") {
        let y = money + 5;
        money = y;
        keepMower();
    }  else {
     stop();
    }
}

//Unlimited battery mower cutting
const keepBattery = () => {
    let y = money+50;
    const payStudents = prompt("You now have $" + y + "! Would you like to pay students to help you cut the grass!", "Yes or No?");
    if (payStudents === "Yes" || payStudents === "yes") {
     starvingStudents();
    } else if (payStudents=== "No" || payStudents === "no") {
        let y = money + 50;
        money = y;
        batteryMower();
    }  else {
     stop();
    }
}


///////// ========================== IF YES =========================== ////////////////

//Scissor cutting
const scissors = () => {
    const cut = alert("Let's use your scissors to cut the grass! You get $5 per cut.");
    while(money < 25){
        let y = money+5;
        alert("Great! You now have $" + y);
        const moreMoney = prompt("Keep going?", "Yes or No?");
        if (moreMoney === "Yes" || moreMoney === "yes") {
            let y = money;
            money = y+5;
        } else {
        stop();
        }
    }   
}

// Lawnmower cutting
const lawnmower = () => {
    alert("Great! You now have $" + money);
    const mow = alert("Let's use your lawn mower to cut the grass! You get $50 per cut.");
    y = money +50;
    alert("Great! You now have $" + y);
    const moreMoney = prompt("Keep going?", "Yes or No?");
    while(money < 250){
        let y = money+50;
        alert("Great! You now have $" + y);
        const moreMoney = prompt("Keep going?", "Yes or No?");
        if (moreMoney === "Yes" || moreMoney === "yes") {
            let y = money;
            money = y+50;
        } else {
        stop();
        }
    }   
}

// Battery mower cutting
const batteryMower = () => {
    const mow = alert("Let's use your battery mower to cut the grass! You get $100 per cut.");
    alert("Great! You now have $" + money);
    const moreMoney = prompt("Keep going?", "Yes or No?");
        if (moreMoney === "Yes" || moreMoney === "yes") {
            let y = money;
            money = y+100;
        } else {
        stop();
        }
}

// Student cutting
const starvingStudents = () => {
    const mow = alert("Let's use your student team to cut the grass! You get $250 per cut.");
    alert("Great! You now have $" + money);
    const moreMoney = prompt("Keep going?", "Yes or No?");
        if (moreMoney === "Yes" || moreMoney === "yes") {
            let y = money;
            money = y+250;
        } else {
        stop();
        }
}
