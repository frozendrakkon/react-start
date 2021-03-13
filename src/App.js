import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import classes from "./App.css"
import News from "./components/News/News"
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (

    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />

        <div className="app-wrapper-content">
           
          <Route path="/dialogs" render={() => <Dialogs
            store={props.store} />} />

          <Route path="/profile" render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} 
            />} />
          <Route path="/news" render={() => <News />} />
          
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App