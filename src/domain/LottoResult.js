import { prizeMoney } from "../constants/winner.js";

class LottoResult {
  #winner;

  constructor(winner) {
    this.#winner = winner;
  }

  calculatePrize() {
    let total = 0;
    if (this.#winner["2"] !== 0) {
      total += prizeMoney[2] * this.#winner["2"];
    }

    if (this.#winner["3"] !== 0) {
      total += prizeMoney[3] * this.#winner["3"];
    }

    if (this.#winner["4"] !== 0) {
      total += prizeMoney[4] * this.#winner["4"];
    }

    if (this.#winner["5"] !== 0) {
      total += prizeMoney[5] * this.#winner["5"];
    }

    if (this.#winner["6"] !== 0) {
      total += prizeMoney[6] * this.#winner["6"];
    }

    return total;
  }

  getPrizeRate(count, prize) {
    const totalPrice = count * 1000;
    return ((prize / totalPrice) * 100).toFixed(1);
  }
}

export default LottoResult;
