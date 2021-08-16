import react, { Component }from 'react';

class ScrollBox extends Component {
    scrollToBottom =() => {
        const { scrollHeight, clientHeight } = this.box;
        // 비구조화 할당 문법 사용
        // 비구조화 할당을 사용해 만든 메서드는 부모 컴포넌트인 App 컴포넌트에서 ScrollBox에 ref를 달아 사용할 수 있다.
        // const scrollHeight = this.box.scrollHeight;
        // const clientHeight = this.box.clientHeight;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid #000000',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div style={style} ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}/>
            </div>
        );
    }
}

export default ScrollBox;