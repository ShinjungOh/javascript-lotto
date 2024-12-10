import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import Lotto from "./Lotto.js";
import OutputView from "../view/OutputView.js";
import { ascendingNumbers, divideCountByThousand, range } from "../utils/utils.js";

class LottoGames {
  async play() {
    const money = await InputView.readLineMoney();

    const count = divideCountByThousand(money);
    OutputView.printCount(count);

    const makeLottoByCount = (count) => {
      const lottoCount = range(count);
      lottoCount.forEach(() => {
        const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        const lotto = new Lotto(ascendingNumbers(randomNumber));
        OutputView.printLotto(lotto.lotto);
      });
    }
    makeLottoByCount(count);
  }
}

export default LottoGames;
