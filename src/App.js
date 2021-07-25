// import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// App 컴포넌트에서 다른 컴포넌트 렌더링 시키기
// const App = () => {
//   return <MyComponent />;
// };

// App 컴포넌트에서 props 값 지정 후 렌더링 시키기
// const App = () => {
//   return <MyComponent level="어렵다" />;
// };

// 태그 사이의 내용을 보여주는 children
const App = () => {
  return <MyComponent bestnumber={4}>리액트(이건 App.js에서 따로 입력한 값이 렌더링 시 그대로 보여주는부분)</MyComponent>;
};

// 만약 level값을 number로 지정할 경우
// const App = () => {
//   return <MyComponent level={2}>리액트(이건 App.js에서 따로 입력한 값이 렌더링 시 그대로 보여주는부분)</MyComponent>;
// };
// 해당 코드를 활성화한 후 개발자모드를 확인하면 출력되는 오류코드
// index.js:1 Warning: Failed prop type: Invalid prop `level` of type `number` supplied to `MyComponent`, expected `string`.
// at MyComponent (http://localhost:3000/static/js/main.chunk.js:614:3)
// at App

export default App;
