const alienFleet = [];

let survivalShip = {
    shipName: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: .7,
};


class alienShip {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; 
    };

}
for (let i = 0; i < 6; i++) {
    alienFleet.push(new alienShip(prompt('Enter the alien ship\'s name', 'Sans')));
}
console.log(alienFleet);
console.log(survivalShip);
