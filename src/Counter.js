import React, { Component } from 'react';

class Counter extends Component {
    // constructor 메서드
    constructor(props) {
        super(props);
        // stats의 초기값 설정하기
        this.state = {
            number: 0
        };
    }
    // render 함수
    render() {
        const { number } = this.state;
        // state를 조회할 때는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                {/* button을 클릭했을 때 onClick함수가 호출된다. */}
                <button onClick={() => {this.setState({ number: number + 1});}}>+1</button>
                {/* onClick의 함수는 () => {this.setState({ number: number + 1});} 이다. */}
            </div>
        );
    }
}

export default Counter;