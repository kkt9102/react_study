import React from 'react';
// propType import
import PropTypes from 'prop-types';

// 일반적인 컴포넌트
// const MyCompoernt = () => {
//     return <div>책보고 따라하는 컴포넌트작업</div>
// };

// JSX 내부에서 props 렌더링 하는 법
// const MyComponent = props => {
//     return <div>리액트는 {props.level}</div>;
// };

// props 기본값 설정하기
// MyComponent.defaultProps = {
//     level: '처음해본다'
// };

// 태그 사이의 내용을 보여주는 children
// const MyComponent = props => {
//     return (
//         <div>
//             아 리액트 {props.level}고 <br />
//             {props.children}은 또 뭐냐고...
//         </div>
//     );
// };
// MyComponent.defaultProps = {
//     level: '처음해본다'
// };

// 비구조와 할당 문법을 통해 props 내부 값 추출하기
// const MyComponent = props => {
//     const { level, children } = props;
//     return (
//         <div>
//             아 리액트 {props.level}고 <br />
//             {props.children}는 또 뭐냐고
//         </div>
//     )
// }
// MyComponent.defaultProps = {
//     level:  '처음해본다'
// };

// 위의 방법을 더 간결화 시킨 코드
const MyComponent = ({level, children, bestnumber}) => {
    return (
        <div>
            아 리액트 {level}고 <br />
            {children}는 또 뭐냐고 <br />
            최괴의 숫자는 {bestnumber} 이지
        </div>
    );
};
MyComponent.defaultProps = {
    level:  '처음해본다'
};
// PropTypes를 통한 props 검증하기
MyComponent.propTypes = {
    level: PropTypes.string,
    bestnumber: PropTypes.number.isRequired
    // 이렇게 설정을하면 level값은 무조건 String 형태로 전달해야 함
}

// 해당 코드는 다른 파일에서 이파일을 import 할 때 위에서 선언한 MyComponent 쿨래스를 불러오도록 설정함
export default MyComponent;