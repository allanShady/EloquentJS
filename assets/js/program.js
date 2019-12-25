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

    console.log(killerRabbit.teeth.toString());

    /*  Using object as map is dangerous
        If you pass null to Object.create, the resulting object will not
        derive from Object.prototype and can safely be used as a map. */
    console.log(`Class Map`);
    
    let ages = new Map();
    ages.set('Allan', 26);
    ages.set('Kevin', 24);
    ages.set('Cabral', 26);

    console.log(`Allan is ${ages.get('Allan')}`);
    console.log(`Salman's age known?`, ages.has('Salman'));
    console.log(ages.has('toString'));

    //Simbols 
    let sym = Symbol('kk');
    console.log(sym === Symbol('kk'));
    
    //Interator interface using symbols
    let okIterator = 'Ok'[Symbol.iterator]();
    console.log(okIterator.next());
    console.log(okIterator.next());
    console.log(okIterator.next());

    //geters & setters
    const veryfingSize = {
        get size() {
            return Math.round(Math.random()*100);
        }
    }

    console.log('GETTERS & SETTERS');
    console.log(veryfingSize.size);

    const tem = new Temperature(22);
    console.log(tem.fahrenheit);

    tem.fahrenheit = 86;
    console.log(tem.celsius);
}

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8; 
    } 

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
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