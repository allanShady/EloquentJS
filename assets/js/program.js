const samples = () => {
    let whiteRabbit = {type: 'white', speak};
    let hungryRabbit = {type: 'hungry rabbit', speak};

    whiteRabbit.speak('I could use carrot right now');
    //Explicit call of this
    speak.call(hungryRabbit, 'Burp!');

    //The rabbit class test
    const killerRabbit = new Rabbit('killer');
    const blackRabbit = new Rabbit('black');

    console.log(`Testing the rabbit class`);
    killerRabbit.speak('Nothing');
    blackRabbit.speak('Murder');

    console.log(`Overriding the proto`);
    Rabbit.prototype.teeth = 'small';

    console.log(killerRabbit.teeth.toString())
}

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
}

class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(msg) {
        console.log(`The ${this.type} rabbit says '${msg}'`);
    }
}

sampleBtn.addEventListener('click', samples);