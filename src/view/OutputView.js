import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static printCount(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  }

  static printLotto(numbers) {
    MissionUtils.Console.print(numbers);
  }

  static printNewLine() {
    MissionUtils.Console.print('\n');
  }

  static printResult() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
  }
}

export default OutputView;
