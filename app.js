const alienFleet = [];
let cowardice = false;

let survivalShip = {
    shipName: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: .7,
    cowardice: false,
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
            if (Math.random() < survivalShip.accuracy) {
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
            }

            
        }

        if (i === alienFleet.length - 1 && survivalShip.hull > 0) {
            console.log("You live to survive another day, soldier. Return back home!");
        }
        else {
            console.log("The aliens have destroyed our last defense. It's over!");
        }
    }
}

   
    


// for (let i = 0; i < 6; i++) {  // Populate the alienFleet array with user input
//     alienFleet.push(new alienShip(prompt('Enter the alien ship\'s name', 'Sans')));
// }
alienFleet.push(new alienShip('Comic Sans'));
console.log(alienFleet);
console.log(survivalShip);
console.log(survivalShip.hull);
console.log(alienFleet[0].hull);
spaceBattle();
