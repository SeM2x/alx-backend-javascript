export default class Building {
  constructor(sqft) {
    this.evacuationWarningMessage();
    this.sqft = sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
