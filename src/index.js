import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { name: "Sega", id: 1 },
  { name: "Maks", id: 2 },
  { name: "Roman", id: 3 },
  { name: "Nikolay", id: 4 },
  { name: "Mark", id: 5 }
];

let messages = [
  { message: "Hi", id: 1 },
  { message: "How are you", id: 2 },
  { message: "Fuck you", id: 3 },
  { message: "Boring", id: 4 },
  { message: "See you later", id: 5 }
];

let postData = [
  {id: 1, message: "Hi, how are you", likesCount: 12},
  {id: 1, message: "It's my first post", likesCount: 0},
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
