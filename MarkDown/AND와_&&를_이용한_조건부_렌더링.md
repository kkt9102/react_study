# 일반적인 코드
```javascript
import React from  'react';

function test() {
    const name = '리핵트';
    return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
}

export default test;
// 결과값 => 아무것도 안나옴
```

# 해당 코드를 조금 더 짧게 작성하기
```javascript
import React from 'react';

function test() {
    const name = '리핵트';
    return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
}

export default test;
// 결과값 => 아무것도 안나옴
```