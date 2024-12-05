import LottoGames from "./domain/LottoGames.js";

class App {
  async run() {
    const lottoGames = new LottoGames();
    await lottoGames.play();
  }
}

export default App;
