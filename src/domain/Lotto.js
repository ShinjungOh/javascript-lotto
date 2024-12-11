class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    this.#isDuplicate(numbers);
    this.#checkLottoNumberRange(numbers);
  }

  get lotto() {
    return this.#numbers;
  }

  #isDuplicate(numbers) {
    numbers.forEach((number) => {
      if (numbers.includes(number)) {
        throw new Error('[ERROR] 중복 번호는 입력할 수 없습니다.');
      }
    });
  }

  #checkLottoNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.');
      }
    });
  }
}

export default Lotto;
