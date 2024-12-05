import InputView from "../view/InputView.js";

class LottoGames {
  async play() {
    await InputView.readLineMoney();
  }
}

export default LottoGames;
