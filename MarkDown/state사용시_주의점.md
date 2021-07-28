# 클래스형 컴포넌트,함수형 컴포넌트에서 state 사용시 주의점
    -  state값을 바꿔야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야함
```javascript
// 잘못된 예시

// 클래스형
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// 함수형
const [object, setObject] = useState({ a: 1, b: 1});
object.b = 2;
```
    - 배열이나 객체를 업데이트 할 경우
```javascript
// 올바른 예시

// 객체 다루기
const object = { a:1, b: 2, c: 3};
const nextObject = { ...object, b: 2};  // 사본을 만들어 b의 값만 덮어쓰기

// 배열 다루기
const arrat = [
    { id: 1, value: true},
    { id: 2, value: true},
    { id: 3, value: false}
];
let nextArray = arrat.concat({ id: 4}); // 새 항목 추가
nextArray.filter(item => item.id !==2); // id가 2인 항목 제거
nextArray.map(item => (item.id === 1 ? { ...item, value: false} : item)); // id가 1인 항목의 value를 false로 설정
```