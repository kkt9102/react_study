## 기본 문법
- arr.map(callback, [thisArg])
<h4>해당함수의 파라미터</h4>
<table>
    <thead>
        <tr>
            <th>callback</th>
            <th>새로운 배열의 요소를 생성하는 함수로 파라미터는 다음의 세가지이다.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>currentValue</th>
            <td>현재 처리하고 있는 요소</td>
        </tr>
        <tr>
            <th>index</th>
            <td>현재 처리하고 있는 요소의 index 값</td>
        </tr>
        <tr>
            <th>array</th>
            <td>현재 처리하고 있는 원본 배열</td>
        </tr>
        <tr>
            <th>thisArg(선택사항)</th>
            <th>callback 함수 내부에서 사용할 this 레퍼런스</th>
        </tr>
    </tbody>
</table>


## 사용법
```javascript
// 일반적인 배열 사용법
var number = [1,2,3,4,5];
var processed = numbers.map(function(num){
    return num * num;
});

console.log(processed);

// ES6 문법
const number = [1,2,3,4,5];
const result = numbers.amp(num => num * num);
console.log(result);
```