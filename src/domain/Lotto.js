class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#lottoNumberCount(numbers);

    const lottoSet = new Set();

    numbers.forEach((number) => {
      this.#checkLottoNumberRange(number);

      if (lottoSet.has(number)) {
        throw new Error('[ERROR] 중복 번호는 입력할 수 없습니다.');
      }
      lottoSet.add(number);
    });
  }

  get lotto() {
    return this.#numbers;
  }

  #lottoNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #checkLottoNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.');
    }
  }
}

export default Lotto;
