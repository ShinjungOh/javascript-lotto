import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  static readLineMoney() {
    const input = MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return input;
  }

  static readLineLottoNumber() {
    const input = MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return input;
  }

  static readLineBonusNumber() {
    const input = MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return input;
  }
}

export default InputView;
