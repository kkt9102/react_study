
## JSX 기본 

```javascript
    // 기본적인 작성 방법 (예시)
    function App() {
        return (
            <div>
                Hello <b>React</b>
            </div>
        );
    }

    // JSX가 위의 코드를 렌더링 할 때의 실제 모습
    function App() {
        return React.createElement("div", null, "Hello", React.createElement("b", null, "React"));
    }
    
```

## 렌더링 작성 시 주의사항
- 잘못된 방법
```javascript
import React from 'react';

function Main() {
    return (
        <h1>테스트</h1>
        <h2>테스트</h2>
    )
}

export default Main;

// 오류 출력
```
- 올바른 방법_ver_1
```javascript
import React from 'react';

function Main() {
    return (
        <div>
            <h1>테스트</h1>
            <h2>테스트</h2>
        </div>
    )
}

export default Main;
// 정상 동작
// 위처럼 반드시 'div'로 감싸주어야함

```
- 올바른 방법_ver_2
```javascript
import React, { Fragment } from 'react';

function Main() {
    return (
        <div>
            <h1>테스트</h1>
            <h2>테스트</h2>
        </div>
    )
}

export default Main;
// 정상 동작
// 리액트 v16이상의 경우 'Fragment' 로도 감싸줄 수 있음
```
- 올바른 방법_ver_3
```javascript
import React from 'react';

function Main() {
    return (
        <>
            <h1>테스트</h1>
            <h2>테스트</h2>
        </>
    )
}

export default Main;
// 정상 동작
```

## 일단 여러가지들 만드는중
```javascript
// div
return (
    <div>

    </div>
)

// strong
return (
    <strong>

    </strong>
)

