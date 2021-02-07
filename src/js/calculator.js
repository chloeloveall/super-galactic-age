export class Calculator {
  constructor(inputtedName, inputtedAge, lifeExpectancy) {
    this.inputtedName = inputtedName;
    this.inputtedAge = inputtedAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  defaultNameOption() {
    if (this.inputtedName === '' || this.inputtedName === ' ' || this.inputtedName === null) {
      return 'User';
    } else {
      return this.inputtedName;
    }
  }

  thankYou() {
    let thanks = `Thank you for using the Super Galactic Age Calculator, ${this.defaultNameOption()}! Take a look at your results below!`;
    return thanks;
  }

  earthDays() {
    let ageInEarthDays = this.inputtedAge * 365;
    return ageInEarthDays;
  }

  mercuryAge() {
    return Math.round(this.earthDays() / 88);
  }

  venusAge() {
    return Math.round(this.earthDays() / 225);
  }

  marsAge() {
    return Math.round(this.earthDays() / 687);
  }

  jupiterAge() {
    return Math.round(this.inputtedAge / 12);
  }

  mercuryLifeExpectancy() {
    if (this.inputtedAge > this.lifeExpectancy) {
      return `You have surpassed your life expectancy by ${Math.round((this.earthDays() - (this.lifeExpectancy * 365)) / 88)} years. Keep kickin', ${this.defaultNameOption()}!`;
    } else {
      return Math.round(((this.lifeExpectancy * 365) - this.earthDays()) / 88);
    }
  }

  venusLifeExpectancy() {
    return Math.round(((this.lifeExpectancy * 365) - this.earthDays()) / 225);
  }

  marsLifeExpectancy() {
    return Math.round(((this.lifeExpectancy * 365) - this.earthDays()) / 687);
  }

  jupiterLifeExpectancy() {
    return Math.round((this.lifeExpectancy - this.inputtedAge) / 12);
  }
}