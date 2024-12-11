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

<br>

## Set 자료구조

[MDN Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)   
[모던 자바스크립트 Set](https://ko.javascript.info/map-set#ref-146) 

Set의 값은 한 번만 나타날 수 있으며, Set의 컬렉션에서는 고유한 값  
셋(Set)은 **중복을 허용하지 않는 값**을 모아놓은 특별한 컬렉션  
셋에 키가 없는 값이 저장됨  
배열과 같이, Set에 추가된 값은 삽입된 순서를 유지

셋 내에 동일한 값(value)이 있다면 set.add(value)을 아무리 많이 호출하더라도 아무런 반응이 없을 것   
셋 내의 값에 중복이 없는 이유가 바로 이 때문

### 배열의 중복 제거 

```js
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
```

### 순회 (Iteration)

```js
const set = new Set([1, 2, 3]);

// for...of 사용
for (const value of set) {
  console.log(value);
}

// forEach 사용
set.forEach((value) => {
  console.log(value);
});
```

### 로또 번호 중복 검사 예제

```js
const lottoNumbers = [1, 2, 3, 4, 5, 6];
const lottoSet = new Set(lottoNumbers);

if (lottoSet.size !== lottoNumbers.length) {
  console.log('[ERROR] 중복 번호가 있습니다.');
} else {
  console.log('중복 번호가 없습니다.');
}
// 출력: 중복 번호가 없습니다.
```
