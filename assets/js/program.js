const samples = () => {
    let whiteRabbit = { type: 'white', speak };
    let hungryRabbit = { type: 'hungry rabbit', speak };

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
            return Math.round(Math.random() * 100);
        }
    }

    console.log('GETTERS & SETTERS');
    console.log(veryfingSize.size);

    const tem = new Temperature(22);
    console.log(tem.fahrenheit);

    tem.fahrenheit = 86;
    console.log(tem.celsius);

    console.log('INHERITANCE');
    let matrix = new SymmetricMatrix(2, (x, y) => `${x},${y}`);
    console.log(new Matrix(2, 2) instanceof SymmetricMatrix);

    console.log('vec m');

    let vector1 = new Vec(2, 2);
    let vector2 = new Vec(2, 2);

    console.log('The first operand', vector1);
    console.log('The secund operand', vector2);
    console.log('The plus rersult', vector1.plus(vector2));
    console.log('The minus rersult', vector1.minus(vector2));
    console.log('The distance', vector1.length);

    let group = new Group();

    group.add(1);
    group.add(2);
    group.add(2);
    console.log(group.elements);
    console.log('Grop has 1?', group.has(1));
    console.log('Grop has 3?', group.has(3));
    console.log('Deleting 1 ...', group.delete(1));
    console.log('The new elements are.', group.elements);
    console.log(group.from(group.elements[Symbol.iterator]()));
}

//classes 

class Group {
    constructor() {
        this.elements = [];
    }

    add(element) {
        if (!this.has(element))
            this.elements.push(element);
    }

    delete(value) {
        this.elements = this.elements.filter(element => element !== value)
    }

    has(element) {
        return this.elements.includes(element);
    }

    from(elementsIterator) {

        let result = [], aux; 

        do {
            aux = elementsIterator.next();
            result.push(aux.value)
        }
        while (!aux.done);

        return result;
    }
}

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.content = [];

        for (let i = 0; i < y; i++) {
            let element = [];
            for (let j = 0; j < x; j++) {
                element[j] = i + j;
            }
            this.content[i] = element;
        }
    }

    plus(vec) {
        let result = new Vec(this.x, this.y);

        result.x = sum(this.x, vec.x);
        result.y = sum(this.y, vec.y);

        for (let i = 0; i < this.content.length; i++) {
            for (let j = 0; j < this.content[i].length; j++) {
                result.content[i][j] = sum(this.content[i][j], vec.content[i][j]);
            }
        }

        return result;
    }

    minus(vec) {
        let result = new Vec(this.x, this.y);

        result.x = substract(this.x, vec.x);
        result.y = substract(this.y, vec.y);

        for (let i = 0; i < this.content.length; i++) {
            for (let j = 0; j < this.content[i].length; j++) {
                result.content[i][j] = substract(this.content[i][j], vec.content[i][j]);
            }
        }

        return result;
    }

    get length() {
        return Math.round(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }
}

const sum = (b, c) => b + c;
const substract = (b, c) => b - c;

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }

        console.log(this.content);
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {

            if (x < y)
                return element(y, x);
            else
                return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);

        if (x != y) {
            super.set(y, x, value);
        }
    }
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