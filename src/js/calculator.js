export class Calculator {
  constructor(inputtedAge, lifeExpectancy) {
    this.inputtedAge = inputtedAge;
    this.lifeExpectancy = lifeExpectancy;
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
    return Math.round((this.lifeExpectancy * 365) / 88);
  }

  venusLifeExpectancy() {
    return Math.round((this.lifeExpectancy * 365) / 225);
  }

  marsLifeExpectancy() {
    
  }
}