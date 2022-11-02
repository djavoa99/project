import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      <h1 className='react'>{name}</h1>
    </>
  );
}
// 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있다.
export default App;
