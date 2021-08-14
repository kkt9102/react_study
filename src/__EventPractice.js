import React, {useState} from 'react';

const EventPractice = () => {
    // 문자열
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    // const onClick = () => {
    //     alert(username + ': ' + message);
    //     setUsername('');
    //     setMessage('');
    // };

    // 객체
    const[form,setForm] = useState({
        username: '',
        messaage: ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + ' : ' + message);
        setForm({
            username:'',
            message: ''
        });
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <>
            <h1>이벤트 연습</h1>
            <input 
            type="text"
            placeholder="사용자명"
            value={username}
            onChange={onChange}
            />
            <hr/>
            <input
            type="text"
            placeholder="아무거나 입력해주세요"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}

            />
            <button onClick={onClick}>확인</button>
        </>
    );
};


export default EventPractice;