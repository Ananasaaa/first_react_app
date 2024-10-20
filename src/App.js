//import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { FormHandler } from './Components/FormHandler';
import { Cards } from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Header/>  
      <FormHandler/>
      <Cards/>
    </div>
  );
}

export default App;
