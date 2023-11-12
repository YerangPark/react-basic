import './App.css';
import Hello from './component/Hello';

function App() {
    return <div className="App">
        <h1>Props : properties</h1>
        <Hello age={10}/>
        <Hello age={20}/>
        <Hello age={30}/>
    </div>;
}
// 프로퍼티로 준 값이 Hello 컴포넌트에 인자로 전달됨.

export default App;
