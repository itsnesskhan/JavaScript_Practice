class MyClass {
    constructor() {
      this.name = 'John';
    }
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  
    // callGreet() {   here set timeout calling greet method, so this refrence is setimeout and settimout have no method greet
    //   setTimeout(this.greet, 1000);
    // }

    callGreet() {
        setTimeout(this.greet.bind(this), 1000);
      }
  }
  
  const instance = new MyClass();
  instance.callGreet();
  