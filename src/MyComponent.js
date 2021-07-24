import React from 'react';

// 일반적인 컴포넌트
// const MyCompoernt = () => {
//     return <div>책보고 따라하는 컴포넌트작업</div>
// };

// JSX 내부에서 props 렌더링 하는 법
const MyCompoernt = props => {
    return <div>리액트는 {props.level}</div>;
};

// 해당 코드는 다른 파일에서 이파일을 import 할 때 위에서 선언한 MyComponent 쿨래스를 불러오도록 설정함
export default MyCompoernt;