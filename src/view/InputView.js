import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  static async readLineMoney() {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    this.#validateMoney(input);

    return input;
  }

  static #validateMoney(input) {
    this.#isNotANumber(input);
    this.#isMoreThanThousand(input);
    this.#isMultiplesOfThousand(input);
  }

  static #isNotANumber(input) {
    const number = Number(input);
    if (Number.isNaN(number) || !Number.isInteger(number)) {
      throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    }
  }

  static #isMoreThanThousand(input) {
    if (input < 1000) {
      throw new Error('[ERROR] 최소 금액은 1,000원 이상입니다.');
    }
  }

  static #isMultiplesOfThousand(input) {
    if (input % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원 단위의 금액만 입력할 수 있습니다.');
    }
  }

  static async readLineLottoNumber() {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const splitInput = input.split(',');
    const parseInput = splitInput.map((num) => parseInt(num, 10));

    this.#validateLotto(parseInput);

    return input;
  }

  static async readLineBonusNumber(lotto) {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    this.#validateBonus(input);

    const parseInput = parseInt(input, 10);

    this.#validateParsedBonus(parseInput, lotto);

    return input;
  }

  static #validateLotto(lotto) {
    this.#checkLottoNumberRange(lotto);
    this.#lottoCount(lotto);
    this.#isNaN(lotto);

    lotto.forEach((lotto, number) => {
      this.#isDuplicate(lotto, number);
    })
  }

  static #isDuplicate(lotto, number) {
    if (lotto === number) {
      throw new Error('[ERROR] 중복 번호는 입력할 수 없습니다.');
    }
  }

  static #validateBonus(bonus) {
    this.#isNaN(bonus);
    this.#isEmpty(bonus);
    this.#bonusCount(bonus);
  }

  static #validateParsedBonus(bonus, lotto) {
    this.#isBonusInLotto(bonus, lotto);
    this.#checkLottoNumberRange(bonus);
  }

  static #isEmpty(bonus) {
    if (bonus.trim() === '') {
      throw new Error('[ERROR] 보너스 번호는 비워둘 수 없습니다.');
    }
  }

  static #bonusCount(bonus) {
    if (bonus.includes(',') || bonus.includes(' ')) {
      throw new Error('[ERROR] 보너스 번호는 1개 입력해야 합니다');
    }
  }

  static #isNaN(input) {
    if (Number.isNaN(input)) {
      throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    }
  }

  static #checkLottoNumberRange(input) {
    if (input < 1 || input > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.');
    }
  }

  static #isBonusInLotto(bonus, lotto) {
    if (lotto.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호와 로또 번호는 중복될 수 없습니다.');
    }
  }

  static #lottoCount(lotto) {
    if (lotto.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개 입력해야 합니다.');
    }
  }
}

export default InputView;
