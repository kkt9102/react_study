// useState 미사용
// import React from react';

// useState 사용
import React, {useState} from "react";

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
// const IterationSample =() => {
//     const names = ['봄','여름','가을','겨울'];
//     const nameList = names.map((name, index) => <li key={index}>{name}</li>);
//     return <ul>{nameList}</ul>;
// }

// useState를 사용하여 상태설정하기
const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '봄'},
        { id: 2, text: '여름'},
        { id: 3, text: '가을'},
        { id: 4, text: '겨울'}
    ]);
    const [inputText, setinputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 새로운 항목을 추가할 때 사용할 id

    // 추가 기능_1
    const onChange = e => setinputText(e.target.value);
    // 추가 기능_2
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId값을 id로 설정한다.
            text: inputText
        })
        setNextId(nextId + 1);  // id값에 1을 더해준다.
        setNames(nextNames);    // name값을 업데이트한다.
        setinputText("");   // inputText를 비운다.
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return (
        <>
            {/* 추가되는 기능 추가 */}
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>

            <ul>{namesList}</ul>
        </>
    );
}
    

export default IterationSample;