const getRandomNumber = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 5) + 1;
        if (number > 3) {
          resolve(number);
        } else {
          reject('Number is too low');
        }
      }, 2000);
    });
  };

  getRandomNumber()
  .then((number) => console.log(`Random number is ${number}`))
  .catch((error) => console.log(`Error: ${error}`));    