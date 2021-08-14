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