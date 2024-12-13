import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import Lotto from "./Lotto.js";
import LottoWinner from "./LottoWinner.js";
import LottoResult from "./LottoResult.js";
import OutputView from "../view/OutputView.js";
import { ascendingNumbers, divideCountByThousand, range } from "../utils/utils.js";

class LottoGames {
  #lotto = [];
  #numbers;
  #bonus;

  async play() {
    const money = await InputView.readLineMoney();
    const count = divideCountByThousand(money);
    OutputView.printCount(count);

    const makeLottoByCount = (count) => {
      const lottoCount = range(count);
      lottoCount.forEach(() => {
        const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        const sortNumber = ascendingNumbers(randomNumber);
        const lotto = new Lotto(sortNumber);
        this.#lotto.push(lotto.lotto);
        OutputView.printLotto(lotto.lotto);
      });
      OutputView.printNewLine();
    }

    makeLottoByCount(count);

    await this.#getLotto();
    await this.#getBonus();

    const lottoWinner = new LottoWinner(this.#lotto, this.#numbers, this.#bonus);
    lottoWinner.checkNumberCount();
    const winner = lottoWinner.winner;

    const lottoResult = new LottoResult(winner);
    const prize = lottoResult.calculatePrize();
    const prizeRate = lottoResult.getPrizeRate(count, prize);

    OutputView.printResult(winner, prizeRate);
  }

  async #getLotto() {
    const lottoNumber = await InputView.readLineLottoNumber();
    this.#numbers = lottoNumber;
    OutputView.printNewLine();
  }

  async #getBonus() {
    const bonusNumber = await InputView.readLineBonusNumber(this.#numbers);
    this.#bonus = bonusNumber;
    OutputView.printNewLine();
  }
}

export default LottoGames;
