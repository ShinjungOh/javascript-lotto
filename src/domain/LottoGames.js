import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import Lotto from "./Lotto.js";
import { ascendingNumbers } from "../utils/utils.js";

class LottoGames {
  async play() {
    const money = await InputView.readLineMoney();
    console.log(money);

    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortNumbers = ascendingNumbers(randomNumber);
    console.log(sortNumbers);
    const lotto = new Lotto(sortNumbers);
  }
}

export default LottoGames;
