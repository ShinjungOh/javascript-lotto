import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import Lotto from "./Lotto.js";
import OutputView from "../view/OutputView.js";
import { ascendingNumbers, divideCountByThousand, range } from "../utils/utils.js";

class LottoGames {
  #lotto;
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
        OutputView.printLotto(lotto.lotto);
      });
      OutputView.printNewLine();
    }

    makeLottoByCount(count);

    await this.#getLotto();
    await this.#getBonus();
  }

  async #getLotto() {
    const lottoNumber = await InputView.readLineLottoNumber();
    console.log(lottoNumber);
    this.#lotto = lottoNumber;
    OutputView.printNewLine();
  }

  async #getBonus() {
    const bonusNumber = await InputView.readLineBonusNumber(this.#lotto);
    console.log(bonusNumber);
    this.#bonus = bonusNumber;
  }
}

export default LottoGames;
