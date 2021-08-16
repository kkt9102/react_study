## 콜백 함수 사용 예시
```javascript
    <inpit ref={(ref => {this,input=ref})} />
```

## createRef를 통한 ref 설정
```javascript
import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    // render() {
    //     reeturn (
    //         <>
    //             <input ref={this.input}/>
    //         </>
    //     )
    // }

    // ref 달기
    render() {
        return (
            <>
                <input
                ref={(ref) => this.input=ref}>
            </input>
        )
    }
}

export default RefSample;
```

## 컴포넌트에 ref 달기 사용법
- 해당 방법을 이용하면 내부의 메서드 및 멤버 변수에도 접근이 가능하다.  즉 내부의 ref에도 접근이 가능하다.
```javascript
<MyComponent
    ref={(red) => {this.myComponent=ref}}
/>
```