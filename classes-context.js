const fruit = {
  name: 'banana',
  sayHiArrow: () => console.log(`Arrow: ${this.name}`),
  sayHiFn: function () {
    console.log(`Normal FN: ${this.name}`);
  },
};

fruit.sayHiArrow();

fruit.sayHiFn();

// CLASSES AND "THIS"

class Pet {
  constructor(petName, petBreed) {
    this.name = petName;
    this.breed = petBreed;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name}, and I am a talking ${this.breed}!`
    );
  }
}

let dog = new Pet('Leo', 'Golden Retriever');

console.log(dog);
dog.greet();

let goldfish = new Pet('Nemo', 'Goldfish');
goldfish.greet();

// dog.name = 'Spike'
// dog.greet ()
// goldfish.greet ()

class Student {
  constructor(name, email) {
    this.grades = [];
    this.name = name;
    this.email = email;
    this.schedule = []; //maybe an array of date/time objects?
  }

  addLetterGrade(num) {
    let letter;
    if (num >= 90) {
      letter = 'A';
    } else if (num >= 80) {
      letter = 'B';
    } else if (num >= 70) {
      letter = 'C';
    } else if (num >= 60) {
      letter = 'D';
    } else {
      letter = 'F';
    }

    this.grades.push(letter);
  }
}

let classroom = [];
let bob = new Student('bob', 'bob@gmail.com');
let sarah = new Student('sarah', 'sarah@gmail.com');

classroom.push(bob);
classroom.push(sarah);

bob.addLetterGrade(98);
sarah.addLetterGrade(86);

// making a student without using a variable
classroom.push(new Student('Casey', 'casey@gmail.com'));
classroom[2].addLetterGrade(72);

console.log(classroom);

// Other ways to make "classes" in JS

function vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let myCar = new vehicle('Subaru', 'Outback', '2011');
console.log(myCar);
