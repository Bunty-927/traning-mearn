import logo from './logo.svg';
import './App.css';
import CustomButtom from './ButtonComponent';

function App() {
  return (
    <div className="App">
      
      <CustomButtom id={1} name={1}/>
      <CustomButtom id={2} name={2}/>
      <CustomButtom id={3} name={3}/>
    </div>
  );
}

export default App;
