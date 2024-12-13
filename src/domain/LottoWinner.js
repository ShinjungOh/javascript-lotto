class LottoWinner {
  #lotto;
  #numbers;
  #bonus;
  #winner

  constructor(lotto, numbers, bonus, winner) {
    this.#lotto = lotto;
    this.#numbers = numbers;
    this.#bonus = bonus;
    this.#winner = this.#initialValue;
  }

  #initialValue = {
    6: 0,
    5: 0,
    4: 0,
    3: 0,
    2: 0
  };

  checkNumberCount() {
    this.#lotto.forEach((elements) => {
      let correct = 0;
      let isMatchBonus = false;

      elements.forEach((element) => {
        if (this.#numbers.includes(element)) {
          correct += 1;
        }

        if (element === this.#bonus) {
          isMatchBonus = true;
        }
      });

      if (correct === 6) {
        this.#winner[6] += 1;
      }

      if (correct === 5 && isMatchBonus) {
        this.#winner[5] += 1;
      }

      if (correct === 4) {
        this.#winner[4] += 1;
      }

      if (correct === 3) {
        this.#winner[3] += 1;
      }

      if (correct === 2) {
        this.#winner[2] += 1;
      }
    });
  }

  get winner() {
    return this.#winner;
  }
}


export default LottoWinner;
