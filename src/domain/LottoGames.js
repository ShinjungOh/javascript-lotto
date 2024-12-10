import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import Lotto from "./Lotto.js";
import OutputView from "../view/OutputView.js";
import { ascendingNumbers, divideCountByThousand } from "../utils/utils.js";

class LottoGames {
  async play() {
    const money = await InputView.readLineMoney();
    console.log(money);

    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortNumbers = ascendingNumbers(randomNumber);
    console.log(sortNumbers);
    const lotto = new Lotto(sortNumbers);

    const count = divideCountByThousand(money);
    OutputView.printCount(count);
  }
}

export default LottoGames;
