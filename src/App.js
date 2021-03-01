import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News"
import classes from "./App.css"
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (

    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />} />
          <Route path="/profile" render={() => <Profile postData={props.postData}/>} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App