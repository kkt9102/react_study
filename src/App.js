// import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCompoernt from './MyComponent';

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
//   return <MyCompoernt />;
// };

// App 컴포넌트에서 props 값 지정 후 렌더링 시키기
const App = () => {
  return <MyCompoernt level="어렵다" />;
};

export default App;
