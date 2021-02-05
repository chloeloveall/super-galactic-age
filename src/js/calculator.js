export class Calculator {
  constructor(inputtedAge) {
    this.inputtedAge = inputtedAge;
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
}