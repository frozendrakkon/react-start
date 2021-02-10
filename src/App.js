import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <p>
          <Header />
         Hello world!
          <Tech />
        </p>
    </div>
  );
}

const Tech = (() => {
  return(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
})


const Header = () => {
  return(
    <div>
      <a href="#">Serega</a>
      <a href="#">Love</a>
      <a href="#">Death</a>
    </div>
  )
}

export default App; // экспортируем компоненту

