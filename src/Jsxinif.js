import React from 'react';

function Jsxinif() {
    const name = "리액트";
    return (
        <div>
            {name === "리액트" ? (
                <h1 className="test">리액트입니다.</h1>
            ) : (
                <h2>리액트가 아닙니다.</h2>
            )}
        </div>
    );
}

export default Jsxinif;