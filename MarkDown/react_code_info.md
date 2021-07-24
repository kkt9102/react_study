# React 구조 기본

## src/App.js
```javascript
    // 아래의 react는 리액트를 불러와 사용할 수 있게 하는 코드. 프로젝트 생성 시 App.js대신 index.js에 들어있다.
    // import React from 'react';
    // 
    import logo from './logo.svg';
    // 가장 기본적인 css import
    import './App.css';

    // App 컴포넌트 생성 코드 (JSX 문법)
    function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
    }

    export default App;
```

## scr/index.js
```javascript

    // react를 불러와서 사용할 수 있게 해주는 코드
    import React from 'react';
    // 컴포넌트를 페이지에 렌더링하는 react-dom 모듈 import
    import ReactDOM from 'react-dom';
    // index.css 를 import
    import './index.css';
    // App.js 를 import
    import App from './App';
    // 
    import reportWebVitals from './reportWebVitals';

    // 컴포넌트를 페이지에 렌더링하는 역할
    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();

```