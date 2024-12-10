# 에러 및 해결 방법 모음

## JavaScript 메소드

### sort, 오름차순/내림차순 정렬

[MDN Array sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  

```js
// ❌
export const ascendingNumbers = (number) => {
  return number.sort();
}
```

```js
// ✅ 오름차순
export const ascendingNumbers = (numbers) => {
  return numbers.sort((a, b) => a - b);
}

// ✅ 내림차순
export const descendingNumbers = (numbers) => {
  return numbers.sort((a, b) => b - a);
};
```

sort는 기본적으로 문자열 기반 정렬을 수행     
🚨 숫자 배열에서 예상치 못한 결과가 나올 수 있음 

Ex) [10, 2, 1]을 sort()하면 [1, 10, 2]가 됩니다  
숫자를 올바르게 정렬하려면 sort()에 **비교 함수를 추가**해야 함 
