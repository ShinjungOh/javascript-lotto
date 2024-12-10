export const divideCountByThousand = (price) => {
  return (price / 1000);
}

export const ascendingNumbers = (numbers) => {
  return numbers.sort((a, b) => a - b);
}

export const addThousandComma = (number) => {
  return number.toLocaleString('ko-kr');
}

export const range = (count, value = 0) => {
  return Array(count).fill(value);
}

