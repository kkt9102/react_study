import React from 'react';

// html 방식
// const IterationSample = () => {
    
//     return (
//         <ul>
//             <li>봄</li>
//             <li>여름</li>
//             <li>가을</li>
//             <li>겨울</li>
//         </ul>
//     )
// }


// 배열 방식
// const IterationSample = () => {
//     const names = ['봄','여름','가을','겨울'];
//     const nameList = names.map(name => <li>{name}</li>);
//     return <ul>{nameList}</ul>;
// }
// 완벽하지 않은 상태
// 크롬 개발자도구를 활성화하면 'Key'값이 없다고 오류메시지가 출력됨

// 배열 방식 + Key값
const IterationSample =() => {
    const names = ['봄','여름','가을','겨울'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>;
}

export default IterationSample;