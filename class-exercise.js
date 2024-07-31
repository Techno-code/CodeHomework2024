class Publisher {
    constructor() {
        this.observers = []; // List to keep track of observers
    }

    // Method to add an observer
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Method to remove an observer
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify all observers
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name; // Name to identify the observer
    }

    // Method to be called when the observer is notified
    update(data) {
        console.log(`${this.name} received data: ${data}`);
    }
}

// Create a publisher instance
const newsPublisher = new Publisher();

// Create observer instances
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
const observer3 = new Observer('Observer 3');

// Subscribe observers to the publisher
newsPublisher.subscribe(observer1);
newsPublisher.subscribe(observer2);
newsPublisher.subscribe(observer3);

// Notify all observers of an event
newsPublisher.notify('Observer Pattern Implemented!');

// Unsubscribe an observer
newsPublisher.unsubscribe(observer2);

// Notify all observers again
newsPublisher.notify('Observer 2 is no longer subscribed.');
