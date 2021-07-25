import React, { Component } from 'react';

class Counter extends Component {
    // constructor 메서드
    constructor(props) {
        super(props);
        // stats의 초기값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    // render 함수
    render() {
        const { number, fixedNumber } = this.state;
        // state를 조회할 때는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                {/* {fixedNumber}는 button을 눌러도 값이 증가하지 않는다. */}
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                {/* button을 클릭했을 때 onClick함수가 호출된다. */}
                <button onClick={() => {
                    // ver_1
                    this.setState({ number: number + 1}
                        // this.setState가 끝난 후 특정 작업 실행하기
                            ,() => {
                                console.log('setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );

                    // ver_2
                    // this.setState 두번 호출하기 (값이 바로 바뀌지 않음)
                    // this.setState({ number: this.state.number + 1});

                    // ver_3
                    // 객체 대신 함수를 인자로 넣는 방법
                    this.setState((prevState, props) => {
                        // prevState는 기존 상태, props는 현재 지니고 있는 props를 뜻함
                        return {
                            number: prevState.number + 1
                        }
                    })
                    // ver_1과 ver_3은 완전히 같은 기능을 한다.
                    }}>+1</button>
                {/* onClick의 함수는 () => {this.setState({ number: number + 1});} 이다. 즉 버튼을 누를 때 마다 <h1>{number}</h1> 안의 숫자가 1씩 증가한다.*/}
                {/* setState를 두번 호출한다 해서 값이 바로 바뀌지는 않는다. */}
            </div>
        );
    }
}

export default Counter;