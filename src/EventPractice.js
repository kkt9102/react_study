import React, { Component } from 'react';

class EventPractice extends Component {

    // state 에 input 값 담기 ver
    // state = {
    //     message: ''
    // }
    // 
    // render() {
    //     return (
    //         <>
    //             <h1>이벤트 연습</h1>
    //             {/* 일반적인 input 만들기 */}
    //             <input
    //                 type="text"
    //                 name="message"
    //                 placeholder="아무텍스트입력"
    //                 value={this.state.message}
    //                 // onChange, 즉 input의 경우 글이 입력 될 때마다 호출된다.
    //                 onChange={
    //                     (e) => {
    //                     // input에 이벤트 발생 시 호출
    //                     //console.log(e);

    //                     // JS에서 input안의 value값을 구할 때와 같다
    //                     //console.log(e.target.value);
    //                     // 비동기적으로 이벤트 객체를 참조할 일이 있을 시 e.persist() 함수 호출하기!

    //                     // state에 input 값 담기
    //                     this.setState({
    //                         message: e.target.value
    //                     })
    //                 }
    //             }
    //             />
    //             {/* button 을 누르면 */}
    //             <button onClick={
    //                 () => {
    //                     // alert 에 입력한 텍스트가 출력된다.
    //                     alert(this.state.message);
    //                     // 그 후 alert창이 닫히면 input의 value가 초기회된다.
    //                     this.setState({
    //                         message: ''
    //                     });
    //                 }
    //             }>확인</button>
    //         </>
    //     );
    // }



    // 임의 메서드 만들기 Ver
    // 
    // state = {
    //     message: ''
    // }
    // 
    // constructor(props) {
    //     // 임의 메서드를 사용 시 특정  HTML이 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어진다.
    //     // constructor 함수에서 이를 막기위해 함수를바인딩해주고있다.
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     });
    // }

    // render() {
    //     return (
    //         <>
    //         <h1>이벤트 연습</h1>
    //         <input
    //         type="text"
    //         name="message"
    //         placeholder="아무거나 입력해보세요."
    //         value={this.state.message}
    //         onChange={this.handleChange}/>
    //         <button onClick={this.handleClick}>확인</button>
    //         </>
    //     )
    // }



    // 위의 임의 메서드를 조금더 간결화한 코드

    // state = {
    //     message: ''
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick = () => {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     })
    // }

    // render() {
    //     return (
    //         <>
    //             <h1>이벤트 연습</h1>
    //             <input
    //             type="text"
    //             name="message"
    //             placeholder="아무말이나 입력해보세요."
    //             value={this.state.message}
    //             onChange={this.handleChange}
    //             />
    //             <button onClick={this.handleClick}>확인</button>
    //         </>
    //     )
        
    // };


    // 여러개의 input 사용하기

    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            // 객체안에서 key를  '[]' 로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용된다.
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    render() {
        return (
            <>
                <h1>두개의 input 이벤트</h1>
                <input
                type="text"
                name="message"
                placeholder="아우말이나 입력해보세요."
                value={this.state.message}
                onChange={this.handleChange}
                />
                <hr />
                <input
                type="text"
                name="username"
                placeholder="사용지 이름을 입력해주세요."
                value={this.state.username}
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </>
        )
    }
}

export default EventPractice;