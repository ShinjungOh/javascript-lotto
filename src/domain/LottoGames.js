import InputView from "../view/InputView.js";

class LottoGames {
  async play() {
    const money = await InputView.readLineMoney();
    console.log(money);
  }
}

export default LottoGames;
