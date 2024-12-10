import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static printCount (count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  }
}

export default OutputView;
