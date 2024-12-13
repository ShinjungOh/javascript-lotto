import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import Lotto from "./Lotto.js";
import LottoWinner from "./LottoWinner.js";
import LottoResult from "./LottoResult.js";
import OutputView from "../view/OutputView.js";
import { ascendingNumbers, divideCountByThousand, range } from "../utils/utils.js";
import { STEPS } from "../constants/steps.js";

class LottoGames {
  #lotto = [];
  #numbers;
  #bonus;
  #count;

  async play(steps = STEPS.price) {
    // 가격 입력받기
    try {
      if (steps === STEPS.price) {
        this.#count = await this.#getPrice();
        OutputView.printCount(this.#count);
        this.#makeLottoByCount(this.#count);
        steps = 'lotto';
      }

      // 로또 번호 6개 입력받기
      if (steps === STEPS.lotto) {
        await this.#getLotto();
        steps = 'bonus';
      }

      // 보너스 번호 1개 입력받기
      if (steps === STEPS.bonus) {
        await this.#getBonus();
        steps = 'result';
      }

      // 결과 출력
      if (steps === STEPS.result) {
        const lottoWinner = new LottoWinner(this.#lotto, this.#numbers, this.#bonus);
        lottoWinner.checkNumberCount();
        const winner = lottoWinner.winner;

        const lottoResult = new LottoResult(winner);
        const prize = lottoResult.calculatePrize();
        const prizeRate = lottoResult.getPrizeRate(this.#count, prize);

        OutputView.printResult(winner, prizeRate);
      }
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return this.play(steps);
    }
  }

  async #getPrice() {
    const money = await InputView.readLineMoney();
    const count = divideCountByThousand(money);
    return count;
  }

  #makeLottoByCount(count) {
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
