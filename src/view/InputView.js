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
    return input;
  }

  static async readLineBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return input;
  }
}

export default InputView;
