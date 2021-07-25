import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClikcLeave = () => setMessage('안녕히 가세요!');

    // 한 컴포넌트에서 useState 여러번 사용하기
    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClikcLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{ color: '#0000ff'}} onClick={() => setColor('#0000ff')}>파란색</button>
            <button style={{ color: 'rgba(0,255,0,1)'}} onClick={() => setColor('rgba(0,255,0,1)')}>초록색</button>
        </div>
    );
};


export default Say;