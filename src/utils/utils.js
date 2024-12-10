export const divideCountByThousand = (price) => {
  return (price / 1000);
}

export const ascendingNumbers = (number) => {
  return number.sort();
}

export const addThousandComma = (number) => {
  return number.toLocaleString('ko-kr');
}

export const range = (count, value = 0) => {
  return Array(count).fill(value);
}

