/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase');
    const phraseUl = phraseDiv.firstElementChild;
    for (let letter of this.phrase) {
      const li = document.createElement('li');
      if (letter === ' ') {
        li.className = 'space';
      } else {
        li.className = 'letter';
      }
      li.textContent = letter;
      phraseUl.appendChild(li);
    }
  }
  //   addPhraseToDisplay() {
  //     const phraseDiv = document.getElementById('phrase');
  //     const phraseUl = phraseDiv.firstElementChild;

  //     for (let character of this.phrase) {
  //       const li = document.createElement('li');

  //       if (character === ' ') {
  //         li.className = 'space';
  //       } else {
  //         li.className = 'hide letter ' + character;
  //       }
  //       li.textContent = character;
  //       phraseUl.appendChild(li);
  //     }
  //   }
}
