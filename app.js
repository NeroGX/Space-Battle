const alienFleet = [];
let survivalShip = {
    shipName: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: .7,
    hullDamage(damage) {
        this.hull = this.hull - damage;
    }
};

class alienShip {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; 
    };

    hullDamage(damage) {
        return this.hull = this.hull - damage;
    }

}



const spaceBattle = () => {
    for (let i = 0; i < alienFleet.length; i++) {
        while (alienFleet[i].hull > 0) {
            if (Math.random() <= survivalShip.accuracy) {
                console.log('Target hit, you nailed them.');
                alienFleet[i].hullDamage(survivalShip.firepower);
                if (alienFleet[i].hull > 0) {
                    console.log(`${alienFleet[i].name} is still standing with ${alienFleet[i].hull} health left.`)
                }
                else {
                    console.log(`${alienFleet[i].name} has crashed and burned. Victory is yours(for now)`);
                    // prompt(`You have ${survivalShip.hull} health left. Do you continue?' (Y or N)) 
                    break;
                }
            }
            else {
                console.log('You whiffed it, mate');
            }
            if (Math.random() < alienFleet[i].accuracy)
            {   
                console.log(`${alienFleet[i].name} got the drop on you!`);
                survivalShip.hullDamage(alienFleet[i].firepower);
                console.log(`You have ${survivalShip.hull} health left.`);
                if (survivalShip.hull <= 0) {
                    console.log(`The ${survivalShip.shipName} is down. Lord have mercy!`);
                    break;
                }
            }
            else {
                console.log("The enemy missed their chance. It's time for a counterattack.")
            }

            
        }
        // i.e. If we iterated through the whole array and all the aliens are dead.
        if (i < alienFleet.length - 1 && survivalShip.hull > 0) {
            let finishTheFight = prompt(`You have ${survivalShip.hull} health left. Do you want to continue: ('Yes' or 'No')`);
            if (finishTheFight === "No") {
                console.log('You abandoned your post, soldier. Earth is finished.');
                break;
            }
        }
        else if (i === alienFleet.length - 1 && survivalShip.hull > 0) {
            console.log("You live to survive another day, soldier. Return back home!");
        }
        else {  //This is a bug. MUST fix later, you dumbass.
            console.log("The aliens have destroyed our last defense. It's over!");
            break;
        }
    }
}

   



for (let i = 0; i < 6; i++) {  // Populate the alienFleet array with user input
    alienFleet.push(new alienShip(prompt('Enter the alien ship\'s name', 'Sans')));
}
// alienFleet.push(new alienShip('Comic Sans')); //tester code: to see if ship is passed into object correctly
// alienFleet.push(new alienShip('Helvetica')); // tester code: to test multiple alien ships
// console.log(survivalShip); // tester code: Making sure the survivalShip object works
// console.log(alienFleet);  // tester code: Making sure the alienFleet array is populating correctly
// console.log(survivalShip.hull);
// console.log(alienFleet[0].hull);
spaceBattle();