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
