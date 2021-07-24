import React from 'react';

function Test_1() {
    const name = '리액트';
    return (
        <>
            <div>{name} 공부용</div>
        </>
    );
}

function testFunction1() {
    let a = "hello";
    if ( true ) {
        let a = "bye";
        console.log(a);
        // 출력값 => hello
    }
    console.log(a);
    // 출력값 => bye
}
testFunction1();

function testFunction2() {
    const a = "hello";
    if ( true ) {
        const a = "bye";
        console.log(a);
        // 출력값 => hello
    }
    console.log(a);
    // 출력값 => hello
}
testFunction2();

function testFunction3() {
    var a = "hello";
    if( true ) {
        var a = "bye";
        console.log(a);
        // 출력값 => bye
    }
    console.log(a);
    // 출력값 => bye
}
testFunction3();

export default Test_1;