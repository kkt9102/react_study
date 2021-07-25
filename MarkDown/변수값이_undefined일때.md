# 오류를 출력하는 경우
```javascript
import React from 'react';
import './App.css';

function App() {
    const name = undefined;
    return name;
}

export default App;
```

# 방법_1
- 어떤 값이 undefined일 수도 있다면 OR(||)를 사용하여 해당 값을 지정하는 경우
```javascript
import React from 'react';
import './App.css';

function App() {
    const name = undefined;
    return name || '값이 undefined입니다.';
}

export default App;
```

# 방법_2
- JSX 내부에서 undefined를 렌더링하는 경우
```javascript
import React from 'react';
import './App.css';

function App() {
    const name = undefined;
    return <div>{name}</div>;
}

export default App;
```

# 방법_3
- 방법_2 번의 경우에서 값이 undefined 일 경우 해당하는 문구로 대체하기
```javascript
import React from 'react';
import './App.css';

function App() {
    const name = undefined;
    return <div>{name || '값이 없습니다.'}</div>;
}

export default App;
```