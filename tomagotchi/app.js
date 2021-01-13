class Tomagotchi {
    constructor(name, type, color, hasTail = true, eyes, hunger, sleepiness, boredom, age){
        this.name = name;
        this.type = type;
        this.color = color;
        this.hasTail = hasTail;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}

const newTomagotchi = new Tomagotchi('Cutie', 'dog', 'pink')

console.log(newTomagotchi)