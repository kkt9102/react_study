import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }

    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                {/* 일반적인 input 만들기 */}
                <input
                    type="text"
                    name="message"
                    placeholder="아무텍스트입력"
                    value={this.state.message}
                    // onChange, 즉 input의 경우 글이 입력 될 때마다 호출된다.
                    onChange={
                        (e) => {
                        // input에 이벤트 발생 시 호출
                        //console.log(e);

                        // JS에서 input안의 value값을 구할 때와 같다
                        //console.log(e.target.value);
                        // 비동기적으로 이벤트 객체를 참조할 일이 있을 시 e.persist() 함수 호출하기!

                        // state에 input 값 담기
                        this.setState({
                            message: e.target.value
                        })
                    }
                }
                />
                {/* button 을 누르면 */}
                <button onClick={
                    () => {
                        // alert 에 입력한 텍스트가 출력된다.
                        alert(this.state.message);
                        // 그 후 alert창이 닫히면 input의 value가 초기회된다.
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button>
            </>
        );
    }
}

export default EventPractice;