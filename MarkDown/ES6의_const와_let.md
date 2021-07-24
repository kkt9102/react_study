# ES6에서의 const
- ES6에서의 const는 한번 선언하고 나면 변경이 불가능한 상수를 뜻함

# ES6에서의 let
- ES6에서의 let은 동적인 값을 담을 수 있는 변수를 뜻함

# 주의점
- 같은 블록 내에서 중복선언은 불가능하다. (중복선언시 오류송출)

# 예시
- if문 바깥에서 변수 a = "hello" 설정
- if문 안에서 변수 a = "bye" 설정
```javascript
// 일반적인  var 설정
function testFunction() {
    var a = "hello";
    if( true ) {
        var a = "bye";
        console.log(a);
        // 출력값 => bye
    }
    console.log(a);
    // 출력값 => bye
}
testFunction();
```
```javascript
// let 설정
function testFunction() {
    let a = "hello";
    if ( true ) {
        let a = "bye";
        console.log(a);
        // 출력값 => hello
    }
    console.log(a);
    // 출력값 => bye
}
testFunction();
```
```javascript
// const 설정
function testFunction() {
    const a = "hello";
    if ( true ) {
        const a = "bye";
        console.log(a);
        // 출력값 => hello
    }
    console.log(a);
    // 출력값 => hello
}
testFunction();
```