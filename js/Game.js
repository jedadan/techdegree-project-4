/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const gamePhrases = [];
    gamePhrases.push(
      new Phrase('Wheel of Fortune'),
      new Phrase('Jeapordy'),
      new Phrase('Deal or no Deal'),
      new Phrase('Family Fued'),
      new Phrase('The Price is Right')
    );
    return gamePhrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   * https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
   * searched stackoverflow for the equation to generate a random number to access random phrase from array
   */
  getRandomPhrase() {
    const randomPhrase = this.phrases[
      Math.floor(Math.random() * this.phrases.length)
    ];
    return randomPhrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
}
