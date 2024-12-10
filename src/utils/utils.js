export const divideCountByThousand = (price) => {
  return (price / 1000);
}

export const ascendingNumbers = (number) => {
  return number.sort();
}

export const addThousandComma = (number) => {
  return number.toLocaleString('ko-kr');
}

